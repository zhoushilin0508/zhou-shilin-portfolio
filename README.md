# 周世霖 AI 视觉设计作品集

正式网站：https://zhoushilin0508.github.io/zhou-shilin-portfolio/

## 页面维护

`site/index.html`、`site/app.js`、`site/studio.css` 为页面源文件，`site/skill-cases.js` 保存 AI Skill 与工作流设计案例。向 main 提交后由 GitHub Pages 工作流构建并发布。

现有五个项目：AI 商业影像、摄影出图与修正、个人创作、AI Skill 与工作流设计、合兴村五龙。梦栖原已从索引和可访问的项目数据移除。

摄影出图的三组说明为作品的创作判断与复核重点。Skill 页包含两种不同来源的证据：

- 既有 15 秒长靴成片的抽帧复核，来自 2026-10-20 实际运行 analyze_video.py 的结果。
- No Name 盘中同一靴子项目保留的原版/模特与场景替换版提示词、背景与人物参考、原方案成片及替换方案迭代样片。规则摘录来自真实文件。样片保留待清理的额外鞋图等质检说明；静音网页预览用于查看迭代过程，不宣称已完成交付验收。

不同来源的证据分开标明，不将复核整理或不同作品冒充原始制作前后记录。

## 求职资料

意向城市为杭州；戈美其明确标注 AI 视觉设计师实习，时间为 2026.07–2026.10。网站 PDF 来自桌面最新的一页清晰排版版。更新 PDF 时须更新 manifest 的大小及 SHA-256，并同步两个简历链接的版本参数。

## 构建与预览

使用 `python3 scripts/build_portfolio.py` 构建到 `public/`。新增本地资产放入 `site/assets/` 并登记到 `site/assets-manifest.json`；历史媒体从已发布站点获取并校验，支持 `--asset-cache` 参数。`public/` 为生成目录，不提交。新增证据记录避免包含本机绝对路径。
