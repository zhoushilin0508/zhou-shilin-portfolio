# zhou-shilin-portfolio
周世霖 · AI 视觉设计作品集

正式网站：https://zhoushilin0508.github.io/zhou-shilin-portfolio/

## 页面维护

`site/index.html`、`site/app.js`、`site/studio.css` 为可直接维护的页面源文件，`site/skill-cases.js` 保存“自主 Skill 设计”案例内容。发布流程从本 GitHub Pages 网站获取既有媒体素材，逐个验证大小和 SHA-256 后应用这些源文件；提交到 `main` 后由 GitHub Pages 发布。

作品顺序：AI 商业影像、AI 训练出图、个人创作、自主 Skill 设计、合兴村五龙、梦栖原 × KATOO。“自主 Skill 设计”根据提供的摄影出图和电商视频两个文件包提炼需求、规则、执行和迭代重点；相关作品入口链接到现有出图与商业影像案例。

“关于我”突出针对实际需求独立编写与迭代 Skill 的能力，补充真人电影脚本创作，并压缩五龙项目介绍。

## 本地构建与预览

运行 `python3 scripts/build_portfolio.py` 生成 `public/`。已有完整媒体副本时，可通过 `--asset-cache /path/to/assets-parent` 复用经校验的文件。

交付包内的 `public/` 已包含完整页面、字体、图片与视频，可直接打开 `public/index.html` 离线查看。上传到原仓库时保留 `.github/`、`scripts/`、`site/` 和 `public/` 的目录层级，覆盖同名文件；不要把压缩包本身上传到仓库。
