/* Portfolio case study distilled from the two supplied Skill packages. */
window.PORTFOLIO_SKILL_CASE = {
  title: '自主 Skill 设计',
  type: '04 / AI WORKFLOWS',
  tags: '需求拆解 / 方案制定 / 规则设计 / 持续迭代',
  summary: '围绕摄影出图与电商视频的实际任务，自主编写并迭代两套 AI Skill。把创作判断、执行流程与质量标准组织为可复用的方法，让每次创作都有明确的输入、步骤和检查依据。',
  role: '本人负责：需求分析、创作方案、Skill 规则编写与迭代、质量标准与交付流程设计。',
  gallery: () => `
    <section class="system-case full" aria-labelledby="visual-system-title">
      <div class="system-case-heading"><span>01 / VISUAL DIRECTOR v8.1</span><h3 id="visual-system-title">摄影出图 Skill</h3><p>将画面想法，转化为有摄影依据的镜头方案。</p></div>
      <div class="system-case-body">
        <div class="system-reasoning">
          <h4>实际需求</h4><p>人物摄影、电影静帧与叙事组图需要清楚的镜头关系和可信的现场质感。泛化的风格词容易带来主体模糊、塑料肤质、材质雷同，以及人物与环境缺少接触关系的问题。</p>
          <h4>我的设计</h4><p>先明确事件与人物动作，再决定摄影机位置、空间关系、主要焦点、光源和材质。根据交付物选择一个主模块，必要时增加一个辅助模块，使每次执行有明确的创作重点。</p>
          <div class="system-evidence"><span>质量依据</span><p>以焦点、曝光、接触、材质、镜头与现场六项摄影证据核对画面；为模糊、CG 感和过度风格化设置对应的修复顺序。</p></div>
        </div>
        <ol class="system-flow" aria-label="摄影出图工作流程">
          <li><span>01</span><div><h4>确定这一刻发生什么</h4><p>从故事、想法或参考素材中选择事件节点与人物动作。</p></div></li>
          <li><span>02</span><div><h4>建立镜头与空间关系</h4><p>明确摄影机位置、景别、主要焦点和空间层次。</p></div></li>
          <li><span>03</span><div><h4>写清光线与材质响应</h4><p>用光源、阴影、受力和反射建立真实摄影依据。</p></div></li>
          <li><span>04</span><div><h4>输出并按问题修正</h4><p>形成静帧、组图或分镜提示词，针对失败原因调整规则。</p></div></li>
        </ol>
      </div>
      <div class="system-iteration"><div><span>迭代重点 / v8.0 → v8.1</span><h4>将摄影证据提前到核心流程</h4><p>v8.1 强化焦平面、景深、局部反差与接触阴影，并补充清晰度预算和 CG 感诊断。皮肤细节随景别调整，雾、辉光与颗粒根据具体拍摄条件使用。</p></div><div><span>核验设计</span><h4>结构检查与五类回归用例</h4><p>包内包含结构校验脚本，以及真人近景、巨物远景、动作抓拍、时尚编辑、鞋履产品五类检查用例，为后续迭代保留明确的验收标准。</p></div></div>
      <div class="system-related"><span>相关视觉作品</span><button data-project="personal">查看个人出图 <span aria-hidden="true">↗</span></button></div>
    </section>
    <section class="system-case full" aria-labelledby="commerce-system-title">
      <div class="system-case-heading"><span>02 / AI COMMERCE VIDEO</span><h3 id="commerce-system-title">电商视频 Skill</h3><p>将参考视频，转化为有核验依据的制作提示词。</p></div>
      <div class="system-case-body">
        <div class="system-reasoning">
          <h4>实际需求</h4><p>电商视频既要准确呈现商品，也要保留人物、服装、场景与对白的连续性。只概括剧情容易漏掉关键动作、混淆说话人，或把剪辑切换误写为摄影机运动。</p>
          <h4>我的设计</h4><p>把素材核验、台词校正、固定锚点、逐秒动作与分段交付串成完整流程。每个可独立生成的段落重复关键人物、服装、商品和场景信息，卖点以已验证素材为依据。</p>
          <div class="system-evidence"><span>工具与判断分工</span><p>包内的视频分析、语音转写、提示词校验三类脚本辅助处理可检查的信息；关键画面、说话人、真实运镜与画面质感继续对照素材复核。</p></div>
        </div>
        <ol class="system-flow" aria-label="电商视频工作流程">
          <li><span>01</span><div><h4>拆解参考素材</h4><p>核对时长、画幅和帧率，抽帧概览并加密查看关键动作。</p></div></li>
          <li><span>02</span><div><h4>核验台词与镜头</h4><p>交叉校正语音识别初稿与画面证据，区分对白、切镜和运镜。</p></div></li>
          <li><span>03</span><div><h4>编排连续性与节奏</h4><p>建立场景、人物、服装和商品锚点，按自然剧情节点分段。</p></div></li>
          <li><span>04</span><div><h4>输出执行提示词</h4><p>对齐动作、台词归属与时间轴，形成可复制的 Markdown。</p></div></li>
          <li><span>05</span><div><h4>校验后回看素材</h4><p>检查结构、锚点、计时与无字幕要求，再复核警告和画面依据。</p></div></li>
        </ol>
      </div>
      <div class="system-iteration"><div><span>修正版重点</span><h4>保留有依据的镜头与表演</h4><p>分开描述剪辑和摄影机运动，让自然动作承接台词。保留参考的光线、肤质、衣物与商品材质，逐项核对新增运镜和风格修饰的依据。</p></div><div><span>交付标准</span><h4>结构校验与画面复核相互配合</h4><p>校验分段锚点、秒级计时与文字限制，并将警告作为人工复核线索。文本结构检查完成后，仍需在生成环节检查口型、人物和产品表现。</p></div></div>
      <div class="system-related"><span>相关商业作品</span><button data-project="commerce">查看电商 AI 影像 <span aria-hidden="true">↗</span></button></div>
    </section>
    <div class="system-closing full"><span>从项目经验，到可复用的方法</span><p>根据任务设定规则，在执行中发现问题，再将修正写回 Skill，让创作经验持续积累。</p></div>
  `
};
