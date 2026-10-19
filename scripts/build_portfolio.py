"""Build the existing GitHub Pages portfolio with verified, unchanged assets."""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from pathlib import Path
import shutil
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
ASSET_BASE = "https://zhoushilin0508.github.io/zhou-shilin-portfolio/"
SOURCE_FILES = ("index.html", "app.js", "studio.css", "skill-cases.js", "assets-map.js", "flow.js")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "public")
    parser.add_argument("--asset-cache", type=Path)
    args = parser.parse_args()
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    manifest = json.loads((ROOT / "site/assets-manifest.json").read_text(encoding="utf-8"))

    def valid(data: bytes, item: dict) -> bool:
        return len(data) == item["size"] and hashlib.sha256(data).hexdigest() == item["sha256"]

    def copy_asset(item: dict) -> None:
        name = item["path"]
        relative = Path(name)
        if relative.is_absolute() or ".." in relative.parts:
            raise ValueError(f"Invalid asset path: {name}")
        target = output / relative
        if target.is_file() and valid(target.read_bytes(), item):
            return
        data = None
        if args.asset_cache:
            cached = args.asset_cache / relative
            if cached.is_file():
                candidate = cached.read_bytes()
                if valid(candidate, item):
                    data = candidate
        if data is None:
            request = urllib.request.Request(ASSET_BASE + name, headers={"User-Agent": "PortfolioBuild/1.0"})
            with urllib.request.urlopen(request, timeout=90) as response:
                data = response.read()
        if not valid(data, item):
            raise ValueError(f"Asset verification failed: {name}")
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)

    with ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(copy_asset, manifest["assets"]))
    for name in SOURCE_FILES:
        shutil.copyfile(ROOT / "site" / name, output / name)
    (output / ".nojekyll").touch()
    print(f"Verified {len(manifest['assets'])} existing assets; built {len(SOURCE_FILES)} maintained source files.")


if __name__ == "__main__":
    main()
