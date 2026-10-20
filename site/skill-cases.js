/* Case copy grounded in the supplied Skill packages and published media. */
window.PORTFOLIO_SKILL_CASE = {
  title: 'AI Skill 与工作流设计',
  type: '04 / CREATIVE WORKFLOWS',
  tags: '商品一致性 / 分镜拆解 / 生成质检 / 定向返修',
  summary: '将电商视频与写实出图任务拆成可执行的参考分工、镜头规则和检查步骤，支持商品内容制作、素材复用与局部返修。',
  role: '独立负责需求拆解、规则设计与迭代；使用 Codex 辅助编写规范和脚本。镜头判断、画面筛选与交付复核由本人完成。',
  gallery: () => `
    <section class="workflow-proof full" aria-labelledby="proof-title">
      <div class="proof-heading"><span class="case-eyebrow">CASE REVIEW / 2026.10.20</span><h3 id="proof-title">长靴商品片的拆解与质检</h3><p>黑棕双色扣带长靴 · 15 秒商品展示</p></div>
      <p class="proof-provenance">以既有成片进行流程复核。抽帧为本次实际运行结果；分镜观察与检查点为本次整理，用于说明工作方法。</p>
      <div class="proof-input">
        <button class="proof-film" data-film="commerce-05" aria-label="播放复核样片双色扣带长靴"><img src="assets/skill-commerce-00.jpg" alt="黑棕双色扣带长靴商品视频" width="720" height="960" loading="lazy"><span>播放 15 秒成片 ↗</span></button>
        <div class="proof-brief"><span class="case-eyebrow">01 / INPUT</span><h4>先确认素材，再组织镜头</h4><p>将已完成的商品视频作为复核输入，检查可解码性、时长、画幅与采样位置，再对照实际画面记录商品与镜头信息。</p><dl class="proof-facts"><div><dt>时长</dt><dd>15.00 秒</dd></div><div><dt>尺寸</dt><dd>720 × 960 · 3:4</dd></div><div><dt>帧率</dt><dd>25 fps</dd></div><div><dt>本次采样</dt><dd>8 帧 · 每 2 秒取样</dd></div></dl><a class="text-link" href="assets/skill-commerce-review.json" target="_blank" rel="noopener">查看本次采样记录 ↗</a></div>
      </div>
      <ol class="proof-path" aria-label="案例复核路径"><li><span>01</span>输入样片</li><li><span>02</span>抽帧与拆解</li><li><span>03</span>镜头检查点</li><li><span>04</span>成片回看</li></ol>
      <div class="proof-step"><span class="case-eyebrow">02 / BREAKDOWN</span><h4>把“展示鞋子”，拆成具体画面职责</h4><div class="proof-frames"><figure><img src="assets/skill-commerce-00.jpg" alt="0秒采样：黑棕双色长靴静物展示" width="720" height="960" loading="lazy"><figcaption><b>00.00s / 双色识别</b><span>先交代两种配色与完整靴型。</span></figcaption></figure><figure><img src="assets/skill-commerce-04.jpg" alt="4秒采样：人物手持棕色长靴" width="720" height="960" loading="lazy"><figcaption><b>04.00s / 手持讲解</b><span>核对鞋型、双扣带与人物持鞋关系。</span></figcaption></figure><figure><img src="assets/skill-commerce-10.jpg" alt="10秒采样：黑色长靴上脚展示" width="720" height="960" loading="lazy"><figcaption><b>10.00s / 上脚比例</b><span>检查靴筒轮廓、穿搭比例与接地。</span></figcaption></figure></div><p class="proof-note">时间标记对应实际抽样帧，表示取样位置。</p><details class="proof-record"><summary>展开 8 帧联系表</summary><a href="assets/skill-commerce-contact.jpg" target="_blank" rel="noopener"><img src="assets/skill-commerce-contact.jpg" alt="扣带长靴成片的8帧联系表，包含0、2、4、6、8、10、12、14秒" width="880" height="640" loading="lazy"></a></details></div>
      <div class="proof-step"><span class="case-eyebrow">03 / SHOT REVIEW</span><h4>从画面职责，形成逐镜检查点</h4><ul class="proof-checks"><li><b>商品</b><span>核对配色、靴筒与扣带结构。</span></li><li><b>连续性</b><span>复核人物、服装、动作与光色。</span></li><li><b>物理关系</b><span>检查手持受力、脚鞋比例与接地。</span></li></ul></div>
      <div class="proof-return"><div><span class="case-eyebrow">04 / FILM REVIEW</span><h4>回到成片，逐镜验证判断</h4><p>对照前面的取样与检查点观看完整作品，区分文本能检查的结构问题和必须看画面才能确认的质量问题。</p></div><button class="case-action" data-film="commerce-05">回看完整成片 <span>↗</span></button></div>
    </section>
    <section class="actual-iteration full" aria-labelledby="iteration-title">
      <div class="proof-heading"><span class="case-eyebrow">PROJECT RECORD / REFERENCE REPLACEMENT</span><h3 id="iteration-title">真实项目迭代：绑定模特与场景参考</h3><p>双配色拼接双扣中筒靴 · 参考分工与规则调整</p></div>
      <p class="proof-provenance">项目文件保留了原方案、替换模特与背景后的规则文件，以及参考图和多个视频版本。这里展示真实文件中的约束变化与样片对照。</p>
      <div class="iteration-inputs"><figure><img src="assets/iteration-background.webp" alt="替换方案中使用的奶油白室内场景参考" loading="lazy"><figcaption>输入参考 / 场景、窗光与空间布局</figcaption></figure><figure><img src="assets/iteration-portrait.webp" alt="替换方案中使用的短发人物参考" loading="lazy"><figcaption>输入参考 / 人物身份与基础造型</figcaption></figure></div>
      <div class="iteration-diff"><h4>把参考职责，写进执行规则</h4><dl><div><dt>场景</dt><dd><span>原版：暖浅棕木饰面墙与木地板。</span><b>修订：依据背景图，锁定窗格、纱帘、单椅、盆栽与光线方向。</b></dd></div><div><dt>人物</dt><dd><span>原版：通用人物描述与小花形发夹。</span><b>修订：依据头像图固定身份、短发与耳钉，移除旧版发夹设定。</b></dd></div><div><dt>保留项</dt><dd><b>继续约束双色靴型、产品结构、画幅、时长与镜头连续性，避免替换参考时遗漏商品要求。</b></dd></div></dl><details class="proof-record"><summary>查看真实版本文件的规则摘录</summary><div class="proof-compare"><div><span>原版 / 固定场景</span><p>“背景是一整面暖浅棕色木饰面墙，墙面为大块横竖分格木板，纹理平整；地面为暖棕色木地板；”</p></div><div><span>修订版 / 固定场景</span><p>“空间结构严格依据用户上传的《背景(1).png》。”</p><p>“墙线、窗格、纱帘、单椅、盆栽、落地灯、木地板和圆台的左右关系、尺寸比例、光线方向全片固定。”</p></div></div><a class="text-link" href="assets/iteration-record.json" target="_blank" rel="noopener">查看版本摘录与记录 ↗</a></details></div>
      <div class="iteration-versions"><figure><button data-film="commerce-02" aria-label="播放原方案木饰面背景成片"><img src="assets/iteration-before.jpg" alt="原方案成片取帧：木饰面背景与手持双色靴子" width="540" height="960" loading="lazy"><span>播放原方案成片 ↗</span></button><figcaption>原方案成片 / 木饰面背景</figcaption></figure><figure><button data-film="iteration-01" aria-label="播放替换方案迭代样片静音预览"><img src="assets/iteration-after.jpg" alt="替换方案样片取帧：奶油白空间与短发人物" width="540" height="960" loading="lazy"><span>播放迭代样片 · 静音 ↗</span></button><figcaption>替换方案迭代样片 / 奶油白空间</figcaption></figure></div>
      <div class="iteration-verdict"><h4>这一轮的复核重点</h4><p>人物与空间参考已在样片中体现；右上角额外鞋图、鞋款细节和穿搭衔接仍需清理与逐镜复核。样片用于展示迭代过程，文本结构检查之后继续以画面验证交付要求。</p></div>
    </section>
    <section class="workflow-methods full" aria-labelledby="method-title"><div class="proof-heading"><span class="case-eyebrow">DESIGN & DELIVERY</span><h3 id="method-title">围绕实际交付，设计两套工作方法</h3></div>
      <div class="method-pair"><article><span class="case-eyebrow">01 / PHOTOGRAPHIC DIRECTION</span><h4>摄影出图与定向修正</h4><p>解决主体失焦、肤质塑料感、光源冲突及人物与环境缺少接触的问题。</p><dl><div><dt>方法</dt><dd>事件与动作 → 摄影机立场 → 焦点与景深 → 光源、材质及受力。</dd></div><div><dt>交付</dt><dd>可执行提示词、参考职责、画面检查点与局部修正方向。</dd></div><div><dt>核验</dt><dd>结构脚本辅助检查，实际出图仍按焦点、曝光、材质和接触关系复核。</dd></div></dl><button class="text-link" data-project="personal">查看摄影出图与修正案例 ↗</button></article><article><span class="case-eyebrow">02 / COMMERCE VIDEO PRODUCTION</span><h4>电商视频拆解与质检</h4><p>将参考片、商品信息和人物设定整理为分镜与执行约束，支持换款复用和镜头返修。</p><dl><div><dt>方法</dt><dd>素材核验 → 台词与镜头拆解 → 人物、服装、商品锚点 → 分段交付。</dd></div><div><dt>交付</dt><dd>镜头时间轴、执行提示词、连续性约束及成片检查点。</dd></div><div><dt>核验</dt><dd>脚本检查文本结构与计时；本人复核说话人、真实运镜、鞋型与成片表现。</dd></div></dl><button class="text-link" data-project="commerce">查看商业视频作品 ↗</button></article></div>
      <div class="workflow-responsibility"><h4>我的贡献与质量判断</h4><p>根据制作需求定义输入、规则模块和验收点，使用 Codex 辅助实现脚本与规范；在生成结果中定位问题，只调整受影响的镜头或规则，再检查关联的商品和人物连续性。</p><p>脚本结果用于发现遗漏和提示风险；视觉质量、商品准确性及最终是否交付，由人工结合素材与成片判断。</p></div>
    </section>
  `
};
