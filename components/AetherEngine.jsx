"use client";
import { useState, useCallback, useRef, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// AETHER ENGINE — Sidechain + Depth + Prompt Generation
// ═══════════════════════════════════════════════════════════

const CK=["concert","festival","stadium","worship","party","club","crowd","together"];
const SK=["alone","solo","headphones","private","solitary","night","quiet"];

function runEngine(P,E,S,R,a3,ctx,auto){
  const log=[];
  if(P+S>14){const ex=P+S-14;if(P>=S){S=Math.max(0,S-ex);log.push(`TWIST↔SOUL: Soul compressed (−${ex.toFixed(1)})`);}else{P=Math.max(0,P-ex);log.push(`TWIST↔SOUL: Twist compressed (−${ex.toFixed(1)})`);}}
  if(E>=7){const pr=(E-6)*.3;P=Math.max(0,P-pr);log.push(`INTENSITY→TWIST: Trance pressure (−${pr.toFixed(1)})`);}
  if(E>=6&&R>=6){E=Math.min(10,E+.5);R=Math.min(10,R+.5);log.push("INTENSITY+CROWD: Collective synergy (+0.5)");}
  if(P>=8){const pr=(P-7)*.2;R=Math.max(0,R-pr);log.push("TWIST↔CROWD: Analytic damping");}
  const c=(ctx||"").toLowerCase();
  const isColl=CK.some(w=>c.includes(w));const isSolo=SK.some(w=>c.includes(w));
  if(isSolo&&S>=7&&R>=5){R=Math.max(0,R-2);log.push("SOUL↔CROWD: Solitude override (−2)");}
  else if(isColl&&S>=6&&R>=6){S=Math.min(10,S+.3);R=Math.min(10,R+.3);log.push("SOUL↔CROWD: Collective resonance");}
  if(a3<1){P*=.6+a3*.4;E*=.8+a3*.2;S*=.2+a3*.8;R*=.4+a3*.6;log.push(`Authenticity ${a3.toFixed(1)}: Gain reduction`);}
  else if(a3>1){const b=(a3-1)*.5;P=Math.min(10,P+b*.3);E=Math.min(10,E+b*.5);S=Math.min(10,S+b*1);R=Math.min(10,R+b*.7);log.push(`Authenticity ${a3.toFixed(1)}: Signal boost`);}
  const r=v=>Math.round(Math.max(0,Math.min(10,v))*10)/10;
  const adj={P:r(P),E:r(E),S:r(S),R:r(R)};
  const ch=[adj.P,adj.E,adj.S,adj.R],avg=ch.reduce((a,b)=>a+b,0)/4;
  const v=ch.reduce((s,c)=>s+Math.pow(c-avg,2),0)/4,bal=Math.max(0,1-Math.sqrt(v)/5);
  const a3n=Math.min(1,a3/2),act=ch.filter(c=>c>=5).length/4;
  const p1=Math.min(10,avg*bal*a3n*(.5+act*.5)*2);
  const mx=Math.max(...ch),srt=[...ch].sort((a,b)=>b-a),dom=(srt[0]-srt[1])/10;
  const p2=Math.min(10,mx*(.5+dom)*a3n*1.2);
  const depth=p1>=p2?{score:Math.round(p1*10)/10,path:"Cross-Domain"}:{score:Math.round(p2*10)/10,path:"Singular"};

  // ═══ IMPROVED PROMPT GENERATION ═══
  const parts=[];

  // GENRE selection based on channel balance
  if(E>=8&&R>=8) parts.push("electronic dance, EDM, festival anthem");
  else if(E>=8&&R<4) parts.push("dark techno, industrial, hypnotic electronic");
  else if(E>=7&&P>=7) parts.push("experimental electronic, glitch, IDM");
  else if(S>=8&&E<=4) parts.push("ambient, lo-fi, bedroom pop");
  else if(S>=8&&E>=6) parts.push("post-rock, shoegaze, dream pop");
  else if(S>=7&&R<=3) parts.push("singer-songwriter, acoustic, folk");
  else if(P>=8&&R>=7) parts.push("hip-hop, trap, rap");
  else if(P>=8) parts.push("experimental, art pop, avant-garde");
  else if(R>=8) parts.push("pop, indie pop, anthemic rock");
  else if(E>=6&&S>=6) parts.push("alternative rock, indie, neo-soul");
  else parts.push("cinematic, soundtrack, atmospheric");

  // TEMPO based on Energy + Crowd
  const avgER=(adj.E+adj.R)/2;
  if(avgER>=8) parts.push("140+ BPM, fast, driving rhythm");
  else if(avgER>=6) parts.push("110-130 BPM, mid-tempo groove");
  else if(avgER>=4) parts.push("80-100 BPM, relaxed pace");
  else parts.push("60-80 BPM, slow, breathing room");

  // INSTRUMENTATION based on channels
  if(adj.E>=8) parts.push("heavy 808 bass, sub-bass, distorted synths, punchy drums");
  else if(adj.E>=6) parts.push("warm synth pads, analog bass, crisp percussion");
  else if(adj.E>=4) parts.push("soft piano, gentle guitar, light percussion");
  else parts.push("minimal piano, ambient textures, no drums");

  // VOCALS based on Soul + Crowd
  if(adj.S>=8&&adj.R<=3) parts.push("intimate whispered vocals, close-mic, vulnerable");
  else if(adj.S>=8) parts.push("emotional vocals, raw delivery, dynamic range");
  else if(adj.R>=8) parts.push("powerful vocals, crowd singalong, call-and-response");
  else if(adj.S<=3&&adj.R<=3) parts.push("instrumental, no vocals");
  else parts.push("clean vocals, moderate reverb");

  // TEXTURE based on Twist
  if(adj.P>=8) parts.push("unexpected beat switches, time signature changes, dissonant chords");
  else if(adj.P>=5) parts.push("subtle harmonic surprises, creative transitions");
  else parts.push("familiar chord progressions, predictable structure, repetitive hooks");

  // MOOD / EMOTION
  if(adj.S>=8&&adj.E>=7) parts.push("cathartic, overwhelming emotion, goosebumps");
  else if(adj.S>=8) parts.push("melancholic, nostalgic, bittersweet, deeply personal");
  else if(adj.E>=8&&adj.R>=8) parts.push("euphoric, ecstatic, peak energy");
  else if(adj.E>=7) parts.push("intense, physical, visceral");
  else if(adj.S>=5) parts.push("reflective, meaningful, emotionally layered");
  else parts.push("light, playful, easy-going");

  // PRODUCTION STYLE based on authenticity
  if(a3>=1.8) parts.push("lo-fi production, vinyl crackle, tape saturation, imperfect");
  else if(a3>=1.3) parts.push("organic production, live instruments feel, warm mix");
  else if(a3>=0.8) parts.push("polished production, radio-ready mix");
  else parts.push("hyper-polished, overproduced, commercial sheen");

  // AUTOMATION curve
  const am={
    build:"starts quiet and minimal, gradually builds layers, explosive final chorus",
    burst:"sudden explosive drops, intense peaks with quiet valleys",
    dissolve:"starts full then slowly strips away, fading dreamy outro, reverb tail",
    release:"tension building verses, deeply satisfying chorus resolution",
    wave:"rhythmic waves of intensity, push and pull dynamics",
    steady:"consistent energy throughout, hypnotic repetition"
  };
  if(am[auto])parts.push(am[auto]);

  return{adj,depth,prompt:parts.join(", "),log};
}

const CHANNELS={
  P:{key:"P",name:"TWIST",desc:"How unpredictable",color:"#00d4ff",bg:"0,212,255"},
  E:{key:"E",name:"INTENSITY",desc:"How physical",color:"#ff5722",bg:"255,87,34"},
  S:{key:"S",name:"SOUL",desc:"How deep",color:"#b388ff",bg:"179,136,255"},
  R:{key:"R",name:"CROWD",desc:"How collective",color:"#ffab00",bg:"255,171,0"},
};

const PRESETS=[
  {label:"3AM Highway Alone",p:3,e:7,s:9,r:0,a:1.8,ctx:"alone night",auto:"dissolve"},
  {label:"Last Song at the Festival",p:6,e:9,s:5,r:10,a:1.6,ctx:"festival",auto:"build"},
  {label:"Revenge Energy",p:8,e:8,s:3,r:2,a:1.4,ctx:"alone",auto:"burst"},
  {label:"Sunday Morning Rain",p:2,e:6,s:8,r:0,a:1.9,ctx:"alone quiet",auto:"steady"},
  {label:"Underdog Victory",p:10,e:9,s:5,r:10,a:1.9,ctx:"stadium crowd",auto:"burst"},
  {label:"Forgotten Memory",p:2,e:4,s:10,r:1,a:2.0,ctx:"alone quiet",auto:"dissolve"},
  {label:"Neon City Chase",p:9,e:9,s:2,r:3,a:1.3,ctx:"alone",auto:"build"},
  {label:"Sacred Silence",p:1,e:7,s:9,r:6,a:2.0,ctx:"worship",auto:"dissolve"},
];

const RadarChart=({values,adjusted})=>{
  const size=220,cx=size/2,cy=size/2,maxR=85;
  const angles=[(-90),(0),(90),(180)].map(a=>a*Math.PI/180);
  const getPoint=(i,val)=>{
    const r=(val/10)*maxR;
    return[cx+r*Math.cos(angles[i]),cy+r*Math.sin(angles[i])];
  };
  const keys=["P","E","S","R"];
  const rawPts=keys.map((k,i)=>getPoint(i,values[k]));
  const adjPts=adjusted?keys.map((k,i)=>getPoint(i,adjusted[k])):null;
  const rawPath=rawPts.map(p=>p.join(",")).join(" ");
  const adjPath=adjPts?adjPts.map(p=>p.join(",")).join(" "):"";
  const gridLevels=[2,4,6,8,10];
  return(
    <svg viewBox={`0 0 ${size} ${size}`} style={{width:"100%",maxWidth:220}}>
      {gridLevels.map(lv=>{
        const pts=keys.map((_,i)=>getPoint(i,lv));
        return <polygon key={lv} points={pts.map(p=>p.join(",")).join(" ")} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>;
      })}
      {keys.map((k,i)=>{
        const [ex,ey]=getPoint(i,10);
        const c=CHANNELS[k];
        return <g key={k}>
          <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <text x={i===0?cx:i===1?cx+maxR+18:i===2?cx:cx-maxR-18} y={i===0?cy-maxR-10:i===2?cy+maxR+16:cy+4}
            fill={c.color} fontSize="9" fontFamily="'IBM Plex Mono',monospace" fontWeight="600" textAnchor="middle" opacity="0.8">
            {c.name}
          </text>
        </g>;
      })}
      <polygon points={rawPath} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"
        style={{transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)"}}/>
      {adjPts&&<polygon points={adjPath} fill="rgba(0,212,255,0.06)" stroke="url(#radarGrad)" strokeWidth="2"
        style={{transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)",filter:"drop-shadow(0 0 6px rgba(0,212,255,0.3))"}}/>}
      {(adjPts||rawPts).map((pt,i)=>(
        <circle key={i} cx={pt[0]} cy={pt[1]} r="3.5" fill={CHANNELS[keys[i]].color}
          style={{transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)",filter:`drop-shadow(0 0 4px ${CHANNELS[keys[i]].color})`}}/>
      ))}
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff"/><stop offset="33%" stopColor="#ff5722"/>
          <stop offset="66%" stopColor="#b388ff"/><stop offset="100%" stopColor="#ffab00"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const VSlider=({ch,value,adjValue,onChange,showAdj})=>{
  const c=CHANNELS[ch];
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flex:1,minWidth:65}}>
      <div style={{fontSize:9,fontWeight:700,letterSpacing:3,color:c.color,fontFamily:"'IBM Plex Mono',monospace",opacity:0.9}}>{c.name}</div>
      <div style={{fontSize:22,fontWeight:800,fontFamily:"'IBM Plex Mono',monospace",color:"#fff",lineHeight:1,textShadow:`0 0 15px rgba(${c.bg},0.25)`}}>
        {(showAdj&&adjValue!=null?adjValue:value).toFixed(1)}
      </div>
      <div style={{position:"relative",width:40,height:160}}>
        <div style={{position:"absolute",left:"50%",transform:"translateX(-50%)",width:3,height:"100%",borderRadius:2,background:"rgba(255,255,255,0.05)"}}/>
        <div style={{position:"absolute",left:"50%",transform:"translateX(-50%)",width:3,height:`${value*10}%`,bottom:0,borderRadius:2,background:`linear-gradient(to top, rgba(${c.bg},0.1), rgba(${c.bg},0.5))`,transition:"height 0.5s cubic-bezier(0.4,0,0.2,1)"}}/>
        {showAdj&&adjValue!=null&&Math.abs(adjValue-value)>0.05&&(
          <div style={{position:"absolute",left:-2,right:-2,bottom:`${adjValue*10}%`,height:2,background:c.color,opacity:0.4,borderRadius:1,transition:"bottom 0.5s cubic-bezier(0.4,0,0.2,1)",boxShadow:`0 0 6px rgba(${c.bg},0.4)`}}/>
        )}
        <input type="range" min="0" max="10" step="0.5" value={value} onChange={e=>onChange(parseFloat(e.target.value))}
          className="vfader" style={{position:"absolute",width:160,height:40,left:"50%",top:"50%",transform:"translate(-50%,-50%) rotate(-90deg)",appearance:"none",WebkitAppearance:"none",background:"transparent",cursor:"pointer",zIndex:2}}/>
      </div>
      <div style={{fontSize:7,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace",letterSpacing:1}}>{c.desc}</div>
    </div>
  );
};

export default function AetherEngine(){
  const [phase,setPhase]=useState("portal");
  const [query,setQuery]=useState("");
  const [P,setP]=useState(5);const [E,setE]=useState(5);const [S,setS]=useState(5);const [R,setR]=useState(5);
  const [a3,setA3]=useState(1.5);const [ctx,setCtx]=useState("");const [auto,setAuto]=useState("build");
  const [result,setResult]=useState(null);
  const [neuroText,setNeuroText]=useState("");
  const [copied,setCopied]=useState(false);
  const [consoleOpen,setConsoleOpen]=useState(false);
  const [aiError,setAiError]=useState(false);
  const [stale,setStale]=useState(false);
  const inputRef=useRef(null);

  const analyzeWithAI=useCallback(async(text)=>{
    setPhase("loading");setAiError(false);setNeuroText("");setResult(null);setConsoleOpen(false);setStale(false);
    try{
      const res=await fetch("/api/analyze",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({prompt:text})
      });
      const data=await res.json();
      const raw=data.content?.find(b=>b.type==="text")?.text||"";
      const clean=raw.replace(/```json|```/g,"").trim();
      const parsed=JSON.parse(clean);
      setP(parsed.P);setE(parsed.E);setS(parsed.S);setR(parsed.R);
      setA3(parsed.a3||1.5);setCtx(parsed.ctx||"");setAuto(parsed.auto||"build");
      const eng=runEngine(parsed.P,parsed.E,parsed.S,parsed.R,parsed.a3||1.5,parsed.ctx||"",parsed.auto||"build");
      setResult(eng);setNeuroText(parsed.analysis||"");
      setPhase("result");
    }catch(err){
      console.error(err);setAiError(true);setPhase("portal");
    }
  },[]);

  const manualGenerate=useCallback(()=>{
    const eng=runEngine(P,E,S,R,a3,ctx,auto);
    setResult(eng);setNeuroText("");setPhase("result");setStale(false);
  },[P,E,S,R,a3,ctx,auto]);

  // Slider changes mark result as stale but DON'T remove it
  const onSliderChange=(setter)=>(v)=>{setter(v);setStale(true);};

  const applyPreset=(pr)=>{
    setQuery(pr.label);
    setP(pr.p);setE(pr.e);setS(pr.s);setR(pr.r);setA3(pr.a);setCtx(pr.ctx);setAuto(pr.auto);
    const eng=runEngine(pr.p,pr.e,pr.s,pr.r,pr.a,pr.ctx,pr.auto);
    setResult(eng);setNeuroText("");setPhase("result");setConsoleOpen(false);setStale(false);
  };

  const handleSubmit=()=>{if(query.trim())analyzeWithAI(query.trim());};

  const copyAndOpen=()=>{
    if(result?.prompt){
      navigator.clipboard.writeText(result.prompt);
      setCopied(true);setTimeout(()=>setCopied(false),2500);
      setTimeout(()=>{window.open("https://suno.com/create","_blank");},300);
    }
  };
  const copyOnly=()=>{
    if(result?.prompt){navigator.clipboard.writeText(result.prompt);setCopied(true);setTimeout(()=>setCopied(false),2500);}
  };

  const depthColor=(s)=>s>=8?"#4ade80":s>=5?"#ffab00":"#ff5722";
  const depthLabel=(s)=>s>=9?"DEVASTATING":s>=7?"HIGH":s>=5?"MODERATE":"LOW";

  useEffect(()=>{if(phase==="portal"&&inputRef.current)inputRef.current.focus();},[phase]);

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0f",color:"#fff",fontFamily:"'Outfit',sans-serif",position:"relative",overflow:"hidden"}}>
      <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",
        background:"radial-gradient(ellipse at 25% 15%, rgba(0,212,255,0.015) 0%, transparent 50%), radial-gradient(ellipse at 75% 85%, rgba(179,136,255,0.015) 0%, transparent 50%)"}}/>

      <div style={{position:"relative",zIndex:1,maxWidth:820,margin:"0 auto",padding:"0 20px"}}>

        <div style={{textAlign:"center",paddingTop:phase==="portal"?"18vh":"28px",transition:"padding 0.6s cubic-bezier(0.4,0,0.2,1)"}}>
          <div style={{fontSize:9,letterSpacing:10,color:"rgba(255,255,255,0.15)",fontFamily:"'IBM Plex Mono',monospace",marginBottom:8,fontWeight:500}}>
            THE EXPERIENCE ENGINE
          </div>
          <h1 style={{fontSize:phase==="portal"?56:36,fontWeight:900,margin:0,letterSpacing:-2,
            background:"linear-gradient(135deg, #00d4ff 0%, #b388ff 40%, #ff5722 70%, #ffab00 100%)",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1,
            transition:"font-size 0.6s cubic-bezier(0.4,0,0.2,1)"}}>
            AETHER
          </h1>
          {phase==="portal"&&(
            <p style={{fontSize:14,color:"rgba(255,255,255,0.3)",marginTop:8,fontWeight:300,letterSpacing:1,animation:"fadeUp 0.8s ease"}}>
              Describe what you want to feel.
            </p>
          )}
        </div>

        <div style={{maxWidth:560,margin:phase==="portal"?"32px auto":"16px auto",transition:"margin 0.4s ease"}}>
          <div style={{position:"relative"}}>
            <input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter")handleSubmit();}}
              placeholder={phase==="portal"?"A rainy night drive with no destination...":"Describe another feeling..."}
              style={{
                width:"100%",padding:"14px 52px 14px 20px",borderRadius:14,
                border:"1px solid rgba(255,255,255,0.08)",
                background:"rgba(255,255,255,0.03)",backdropFilter:"blur(20px)",
                color:"#fff",fontSize:14,fontFamily:"'Outfit',sans-serif",fontWeight:300,
                letterSpacing:0.3,outline:"none",transition:"border-color 0.3s, box-shadow 0.3s",
                boxSizing:"border-box",
              }}
              onFocus={e=>{e.target.style.borderColor="rgba(0,212,255,0.25)";e.target.style.boxShadow="0 0 20px rgba(0,212,255,0.05)";}}
              onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)";e.target.style.boxShadow="none";}}
            />
            <button onClick={handleSubmit} disabled={!query.trim()||phase==="loading"} style={{
              position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",
              width:36,height:36,borderRadius:10,border:"none",
              background:query.trim()?"rgba(0,212,255,0.12)":"transparent",
              color:query.trim()?"#00d4ff":"rgba(255,255,255,0.15)",
              fontSize:16,cursor:query.trim()?"pointer":"default",
              display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"
            }}>→</button>
          </div>
          {aiError&&<div style={{textAlign:"center",marginTop:8,fontSize:11,color:"#ff5722",fontFamily:"'IBM Plex Mono',monospace"}}>
            Connection failed. Try again or use presets below.
          </div>}
        </div>

        <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",
          marginTop:phase==="portal"?24:12,marginBottom:phase==="portal"?0:16,
          maxWidth:600,margin:phase==="portal"?"24px auto 0":"12px auto 16px"}}>
          {PRESETS.map(pr=>(
            <button key={pr.label} onClick={()=>applyPreset(pr)} style={{
              padding:"5px 12px",borderRadius:20,border:"1px solid rgba(255,255,255,0.06)",
              background:"rgba(255,255,255,0.02)",color:"rgba(255,255,255,0.35)",
              fontSize:10,cursor:"pointer",fontFamily:"'IBM Plex Mono',monospace",
              letterSpacing:0.5,transition:"all 0.2s",whiteSpace:"nowrap"
            }}
            onMouseOver={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.color="rgba(255,255,255,0.7)";}}
            onMouseOut={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.06)";e.currentTarget.style.color="rgba(255,255,255,0.35)";}}
            >{pr.label}</button>
          ))}
        </div>

        {phase==="loading"&&(
          <div style={{textAlign:"center",padding:"60px 0",animation:"fadeUp 0.3s ease"}}>
            <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:16}}>
              {[0,1,2,3].map(i=>(
                <div key={i} style={{
                  width:8,height:8,borderRadius:4,
                  background:[CHANNELS.P.color,CHANNELS.E.color,CHANNELS.S.color,CHANNELS.R.color][i],
                  opacity:0.6,animation:`pulse 1.2s ${i*0.15}s infinite ease-in-out`
                }}/>
              ))}
            </div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.25)",fontFamily:"'IBM Plex Mono',monospace",letterSpacing:3}}>
              ANALYZING NEURAL PATHWAYS
            </div>
          </div>
        )}

        {phase==="result"&&result&&(
          <div style={{animation:"fadeUp 0.5s ease"}}>
            <div style={{display:"flex",gap:20,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
              <div style={{flex:"0 0 auto",display:"flex",justifyContent:"center"}}>
                <RadarChart values={{P,E,S,R}} adjusted={result.adj}/>
              </div>
              <div style={{flex:"1 1 300px",minWidth:0}}>
                {neuroText&&(
                  <div style={{marginBottom:16}}>
                    <div style={{fontSize:9,letterSpacing:3,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace",marginBottom:8}}>NEURO-ANALYSIS</div>
                    <p style={{fontSize:13,lineHeight:1.7,color:"rgba(255,255,255,0.6)",margin:0,fontWeight:300}}>{neuroText}</p>
                  </div>
                )}
                <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
                  <div style={{padding:"8px 16px",borderRadius:10,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"}}>
                    <span style={{fontSize:9,letterSpacing:2,color:"rgba(255,255,255,0.25)",fontFamily:"'IBM Plex Mono',monospace"}}>DEPTH </span>
                    <span style={{fontSize:20,fontWeight:800,color:depthColor(result.depth.score),fontFamily:"'IBM Plex Mono',monospace"}}>{result.depth.score.toFixed(1)}</span>
                    <span style={{fontSize:9,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace"}}>/10</span>
                  </div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",fontFamily:"'IBM Plex Mono',monospace",letterSpacing:2}}>
                    {depthLabel(result.depth.score)} · {result.depth.path}
                  </div>
                </div>
              </div>
            </div>

            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"16px 20px",marginBottom:12,opacity:stale?0.5:1,transition:"opacity 0.3s"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={{fontSize:9,letterSpacing:3,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace"}}>GENERATED PROMPT</div>
                {stale&&<div style={{fontSize:9,color:"#ffab00",fontFamily:"'IBM Plex Mono',monospace",letterSpacing:1}}>OUTDATED — hit RE-GENERATE</div>}
              </div>
              <p style={{fontSize:12,lineHeight:1.7,color:"rgba(255,255,255,0.65)",margin:0,fontFamily:"'IBM Plex Mono',monospace"}}>{result.prompt}</p>
            </div>

            <div style={{display:"flex",gap:8,marginBottom:16}}>
              <button onClick={copyAndOpen} style={{
                flex:1,padding:"13px 0",borderRadius:12,border:"none",
                background:"linear-gradient(135deg, rgba(0,212,255,0.12), rgba(179,136,255,0.12))",
                color:"#fff",fontSize:12,fontWeight:600,letterSpacing:2,
                fontFamily:"'IBM Plex Mono',monospace",cursor:"pointer",transition:"all 0.3s",
                boxShadow:"0 0 20px rgba(0,212,255,0.06)"
              }}
              onMouseOver={e=>e.currentTarget.style.boxShadow="0 0 30px rgba(0,212,255,0.12)"}
              onMouseOut={e=>e.currentTarget.style.boxShadow="0 0 20px rgba(0,212,255,0.06)"}
              >{copied?"✓ COPIED":"COPY & OPEN SUNO →"}</button>
              <button onClick={copyOnly} style={{
                padding:"13px 18px",borderRadius:12,
                border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.02)",
                color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:"'IBM Plex Mono',monospace",
                cursor:"pointer",letterSpacing:1,transition:"all 0.2s"
              }}
              onMouseOver={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.color="rgba(255,255,255,0.6)";}}
              onMouseOut={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.08)";e.currentTarget.style.color="rgba(255,255,255,0.4)";}}
              >COPY ONLY</button>
            </div>

            <button onClick={()=>setConsoleOpen(!consoleOpen)} style={{
              width:"100%",padding:"10px",borderRadius:10,
              border:"1px solid rgba(255,255,255,0.04)",background:"transparent",
              color:"rgba(255,255,255,0.2)",fontSize:10,cursor:"pointer",
              fontFamily:"'IBM Plex Mono',monospace",letterSpacing:2,transition:"all 0.2s",
              display:"flex",alignItems:"center",justifyContent:"center",gap:8
            }}
            onMouseOver={e=>{e.currentTarget.style.color="rgba(255,255,255,0.5)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";}}
            onMouseOut={e=>{e.currentTarget.style.color="rgba(255,255,255,0.2)";e.currentTarget.style.borderColor="rgba(255,255,255,0.04)";}}
            >
              <span style={{transform:consoleOpen?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s",display:"inline-block"}}>▾</span>
              {consoleOpen?"HIDE CONSOLE":"OPEN CONSOLE · Fine-tune manually"}
            </button>

            {consoleOpen&&(
              <div style={{marginTop:12,background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:16,padding:"24px 16px",animation:"fadeUp 0.3s ease"}}>
                <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:20}}>
                  <VSlider ch="P" value={P} adjValue={result?.adj?.P} onChange={onSliderChange(setP)} showAdj={!!result&&!stale}/>
                  <VSlider ch="E" value={E} adjValue={result?.adj?.E} onChange={onSliderChange(setE)} showAdj={!!result&&!stale}/>
                  <VSlider ch="S" value={S} adjValue={result?.adj?.S} onChange={onSliderChange(setS)} showAdj={!!result&&!stale}/>
                  <VSlider ch="R" value={R} adjValue={result?.adj?.R} onChange={onSliderChange(setR)} showAdj={!!result&&!stale}/>
                </div>
                <div style={{height:1,background:"rgba(255,255,255,0.04)",marginBottom:16}}/>
                <div style={{display:"flex",gap:10,flexWrap:"wrap",alignItems:"flex-end",marginBottom:16}}>
                  <div style={{flex:"1 1 150px"}}>
                    <label style={{fontSize:8,letterSpacing:3,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace",display:"block",marginBottom:5}}>
                      AUTHENTICITY — <span style={{color:a3>=1.5?"#4ade80":a3>=1?"#ffab00":"#ff5722"}}>{a3.toFixed(1)}</span>
                    </label>
                    <input type="range" min="0.1" max="2.0" step="0.1" value={a3} onChange={e=>{setA3(parseFloat(e.target.value));setStale(true);}}
                      className="hfader" style={{width:"100%",appearance:"none",WebkitAppearance:"none",height:2,borderRadius:1,background:"linear-gradient(to right, #ff5722, #ffab00 50%, #4ade80)",cursor:"pointer",outline:"none"}}/>
                  </div>
                  <div style={{flex:"1 1 120px"}}>
                    <label style={{fontSize:8,letterSpacing:3,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace",display:"block",marginBottom:5}}>CONTEXT</label>
                    <select value={ctx} onChange={e=>{setCtx(e.target.value);setStale(true);}} style={{width:"100%",padding:"6px 8px",borderRadius:6,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.7)",fontSize:10,fontFamily:"'IBM Plex Mono',monospace",cursor:"pointer",outline:"none"}}>
                      <option value="">Unspecified</option>
                      <option value="alone headphones">Alone · Headphones</option>
                      <option value="festival concert">Festival · Concert</option>
                      <option value="stadium crowd">Stadium</option>
                      <option value="club party">Club · Party</option>
                      <option value="worship">Worship · Ritual</option>
                      <option value="alone quiet">Alone · Quiet</option>
                    </select>
                  </div>
                  <div style={{flex:"1 1 100px"}}>
                    <label style={{fontSize:8,letterSpacing:3,color:"rgba(255,255,255,0.2)",fontFamily:"'IBM Plex Mono',monospace",display:"block",marginBottom:5}}>AUTOMATION</label>
                    <select value={auto} onChange={e=>{setAuto(e.target.value);setStale(true);}} style={{width:"100%",padding:"6px 8px",borderRadius:6,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.7)",fontSize:10,fontFamily:"'IBM Plex Mono',monospace",cursor:"pointer",outline:"none"}}>
                      <option value="build">Build</option><option value="burst">Burst</option>
                      <option value="dissolve">Dissolve</option><option value="release">Release</option>
                      <option value="wave">Wave</option><option value="steady">Steady</option>
                    </select>
                  </div>
                </div>
                <button onClick={manualGenerate} style={{
                  width:"100%",padding:"11px",borderRadius:10,
                  border:stale?"1px solid rgba(0,212,255,0.3)":"1px solid rgba(255,255,255,0.08)",
                  background:stale?"rgba(0,212,255,0.08)":"rgba(255,255,255,0.03)",
                  color:stale?"#00d4ff":"rgba(255,255,255,0.5)",
                  fontSize:11,fontWeight:600,letterSpacing:3,fontFamily:"'IBM Plex Mono',monospace",
                  cursor:"pointer",transition:"all 0.2s",
                  animation:stale?"none":"none"
                }}
                onMouseOver={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.color="#fff";}}
                onMouseOut={e=>{e.currentTarget.style.borderColor=stale?"rgba(0,212,255,0.3)":"rgba(255,255,255,0.08)";e.currentTarget.style.color=stale?"#00d4ff":"rgba(255,255,255,0.5)";}}
                >RE-GENERATE</button>
                {result&&result.log.length>0&&(
                  <div style={{marginTop:12}}>
                    <div style={{fontSize:8,letterSpacing:3,color:"rgba(255,255,255,0.15)",fontFamily:"'IBM Plex Mono',monospace",marginBottom:4}}>SIDECHAIN LOG</div>
                    {result.log.map((l,i)=>(
                      <div key={i} style={{fontSize:9,color:"rgba(255,255,255,0.25)",fontFamily:"'IBM Plex Mono',monospace",lineHeight:1.8}}>▸ {l}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{textAlign:"center",padding:"32px 0 20px"}}>
          <div style={{fontSize:8,letterSpacing:5,color:"rgba(255,255,255,0.08)",fontFamily:"'IBM Plex Mono',monospace"}}>
            AETHER v1.0 · EXPERIENCE PHYSICS
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.3);opacity:1}}
        *{box-sizing:border-box}
        .vfader::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 0 8px rgba(255,255,255,0.25),0 2px 6px rgba(0,0,0,0.5);cursor:pointer;border:2px solid rgba(255,255,255,0.15)}
        .vfader::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 0 8px rgba(255,255,255,0.25);cursor:pointer;border:2px solid rgba(255,255,255,0.15)}
        .hfader::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 0 6px rgba(255,255,255,0.2);cursor:pointer;border:1.5px solid rgba(255,255,255,0.1)}
        .hfader::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:#fff;cursor:pointer;border:1.5px solid rgba(255,255,255,0.1)}
        select option{background:#0f0f18;color:#ccc}
        input::placeholder{color:rgba(255,255,255,0.2)}
      `}</style>
    </div>
  );
}