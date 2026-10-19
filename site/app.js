const assets=window.PORTFOLIO_ASSETS||{};
const A=name=>assets[name]||`assets/${name}.jpg`;
const imageSize=name=>{const d=window.PORTFOLIO_IMAGE_SIZES?.[name];return d?`width="${d[0]}" height="${d[1]}"`:'';};
document.querySelectorAll('[data-asset]').forEach(img=>img.src=A(img.dataset.asset));
const films={
 "commerce-01": {
  "title": "手持讲解 · 豹纹休闲鞋",
  "type": "AI COMMERCE / 00:11 / 9:16",
  "description": "双人中景建立讲解情境，随后切入手持近景，将注意力集中到鞋面豹纹、系带与侧面条纹。镜头由人物关系转向商品细节，形成明确的信息层级。",
  "role": "视频 Skill、AI 模特、分镜、生成修正与剪辑 · 全流程独立完成"
 },
 "commerce-02": {
  "title": "造型切换 · 拼接短靴",
  "type": "AI COMMERCE / 00:15 / 9:16",
  "description": "从手持黑、棕双色短靴进入全身穿搭，保持木色背景与正面构图，通过服装切换呈现同一鞋款的搭配方式。固定展示场景使鞋款、服装和人物之间的变化更易辨认。",
  "role": "视频 Skill、AI 模特、分镜、生成修正与剪辑 · 全流程独立完成"
 },
 "commerce-03": {
  "title": "双人对话 · 豹纹休闲鞋",
  "type": "AI COMMERCE / 00:15 / 9:16",
  "description": "以上脚近景开场，突出鞋面豹纹与浅色条纹，再切入双人对话。商品镜头负责建立视觉记忆，人物反应与字幕负责承接剧情和产品描述。",
  "role": "视频 Skill、AI 模特、分镜、生成修正与剪辑 · 全流程独立完成"
 },
 "commerce-04": {
  "title": "街景走动 · 拼接短靴",
  "type": "AI COMMERCE / 00:10 / 9:16",
  "description": "在同一街景中保留完整穿搭与鞋款，利用人物站立、迈步和侧身动作展示靴筒、鞋底及上脚比例。连续镜头呈现动态穿着状态，减少信息切换。",
  "role": "视频 Skill、AI 模特、分镜、生成修正与剪辑 · 全流程独立完成"
 },
 "commerce-05": {
  "title": "双色展示 · 扣带长靴",
  "type": "AI COMMERCE / 00:15 / 3:4",
  "description": "由黑、棕双色长靴的静物展示，转入两种配色的上脚镜头。镜头围绕靴筒廓形、双扣带与服装比例展开，字幕随展示顺序补充商品描述。",
  "role": "视频 Skill、AI 模特、分镜、生成修正与剪辑 · 全流程独立完成"
 },
 "original-01": {
  "title": "海岸人物",
  "type": "个人创作 / 00:10 / 16:9",
  "description": "中景先呈现举壶、饮酒与放下手臂的连续动作，约 6 秒后转入面部近景，叙事重心从动作移向人物表情。海浪、灰冷色彩与人物侧向视线共同建立情绪氛围。",
  "role": "个人创作 / AI 生成影像"
 },
 "original-02": {
  "title": "人物对视",
  "type": "个人创作 / 00:10 / 16:9",
  "description": "以单一近景保留人物关系，表演从低头、抬眼逐步过渡到嘴角轻扬。前景肩部与稳定的人脸焦点，使细微的表情变化成为画面中心。",
  "role": "个人创作 / AI 生成影像"
 },
 "original-03": {
  "title": "旷野人物",
  "type": "个人创作 / 00:06 / 16:9",
  "description": "在短镜头中由视线与头部转向过渡到身体前倾、起身移动，头发、衣料与草地运动共同参与环境表达。展示重点是人物动作与场景运动之间的关系。",
  "role": "个人创作 / AI 生成影像"
 },
 "original-04": {
  "title": "下次见，还没定",
  "type": "个人创作 / 00:15 / 16:9",
  "description": "以渔港回望建立同行关系，经过食摊递食物与堤岸交流，最终落到双人自拍。四段场景将独立画面组织成一段具有起承转合的旅行短片。",
  "role": "个人创作 / AI 生成影像"
 }
};
const canRoute=location.protocol==='http:'||location.protocol==='https:';
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
let previewsPaused=reduceMotion,activeDialog=null,lastFocus=null,visibleVideos=new Set();
const motionButton=document.getElementById('motion-toggle');
function syncMotion(){document.querySelectorAll('video[data-loop]').forEach(v=>{const contextAllowed=!activeDialog||(activeDialog==='project'&&v.closest('#project-dialog'));if(!previewsPaused&&contextAllowed&&visibleVideos.has(v)){if(!v.src)v.src=`assets/${v.dataset.loop}-loop.mp4`;v.muted=true;v.play().catch(()=>{});}else v.pause();});motionButton.setAttribute('aria-pressed',String(previewsPaused));motionButton.innerHTML=previewsPaused?'播放预览 <span>▷</span>':'暂停预览 <span>Ⅱ</span>';}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)visibleVideos.add(e.target);else visibleVideos.delete(e.target)});syncMotion();},{rootMargin:'100px',threshold:.05});
function observeVideos(parent=document){parent.querySelectorAll('video[data-loop]').forEach(v=>observer.observe(v));}
observeVideos();motionButton.addEventListener('click',()=>{previewsPaused=!previewsPaused;syncMotion();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)document.querySelectorAll('video').forEach(v=>v.pause());else syncMotion();});
const filmDialog=document.getElementById('film-dialog'),projectDialog=document.getElementById('project-dialog'),fullVideo=document.getElementById('full-video');
function openFilm(key,withHistory=true){const film=films[key];if(!film)return;lastFocus=document.activeElement;activeDialog='film';syncMotion();document.getElementById('film-modal-title').textContent=film.title;document.getElementById('film-modal-type').textContent=film.type;document.getElementById('film-modal-description').textContent=film.description;document.getElementById('film-modal-role').textContent=film.role;fullVideo.src=`assets/${key}-full.mp4`;fullVideo.poster=`assets/${key}-poster.jpg`;fullVideo.muted=false;fullVideo.volume=.8;document.body.classList.add('modal-open');if(!filmDialog.open)filmDialog.showModal();fullVideo.play().catch(()=>{});if(withHistory&&canRoute)history.pushState({film:key},'',`?film=${key}`);}
function closeDialog(id,withHistory=true){const dialog=document.getElementById(id);if(dialog.open)dialog.close();if(id==='film-dialog'){fullVideo.pause();fullVideo.removeAttribute('src');fullVideo.load();}if(!filmDialog.open&&!projectDialog.open){activeDialog=null;document.body.classList.remove('modal-open');syncMotion();}else {activeDialog='project';syncMotion();}if(withHistory&&canRoute){if(id==='film-dialog'&&projectDialog.open){history.back();}else history.replaceState(null,'',location.pathname+'#work');}lastFocus?.focus?.({preventScroll:true});}
function figure(id,caption,full=false){return `<figure${full?' class="full"':''}><div class="image-wrap"><img src="${A(id)}" ${imageSize(id)} alt="${caption}" loading="lazy"></div><figcaption>${caption}</figcaption></figure>`;}
function heading(text){return `<h3 class="detail-section-label">${text}</h3>`;}
function videoRow(keys){return `<div class="detail-video-row">${keys.map(k=>`<button data-film="${k}"><video muted loop playsinline preload="metadata" data-loop="${k}" poster="assets/${k}-poster.jpg"></video><span>${films[k].title} / 完整播放 ↗</span></button>`).join('')}</div>`;}
const projects={
 skills:window.PORTFOLIO_SKILL_CASE,
 original:{title:'个人创作',type:'03 / AI FILMS',tags:'人物表演 / 视觉叙事',summary:'围绕人物动作、微表情与场景衔接开展 AI 影像创作。重点作品《下次见，还没定》以四个场景组织一段 15 秒旅行叙事，另外三条分别呈现连续动作、表情递进和环境运动。',role:'个人创作 / AI 生成影像。',gallery:()=>heading('重点作品 · 下次见，还没定')+`<button class="original-feature full" data-film="original-04" aria-label="播放重点作品下次见还没定"><video muted loop playsinline preload="none" data-loop="original-04" poster="assets/original-04-poster.jpg"></video><span>播放完整版 ↗</span></button><div class="story-beats full"><div><small>00—03s</small><h4>渔港回望</h4></div><div><small>03—05s</small><h4>递来食物</h4></div><div><small>05—12s</small><h4>堤岸交流</h4></div><div><small>12—15s</small><h4>双人自拍</h4></div></div>`+figure('original-04-frame-00','渔港 / 背身跟随与回望')+figure('original-04-frame-04','食摊 / 伸手递食物的主观互动')+figure('original-04-frame-10','堤岸 / 侧向交流与人物转身')+figure('original-04-frame-18','自拍 / 从单人视角落到双人关系')+`<div class="case-analysis full"><div><h4>从主观同行，到双人入画</h4><p>开场以背身跟随和回望邀请观众进入情境，递食物的动作进一步建立互动。结尾转入双人自拍，明确此前镜头之外的同行者，使人物关系获得收束。</p></div><div><h4>用场景与动作组织节奏</h4><p>渔港建立空间，食摊提供近距离互动，堤岸延长人物交流，自拍完成结尾。浅绿上衣、白色下装与短发造型形成跨场景识别，海岸灰蓝与暖色食摊构成色彩变化。</p></div></div>`+heading('人物片段')+`<div class="original-other-row full">${['original-01','original-02','original-03'].map(k=>`<button data-film="${k}"><video muted loop playsinline preload="none" data-loop="${k}" poster="assets/${k}-poster.jpg"></video><span>${films[k].title} ↗</span></button>`).join('')}</div>`},

 personal:{title:'个人训练 Skill 出图',gallery:()=>Array.from({length:9},(_,i)=>`<figure class="skill-shot"><button data-image="${i}" aria-label="查看第 ${i+1} 张AI训练出图"><img ${imageSize('personal-'+String(i+1).padStart(2,'0'))} src="${A('personal-'+String(i+1).padStart(2,'0'))}" alt="个人训练Skill出图 ${String(i+1).padStart(2,'0')}" loading="lazy"></button></figure>`).join('')},
 commerce:{title:'AI 商业影像',type:'01 / COMMERCIAL FILMS',tags:'淘宝 / 抖音 / AI 电商视频',summary:'以商品特征与品牌调性为创作依据，独立完成淘宝、抖音电商视频。结合不同平台的展示场景与内容节奏，组织商品讲解、剧情互动和上脚展示；通过视频 Skill 与 AI 模特设定，控制人物一致性和画面风格，保持成片品质与品牌表达的稳定性。',role:'本人独立完成：视频 Skill 构建与迭代、AI 模特设定、分镜策划、素材生成与画面修正、成片剪辑。',gallery:()=>heading('五条电商 AI 成片')+videoRow(['commerce-01','commerce-02','commerce-03','commerce-04','commerce-05'])+heading('商品表达与人物一致性')+figure('commerce-01-poster','手持讲解 / 从双人中景切入商品近景')+figure('commerce-03-poster','剧情开场 / 先建立鞋款视觉记忆')+`<div class="case-analysis full"><div><span>01 / 平台适配</span><h4>商品表达与平台适配</h4><p>围绕商品卖点确定镜头优先级。本组淘宝视频侧重款式、配色与上脚细节的清晰展示；抖音作品结合人物讲解、情境互动与穿搭变化，分别组织信息层级和观看节奏。</p></div><div><span>02 / 一致性控制</span><h4>AI 模特与品牌一致性</h4><p>控制同一 AI 模特在不同镜头中的面部特征、服饰造型与动作衔接，并依据品牌调性统一场景、光影和色彩。同步核对鞋款结构、图案与材质，使人物与商品保持稳定的视觉识别。</p></div></div>`+heading('视频 Skill 与独立交付')+figure('commerce-02-poster','穿搭切换 / 固定构图中的服装与鞋款关系')+figure('commerce-05-poster','淘宝商品 / 黑、棕双色与长靴轮廓')+`<div class="case-analysis full"><div><span>03 / 视频 Skill</span><h4>可复用的视频制作 Skill</h4><p>将商品信息、AI 模特设定、场景风格与镜头要求整理为可复用的视频制作 Skill，并在生成、筛选与修正中持续迭代，使不同款式的内容沿用统一的制作规范，控制跨镜头的风格偏差。</p></div><div><span>04 / 独立交付</span><h4>全流程独立制作</h4><p>从视频 Skill、AI 模特设定与分镜策划，到素材生成、画面修正和成片剪辑，均由本人独立完成。通过关键镜头复核与整片检查，把控商品准确性、人物一致性和成片完整度，保持持续出品的品质与风格稳定。</p></div></div>`},
 hexing:{title:'合兴村 · 五龙',type:'05 / CULTURAL IP',tags:'已落地项目 / IP 形象与文创设计',summary:'围绕宁波合兴村五龙 IP，完成形象三维化、角色三视图、宣传视觉与文创产品延展，并参与项目线下落地。',role:'核心团队成员；参与前期调研与二维形象设计，负责角色三维化视觉、三视图、宣传海报、节日视觉与周边文创产品设计开发，并参与项目线下落地。',gallery:()=>figure('hexing-cover','五龙 IP 形象设计',true)+heading('角色三维化与三视图')+figure('hex-view-orange','炽义')+figure('hex-view-green','青蕴')+figure('hex-view-purple','星俏')+figure('hex-view-blue','澄和')+figure('hex-view-gold','穗合',true)+heading('宣传海报')+`<div class="poster-wall full">${['01','02','03','04','05'].map(n=>`<figure><img ${imageSize('hex-poster-'+n)} src="${A('hex-poster-'+n)}" alt="合兴村五龙宣传海报 ${n}" loading="lazy"></figure>`).join('')}</div>`+heading('文创延展')+figure('hex-merch-bag','布袋 / 设计效果')+figure('hex-merch-scent','香薰 / 设计效果')+figure('hex-merch-magnet','冰箱贴 / 设计效果')+figure('hex-merch-umbrella','遮阳伞 / 设计效果')+heading('线下落地')+figure('hexing-venue','合兴村活动会场实景',true)},
 dream:{title:'梦栖原 × KATOO',type:'06 / ORIGINAL IP & BRAND',tags:'自主设计方案 / 六角色系列与品牌视觉',summary:'以不同性格、外观与随身物件建立六角色系列，展开二维设定、三维化、表情动作与场景视觉，并结合 KATOO 品牌延展包装和文创。',role:'项目内容：角色系列、三视图、表情与场景、品牌标志及视觉规范、包装和文创应用。文创图片为设计方案或效果展示。',gallery:()=>figure('dream-group','梦栖原 / 六角色系列',true)+heading('二维与三维化')+figure('a064','角色二维三视图')+figure('a065','对应的三维化角色视觉')+figure('a081','角色二维设定')+figure('a086','角色三维化与视角延展')+heading('表情与角色场景')+figure('a114','面部表情延展')+figure('a106','学习与生活场景')+heading('品牌视觉')+figure('katoo-logo','KATOO / 标志识别')+figure('katoo-pattern','品牌辅助图形')+figure('katoo-colors','品牌基础色彩规范',true)+heading('包装与文创')+figure('a071','盲盒包装 / 样机效果')+figure('a077','包装展开设计')+figure('a055','抱枕 / 应用效果')+figure('a073','购物袋 / 样机效果')},

};
function openProject(key,withHistory=true){
 const p=projects[key];if(!p)return;
 lastFocus=document.activeElement;activeDialog='project';syncMotion();
 const skill=key==='personal';
 const node=document.getElementById('project-content');
 node.querySelectorAll('video[data-loop]').forEach(v=>{observer.unobserve(v);visibleVideos.delete(v);v.pause();});
 document.getElementById('detail-top').textContent=skill?'返回顶部 ↑':'项目案例';
 const header=skill?`<header class="skill-head"><h2 id="project-modal-title">${p.title}</h2></header>`:`<header class="detail-head"><div><div class="kicker">${p.type}</div><h2 id="project-modal-title">${p.title}</h2><p>${p.tags}</p></div><div class="detail-summary"><p>${p.summary}</p><p class="role">${p.role}</p></div></header>`;
 node.innerHTML=header+`<div class="${skill?'skill-gallery':'detail-gallery'}">${p.gallery()}</div>`+(skill?'':`<div class="detail-end"><span>周世霖 / AI 视觉设计师</span><button data-close="project-dialog">返回项目索引 ↗</button></div>`);
 document.body.classList.add('modal-open');if(!projectDialog.open)projectDialog.showModal();projectDialog.scrollTop=0;observeVideos(node);if(withHistory&&canRoute)history.pushState({project:key},'',`?project=${key}`);
}

document.addEventListener('click',event=>{const film=event.target.closest('[data-film]'),project=event.target.closest('[data-project]'),close=event.target.closest('[data-close]');if(film)openFilm(film.dataset.film);else if(project)openProject(project.dataset.project);else if(close)closeDialog(close.dataset.close);});
[filmDialog,projectDialog].forEach(d=>{d.addEventListener('cancel',event=>{event.preventDefault();closeDialog(d.id);});d.addEventListener('click',e=>{if(e.target===d&&d===filmDialog){const box=d.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)closeDialog(d.id);}});});
document.getElementById('detail-top').addEventListener('click',e=>{e.preventDefault();projectDialog.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});});
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});document.querySelectorAll('.project[data-category]').forEach(p=>p.hidden=btn.dataset.filter!=='all'&&!p.dataset.category.split(' ').includes(btn.dataset.filter));}));
let toastTimer;function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),2300);}
document.getElementById('copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('z13057984428@qq.com');toast('邮箱已复制');}catch{toast('邮箱：z13057984428@qq.com');}});
function resolveRoute(){if(!canRoute)return;const params=new URLSearchParams(location.search);if(params.has('project')){if(filmDialog.open)closeDialog('film-dialog',false);openProject(params.get('project'),false);}else if(params.has('film'))openFilm(params.get('film'),false);else{if(filmDialog.open)closeDialog('film-dialog',false);if(projectDialog.open)closeDialog('project-dialog',false);}}
window.addEventListener('popstate',resolveRoute);resolveRoute();syncMotion();

const imageDialog=document.getElementById('image-dialog'),largeImage=document.getElementById('large-image');
let imageIndex=0,imageFocus=null;
function showImage(index){imageIndex=(index+9)%9;largeImage.src=A('personal-'+String(imageIndex+1).padStart(2,'0'));largeImage.alt='个人训练 Skill 出图 '+(imageIndex+1);document.getElementById('image-counter').textContent=String(imageIndex+1).padStart(2,'0')+' / 09';}
function openImage(index){imageFocus=document.activeElement;showImage(index);activeDialog='image';syncMotion();document.body.classList.add('modal-open');imageDialog.showModal();}
function closeImage(){imageDialog.close();activeDialog=projectDialog.open?'project':null;if(!activeDialog)document.body.classList.remove('modal-open');syncMotion();imageFocus?.focus?.({preventScroll:true});}
document.addEventListener('click',e=>{const shot=e.target.closest('[data-image]');if(shot)openImage(Number(shot.dataset.image));if(e.target.closest('[data-close-image]'))closeImage();});
document.getElementById('image-prev').addEventListener('click',()=>showImage(imageIndex-1));
document.getElementById('image-next').addEventListener('click',()=>showImage(imageIndex+1));
imageDialog.addEventListener('cancel',e=>{e.preventDefault();closeImage();});
imageDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showImage(imageIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();showImage(imageIndex+1);}});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');revealObserver.unobserve(e.target);}}),{threshold:.06});
if(!reduceMotion){document.documentElement.classList.add('motion-ready');document.querySelectorAll('.film-tile,.project,.about-content').forEach(n=>{n.classList.add('reveal');revealObserver.observe(n);});}
let scrollFrame=false;addEventListener('scroll',()=>{if(scrollFrame)return;scrollFrame=true;requestAnimationFrame(()=>{document.querySelector('.site-header').classList.toggle('scrolled',scrollY>30);scrollFrame=false;});},{passive:true});
