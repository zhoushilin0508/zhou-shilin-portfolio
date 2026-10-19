/* Original procedural background. No external assets or libraries. */
(()=>{
 const canvas=document.getElementById('flow-canvas');if(!canvas)return;
 const gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const vertex='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
 const fragment=`precision highp float;
 uniform vec2 uSize;uniform vec2 uMouse;uniform float uTime;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
 float fbm(vec2 p){float v=0.;float a=.5;mat2 r=mat2(.8,-.6,.6,.8);for(int i=0;i<5;i++){v+=a*noise(p);p=r*p*2.03+3.5;a*=.5;}return v;}
 void main(){
  vec2 uv=gl_FragCoord.xy/uSize;
  vec2 p=(uv-.5)*vec2(uSize.x/uSize.y,1.);
  p.x-=.27;p+=uMouse*.035;
  float t=uTime*.045;
  p=mat2(.96,-.28,.28,.96)*p;
  vec2 q=vec2(fbm(p*2.+vec2(t*.14,-t*.12)),fbm(p*2.+vec2(3.1,-t*.18)));
  vec2 r=vec2(fbm(p*2.1+q*2.7+vec2(1.7,t*.2)),fbm(p*2.+q*3.+vec2(-t*.15,8.9)));
  float f=fbm(p*2.7+r*2.4);
  float curve=p.y+.18*sin(p.x*2.5+t)+.14*sin(p.x*4.1-t*.7)+(f-.5)*.27;
  float envelope=exp(-pow(curve*2.6,2.))*exp(-pow((p.x-.12)*.65,2.));
  float folds=.5+.5*sin(curve*23.+f*12.+q.x*4.);
  float highlight=pow(folds,8.)*envelope;
  float vein=pow(.5+.5*sin(curve*58.+r.x*10.),22.)*envelope;
  vec3 base=vec3(.043,.047,.051);
  vec3 indigo=mix(vec3(.075,.072,.15),vec3(.23,.25,.42),f);
  vec3 color=base+indigo*envelope*(.3+f*.6);
  color+=vec3(.3,.33,.58)*highlight*.65+vec3(.21,.3,.46)*vein*.25;
  float light=exp(-dot((p-vec2(.3,.17))*vec2(1.,1.8),(p-vec2(.3,.17))*vec2(1.,1.8))*2.);
  color+=vec3(.06,.08,.16)*light;
  float side=smoothstep(.08,.55,uv.x);color=mix(base,color,side);
  color*=.86+.14*smoothstep(0.,.3,uv.y);
  color+=(hash(gl_FragCoord.xy+fract(uTime))-.5)*.006;
  gl_FragColor=vec4(color,1.);
 }`;
 function shader(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);return null;}return s;}
 const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
 const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const attr=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
 const size=gl.getUniformLocation(program,'uSize'),time=gl.getUniformLocation(program,'uTime'),mouse=gl.getUniformLocation(program,'uMouse');
 let active=true,last=0,elapsed=16,mx=0,my=0,targetX=0,targetY=0;
 function resize(){const rect=canvas.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,innerWidth<700?1:1.25);canvas.width=Math.min(1800,Math.round(rect.width*dpr));canvas.height=Math.round(rect.height*dpr);gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(size,canvas.width,canvas.height);}
 resize();addEventListener('resize',resize,{passive:true});
 canvas.closest('.hero').addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const b=canvas.getBoundingClientRect();targetX=(e.clientX-b.left)/b.width-.5;targetY=(e.clientY-b.top)/b.height-.5;},{passive:true});
 new IntersectionObserver(es=>{active=es[0].isIntersecting;},{threshold:0}).observe(canvas);
 function render(now){requestAnimationFrame(render);if(now-last<45||!active||document.hidden)return;const dt=Math.min(.08,(now-last)/1000);last=now;if(!reduceMotion&&!previewsPaused)elapsed+=dt;mx+=(targetX-mx)*.04;my+=(targetY-my)*.04;gl.uniform1f(time,elapsed);gl.uniform2f(mouse,mx,my);gl.drawArrays(gl.TRIANGLES,0,6);if(reduceMotion){active=false;}}
 requestAnimationFrame(render);
})();
