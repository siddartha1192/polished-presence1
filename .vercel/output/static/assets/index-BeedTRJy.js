import{r as n,j as e}from"./index-BNjl9Qvl.js";const i=`\r
/* ═══ RESET & ROOT ════════════════════════════════════════════════════════ */\r
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r
:root{\r
  /* Brand palette — Blue + Orange + Black + White */\r
  --blue:    #3f6cb5;   /* primary brand blue */\r
  --blue2:   #2d5294;   /* deeper blue — hover/darks */\r
  --blue3:   #edf2fb;   /* pale blue tint */\r
  --orange:  #faa720;   /* primary brand orange / CTA */\r
  --orange2: #d4890f;   /* deeper orange — hover */\r
  --orange3: #fff8e8;   /* pale orange tint */\r
  --dark:    #0f1923;   /* near-black */\r
  --dark2:   #1e2d3d;   /* secondary dark */\r
  --gray:    #5a6a7a;\r
  --lgray:   #8fa3b8;\r
  --bg:      #f8f9fc;\r
  --bg2:     #edf2fb;\r
  --border:  #c5d5ef;\r
  --white:   #FFFFFF;\r
  --font:'Inter','Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;\r
}\r
html{scroll-behavior:smooth}\r
/* Offset all anchor sections by the fixed navbar height */\r
section[id]{scroll-margin-top:104px}\r
body{font-family:var(--font);background:var(--white);color:var(--dark);line-height:1.65;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:'cv02','cv03','cv04','cv11'}\r
h1,h2,h3,h4{line-height:1.15;font-weight:700;letter-spacing:-.02em}\r
a{text-decoration:none;color:inherit}\r
img{max-width:100%;display:block}\r
\r
/* ═══ UTILITIES ═══════════════════════════════════════════════════════════ */\r
.container{width:92%;max-width:2200px;margin:0 auto;padding:0 clamp(20px,2.5vw,60px)}\r
.section-label{\r
  display:inline-flex;align-items:center;gap:.65rem;\r
  font-size:1rem;font-weight:800;letter-spacing:.12em;\r
  color:var(--orange);text-transform:uppercase;margin-bottom:.75rem}\r
.section-label::before{\r
  content:'';display:inline-block;width:26px;height:3px;\r
  background:var(--orange);border-radius:2px;flex-shrink:0}\r
.btn{display:inline-flex;align-items:center;gap:.4rem;padding:.72rem 1.4rem;border-radius:8px;font-size:.88rem;font-weight:600;cursor:pointer;transition:all .22s;border:none;font-family:var(--font);letter-spacing:-.005em}\r
.btn-blue{background:var(--blue);color:#fff}\r
.btn-blue:hover{background:var(--blue2);transform:translateY(-2px);box-shadow:0 6px 24px rgba(63,108,181,.32)}\r
.btn-orange{background:var(--orange);color:#0f1923}\r
.btn-orange:hover{background:var(--orange2);color:#fff;transform:translateY(-2px);box-shadow:0 6px 24px rgba(250,167,32,.4)}\r
.btn-outline-blue{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.6)}\r
.btn-outline-blue:hover{background:rgba(255,255,255,.15);color:#fff;border-color:#fff}\r
#nav.sc .btn-outline-blue{color:var(--blue);border-color:var(--blue)}\r
#nav.sc .btn-outline-blue:hover{background:var(--blue);color:#fff}\r
.btn-ghost{background:rgba(255,255,255,.1);color:#fff;border:1.5px solid rgba(255,255,255,.25)}\r
.btn-ghost:hover{background:rgba(255,255,255,.2)}\r
.btn-white{background:#fff;color:var(--blue)}\r
.btn-white:hover{background:var(--blue3)}\r
\r
/* ── Hero-specific button pair ─────────────────────────────────────────── */\r
/* Primary CTA on dark video — orange fill, near-black text, warm glow */\r
.btn-hero-primary{\r
  padding:clamp(.35rem,1vw,.55rem) clamp(.7rem,1.8vw,1.3rem);\r
  font-size:clamp(.7rem,1.2vw,.88rem);font-weight:700;letter-spacing:.01em;\r
  box-shadow:0 4px 20px rgba(250,167,32,.35),0 1px 4px rgba(0,0,0,.25)}\r
.btn-hero-primary:hover{\r
  background:var(--orange2);color:#fff;\r
  box-shadow:0 8px 32px rgba(250,167,32,.55),0 2px 8px rgba(0,0,0,.3);\r
  transform:translateY(-3px)}\r
\r
/* Secondary CTA on dark video — frosted white border, fills blue on hover */\r
.btn-outline-light{\r
  padding:clamp(.35rem,1vw,.55rem) clamp(.7rem,1.8vw,1.3rem);\r
  font-size:clamp(.7rem,1.2vw,.88rem);font-weight:700;letter-spacing:.01em;\r
  background:var(--blue);color:#fff;border:2px solid var(--blue);\r
  box-shadow:0 4px 18px rgba(63,108,181,.45),0 1px 4px rgba(0,0,0,.3)}\r
.btn-outline-light:hover{\r
  background:var(--blue2);border-color:var(--blue2);\r
  box-shadow:0 8px 28px rgba(63,108,181,.55),0 2px 8px rgba(0,0,0,.35);\r
  transform:translateY(-3px)}\r
\r
/* fade-in on scroll */\r
.fi{opacity:0;transform:translateY(32px);transition:opacity .9s cubic-bezier(.25,.46,.45,.94),transform .9s cubic-bezier(.25,.46,.45,.94)}\r
.fi.on{opacity:1;transform:none}\r
\r
/* Slow-motion left/right title reveals */\r
.fi-left{opacity:0;transform:translateX(-80px);\r
  transition:opacity 1.4s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1)}\r
.fi-left.on{opacity:1;transform:none}\r
.fi-right{opacity:0;transform:translateX(80px);\r
  transition:opacity 1.4s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1)}\r
.fi-right.on{opacity:1;transform:none}\r
\r
/* Stagger: label slightly before h2 */\r
.fi-left.title-label,.fi-right.title-label{transition-duration:1.2s}\r
.fi-left.title-h2,.fi-right.title-h2{transition-delay:.15s;transition-duration:1.5s}\r
\r
/* ═══ NAVBAR ══════════════════════════════════════════════════════════════ */\r
/* Navbar: transparent glass on hero, solid white when scrolled */\r
#nav{position:fixed;top:0;left:0;right:0;z-index:1000;\r
  background:transparent;border-bottom:1px solid transparent;\r
  transition:background .4s ease,box-shadow .4s ease,border-color .4s ease}\r
#nav.sc{background:rgba(255,255,255,.96);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-color:var(--border);box-shadow:0 4px 24px rgba(15,40,90,.06)}\r
.nav-wrap{display:flex;align-items:center;justify-content:space-between;height:104px;gap:2rem}\r
#nav a:first-child{flex-shrink:0}\r
.nav-logo-img{\r
  height:198px;width:auto;display:block;flex-shrink:0}\r
.nav-links{display:flex;align-items:center;gap:clamp(1rem,1.8vw,2.4rem)}\r
.nav-links a{font-size:clamp(.78rem,.95vw,1rem);color:rgba(255,255,255,.88);font-weight:600;transition:color .3s;position:relative;padding:6px 0;letter-spacing:-.01em;white-space:nowrap}\r
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--orange);border-radius:2px;transition:width .25s}\r
.nav-links a:hover,.nav-links a.act{color:#fff}\r
.nav-links a:hover::after,.nav-links a.act::after{width:100%}\r
/* Active link on transparent navbar — orange underline */\r
.nav-links a.act{color:#fff}\r
.nav-links a.act::after{background:var(--orange);width:100%}\r
\r
#nav.sc .nav-links a{color:var(--dark2)}\r
#nav.sc .nav-links a:hover,#nav.sc .nav-links a.act{color:var(--dark)}\r
#nav.sc .nav-links a::after{background:var(--blue)}\r
#nav.sc .nav-links a.act{color:var(--blue);font-weight:700}\r
#nav.sc .nav-links a.act::after{background:var(--blue);width:100%}\r
.nav-right{display:flex;align-items:center;gap:.6rem}\r
.nav-right .btn{white-space:nowrap;font-size:clamp(.72rem,.85vw,.9rem);padding:.5rem clamp(.7rem,1vw,1.3rem)}\r
.ham{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:none}\r
.ham span{width:22px;height:2px;background:#fff;border-radius:2px;transition:.3s;display:block}\r
#nav.sc .ham span{background:var(--dark)}\r
/* Right-side drawer */\r
.mob-nav{\r
  position:fixed;top:0;right:0;bottom:0;\r
  width:min(300px,82vw);\r
  background:#fff;z-index:1001;\r
  display:flex;flex-direction:column;gap:0;\r
  padding:1.8rem 1.6rem;\r
  box-shadow:-8px 0 40px rgba(0,0,0,.18);\r
  transform:translateX(110%);\r
  transition:transform .35s cubic-bezier(.4,0,.2,1)}\r
.mob-nav.open{transform:translateX(0)}\r
.mob-nav a{font-size:1rem;color:var(--dark);font-weight:600;padding:.75rem 0;border-bottom:1px solid var(--border);text-decoration:none}\r
.mob-nav a:last-of-type{border-bottom:none}\r
.mob-close{\r
  align-self:flex-end;background:none;border:none;\r
  font-size:1.3rem;color:var(--dark);cursor:pointer;\r
  margin-bottom:1.2rem;padding:4px 8px;line-height:1}\r
.mob-overlay{\r
  display:none;position:fixed;inset:0;\r
  background:rgba(0,0,0,.45);z-index:1000;\r
  backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}\r
.mob-overlay.open{display:block}\r
/* Ham → X animation */\r
.ham.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}\r
.ham.open span:nth-child(2){opacity:0;transform:scaleX(0)}\r
.ham.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}\r
\r
/* ═══ HERO REEL — 4-slide enterprise video carousel ══════════════════════ */\r
.hero-reel{\r
  position:relative;height:100vh;min-height:600px;overflow:hidden;\r
  display:flex;align-items:center}\r
\r
/* ── Video layer ──────────────────────────────────────────────────────── */\r
.reel-bg{position:absolute;inset:0;z-index:0}\r
.reel-video{\r
  position:absolute;inset:0;width:100%;height:100%;\r
  object-fit:cover;object-position:center;\r
  opacity:0;transition:opacity 1.2s ease;pointer-events:none}\r
.reel-video.reel-active{opacity:1}\r
\r
/* ── Overlay — directional dark + brand-blue bloom + bottom dissolve ──── */\r
.hero-overlay{display:none}\r
\r
/* ── Slide dots bottom-centre ─────────────────────────────────────────── */\r
.reel-dots{\r
  position:absolute;bottom:36px;right:48px;z-index:10;\r
  display:flex;align-items:center;gap:6px}\r
.reel-dot{\r
  width:6px;height:6px;border-radius:999px;border:none;\r
  background:rgba(255,255,255,.35);cursor:pointer;padding:0;\r
  transition:background .35s ease,width .35s ease;\r
  flex-shrink:0}\r
.reel-dot:hover{background:rgba(255,255,255,.65)}\r
.reel-dot.reel-dot-active{\r
  width:20px;background:#fff}\r
\r
/* ── Slides container ─────────────────────────────────────────────────── */\r
.reel-slides{position:absolute;inset:0;z-index:3}\r
.reel-slide{\r
  position:absolute;inset:0;\r
  display:flex;align-items:center;\r
  padding-top:8rem;padding-bottom:9rem;\r
  opacity:0;pointer-events:none;\r
  transition:opacity .9s ease}\r
.reel-slide.reel-active{opacity:1;pointer-events:auto}\r
.reel-slide.reel-exit{opacity:0;transition:opacity .5s ease}\r
\r
/* ── Slide inner text — default invisible ───────────────────────────────── */\r
.reel-inner{max-width:860px}\r
.reel-inner > *{opacity:0}\r
.reel-btns{opacity:0}\r
\r
/* Alternating left / right entrance — creates a cinematic cross-slide feel */\r
.reel-slide.reel-active .reel-eyebrow{animation:reel-left  1.1s cubic-bezier(.16,1,.3,1) .05s forwards}\r
.reel-slide.reel-active h1           {animation:reel-right 1.4s cubic-bezier(.16,1,.3,1) .2s  forwards}\r
.reel-slide.reel-active .reel-sub    {animation:reel-left  1.2s cubic-bezier(.16,1,.3,1) .38s forwards}\r
.reel-slide.reel-active .reel-stats,\r
.reel-slide.reel-active .reel-stat-highlight{animation:reel-right 1.1s cubic-bezier(.16,1,.3,1) .52s forwards}\r
.reel-slide.reel-active .reel-btns   {animation:reel-left  1.1s cubic-bezier(.16,1,.3,1) .6s  forwards}\r
\r
@keyframes reel-left{\r
  from{opacity:0;transform:translateX(-80px)}\r
  to  {opacity:1;transform:translateX(0)}\r
}\r
@keyframes reel-right{\r
  from{opacity:0;transform:translateX(80px)}\r
  to  {opacity:1;transform:translateX(0)}\r
}\r
\r
/* ── Eyebrow — large, bold, unmissable ────────────────────────────────── */\r
.reel-eyebrow{\r
  display:inline-flex;align-items:center;gap:.75rem;\r
  font-size:clamp(1.6rem,2.8vw,2.4rem);font-weight:800;letter-spacing:.07em;white-space:nowrap;\r
  color:var(--orange);text-transform:uppercase;margin-bottom:1rem;\r
  text-shadow:0 1px 8px rgba(0,0,0,.75),0 0 24px rgba(0,0,0,.5)}\r
.reel-eyebrow::before{display:none}\r
\r
/* ── Headline — pure white, triple-layer shadow for video readability ───── */\r
.reel-slide h1{\r
  font-size:clamp(1.8rem,3vw,2.8rem);color:#fff;\r
  margin:0 0 1rem;line-height:1.12;font-weight:800;letter-spacing:-.03em;\r
  text-shadow:\r
    0 1px 2px rgba(0,0,0,.9),\r
    0 4px 16px rgba(0,0,0,.75),\r
    0 12px 40px rgba(0,0,0,.55)}\r
\r
.reel-nowrap{white-space:nowrap}\r
@media(max-width:768px){.reel-nowrap{white-space:normal}}\r
\r
/* ── Slide 01 overrides — oversized eyebrow + enlarged headline ────────── */\r
.reel-slide[data-idx="0"] h1{\r
  font-size:clamp(1.8rem,3vw,2.6rem)}\r
\r
/* ── Em/accent — orange glow, dark halo keeps it readable on bright video ── */\r
.reel-slide h1 em{\r
  color:var(--orange);font-style:normal;\r
  text-shadow:\r
    0 1px 2px rgba(0,0,0,.9),\r
    0 0 24px rgba(250,167,32,.7),\r
    0 4px 16px rgba(0,0,0,.6)}\r
\r
/* ── Subtext — white with a tight dark shadow for crisp legibility ────────── */\r
.reel-sub{\r
  font-size:.92rem;color:#fff;\r
  max-width:580px;margin:0 0 1.8rem;line-height:1.75;font-weight:400;\r
  text-shadow:\r
    0 1px 3px rgba(0,0,0,.85),\r
    0 4px 18px rgba(0,0,0,.65),\r
    0 8px 32px rgba(0,0,0,.4)}\r
\r
/* ── Buttons — pinned to bottom-centre of the hero ───────────────────── */\r
.reel-btns{\r
  position:absolute;bottom:3.5rem;left:0;right:0;\r
  display:flex;justify-content:center;align-items:center;\r
  gap:.65rem;flex-wrap:nowrap}\r
\r
/* ── Stats row (slide 1) ──────────────────────────────────────────────── */\r
.reel-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-top:3.5rem;max-width:820px}\r
.hstat{\r
  text-align:center;padding:1.4rem 1rem;\r
  border:1px solid rgba(255,255,255,.13);border-radius:14px;\r
  background:rgba(6,16,31,.48);\r
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);\r
  box-shadow:0 4px 24px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.07);\r
  transition:box-shadow .25s,transform .25s,border-color .25s}\r
.hstat:hover{\r
  box-shadow:0 8px 40px rgba(63,108,181,.35),inset 0 1px 0 rgba(255,255,255,.12);\r
  transform:translateY(-4px);border-color:rgba(63,108,181,.45)}\r
.hstat .hn{\r
  font-size:2rem;font-weight:900;color:var(--orange);line-height:1;\r
  text-shadow:0 0 24px rgba(250,167,32,.45)}\r
.hstat .hl{\r
  font-size:.72rem;color:rgba(255,255,255,.65);\r
  margin-top:.5rem;font-weight:600;letter-spacing:.04em;line-height:1.4;\r
  text-shadow:0 1px 4px rgba(0,0,0,.5)}\r
\r
/* ── Stat highlight (slide 3) ─────────────────────────────────────────── */\r
.reel-stat-highlight{\r
  display:flex;align-items:center;gap:1.5rem;\r
  margin-top:3rem;padding:1.4rem 1.8rem;\r
  background:rgba(6,16,31,.5);border:1px solid rgba(250,167,32,.25);\r
  border-radius:14px;backdrop-filter:blur(16px);max-width:620px;\r
  box-shadow:0 4px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05)}\r
.rsh-num{\r
  font-size:3.2rem;font-weight:900;color:var(--orange);line-height:1;flex-shrink:0;\r
  text-shadow:0 0 32px rgba(250,167,32,.5)}\r
.rsh-txt{font-size:.9rem;color:rgba(255,255,255,.75);line-height:1.6;\r
  text-shadow:0 1px 4px rgba(0,0,0,.5)}\r
.rsh-txt strong{color:#fff}\r
\r
/* ── Bottom navigation ────────────────────────────────────────────────── */\r
.reel-nav{\r
  position:absolute;bottom:0;left:0;right:0;z-index:10;\r
  display:flex;align-items:flex-end;gap:1.2rem;\r
  padding:0 48px 2.2rem}\r
.reel-dots{flex:1;display:flex;gap:1.5rem}\r
.reel-dot{\r
  flex:1;cursor:pointer;padding-bottom:.6rem;\r
  border-bottom:1px solid rgba(255,255,255,.14);\r
  transition:border-color .3s}\r
.reel-dot.active{border-bottom-color:var(--orange)}\r
.reel-dot-head{display:flex;align-items:center;gap:.55rem;margin-bottom:.5rem}\r
.reel-dot-num{\r
  font-size:.6rem;font-weight:800;letter-spacing:.1em;\r
  color:rgba(255,255,255,.3);transition:color .3s}\r
.reel-dot.active .reel-dot-num{color:var(--orange)}\r
.reel-dot-lbl{\r
  font-size:.75rem;font-weight:600;color:rgba(255,255,255,.45);\r
  letter-spacing:.01em;transition:color .3s;white-space:nowrap}\r
.reel-dot.active .reel-dot-lbl{color:#fff}\r
.reel-dot-track{height:2px;background:rgba(255,255,255,.12);border-radius:2px;overflow:hidden}\r
.reel-dot-fill{height:100%;width:0%;background:var(--orange);border-radius:2px;transition:none}\r
\r
/* ── Arrow buttons ────────────────────────────────────────────────────── */\r
.reel-arrow{\r
  width:44px;height:44px;border-radius:50%;flex-shrink:0;\r
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);\r
  color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;\r
  backdrop-filter:blur(10px);transition:all .2s;margin-bottom:.6rem}\r
.reel-arrow:hover{background:var(--blue);border-color:var(--blue);transform:scale(1.08)}\r
.reel-arrow svg{width:18px;height:18px}\r
\r
/* live-pulse */\r
@keyframes live-pulse{0%,100%{box-shadow:0 0 0 0 rgba(250,167,32,.5)}60%{box-shadow:0 0 0 7px rgba(250,167,32,0)}}\r
\r
/* ═══ LOGO STRIP ══════════════════════════════════════════════════════════ */\r
#strip{padding:4rem 0;background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden}\r
.strip-label{text-align:center;font-size:1.15rem;color:var(--dark2);margin-bottom:2.5rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\r
.marq-wrap{overflow:hidden;position:relative}\r
.marq-wrap::before,.marq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:160px;z-index:1}\r
.marq-wrap::before{left:0;background:linear-gradient(to right,#fff,transparent)}\r
.marq-wrap::after{right:0;background:linear-gradient(to left,#fff,transparent)}\r
.marq{display:flex;gap:2rem;animation:marq 40s linear infinite;width:max-content;align-items:center}\r
.marq:hover{animation-play-state:paused}\r
.logo-chip{\r
  display:flex;align-items:center;gap:.9rem;\r
  padding:1rem 2rem;border:1.5px solid var(--border);border-radius:12px;\r
  font-size:1.1rem;font-weight:700;color:var(--dark2);white-space:nowrap;background:#fff;\r
  letter-spacing:-.01em;transition:border-color .3s,box-shadow .3s,background .3s,color .3s}\r
.logo-chip:hover{\r
  border-color:var(--blue);\r
  background:rgba(63,108,181,.05);\r
  color:var(--blue);\r
  box-shadow:0 0 0 4px rgba(63,108,181,.07),0 4px 18px rgba(63,108,181,.1)}\r
.logo-chip svg{width:28px;height:28px;flex-shrink:0;color:var(--blue);opacity:.85}\r
@keyframes marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\r
\r
/* ═══ SERVICES ════════════════════════════════════════════════════════════ */\r
#services{padding:6rem 0;background:var(--bg)}\r
.sec-hd{margin-bottom:3.5rem;text-align:center;max-width:960px;margin-left:auto;margin-right:auto}\r
.sec-hd h2{font-size:clamp(2rem,3vw,3rem);color:var(--dark);margin:.5rem 0 1rem}\r
.sec-hd p{color:var(--gray);max-width:760px;line-height:1.7;margin:0 auto}\r
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2.4rem}\r
.svc-card{background:#fff;border-radius:16px;border:1px solid var(--border);overflow:hidden;\r
  transition:transform .25s,box-shadow .25s;cursor:pointer;display:flex;flex-direction:column}\r
.svc-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(63,108,181,.13)}\r
.svc-illus{height:190px;display:flex;align-items:center;justify-content:center;\r
  background:#e8f4ff;position:relative;overflow:hidden}\r
.svc-illus .svc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;\r
  transition:transform .55s cubic-bezier(.22,.61,.36,1);z-index:0}\r
.svc-card:hover .svc-img{transform:scale(1.07)}\r
.svc-illus .svc-img-overlay{position:absolute;inset:0;\r
  background:linear-gradient(to bottom,rgba(10,24,58,.08) 0%,rgba(10,24,58,.28) 100%);z-index:1}\r
.svc-illus svg{width:120px;height:120px;filter:drop-shadow(0 4px 12px rgba(63,108,181,.18));position:relative;z-index:2}\r
.svc-illus .svc-badge{position:absolute;top:12px;right:14px;background:var(--blue);color:#fff;\r
  font-size:.65rem;font-weight:700;letter-spacing:.07em;padding:.25rem .6rem;border-radius:20px;\r
  text-transform:uppercase;z-index:3;box-shadow:0 2px 8px rgba(0,0,0,.25)}\r
.svc-body{padding:1.4rem 1.5rem 1.6rem;flex:1;display:flex;flex-direction:column}\r
.svc-num2{font-size:.7rem;font-weight:800;color:var(--blue);letter-spacing:.12em;text-transform:uppercase;margin-bottom:.4rem;opacity:.7}\r
.svc-title2{font-size:1.05rem;font-weight:800;color:var(--dark);margin:0 0 .8rem;line-height:1.3}\r
.svc-desc2{font-size:.875rem;color:var(--gray);line-height:1.7;flex:1}\r
.svc-link{display:inline-flex;align-items:center;gap:.35rem;margin-top:1.1rem;font-size:.8rem;\r
  font-weight:700;color:var(--blue);text-decoration:none;transition:gap .2s}\r
.svc-card:hover .svc-link{gap:.6rem}\r
.svc-link svg{width:14px;height:14px}\r
\r
/* ═══ WHY INNOVSOL ════════════════════════════════════════════════════════ */\r
#why{padding:6rem 0;background:#fff}\r
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}\r
.why-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:0;\r
  overflow:hidden;transition:transform .28s,box-shadow .28s;display:flex;flex-direction:column}\r
.why-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(63,108,181,.14)}\r
.why-img-wrap{height:160px;overflow:hidden;position:relative;flex-shrink:0}\r
.why-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;\r
  transition:transform .55s cubic-bezier(.22,.61,.36,1)}\r
.why-card:hover .why-img-wrap img{transform:scale(1.07)}\r
.why-img-wrap .why-img-tag{position:absolute;bottom:10px;left:12px;background:var(--blue);\r
  color:#fff;font-size:.62rem;font-weight:700;letter-spacing:.08em;padding:.22rem .55rem;\r
  border-radius:20px;text-transform:uppercase;box-shadow:0 2px 8px rgba(0,0,0,.3)}\r
.why-body{padding:1.4rem 1.5rem 1.6rem;flex:1;border-top:3px solid var(--blue);\r
  transition:border-top-color .25s}\r
.why-card:hover .why-body{border-top-color:var(--orange)}\r
.why-icon{width:44px;height:44px;border-radius:10px;background:var(--blue3);display:flex;align-items:center;\r
  justify-content:center;margin-bottom:1rem;flex-shrink:0}\r
.why-icon svg{width:22px;height:22px;color:var(--blue)}\r
.why-card h3{font-size:.98rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}\r
.why-card p{font-size:.86rem;color:var(--gray);line-height:1.65}\r
\r
/* ═══ METRICS ═════════════════════════════════════════════════════════════ */\r
#metrics{padding:4rem 0;background:var(--blue)}\r
.met-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0}\r
.met-cell{\r
  padding:2.2rem 1.8rem;\r
  text-align:center;\r
  position:relative;\r
  border-right:1px solid rgba(255,255,255,.18)}\r
.met-cell:last-child{border-right:none}\r
.met-trend{display:none}\r
.met-cell .mn{font-size:3.2rem;font-weight:900;color:#fff;display:block;line-height:1;\r
  letter-spacing:-.04em;margin-bottom:.6rem}\r
.met-cell .ml{font-size:.82rem;color:rgba(255,255,255,.7);line-height:1.5;font-weight:500;letter-spacing:.01em}\r
.met-bar{width:48px;height:2px;background:rgba(255,255,255,.25);border-radius:2px;margin:1rem auto 0;overflow:hidden}\r
.met-fill{height:100%;width:0;background:#fff;\r
  border-radius:2px;animation:met-grow 1.4s cubic-bezier(.4,0,.2,1) .8s both}\r
@keyframes met-grow{from{width:0}to{width:var(--w)}}\r
\r
/* ═══ INDUSTRIES ══════════════════════════════════════════════════════════ */\r
#industries{padding:6rem 0;background:var(--bg)}\r
.ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem;margin-top:2.5rem}\r
.ind-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:0;cursor:pointer;\r
  transition:transform .28s,box-shadow .28s;overflow:hidden;display:flex;flex-direction:column}\r
.ind-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(63,108,181,.15)}\r
.ind-img-wrap{height:145px;overflow:hidden;position:relative;flex-shrink:0}\r
.ind-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;\r
  transition:transform .55s cubic-bezier(.22,.61,.36,1)}\r
.ind-card:hover .ind-img-wrap img{transform:scale(1.08)}\r
.ind-img-wrap::after{content:'';position:absolute;inset:0;\r
  background:linear-gradient(to bottom,transparent 55%,rgba(10,24,58,.45) 100%)}\r
.ind-body{padding:1.1rem 1.2rem 1.3rem;flex:1;border-top:3px solid var(--blue);\r
  transition:border-top-color .25s}\r
.ind-card:hover .ind-body{border-top-color:var(--orange)}\r
.ind-icon{width:44px;height:44px;border-radius:10px;background:var(--blue3);display:flex;align-items:center;justify-content:center;margin-bottom:.9rem;flex-shrink:0}\r
.ind-icon svg{width:22px;height:22px;color:var(--blue)}\r
.ind-card h3{font-size:.9rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}\r
.ind-card p{font-size:.76rem;color:var(--gray);line-height:1.58}\r
\r
/* ═══ ENGAGEMENT ══════════════════════════════════════════════════════════ */\r
/* ═══ ENGAGEMENT — sticky scroll storytelling ════════════════════════════ */\r
\r
/* Driver — shorter so cards respond faster (each card ≈ 60vh of scroll) */\r
.eng-scroll-driver{height:calc(100vh + 240vh)}\r
\r
/* Driver is the scroll anchor — no offset needed */\r
.eng-scroll-driver{scroll-margin-top:0}\r
\r
/* Section pins to viewport — padding-top clears the fixed navbar */\r
.eng-section{\r
  position:sticky;top:0;height:100vh;overflow:hidden;\r
  background:linear-gradient(160deg,#f4f8ff 0%,#fff 65%);\r
  display:flex;align-items:center;\r
  padding-top:104px}\r
\r
/* Single centred column */\r
.eng-wrapper{\r
  display:flex;flex-direction:column;align-items:center;\r
  text-align:center;width:100%;gap:1.8rem}\r
\r
/* Centred header */\r
.eng-header{text-align:center}\r
.eng-header h2{font-size:clamp(1.6rem,2.8vw,2.8rem);color:var(--dark);margin:.5rem 0 0;line-height:1.15}\r
\r
/* Phase selector — big scroll-driven text nav */\r
.eng-steplist{display:flex;flex-direction:row;gap:0;justify-content:center;flex-wrap:wrap;margin-bottom:1.5rem}\r
.eng-steplbl{\r
  font-size:clamp(1.4rem,2.2vw,2rem);font-weight:800;letter-spacing:-.02em;\r
  color:rgba(15,40,90,.3);\r
  padding:.5rem 1.8rem;border-bottom:3px solid var(--blue);\r
  cursor:pointer;transition:color .3s,border-color .3s;text-decoration:none}\r
.eng-steplbl.active{color:var(--dark);border-bottom-color:var(--orange)}\r
.eng-steplbl:hover:not(.active){color:rgba(15,40,90,.55)}\r
\r
/* Stage: centred, cards stacked */\r
.eng-stage{position:relative;height:38vh;width:100%;max-width:760px;overflow:hidden}\r
\r
/* Cards — fast transitions */\r
.eng-card{\r
  position:absolute;inset:0;\r
  display:flex;align-items:flex-start;justify-content:center;\r
  opacity:0;transform:translateY(45px);\r
  transition:opacity .38s cubic-bezier(.22,.61,.36,1),transform .38s cubic-bezier(.22,.61,.36,1);\r
  pointer-events:none}\r
.eng-card.eng-active{opacity:1;transform:translateY(0);pointer-events:auto}\r
.eng-card.eng-exit{opacity:0;transform:translateY(-35px);transition:opacity .28s ease,transform .28s ease}\r
\r
/* Ghost number watermark */\r
.eng-ghost-num{\r
  position:absolute;left:50%;top:50%;\r
  transform:translate(-50%,-50%);\r
  font-size:22rem;font-weight:900;color:var(--blue);opacity:.04;\r
  line-height:1;pointer-events:none;user-select:none;\r
  font-family:var(--font);letter-spacing:-.1em;white-space:nowrap}\r
\r
/* Card content — bold, centred, no box */\r
.eng-card-body{position:relative;z-index:1;max-width:640px;text-align:center}\r
\r
.eng-card-tag{\r
  display:inline-flex;align-items:center;justify-content:center;gap:.55rem;\r
  font-size:.65rem;font-weight:800;letter-spacing:.15em;\r
  text-transform:uppercase;color:var(--orange);margin-bottom:.9rem}\r
.eng-card-tag::before{\r
  content:'';display:inline-block;width:22px;height:3px;\r
  background:var(--orange);border-radius:2px;flex-shrink:0}\r
\r
.eng-card-title{\r
  font-size:clamp(2.8rem,5vw,5rem);font-weight:900;\r
  color:var(--dark);letter-spacing:-.04em;line-height:.95;\r
  margin:0 0 1.2rem}\r
\r
.eng-card-desc{\r
  font-size:.98rem;color:var(--gray);\r
  line-height:1.75;margin:0 0 1.5rem;font-weight:400}\r
\r
.eng-deliverable{display:flex;flex-direction:column;gap:.3rem;align-items:center}\r
.eng-del-lbl{\r
  font-size:.58rem;font-weight:800;letter-spacing:.14em;\r
  text-transform:uppercase;color:var(--orange)}\r
.eng-del-txt{font-size:.9rem;color:var(--dark2);font-weight:700}\r
\r
/* Progress dots — right side, vertical */\r
.eng-progress{\r
  position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);\r
  display:flex;flex-direction:column;align-items:center;gap:.45rem}\r
.eng-dot{\r
  width:6px;height:6px;border-radius:50%;\r
  background:var(--border);transition:all .3s;flex-shrink:0}\r
.eng-dot.active{background:var(--orange);height:20px;border-radius:3px}\r
.eng-scroll-lbl{\r
  margin-top:.3rem;\r
  font-size:.55rem;font-weight:700;letter-spacing:.14em;\r
  text-transform:uppercase;color:var(--lgray);\r
  writing-mode:vertical-rl;text-orientation:mixed}\r
\r
/* Pills row below the driver */\r
.eng-pills-row{background:linear-gradient(160deg,#f4f8ff 0%,#fff 65%);padding:3rem 0 5rem}\r
.eng-summary{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}\r
.eng-sum-pill{\r
  display:flex;align-items:center;gap:.6rem;background:#fff;\r
  border:1.5px solid var(--border);border-radius:30px;\r
  padding:.6rem 1.3rem;font-size:.83rem;color:var(--dark);font-weight:600;\r
  box-shadow:0 2px 12px rgba(63,108,181,.06);transition:border-color .2s,box-shadow .2s}\r
.eng-sum-pill:hover{border-color:var(--blue);box-shadow:0 4px 20px rgba(63,108,181,.12)}\r
.eng-sum-pill svg{width:16px;height:16px;flex-shrink:0;color:var(--blue)}\r
\r
@media(max-width:860px){\r
  .eng-scroll-driver{height:auto}\r
  #engagement{position:relative;height:auto;padding:5rem 0}\r
  .eng-wrapper{grid-template-columns:1fr;gap:2.5rem}\r
  .eng-stage{height:auto;overflow:visible}\r
  .eng-card{position:relative;opacity:1;transform:none;padding:2rem 0;pointer-events:auto}\r
  .eng-card.eng-exit{opacity:1;transform:none}\r
  .eng-ghost-num{display:none}\r
  .eng-progress{display:none}\r
  .eng-steplist{display:none}\r
  .eng-header h2{font-size:clamp(2rem,7vw,3rem);font-weight:900;line-height:1.1}\r
}\r
\r
/* ═══ CASE STUDIES ════════════════════════════════════════════════════════ */\r
#casestudies{padding:6rem 0;background:linear-gradient(135deg,var(--dark) 0%,#0D2147 100%)}\r
#casestudies .sec-hd h2{color:#fff}\r
#casestudies .sec-hd p{color:rgba(255,255,255,.6)}\r
.cs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}\r
.cs-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;\r
  padding:1.8rem;transition:.3s;cursor:pointer}\r
.cs-card:hover{background:rgba(63,108,181,.12);border-color:var(--blue);transform:translateY(-4px)}\r
.cs-ind{font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.4)}\r
.cs-type{font-size:.7rem;font-weight:700;color:var(--orange);margin-bottom:1rem}\r
.cs-card h3{font-size:1.02rem;font-weight:700;color:#fff;line-height:1.38;margin-bottom:.55rem}\r
.cs-det{font-size:.78rem;color:rgba(255,255,255,.38);margin-bottom:1.1rem;line-height:1.55}\r
.cs-sep{height:1px;background:rgba(255,255,255,.08);margin-bottom:1rem}\r
.cs-r1{font-size:.85rem;font-weight:700;color:var(--orange);margin-bottom:.35rem}\r
.cs-r2{font-size:.85rem;font-weight:700;color:#7EC8F8}\r
\r
/* ═══ FDE TEAM ════════════════════════════════════════════════════════════ */\r
#fde{padding:6rem 0;background:var(--bg)}\r
.fde-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}\r
.fde-lbl{font-size:.72rem;font-weight:800;letter-spacing:.14em;color:var(--orange);text-transform:uppercase;margin-bottom:.5rem}\r
.fde-grid h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--dark);margin:.4rem 0 1.2rem}\r
.fde-grid .lead{font-size:1rem;color:var(--gray);line-height:1.75;margin-bottom:.9rem}\r
.fde-highlight{background:var(--blue3);border-left:4px solid var(--blue);border-radius:0 6px 6px 0;\r
  padding:.9rem 1.2rem;font-size:.9rem;color:var(--dark2);margin:1.2rem 0;line-height:1.6}\r
.fde-stages{margin:1.4rem 0;display:flex;flex-direction:column;gap:.65rem}\r
.fde-stage{display:grid;grid-template-columns:88px 1fr;gap:1rem;align-items:center}\r
.fde-wk{background:rgba(63,108,181,.12);color:var(--blue);font-size:.76rem;font-weight:800;\r
  padding:.32rem .6rem;border-radius:5px;text-align:center;white-space:nowrap}\r
.fde-act{font-size:.88rem;color:var(--dark2)}\r
.fde-btns{display:flex;gap:.9rem;margin-top:1.6rem;flex-wrap:wrap}\r
.stat-cards{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}\r
.stat-card{background:#fff;border:1px solid var(--border);border-radius:10px;padding:1.8rem;\r
  border-top:4px solid var(--blue);text-align:center;transition:.25s}\r
.stat-card:nth-child(2n){border-top-color:var(--orange)}\r
.stat-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(63,108,181,.1)}\r
.stat-card .big{font-size:2.6rem;font-weight:800;color:var(--dark);line-height:1}\r
.stat-card .sm{font-size:.8rem;color:var(--gray);margin-top:.5rem;line-height:1.45}\r
\r
/* ═══ INSIGHTS ════════════════════════════════════════════════════════════ */\r
#insights{padding:6rem 0;background:#fff}\r
.ins-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}\r
.ins-card{border:1px solid var(--border);border-radius:10px;overflow:hidden;transition:.25s;cursor:pointer}\r
.ins-card:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(63,108,181,.12);border-color:var(--blue)}\r
.ins-top{height:130px;background:var(--bg2);padding:1.2rem;display:flex;flex-direction:column;gap:.5rem;position:relative}\r
.ins-top::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(to right,var(--blue),var(--blue2))}\r
.ins-tag{font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--blue)}\r
.ins-date{font-size:.72rem;color:var(--lgray)}\r
.ins-body{padding:1.4rem}\r
.ins-body h3{font-size:.98rem;font-weight:700;color:var(--dark);line-height:1.4;margin-bottom:.7rem}\r
.ins-body p{font-size:.82rem;color:var(--gray);line-height:1.65;margin-bottom:.9rem}\r
.ins-link{font-size:.82rem;font-weight:700;color:var(--blue);display:inline-flex;align-items:center;gap:.3rem}\r
.ins-link::after{content:'→';transition:transform .2s}\r
.ins-card:hover .ins-link::after{transform:translateX(5px)}\r
\r
/* ═══ CAREERS ═════════════════════════════════════════════════════════════ */\r
#careers{padding:6rem 0;background:var(--bg2)}\r
.car-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:4rem;align-items:start}\r
.car-grid h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--dark);margin:.4rem 0 1.1rem}\r
.car-grid .lead{color:var(--gray);line-height:1.75;margin-bottom:1.5rem}\r
.perks{display:flex;flex-direction:column;gap:.65rem;margin:1.2rem 0}\r
.perk{display:flex;align-items:flex-start;gap:.7rem;font-size:.88rem;color:var(--dark2)}\r
.pdot{width:7px;height:7px;border-radius:50%;background:var(--orange);margin-top:.5rem;flex-shrink:0}\r
.roles{display:flex;flex-direction:column;gap:.75rem}\r
.role{background:#fff;border:1px solid var(--border);border-radius:8px;padding:1rem 1.3rem;\r
  display:flex;justify-content:space-between;align-items:center;transition:.22s;cursor:pointer}\r
.role:hover{border-color:var(--blue);box-shadow:0 4px 18px rgba(63,108,181,.1);transform:translateX(4px)}\r
.role-t{font-size:.92rem;font-weight:700;color:var(--dark)}\r
.role-d{font-size:.77rem;color:var(--gray);margin-top:.15rem}\r
.badge{font-size:.7rem;font-weight:800;color:#fff;background:var(--orange);padding:.28rem .65rem;border-radius:20px;white-space:nowrap}\r
\r
/* ═══ DUAL CTA ════════════════════════════════════════════════════════════ */\r
#cta{padding:5rem 0;background:#fff}\r
.cta-duo{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}\r
.cta-l{background:linear-gradient(135deg,var(--dark) 0%,#0D2147 100%);border-radius:14px;padding:2.5rem;border-top:5px solid var(--blue)}\r
.cta-r{background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 100%);border-radius:14px;padding:2.5rem;border-top:5px solid var(--orange)}\r
.cta-l h3,.cta-r h3{font-size:1.5rem;color:#fff;margin:.3rem 0 1rem;line-height:1.25}\r
.cta-l p,.cta-r p{color:rgba(255,255,255,.65);font-size:.9rem;margin-bottom:1.5rem;line-height:1.7}\r
.cta-pill{margin-top:1.3rem;padding:.75rem 1rem;background:rgba(255,255,255,.07);border-radius:8px;\r
  font-size:.8rem;color:rgba(255,255,255,.65);line-height:1.55;border:1px solid rgba(255,255,255,.1)}\r
\r
/* ═══ CONTACT ══════════════════════════════════════════════════════════════ */\r
/* Google Maps embed */\r
.con-map{display:flex;flex-direction:column;gap:1rem}\r
.con-map-label{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin:0}\r
.con-gmap{\r
  position:relative;width:100%;padding-bottom:62%;\r
  border-radius:12px;overflow:hidden;\r
  box-shadow:0 8px 40px rgba(0,0,0,.5);\r
  border:1px solid rgba(255,255,255,.08)}\r
.con-gmap iframe{\r
  position:absolute;inset:0;width:100%;height:100%;border:0;display:block}\r
\r
/* Overlay map pins */\r
.gmap-pins{position:absolute;inset:0;pointer-events:none;z-index:2}\r
.gmap-pin{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px}\r
.gmap-dot{width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 3px rgba(0,0,0,.3);flex-shrink:0}\r
.gmap-ring{\r
  position:absolute;top:50%;left:50%;\r
  width:12px;height:12px;border-radius:50%;\r
  transform:translate(-50%,-50%);\r
  border:2px solid currentColor;animation:gmap-pulse 2.4s ease-out infinite}\r
.gmap-pin.orange .gmap-dot{background:#faa728}\r
.gmap-pin.orange .gmap-ring{color:#faa728}\r
.gmap-pin.blue   .gmap-dot{background:#6398ff}\r
.gmap-pin.blue   .gmap-ring{color:#6398ff}\r
.gmap-label{\r
  background:rgba(5,15,35,.82);backdrop-filter:blur(4px);\r
  color:#fff;font-size:.6rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;\r
  padding:3px 8px;border-radius:4px;white-space:nowrap;\r
  border:1px solid rgba(255,255,255,.15);margin-top:2px}\r
.gmap-pin.orange .gmap-label{border-color:rgba(250,167,32,.5);color:#faa728}\r
.gmap-pin.blue   .gmap-label{border-color:rgba(99,152,255,.5);color:#6398ff}\r
@keyframes gmap-pulse{\r
  0%{width:12px;height:12px;opacity:.9}\r
  100%{width:44px;height:44px;margin:-16px;opacity:0}}\r
.con-map-legend{display:flex;flex-wrap:wrap;gap:.75rem 1.5rem}\r
.cml-item{display:flex;align-items:center;gap:.5rem;font-size:.75rem;font-weight:600;color:rgba(255,255,255,.6);white-space:nowrap}\r
.cml-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}\r
\r
/* ── Modern form section ─────────────────────────────────────────────── */\r
.contact-form-sec{\r
  padding:6rem 0;\r
  background:linear-gradient(160deg,#070f1e 0%,#0c1e3a 60%,#071628 100%);\r
  position:relative;overflow:hidden}\r
.contact-form-sec::before{\r
  content:'';position:absolute;width:600px;height:600px;border-radius:50%;\r
  background:radial-gradient(circle,rgba(63,108,181,.1),transparent 65%);\r
  left:-150px;bottom:-150px;pointer-events:none}\r
.contact-form-inner{max-width:780px;margin:0 auto;position:relative;z-index:1}\r
.cform-hd{text-align:center;margin-bottom:2rem}\r
.cform-hd h2{font-size:clamp(1.4rem,2.2vw,2rem);color:#fff;margin:.3rem 0 .5rem;font-weight:800;letter-spacing:-.03em}\r
.cform-hd p{color:rgba(255,255,255,.55);font-size:.88rem;line-height:1.65}\r
\r
/* Borderless modern fields */\r
.cform-modern{display:flex;flex-direction:column;gap:.55rem}\r
.cform-modern .frow{display:grid;grid-template-columns:1fr 1fr;gap:.55rem}\r
.cform-modern .fg{display:flex;flex-direction:column;gap:.28rem}\r
.cform-modern .fg label{\r
  font-size:.62rem;font-weight:700;letter-spacing:.09em;\r
  text-transform:uppercase;color:#fff}\r
.cform-modern .fg input,\r
.cform-modern .fg select,\r
.cform-modern .fg textarea{\r
  background:rgba(255,255,255,.07);\r
  border:none;border-bottom:1.5px solid rgba(255,255,255,.12);\r
  border-radius:6px 6px 0 0;\r
  padding:.55rem .75rem;\r
  font-size:.78rem;font-family:var(--font);\r
  color:#fff;outline:none;\r
  transition:background .25s,border-color .25s;\r
  -webkit-appearance:none}\r
.cform-modern .fg input::placeholder,\r
.cform-modern .fg textarea::placeholder{color:rgba(255,255,255,.25)}\r
.cform-modern .fg select option{background:#0c1e3a;color:#fff}\r
.cform-modern .fg input:focus,\r
.cform-modern .fg select:focus,\r
.cform-modern .fg textarea:focus{\r
  background:rgba(255,255,255,.11);\r
  border-bottom-color:var(--orange);\r
  box-shadow:0 4px 20px rgba(250,167,32,.08)}\r
.cform-modern .fg textarea{resize:vertical;min-height:70px}\r
.cform-modern .fsub{\r
  width:100%;padding:.72rem;margin-top:.35rem;\r
  background:linear-gradient(135deg,var(--orange),#e8950a);\r
  color:#fff;border:none;border-radius:8px;\r
  font-size:.85rem;font-weight:700;letter-spacing:.01em;\r
  cursor:pointer;transition:all .25s;font-family:var(--font);\r
  box-shadow:0 4px 24px rgba(250,167,32,.3)}\r
.cform-modern .fsub:hover{\r
  background:linear-gradient(135deg,#ffb830,var(--orange));\r
  transform:translateY(-2px);box-shadow:0 8px 32px rgba(250,167,32,.45)}\r
.cform-modern .fnote{\r
  font-size:.62rem;color:rgba(255,255,255,.3);\r
  text-align:center;margin-top:.2rem;line-height:1.6}\r
\r
/* ── Contact redesign — full-bleed map with content overlay ─────────────── */\r
#contact{padding:0;background:none;position:relative;overflow:hidden}\r
#contact::before{display:none}\r
\r
.con-hero{position:relative;height:580px;overflow:hidden}\r
\r
/* Location image fills entire section */\r
.con-map-bg{position:absolute;inset:0;z-index:0;overflow:hidden}\r
.con-loc-img{width:100%;height:100%;object-fit:cover;object-position:center 90%;display:block}\r
.con-map-overlay{\r
  position:absolute;inset:0;\r
  background:linear-gradient(\r
    105deg,\r
    rgba(2,10,28,.82) 0%,\r
    rgba(2,10,28,.55) 45%,\r
    rgba(2,10,28,.15) 75%,\r
    transparent 100%);\r
  pointer-events:none}\r
\r
/* Content sits over the map */\r
.con-map-content{\r
  position:relative;z-index:2;\r
  height:100%;display:flex;\r
  align-items:center;justify-content:space-between;gap:3rem}\r
\r
/* Left info panel */\r
.con-panel{\r
  display:flex;flex-direction:column;gap:.75rem;\r
  max-width:420px}\r
.con-panel h2{\r
  font-size:clamp(1.8rem,3vw,2.6rem);\r
  color:#fff;margin:.4rem 0 .6rem;\r
  font-weight:800;line-height:1.15;letter-spacing:-.03em}\r
.con-panel>p{font-size:.88rem;color:rgba(255,255,255,.65);line-height:1.75;margin:0}\r
.con-details{display:flex;flex-direction:column;gap:.65rem;margin-top:.5rem}\r
.con-det{display:flex;align-items:center;gap:.75rem;font-size:.84rem;color:rgba(255,255,255,.75)}\r
.con-icon{\r
  width:34px;height:34px;border-radius:50%;\r
  background:rgba(250,167,32,.15);border:1px solid rgba(250,167,32,.3);\r
  display:flex;align-items:center;justify-content:center;\r
  font-size:.9rem;flex-shrink:0}\r
\r
/* HQ address simple text */\r
.con-hq-text{\r
  position:absolute;bottom:28px;right:0;\r
  display:flex;flex-direction:column;gap:4px;z-index:3}\r
.con-hq-label{\r
  font-size:.7rem;font-weight:800;letter-spacing:.08em;\r
  text-transform:uppercase;color:var(--orange)}\r
.con-hq-addr{font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.7}\r
\r
@media(max-width:768px){\r
  .con-hero{height:auto;min-height:560px}\r
  .con-map-content{flex-direction:column;align-items:flex-start;padding:3rem 0;gap:2rem}\r
  .con-map-overlay{background:rgba(5,14,32,.85)}\r
  .con-hq-text{position:static;margin-top:1rem}\r
  .con-panel{max-width:100%}\r
}\r
.cform{background:#fff;border-radius:14px;padding:1.4rem}\r
.cform h3{font-size:.9rem;font-weight:700;color:var(--dark);margin-bottom:.85rem;\r
  padding-bottom:.5rem;border-bottom:1px solid var(--border)}\r
.frow{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}\r
.fg{display:flex;flex-direction:column;gap:.22rem;margin-bottom:.5rem}\r
.fg label{font-size:.68rem;font-weight:700;color:var(--dark2)}\r
.fg input,.fg select,.fg textarea{padding:.42rem .65rem;border:1.5px solid var(--border);border-radius:6px;\r
  font-size:.78rem;font-family:var(--font);color:var(--dark);background:#fff;outline:none;transition:.2s}\r
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(63,108,181,.1)}\r
.fg textarea{resize:vertical;min-height:58px}\r
.fsub{width:100%;padding:.55rem;background:var(--blue);color:#fff;border:none;border-radius:7px;\r
  font-size:.8rem;font-weight:700;cursor:pointer;transition:.2s;font-family:var(--font);margin-top:.15rem}\r
.fsub:hover{background:var(--blue2);transform:translateY(-1px)}\r
.fnote{font-size:.64rem;color:var(--lgray);margin-top:.4rem;text-align:center}\r
\r
/* ═══ FOOTER ══════════════════════════════════════════════════════════════ */\r
footer{background:#000;border-top:3px solid var(--orange)}\r
\r
/* Main row: logo | nav | contact */\r
.ft-main{\r
  display:flex;align-items:flex-start;gap:2.5rem;\r
  padding:2rem 0 1.8rem;border-bottom:1px solid rgba(255,255,255,.1)}\r
\r
/* Logo + tagline */\r
.ft-left{display:flex;flex-direction:column;gap:.75rem;flex-shrink:0;width:230px}\r
.ft-logo-link{\r
  display:block;line-height:0;\r
  overflow:hidden;\r
  width:225px;height:110px;\r
  flex-shrink:0}\r
.ft-logo-img{\r
  width:205px;height:auto;display:block;\r
  margin-top:-45px;margin-left:8px;\r
  filter:brightness(0) invert(1);\r
  transition:opacity .25s}\r
.ft-logo-img:hover{opacity:.85}\r
.ft-tagline{font-size:.7rem;color:rgba(255,255,255,.45);line-height:1.6;margin:0}\r
\r
/* Nav columns */\r
.ft-nav{display:flex;gap:2rem;flex:1;justify-content:center}\r
.ft-col{display:flex;flex-direction:column;gap:.28rem}\r
.ft-col-head{\r
  font-size:.75rem;font-weight:800;letter-spacing:.1em;\r
  text-transform:uppercase;color:#fff;\r
  margin-bottom:.6rem;padding-bottom:.35rem;\r
  border-bottom:1.5px solid var(--orange);\r
  display:block;width:fit-content}\r
.ft-col a{font-size:.88rem;color:rgba(255,255,255,.45);text-decoration:none;transition:color .2s;line-height:1.6}\r
.ft-col a:hover{color:var(--orange)}\r
\r
/* Right contact + CTA */\r
.ft-right{display:flex;flex-direction:column;align-items:flex-end;gap:.55rem;flex-shrink:0}\r
.ft-email{font-size:.9rem;font-weight:700;color:#6398ff;text-decoration:none}\r
.ft-email:hover{color:var(--orange)}\r
.ft-phone{font-size:.85rem;color:rgba(255,255,255,.45);text-decoration:none}\r
.ft-phone:hover{color:#fff}\r
.ft-cta{font-size:.82rem;padding:.45rem 1rem;margin-top:.4rem;white-space:nowrap}\r
\r
/* Bottom bar */\r
.ft-bar{\r
  display:flex;justify-content:space-between;align-items:center;\r
  padding:.8rem 0;flex-wrap:wrap;gap:.4rem}\r
.ft-bar p{font-size:.78rem;color:rgba(255,255,255,.3);margin:0}\r
.ft-bar-links{display:flex;gap:1.2rem}\r
.ft-bar-links a{font-size:.78rem;color:rgba(255,255,255,.3);text-decoration:none;transition:color .2s}\r
.ft-bar-links a:hover{color:#fff}\r
\r
/* ═══ EXTRAS ══════════════════════════════════════════════════════════════ */\r
#totop{position:fixed;bottom:1.8rem;right:1.8rem;width:42px;height:42px;background:var(--blue);\r
  color:#fff;border:none;border-radius:50%;font-size:1.2rem;cursor:pointer;\r
  opacity:0;transform:scale(.7);transition:.3s;z-index:900;box-shadow:0 4px 16px rgba(63,108,181,.4)}\r
#totop.on{opacity:1;transform:scale(1)}\r
#totop:hover{background:var(--orange)}\r
\r
#toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(80px);\r
  background:var(--dark);color:#fff;padding:.9rem 1.6rem;border-radius:8px;font-size:.88rem;\r
  font-weight:600;opacity:0;transition:.4s;z-index:9999;border-bottom:3px solid var(--orange);\r
  box-shadow:0 8px 24px rgba(0,0,0,.3);white-space:nowrap}\r
#toast.on{opacity:1;transform:translateX(-50%) translateY(0)}\r
\r
\r
/* ═══ AI SHOWCASE ══════════════════════════════════════════════════════════ */\r
#showcase{position:relative;min-height:92vh;overflow:hidden;background:#0a1835;\r
  display:flex;align-items:center;justify-content:center}\r
.sc-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.64;z-index:0}\r
.sc-overlay{position:absolute;inset:0;z-index:1;\r
  background:linear-gradient(to bottom,rgba(10,24,58,.52) 0%,rgba(10,24,58,.08) 28%,rgba(10,24,58,.08) 68%,rgba(10,24,58,.65) 100%)}\r
.sc-content{position:relative;z-index:2;text-align:center;max-width:860px;padding:0 2rem}\r
.sc-label{display:inline-flex;align-items:center;gap:.6rem;font-size:.72rem;font-weight:800;\r
  letter-spacing:.18em;text-transform:uppercase;color:#7EC8F8;margin-bottom:1.6rem}\r
.sc-label-line{width:32px;height:1.5px;background:#7EC8F8;opacity:.6}\r
.sc-h1{font-size:clamp(2.2rem,5.5vw,4.2rem);font-weight:900;color:#fff;line-height:1.05;\r
  margin-bottom:1.6rem;letter-spacing:-.02em}\r
.sc-h1 em{font-style:normal;\r
  background:linear-gradient(90deg,#3f6cb5,#2d5294,#3f6cb5);background-size:200%;\r
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;\r
  animation:shimmer 3s linear infinite}\r
@keyframes shimmer{0%{background-position:0%}100%{background-position:200%}}\r
.sc-sub{font-size:1.1rem;color:rgba(255,255,255,.65);line-height:1.75;max-width:640px;\r
  margin:0 auto 2.6rem}\r
.sc-caps{display:flex;flex-wrap:wrap;justify-content:center;gap:.65rem;margin-bottom:2.8rem}\r
.sc-cap{padding:.42rem 1rem;border:1px solid rgba(63,108,181,.45);border-radius:30px;\r
  font-size:.75rem;font-weight:700;color:rgba(255,255,255,.75);background:rgba(63,108,181,.1);\r
  backdrop-filter:blur(6px);letter-spacing:.04em}\r
.sc-stats{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;margin-bottom:2.8rem}\r
.sc-stat{text-align:center}\r
.sc-stat-val{font-size:2.4rem;font-weight:900;color:#fff;line-height:1;\r
  background:linear-gradient(135deg,#fff,#7EC8F8);-webkit-background-clip:text;\r
  -webkit-text-fill-color:transparent;background-clip:text}\r
.sc-stat-lbl{font-size:.68rem;color:rgba(255,255,255,.45);letter-spacing:.08em;\r
  text-transform:uppercase;margin-top:.3rem;font-weight:600}\r
.sc-cta{display:inline-flex;align-items:center;gap:.7rem;background:linear-gradient(135deg,#3f6cb5,#2d5294);\r
  color:#fff;font-weight:800;font-size:.92rem;padding:.85rem 2rem;border-radius:50px;\r
  text-decoration:none;box-shadow:0 8px 32px rgba(63,108,181,.4);transition:.25s;letter-spacing:.02em}\r
.sc-cta:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(63,108,181,.55)}\r
.sc-cta-arrow{font-size:1.1rem;transition:transform .25s}\r
.sc-cta:hover .sc-cta-arrow{transform:translateX(5px)}\r
/* cinematic sequential reveal animation */\r
@keyframes scReveal{\r
  from{opacity:0;transform:translateY(38px);filter:blur(4px)}\r
  to{opacity:1;transform:none;filter:none}\r
}\r
.sc-seq{opacity:0}\r
#showcase.sc-go .sc-seq{animation:scReveal .75s cubic-bezier(.22,.61,.36,1) forwards}\r
#showcase.sc-go .sc-d1{animation-delay:.1s}\r
#showcase.sc-go .sc-d2{animation-delay:.5s}\r
#showcase.sc-go .sc-d3{animation-delay:.95s}\r
#showcase.sc-go .sc-d4{animation-delay:1.4s}\r
#showcase.sc-go .sc-d5{animation-delay:1.8s}\r
#showcase.sc-go .sc-d6{animation-delay:2.2s}\r
#showcase.sc-go .sc-d7{animation-delay:2.65s}\r
#showcase.sc-go .sc-d8{animation-delay:3.1s}\r
@media(max-width:768px){\r
  .sc-stats{gap:1.5rem}\r
  .sc-stat-val{font-size:1.8rem}\r
}\r
/* ═══ RESPONSIVE ══════════════════════════════════════════════════════════ */\r
@media(max-width:1024px){\r
  .hero-inner{flex-direction:column;gap:2rem}\r
\r
  .why-grid{grid-template-columns:repeat(2,1fr)}\r
  .ind-grid{grid-template-columns:repeat(2,1fr)}\r
  .svc-grid{grid-template-columns:repeat(2,1fr)}\r
  .met-grid{grid-template-columns:repeat(3,1fr)}\r
  .ft-main{flex-wrap:wrap;gap:1.5rem}\r
  .ft-nav{flex-wrap:wrap;gap:1.2rem;justify-content:flex-start}\r
  .ft-right{align-items:flex-start}\r
}\r
@media(max-width:768px){\r
  .container{padding:0 24px}\r
  .reel-dots{bottom:16px;right:24px;gap:5px}\r
  .reel-dot{width:5px;height:5px}\r
  .reel-dot.reel-dot-active{width:16px}\r
  .nav-links,.nav-right .btn-outline-blue,.nav-right .btn-orange{display:none}\r
  .ham{display:flex}\r
  .mob-overlay{display:block;opacity:0;pointer-events:none;transition:opacity .35s}\r
  .mob-overlay.open{opacity:1;pointer-events:auto}\r
  .svc-grid{grid-template-columns:1fr}\r
  .fde-grid,.car-grid,.con-grid,.cta-duo{grid-template-columns:1fr}\r
  .cs-grid,.ins-grid{grid-template-columns:1fr}\r
  .stat-cards{grid-template-columns:1fr 1fr}\r
  .hero-stats{grid-template-columns:repeat(2,1fr);max-width:100%}\r
  /* ── Hero mobile ── */\r
  .hero-reel{min-height:100svh}\r
  .reel-slide{align-items:flex-start;padding-top:120px}\r
  .reel-inner{\r
    text-align:center;\r
    max-width:100%;\r
    padding:0 1.5rem}\r
  .reel-eyebrow{\r
    font-size:clamp(.88rem,4vw,1.3rem);\r
    white-space:normal;letter-spacing:.05em;\r
    justify-content:center;width:100%}\r
  .reel-slide[data-idx="2"] .reel-eyebrow,\r
  .reel-slide[data-idx="3"] .reel-eyebrow{\r
    font-size:clamp(.72rem,3.2vw,1rem)}\r
  .reel-slide h1{\r
    font-size:clamp(1.3rem,5.5vw,2rem);\r
    text-align:center}\r
  .reel-slide[data-idx="0"] h1{font-size:clamp(1.2rem,5.2vw,1.8rem)}\r
  .reel-nowrap{white-space:normal}\r
  .reel-btns{\r
    bottom:4.5rem;left:0;right:0;\r
    justify-content:center;\r
    flex-wrap:wrap;gap:.6rem;\r
    padding:0 1.5rem}\r
  .btn-hero-primary,.btn-outline-light{\r
    font-size:clamp(.78rem,3.5vw,.9rem);\r
    padding:.6rem 1.4rem;\r
    white-space:nowrap}\r
  .reel-dots{bottom:1.5rem;right:50%;transform:translateX(50%)}\r
}\r
@media(max-width:480px){\r
  .met-grid{grid-template-columns:repeat(2,1fr)}\r
  .ind-grid{grid-template-columns:1fr 1fr}\r
  .frow{grid-template-columns:1fr}\r
  .ft-logo-img{width:160px}\r
  .ft-left{width:160px}\r
  .ft-nav{gap:.8rem}\r
  .ft-bar{flex-direction:column;align-items:flex-start;gap:.4rem}\r
}\r
`,t=`\r
\r
<!-- ══ NAVBAR ════════════════════════════════════════════════════════════ -->\r
<nav id="nav">\r
  <div class="container nav-wrap">\r
    <a href="#home"><img src="/images/logo.png" alt="Innovsol" class="nav-logo-img"/></a>\r
    <div class="nav-links">\r
      <a href="#home">Home</a>\r
      <a href="#services">Services</a>\r
      <a href="#industries">Industries</a>\r
      <a href="#casestudies">Case Studies</a>\r
      <a href="#fde">FDE Team</a>\r
      <a href="#insights">Insights</a>\r
      <a href="#careers">Careers</a>\r
    </div>\r
    <div class="nav-right">\r
      <a href="#contact-form" class="btn btn-outline-blue">Contact Us</a>\r
      <a href="#contact-form" class="btn btn-orange">Book a Strategy Call</a>\r
      <button class="ham" id="ham" onclick="toggleMob()"><span></span><span></span><span></span></button>\r
    </div>\r
  </div>\r
  <div class="mob-nav" id="mobNav">\r
    <button class="mob-close" onclick="toggleMob()" aria-label="Close menu">&#x2715;</button>\r
    <a href="#home" onclick="toggleMob()">Home</a>\r
    <a href="#services" onclick="toggleMob()">Services</a>\r
    <a href="#industries" onclick="toggleMob()">Industries</a>\r
    <a href="#casestudies" onclick="toggleMob()">Case Studies</a>\r
    <a href="#fde" onclick="toggleMob()">FDE Team</a>\r
    <a href="#insights" onclick="toggleMob()">Insights</a>\r
    <a href="#careers" onclick="toggleMob()">Careers</a>\r
    <a href="#contact-form" onclick="toggleMob()">Contact Us</a>\r
    <a href="#contact-form" class="btn btn-orange" style="margin-top:1rem;justify-content:center" onclick="toggleMob()">Book a Strategy Call</a>\r
  </div>\r
  <div class="mob-overlay" id="mobOverlay"></div>\r
</nav>\r
\r
<!-- ══ HERO REEL — 4-slide enterprise video carousel ══════════════════════ -->\r
<section id="home" class="hero-reel">\r
\r
  <!-- Videos stacked, only active one visible -->\r
  <div class="reel-bg">\r
    <video class="reel-video reel-active" autoplay muted playsinline preload="auto">\r
      <source src="/OUR%20MISSION.mp4" type="video/mp4"/>\r
    </video>\r
    <video class="reel-video" muted playsinline preload="metadata">\r
      <source src="/Enterprise%20AI.mp4" type="video/mp4"/>\r
    </video>\r
    <video class="reel-video" muted playsinline preload="metadata">\r
      <source src="/Forward%20Deployed%20Engineering.mp4" type="video/mp4"/>\r
    </video>\r
    <video class="reel-video" muted playsinline preload="metadata">\r
      <source src="/Building%20Enterprise%20AI%20Infrastructure.mp4" type="video/mp4"/>\r
    </video>\r
  </div>\r
\r
  <!-- Overlay -->\r
  <div class="hero-overlay"></div>\r
\r
  <!-- Slide dots -->\r
  <div class="reel-dots">\r
    <button class="reel-dot reel-dot-active" data-idx="0" aria-label="Slide 1"></button>\r
    <button class="reel-dot" data-idx="1" aria-label="Slide 2"></button>\r
    <button class="reel-dot" data-idx="2" aria-label="Slide 3"></button>\r
    <button class="reel-dot" data-idx="3" aria-label="Slide 4"></button>\r
  </div>\r
\r
  <!-- Slide content -->\r
  <div class="reel-slides">\r
\r
    <!-- 01 — Our Mission -->\r
    <div class="reel-slide reel-active" data-idx="0">\r
      <div class="container">\r
        <div class="reel-inner">\r
          <div class="reel-eyebrow reel-eyebrow-nodash">Our Mission</div>\r
          <h1>Elevate enterprise productivity<br><span class="reel-nowrap"><em>&mdash;&nbsp;measurably&nbsp;&mdash;</em> by embedding AI</span><br>where it matters most.</h1>\r
          <div class="reel-btns">\r
            <a href="#contact-form" class="btn btn-orange btn-hero-primary">Book a Strategy Call &rarr;</a>\r
            <a href="#services" class="btn btn-outline-light">Explore AI Solutions</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 02 — Enterprise AI -->\r
    <div class="reel-slide" data-idx="1">\r
      <div class="container">\r
        <div class="reel-inner">\r
          <div class="reel-eyebrow">Enterprise AI</div>\r
          <h1>Enterprise AI.<br><em>Deployed,</em> Not Just Discussed.</h1>\r
          <p class="reel-sub">We help enterprises build, deploy, and scale production-grade AI systems through embedded Forward Deployed Engineering teams — measurably improving productivity, reducing costs, and creating competitive advantage.</p>\r
          <div class="reel-btns">\r
            <a href="#services" class="btn btn-orange btn-hero-primary">Explore AI Solutions &rarr;</a>\r
            <a href="#casestudies" class="btn btn-outline-light">View Case Studies</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 03 — Forward Deployed Engineering -->\r
    <div class="reel-slide" data-idx="2">\r
      <div class="container">\r
        <div class="reel-inner">\r
          <div class="reel-eyebrow">Forward Deployed Engineering</div>\r
          <h1>Senior AI engineers embedded inside<br>your team — shipping production AI<br>in under <em>12 weeks, guaranteed.</em></h1>\r
          <div class="reel-btns">\r
            <a href="#fde" class="btn btn-orange btn-hero-primary">Explore FDE Models &rarr;</a>\r
            <a href="#careers" class="btn btn-outline-light">Join the FDE Team</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 04 — Enterprise AI Infrastructure -->\r
    <div class="reel-slide" data-idx="3">\r
      <div class="container">\r
        <div class="reel-inner">\r
          <div class="reel-eyebrow">Building Enterprise AI Infrastructure</div>\r
          <h1>Cloud-native AI platforms, data pipelines,<br>AIOps, and governance frameworks<br>built for <em>production scale.</em></h1>\r
          <div class="reel-btns">\r
            <a href="#contact-form" class="btn btn-orange btn-hero-primary">Book a Strategy Call &rarr;</a>\r
            <a href="#services" class="btn btn-outline-light">Explore Services</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div><!-- /reel-slides -->\r
\r
\r
</section>\r
\r
<!-- ══ LOGO STRIP ═════════════════════════════════════════════════════════ -->\r
<section id="strip">\r
  <div class="strip-label">Trusted by forward-thinking enterprises across 10+ industries</div>\r
  <div class="marq-wrap">\r
    <div class="marq">\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="9" width="14" height="9" rx="1"/><path d="M1 9l9-7 9 7"/><rect x="7" y="13" width="2.5" height="5"/><rect x="10.5" y="13" width="2.5" height="5"/></svg>Banking Group</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/></svg>Global Manufacturer</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3v14M3 10h14"/><circle cx="10" cy="10" r="7"/></svg>Healthcare Enterprise</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2h8l2 4H4L6 2z"/><rect x="3" y="6" width="14" height="12" rx="1"/><path d="M8 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>Retail Leader</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="2"/><path d="M5.5 5.5a6.5 6.5 0 0 0 0 9M14.5 5.5a6.5 6.5 0 0 1 0 9M3 3a10 10 0 0 0 0 14M17 3a10 10 0 0 1 0 14"/></svg>Telecom Corp</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 2l7 3.5V10c0 4-3 6.5-7 8-4-1.5-7-4-7-8V5.5L10 2z"/></svg>Insurance Group</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-2 2-3 4.5-3 7s1 5 3 7M10 3c2 2 3 4.5 3 7s-1 5-3 7"/></svg>GCC Services</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="16" height="10" rx="1.5"/><path d="M6 9h2.5M6 12h5M13 9h1"/></svg>Tech Unicorn</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2L5 11h5l-1 7 6-9h-5l1-7z"/></svg>Energy Enterprise</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="16" height="11" rx="2"/><path d="M2 9h16M6 14h2M10 14h4"/></svg>FinTech Scale-up</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="9" width="14" height="9" rx="1"/><path d="M1 9l9-7 9 7"/><rect x="7" y="13" width="2.5" height="5"/><rect x="10.5" y="13" width="2.5" height="5"/></svg>Banking Group</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/></svg>Global Manufacturer</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3v14M3 10h14"/><circle cx="10" cy="10" r="7"/></svg>Healthcare Enterprise</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2h8l2 4H4L6 2z"/><rect x="3" y="6" width="14" height="12" rx="1"/><path d="M8 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>Retail Leader</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="2"/><path d="M5.5 5.5a6.5 6.5 0 0 0 0 9M14.5 5.5a6.5 6.5 0 0 1 0 9M3 3a10 10 0 0 0 0 14M17 3a10 10 0 0 1 0 14"/></svg>Telecom Corp</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 2l7 3.5V10c0 4-3 6.5-7 8-4-1.5-7-4-7-8V5.5L10 2z"/></svg>Insurance Group</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c-2 2-3 4.5-3 7s1 5 3 7M10 3c2 2 3 4.5 3 7s-1 5-3 7"/></svg>GCC Services</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="16" height="10" rx="1.5"/><path d="M6 9h2.5M6 12h5M13 9h1"/></svg>Tech Unicorn</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2L5 11h5l-1 7 6-9h-5l1-7z"/></svg>Energy Enterprise</div>\r
      <div class="logo-chip"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="16" height="11" rx="2"/><path d="M2 9h16M6 14h2M10 14h4"/></svg>FinTech Scale-up</div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ SERVICES ═══════════════════════════════════════════════════════════ -->\r
<section id="services">\r
  <div class="container">\r
    <div class="sec-hd fi">\r
      <div class="section-label">Our Services</div>\r
      <h2>Full-Stack AI Services for the Enterprise</h2>\r
      <p>From strategy through engineering to scale — every capability modern enterprises need to operationalise AI.</p>\r
    </div>\r
    <div class="svc-grid">\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=400&fit=crop&auto=format&q=85" alt="AI Strategy team brainstorming" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge">2 weeks</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">01</div>\r
          <div class="svc-title2">AI Strategy &amp; Transformation</div>\r
          <div class="svc-desc2">12-month AI roadmap, maturity assessment, ROI models and a board-ready business case — delivered in as little as 2 weeks. We identify your highest-value AI opportunities and build a phased, costed plan.</div>\r
          <a href="#contact" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700&h=400&fit=crop&auto=format&q=85" alt="AI product engineering and UX design" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge">8–16 weeks</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">02</div>\r
          <div class="svc-title2">AI Product Engineering</div>\r
          <div class="svc-desc2">End-to-end AI product builds — UX design, backend AI services, production deployment and post-launch optimisation in 8–16 weeks. We build AI-native features your customers will actually adopt.</div>\r
          <a href="#contact" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=400&fit=crop&auto=format&q=85" alt="AI automation robot" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge" style="background:#3f6cb5">Autonomous</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">03</div>\r
          <div class="svc-title2">AI Agents &amp; Agentic Automation</div>\r
          <div class="svc-desc2">Autonomous agents that execute complex multi-step workflows across your enterprise without constant human oversight. We design and deploy agents that work reliably in production at scale.</div>\r
          <a href="#contact" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&h=400&fit=crop&auto=format&q=85" alt="Generative AI language model" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge" style="background:#3f6cb5">RAG-First</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">04</div>\r
          <div class="svc-title2">Generative AI Solutions</div>\r
          <div class="svc-desc2">Custom LLM applications tailored to your domain: document intelligence, knowledge assistants, AI-powered search, and enterprise copilots. RAG-first architecture, security-hardened, deeply integrated with your workflows.</div>\r
          <a href="#contact" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&h=400&fit=crop&auto=format&q=90" alt="Next gen enterprise infrastructure" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge" style="background:linear-gradient(135deg,#3f6cb5,#0DA868)">Next-Gen</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">05</div>\r
          <div class="svc-title2">Enterprise AI Infrastructure</div>\r
          <div class="svc-desc2">Cloud-native AI platforms, edge computing, scalable data pipelines, and modern enterprise tech stacks — designed for speed, resilience, and the demands of next-generation AI workloads.</div>\r
          <a href="#contact" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
\r
      <div class="svc-card fi">\r
<div class="svc-illus">\r
          <img class="svc-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=400&fit=crop&auto=format&q=85" alt="Forward deployed engineering team" loading="lazy">\r
          <div class="svc-img-overlay"></div>\r
          <span class="svc-badge">&lt;12 weeks</span>\r
        </div>\r
        <div class="svc-body">\r
          <div class="svc-num2">06</div>\r
          <div class="svc-title2">Forward Deployed Engineering</div>\r
          <div class="svc-desc2">Our engineers embed inside your team, work in your systems, and ship production-ready AI in under 12 weeks. Not strategy decks — engineers inside your organisation building what works for your reality.</div>\r
          <a href="#fde" class="svc-link">Learn more <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#3f6cb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ WHY INNOVSOL ════════════════════════════════════════════════════════ -->\r
<section id="why">\r
  <div class="container">\r
    <div class="sec-hd fi">\r
      <div class="section-label">The Innovsol Difference</div>\r
      <h2>We Deploy AI. We Don't Just Recommend It.</h2>\r
      <p>Enterprise AI transformation needs engineering muscle, domain knowledge, and a model built for production — not advisory decks.</p>\r
    </div>\r
    <div class="why-grid">\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=400&fit=crop&auto=format&q=85" alt="Business growth and analytics charts" loading="lazy">\r
          <span class="why-img-tag">Business-First</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>\r
          <h3>Business-First AI</h3>\r
          <p>Every initiative anchored in cost reduction, revenue growth, or efficiency. We never build AI for its own sake — every line of code connects to a business result.</p>\r
        </div>\r
      </div>\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&h=400&fit=crop&auto=format&q=85" alt="Fast delivery speed to production" loading="lazy">\r
          <span class="why-img-tag">12-Week Delivery</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>\r
          <h3>Faster Time to Production</h3>\r
          <p>Idea to production in under 12 weeks. No long consulting engagements. The FDE model eliminates the handoff gap that kills most enterprise AI initiatives.</p>\r
        </div>\r
      </div>\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&h=400&fit=crop&auto=format&q=85" alt="Diverse engineering team collaborating" loading="lazy">\r
          <span class="why-img-tag">Embedded Teams</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>\r
          <h3>Embedded Engineering Teams</h3>\r
          <p>FDE engineers work inside your organisation — in your codebase, your sprints, your systems. They build AI that fits your reality, not a generic template.</p>\r
        </div>\r
      </div>\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&h=400&fit=crop&auto=format&q=85" alt="Cybersecurity and enterprise protection" loading="lazy">\r
          <span class="why-img-tag">Enterprise Security</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>\r
          <h3>Enterprise-Grade Security</h3>\r
          <p>Data isolation, RBAC, audit logging, and responsible AI governance built in from day one — not bolted on after the fact. We design all AI with compliance at the core.</p>\r
        </div>\r
      </div>\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop&auto=format&q=85" alt="Analytics dashboard showing outcomes" loading="lazy">\r
          <span class="why-img-tag">Measurable ROI</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div>\r
          <h3>Outcome-Driven Delivery</h3>\r
          <p>We define measurable success criteria before we start and report against them throughout. Results are our responsibility — not just yours.</p>\r
        </div>\r
      </div>\r
      <div class="why-card fi">\r
        <div class="why-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=400&fit=crop&auto=format&q=85" alt="Global domain expertise across industries" loading="lazy">\r
          <span class="why-img-tag">10+ Industries</span>\r
        </div>\r
        <div class="why-body">\r
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>\r
          <h3>Deep Domain Expertise</h3>\r
          <p>Pattern recognition from real deployments across 10+ industries. Banking, Healthcare, Manufacturing, Retail, Insurance — we understand your world before we build in it.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ METRICS ════════════════════════════════════════════════════════════ -->\r
<section id="metrics">\r
  <div class="container">\r
    <div class="met-grid">\r
\r
      <div class="met-cell fi">\r
        <div class="met-trend"><svg viewBox="0 0 12 12" fill="none"><path d="M2 9L6 4l4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Trending Up</div>\r
        <span class="mn" data-count="40" data-sfx="%">0%</span>\r
        <div class="ml">Faster Operations</div>\r
        <div class="met-bar"><div class="met-fill" style="--w:40%"></div></div>\r
      </div>\r
\r
      <div class="met-cell fi">\r
        <div class="met-trend"><svg viewBox="0 0 12 12" fill="none"><path d="M2 9L6 4l4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Trending Up</div>\r
        <span class="mn" data-count="60" data-sfx="%">0%</span>\r
        <div class="ml">Reduction in Manual Work</div>\r
        <div class="met-bar"><div class="met-fill" style="--w:60%"></div></div>\r
      </div>\r
\r
      <div class="met-cell fi">\r
        <div class="met-trend"><svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M6 4v2l1.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Active</div>\r
        <span class="mn" data-count="10" data-sfx="+">0+</span>\r
        <div class="ml">Industries Served</div>\r
        <div class="met-bar"><div class="met-fill" style="--w:75%"></div></div>\r
      </div>\r
\r
      <div class="met-cell fi">\r
        <div class="met-trend"><svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="6" r="1.5" fill="currentColor"/></svg> Always On</div>\r
        <span class="mn" data-sfx="×7" data-static="24">24×7</span>\r
        <div class="ml">AI-Powered Workflows</div>\r
        <div class="met-bar"><div class="met-fill" style="--w:100%"></div></div>\r
      </div>\r
\r
      <div class="met-cell fi">\r
        <div class="met-trend"><svg viewBox="0 0 12 12" fill="none"><path d="M2 9L6 4l4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Fast Track</div>\r
        <span class="mn" data-count="12" data-pfx="&lt;" data-sfx=" wk">&lt;12 wk</span>\r
        <div class="ml">Idea to Production</div>\r
        <div class="met-bar"><div class="met-fill" style="--w:85%"></div></div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ INDUSTRIES ═════════════════════════════════════════════════════════ -->\r
<section id="industries">\r
  <div class="container">\r
    <div class="sec-hd fi">\r
      <div class="section-label">10+ Industries</div>\r
      <h2>AI Built for Your Industry —<br>Not Adapted From Someone Else's</h2>\r
      <p>We bring pattern recognition from real deployments across every major vertical. We understand your world before we build in it.</p>\r
    </div>\r
    <div class="ind-grid">\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&fit=crop&auto=format&q=85" alt="Banking and financial services AI" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M1 10l11-8 11 8"/><rect x="8" y="14" width="3" height="7"/><rect x="13" y="14" width="3" height="7"/></svg></div>\r
          <h3>Banking &amp; Financial Services</h3>\r
          <p>Credit risk AI · Fraud detection · Regulatory automation · Wealth copilots · Intelligent onboarding</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=360&fit=crop&auto=format&q=85" alt="Manufacturing operations and robotics" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg></div>\r
          <h3>Manufacturing &amp; Operations</h3>\r
          <p>Predictive maintenance · Quality inspection AI · Supply chain intelligence · Production optimisation</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=360&fit=crop&auto=format&q=85" alt="Healthcare and life sciences technology" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg></div>\r
          <h3>Healthcare &amp; Life Sciences</h3>\r
          <p>Clinical documentation AI · Patient flow · Medical imaging analysis · Prior authorisation automation</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=360&fit=crop&auto=format&q=85" alt="Retail and e-commerce shopping" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>\r
          <h3>Retail &amp; E-Commerce</h3>\r
          <p>Personalisation engines · Demand forecasting · Conversational commerce · Dynamic pricing AI</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=360&fit=crop&auto=format&q=85" alt="Telecom and media network technology" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/></svg></div>\r
          <h3>Telecom &amp; Media</h3>\r
          <p>Network operations AI · Churn prediction · AI customer care · Revenue assurance automation</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=360&fit=crop&auto=format&q=85" alt="Insurance risk and protection" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>\r
          <h3>Insurance</h3>\r
          <p>Claims automation · AI underwriting support · Fraud intelligence · Customer service AI</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=360&fit=crop&auto=format&q=85" alt="Global shared services and GCC office" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>\r
          <h3>GCCs &amp; Shared Services</h3>\r
          <p>Intelligent document processing · AI-augmented F&amp;A · Agentic back-office automation</p>\r
        </div>\r
      </div>\r
      <div class="ind-card fi">\r
        <div class="ind-img-wrap">\r
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=360&fit=crop&auto=format&q=85" alt="High-growth startup innovation team" loading="lazy">\r
        </div>\r
        <div class="ind-body">\r
          <div class="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C12 2 19 6 19 13l-4 5H9l-4-5c0-7 7-11 7-11z"/><circle cx="12" cy="11" r="2.5"/><path d="M9 18l-2 4M15 18l2 4"/></svg></div>\r
          <h3>High-Growth Startups</h3>\r
          <p>AI product features · LLM integration · AI-native architecture · Growth AI at startup pace</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ ENGAGEMENT ══════════════════════════════════════════════════════════ -->\r
<!-- Scroll driver: anchor here so nav link scrolls to the very top of the driver -->\r
<div class="eng-scroll-driver" id="engagement">\r
<section class="eng-section">\r
  <div class="container">\r
    <div class="eng-wrapper">\r
\r
      <!-- ── Centred header ─────────────────────────────────────────────── -->\r
      <div class="eng-header">\r
        <div class="section-label">Our Engagement Model</div>\r
      </div>\r
\r
      <!-- ── Phase selector ────────────────────────────────────────────── -->\r
      <nav class="eng-steplist">\r
        <a class="eng-steplbl active" data-phase="0">Discover</a>\r
        <a class="eng-steplbl" data-phase="1">Design</a>\r
        <a class="eng-steplbl" data-phase="2">Deploy</a>\r
        <a class="eng-steplbl" data-phase="3">Scale</a>\r
      </nav>\r
\r
      <!-- ── Stage: cards absolutely stacked, JS drives which is visible ── -->\r
      <div class="eng-stage">\r
\r
        <div class="eng-card eng-active" data-idx="0">\r
          <div class="eng-ghost-num">01</div>\r
          <div class="eng-card-body">\r
            <div class="eng-card-tag">Week 1 – 2</div>\r
            <h3 class="eng-card-title">Discover</h3>\r
            <p class="eng-card-desc">AI maturity assessment, stakeholder interviews, data landscape review, and use case prioritisation across your enterprise.</p>\r
            <div class="eng-deliverable">\r
              <span class="eng-del-lbl">Output Deliverable</span>\r
              <span class="eng-del-txt">AI Opportunity Map + Prioritised Use Case Backlog</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="eng-card" data-idx="1">\r
          <div class="eng-ghost-num">02</div>\r
          <div class="eng-card-body">\r
            <div class="eng-card-tag">Week 3 – 4</div>\r
            <h3 class="eng-card-title">Design</h3>\r
            <p class="eng-card-desc">Technical architecture, technology selection, security framework, team structure, and a sprint-by-sprint 12-week build plan.</p>\r
            <div class="eng-deliverable">\r
              <span class="eng-del-lbl">Output Deliverable</span>\r
              <span class="eng-del-txt">Technical Blueprint + Security &amp; Governance Framework</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="eng-card" data-idx="2">\r
          <div class="eng-ghost-num">03</div>\r
          <div class="eng-card-body">\r
            <div class="eng-card-tag">Week 5 – 12</div>\r
            <h3 class="eng-card-title">Deploy</h3>\r
            <p class="eng-card-desc">FDE engineers embedded and shipping — AI features, agents, and infrastructure built, tested, and deployed into your production environment.</p>\r
            <div class="eng-deliverable">\r
              <span class="eng-del-lbl">Output Deliverable</span>\r
              <span class="eng-del-txt">Live AI Systems + Integration Test Reports</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="eng-card" data-idx="3">\r
          <div class="eng-ghost-num">04</div>\r
          <div class="eng-card-body">\r
            <div class="eng-card-tag">Week 13+</div>\r
            <h3 class="eng-card-title">Scale</h3>\r
            <p class="eng-card-desc">Performance monitoring, model optimisation, new use cases, and structured knowledge transfer to your internal team.</p>\r
            <div class="eng-deliverable">\r
              <span class="eng-del-lbl">Output Deliverable</span>\r
              <span class="eng-del-txt">Self-Sufficient AI + Ongoing Optimisation Roadmap</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div><!-- /eng-stage -->\r
    </div><!-- /eng-wrapper -->\r
\r
    <!-- Progress dots — right side -->\r
    <div class="eng-progress">\r
      <div class="eng-dot active" data-dot="0"></div>\r
      <div class="eng-dot" data-dot="1"></div>\r
      <div class="eng-dot" data-dot="2"></div>\r
      <div class="eng-dot" data-dot="3"></div>\r
      <span class="eng-scroll-lbl">scroll</span>\r
    </div>\r
\r
  </div>\r
</section>\r
</div><!-- /eng-scroll-driver -->\r
\r
<!-- Summary pills outside the driver so they scroll normally -->\r
<div class="eng-pills-row">\r
  <div class="container">\r
    <div class="eng-summary">\r
      <div class="eng-sum-pill"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 1L3 8h4l-1 7 6-8H8l1-7z"/></svg>Discover + Design: fixed-price 2-week sprint</div>\r
      <div class="eng-sum-pill"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M5 7h6M5 10h4"/></svg>Production-ready AI in under 12 weeks</div>\r
      <div class="eng-sum-pill"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 8A5 5 0 1 1 8 3"/><path d="M10 1l3 2-2 3"/></svg>No long-term commitment to start</div>\r
      <div class="eng-sum-pill"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 12l3-4 3 2 3-5 3 3"/><path d="M2 14h12"/></svg>Measurable ROI at every phase</div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ══ CASE STUDIES ═══════════════════════════════════════════════════════ -->\r
<section id="casestudies">\r
  <div class="container">\r
    <div class="sec-hd fi">\r
      <div class="section-label" style="color:var(--blue)">Case Studies</div>\r
      <h2>Where Frontier AI Meets the Real World</h2>\r
      <p>Real AI deployments. Real business challenges. Measurable outcomes — achieved through embedded engineering.</p>\r
    </div>\r
    <div class="cs-grid">\r
      <div class="cs-card fi">\r
        <div class="cs-ind">Insurance</div>\r
        <div class="cs-type">AI Agents &amp; Automation</div>\r
        <h3>Claims Triage &amp; Assessment Automation</h3>\r
        <div class="cs-det">50,000+ claims/month &nbsp;·&nbsp; 12 weeks to production &nbsp;·&nbsp; Azure OpenAI + LangChain</div>\r
        <div class="cs-sep"></div>\r
        <div class="cs-r1">68% reduction in average handle time</div>\r
        <div class="cs-r2">40% reduction in cost-per-claim</div>\r
      </div>\r
      <div class="cs-card fi">\r
        <div class="cs-ind">Manufacturing — Automotive</div>\r
        <div class="cs-type">Enterprise AI Infrastructure</div>\r
        <h3>Predictive Maintenance Across 200+ Machines</h3>\r
        <div class="cs-det">18 months of sensor data &nbsp;·&nbsp; Real-time streaming inference &nbsp;·&nbsp; AWS SageMaker + Kafka</div>\r
        <div class="cs-sep"></div>\r
        <div class="cs-r1">42% reduction in unplanned downtime</div>\r
        <div class="cs-r2">$1.4M annualised cost saving</div>\r
      </div>\r
      <div class="cs-card fi">\r
        <div class="cs-ind">Banking — Retail</div>\r
        <div class="cs-type">Generative AI Solutions</div>\r
        <h3>AI Customer Service Agent — RAG Architecture</h3>\r
        <div class="cs-det">Core banking integration &nbsp;·&nbsp; Anthropic Claude + Pinecone &nbsp;·&nbsp; 10 weeks</div>\r
        <div class="cs-sep"></div>\r
        <div class="cs-r1">51% queries resolved without human escalation</div>\r
        <div class="cs-r2">CSAT improved from 72% to 84%</div>\r
      </div>\r
    </div>\r
    <div style="text-align:center;margin-top:2.5rem">\r
      <a href="#contact" class="btn btn-ghost">View All Case Studies &rarr;</a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ FDE TEAM ════════════════════════════════════════════════════════════ -->\r
<section id="fde">\r
  <div class="container">\r
    <div class="fde-grid">\r
      <div class="fi-left">\r
        <div class="fde-lbl">Forward Deployed Engineering</div>\r
        <h2>Your AI Engineers.<br>Embedded. Shipping<br>in Weeks.</h2>\r
        <p class="lead">Our FDE engineers embed directly inside your organisation — working in your codebase, your Jira, your sprint ceremonies — as a fully integrated part of your AI team.</p>\r
        <div class="fde-highlight">95% of enterprise AI pilots fail to reach production. The primary cause is the handoff gap. <strong>FDE eliminates the handoff. We don't leave until it works.</strong></div>\r
        <div class="fde-stages">\r
          <div class="fde-stage"><span class="fde-wk">Wk 1–2</span><span class="fde-act">Discovery &amp; architecture design</span></div>\r
          <div class="fde-stage"><span class="fde-wk">Wk 3–6</span><span class="fde-act">Sprint 1 — first live AI feature deployed</span></div>\r
          <div class="fde-stage"><span class="fde-wk">Wk 7–10</span><span class="fde-act">Sprint 2 — infrastructure stabilised</span></div>\r
          <div class="fde-stage"><span class="fde-wk">Wk 11–12</span><span class="fde-act">Go-live &rarr; Scale plan activated</span></div>\r
        </div>\r
        <div class="fde-btns">\r
          <a href="#contact" class="btn btn-blue">Explore FDE Models &rarr;</a>\r
          <a href="#careers" class="btn btn-outline-blue">Join the FDE Team</a>\r
        </div>\r
      </div>\r
      <div class="fi-right">\r
        <div class="stat-cards">\r
          <div class="stat-card"><div class="big">&lt;12</div><div class="sm">weeks from kickoff to production-ready AI</div></div>\r
          <div class="stat-card"><div class="big">100%</div><div class="sm">embedded inside your engineering team</div></div>\r
          <div class="stat-card"><div class="big">95%</div><div class="sm">of AI pilots fail without the FDE model</div></div>\r
          <div class="stat-card"><div class="big">2 wk</div><div class="sm">Discover→Design sprint before you commit</div></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ INSIGHTS ════════════════════════════════════════════════════════════ -->\r
<section id="insights">\r
  <div class="container">\r
    <div class="sec-hd fi">\r
      <div class="section-label">Insights from the Frontier</div>\r
      <h2>Enterprise AI — What's Actually Working</h2>\r
      <p>Written from experience, not theory. Practical insights from real deployments and production AI systems.</p>\r
    </div>\r
    <div class="ins-grid">\r
      <div class="ins-card fi">\r
        <div class="ins-top"><span class="ins-tag">FDE &amp; Delivery</span><span class="ins-date">Jun 2025</span></div>\r
        <div class="ins-body">\r
          <h3>Why 95% of Enterprise AI Pilots Fail — and How the FDE Model Fixes It</h3>\r
          <p>An analysis of the root causes of AI pilot failure in large enterprises, and how Forward Deployed Engineering addresses each one systematically.</p>\r
          <span class="ins-link">Read article</span>\r
        </div>\r
      </div>\r
      <div class="ins-card fi">\r
        <div class="ins-top"><span class="ins-tag">AI Strategy</span><span class="ins-date">Jun 2025</span></div>\r
        <div class="ins-body">\r
          <h3>The 12-Week AI Sprint: From Idea to Production</h3>\r
          <p>A behind-the-scenes look at how Innovsol structures its 12-week FDE engagement — week by week, from discovery through to go-live.</p>\r
          <span class="ins-link">Read article</span>\r
        </div>\r
      </div>\r
      <div class="ins-card fi">\r
        <div class="ins-top"><span class="ins-tag">Technology</span><span class="ins-date">May 2025</span></div>\r
        <div class="ins-body">\r
          <h3>RAG vs. Fine-Tuning: Which LLM Approach Fits Your Enterprise Use Case?</h3>\r
          <p>A practical framework for choosing between Retrieval-Augmented Generation and fine-tuning for enterprise LLM applications.</p>\r
          <span class="ins-link">Read article</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div style="text-align:center;margin-top:2.5rem">\r
      <a href="#contact" class="btn btn-outline-blue">View All Insights &rarr;</a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ CAREERS ════════════════════════════════════════════════════════════ -->\r
<section id="careers">\r
  <div class="container">\r
    <div class="car-grid">\r
      <div class="fi-left">\r
        <div class="section-label">Careers</div>\r
        <h2>Build AI That Actually Ships.</h2>\r
        <p class="lead">We are looking for engineers, scientists, and builders who want to move fast, work on hard problems, and see their work running in production at scale.</p>\r
        <div class="perks">\r
          <div class="perk"><span class="pdot"></span><span>Work on frontier AI applied to real enterprise problems</span></div>\r
          <div class="perk"><span class="pdot"></span><span>Embedded model — work inside world-class organisations</span></div>\r
          <div class="perk"><span class="pdot"></span><span>Remote-friendly with annual team offsites</span></div>\r
          <div class="perk"><span class="pdot"></span><span>Competitive salary, performance bonus, equity for senior roles</span></div>\r
          <div class="perk"><span class="pdot"></span><span>Annual learning budget for courses &amp; conferences</span></div>\r
        </div>\r
        <a href="#contact" class="btn btn-orange" style="margin-top:.5rem">View Open Roles &rarr;</a>\r
      </div>\r
      <div class="fi-right">\r
        <div class="roles">\r
          <div class="role"><div><div class="role-t">Senior AI Engineer</div><div class="role-d">Python · LLMs · MLOps · Cloud infrastructure</div></div><span class="badge">Hiring</span></div>\r
          <div class="role"><div><div class="role-t">Machine Learning Engineer</div><div class="role-d">NLP · Classification · Time-series · Production models</div></div><span class="badge">Hiring</span></div>\r
          <div class="role"><div><div class="role-t">AI Solutions Architect</div><div class="role-d">Pre-sales · Enterprise architecture · Delivery leadership</div></div><span class="badge">Hiring</span></div>\r
          <div class="role"><div><div class="role-t">Data Engineer</div><div class="role-d">Pipelines · Streaming · AI data infrastructure</div></div><span class="badge">Hiring</span></div>\r
          <div class="role"><div><div class="role-t">AI Strategy Consultant</div><div class="role-d">Roadmaps · ROI models · C-suite engagement</div></div><span class="badge">Hiring</span></div>\r
          <div class="role"><div><div class="role-t">FDE Engagement Lead</div><div class="role-d">Senior engineer + client leadership · 12-week sprints</div></div><span class="badge">Hiring</span></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ DUAL CTA ════════════════════════════════════════════════════════════ -->\r
<section id="cta">\r
  <div class="container">\r
    <div class="cta-duo">\r
      <div class="cta-l fi-left">\r
        <div class="section-label" style="color:rgba(63,108,181,.8)">For Enterprises</div>\r
        <h3>Ready to Move Beyond<br>the AI Pilot?</h3>\r
        <p>Join enterprises that have made AI operational. Our FDE engineers are ready to embed with your team and build AI that works in the real world — not just in demos.</p>\r
        <div style="display:flex;gap:.8rem;flex-wrap:wrap">\r
          <a href="#contact-form" class="btn btn-orange">Book a Strategy Call &rarr;</a>\r
          <a href="#contact" class="btn btn-ghost" style="font-size:.82rem">AI Readiness Guide</a>\r
        </div>\r
        <div class="cta-pill">Start with a Discovery Sprint — 2 weeks to your AI roadmap · fixed price · no long-term commitment required</div>\r
      </div>\r
      <div class="cta-r fi-right">\r
        <div class="section-label" style="color:rgba(255,255,255,.6)">For AI Talent</div>\r
        <h3>Build AI That<br>Actually Ships.</h3>\r
        <p>Join the FDE team. Embed in ambitious enterprises. Work on hard problems. See your AI running in production — fast.</p>\r
        <div style="display:flex;gap:.8rem;flex-wrap:wrap">\r
          <a href="#careers" class="btn btn-white">View Open Roles &rarr;</a>\r
        </div>\r
        <div class="cta-pill">Reach us directly: <strong style="color:#fff">hello@innovsol.ai</strong></div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ CONTACT (redesigned) ══════════════════════════════════════════════════ -->\r
<section id="contact">\r
  <div class="con-hero">\r
\r
    <!-- ── Location image background ── -->\r
    <div class="con-map-bg">\r
      <img src="/location.png" alt="Innovsol global presence map" class="con-loc-img"/>\r
      <div class="con-map-overlay"></div>\r
    </div>\r
\r
    <!-- ── Content over the map ── -->\r
    <div class="container con-map-content">\r
\r
      <!-- Left: contact info panel -->\r
      <div class="con-panel fi">\r
        <div class="section-label" style="color:var(--orange)">Get in Touch</div>\r
        <h2>Let's Talk About<br>Your AI Journey.</h2>\r
        <p>Whether you're exploring AI for the first time or ready to scale — a conversation with our team is the fastest way forward.</p>\r
        <div class="con-details">\r
          <div class="con-det">\r
            <span class="con-icon">✉️</span>\r
            <span><a href="mailto:hello@innovsol.ai" style="color:inherit;text-decoration:none">hello@innovsol.ai</a></span>\r
          </div>\r
          <div class="con-det">\r
            <span class="con-icon">📞</span>\r
            <span><a href="tel:+919582799988" style="color:inherit;text-decoration:none">+91 95827 99988</a></span>\r
          </div>\r
          <div class="con-det">\r
            <span class="con-icon">⚡</span>\r
            <span>Strategy calls within 5 business days</span>\r
          </div>\r
          <div class="con-det">\r
            <span class="con-icon">🔒</span>\r
            <span>Enterprise-grade security · GDPR compliant</span>\r
          </div>\r
        </div>\r
        <a href="#contact-form" class="btn btn-orange" style="margin-top:1.5rem;align-self:flex-start">Book a Strategy Call &rarr;</a>\r
      </div>\r
\r
      <!-- HQ address simple text -->\r
      <div class="con-hq-text">\r
        <span class="con-hq-label">&#x1F4CD; Headquarters</span>\r
        <span class="con-hq-addr">411, Good Earth Business Bay-1, Sector-58,<br>Gurugram-122098, India</span>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ CONTACT FORM ══════════════════════════════════════════════════════════ -->\r
<section id="contact-form" class="contact-form-sec">\r
  <div class="container">\r
    <div class="contact-form-inner">\r
      <div class="cform-hd fi">\r
        <h2>Start the Conversation</h2>\r
        <p>Tell us about your AI challenge — our team will respond within 1 business day.</p>\r
      </div>\r
      <form id="cform" class="cform-modern fi" onsubmit="sendForm(event)">\r
          <div class="frow">\r
            <div class="fg"><label>First Name *</label><input type="text" placeholder="First name" required/></div>\r
            <div class="fg"><label>Last Name *</label><input type="text" placeholder="Last name" required/></div>\r
          </div>\r
          <div class="fg"><label>Work Email *</label><input type="email" placeholder="you@company.com" required/></div>\r
          <div class="fg"><label>Phone Number</label><input type="tel" placeholder="" /></div>\r
          <div class="fg"><label>Company *</label><input type="text" placeholder="Your organisation" required/></div>\r
          <div class="frow">\r
            <div class="fg"><label>Industry</label>\r
              <select>\r
                <option value="">Select industry</option>\r
                <option>Banking &amp; Financial Services</option>\r
                <option>Manufacturing</option>\r
                <option>Healthcare &amp; Life Sciences</option>\r
                <option>Retail &amp; E-Commerce</option>\r
                <option>Telecom &amp; Media</option>\r
                <option>Insurance</option>\r
                <option>GCC / Shared Services</option>\r
                <option>High-Growth Startup</option>\r
                <option>Other</option>\r
              </select>\r
            </div>\r
            <div class="fg"><label>Enquiry Type</label>\r
              <select>\r
                <option value="">Select type</option>\r
                <option>Strategy Consultation</option>\r
                <option>FDE Engagement</option>\r
                <option>Solution Deployment</option>\r
                <option>Partnership</option>\r
                <option>Careers</option>\r
                <option>Other</option>\r
              </select>\r
            </div>\r
          </div>\r
          <div class="fg"><label>Message</label><textarea placeholder="Tell us about your AI challenge or ambition..."></textarea></div>\r
          <button type="submit" class="fsub">Send Message &rarr;</button>\r
          <div class="fnote">By submitting you agree to our Privacy Policy. All enquiries reviewed within 1 business day.</div>\r
      </form>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ══ FOOTER ══════════════════════════════════════════════════════════════ -->\r
<footer>\r
  <div class="container">\r
    <!-- Main footer row: logo | nav | contact -->\r
    <div class="ft-main">\r
      <div class="ft-left">\r
        <a href="#home" class="ft-logo-link"><img src="/images/logo.png" alt="Innovsol" class="ft-logo-img"/></a>\r
        <p class="ft-tagline">Enterprise AI. Deployed,<br>Not Just Discussed.</p>\r
      </div>\r
      <nav class="ft-nav">\r
        <div class="ft-col">\r
          <span class="ft-col-head">Company</span>\r
          <a href="#why">About Us</a>\r
          <a href="#fde">FDE Team</a>\r
          <a href="#careers">Careers</a>\r
          <a href="#contact">Contact</a>\r
        </div>\r
        <div class="ft-col">\r
          <span class="ft-col-head">Services</span>\r
          <a href="#services">AI Strategy</a>\r
          <a href="#services">AI Agents</a>\r
          <a href="#services">GenAI Solutions</a>\r
          <a href="#services">FDE Engineering</a>\r
        </div>\r
        <div class="ft-col">\r
          <span class="ft-col-head">Industries</span>\r
          <a href="#industries">Banking</a>\r
          <a href="#industries">Healthcare</a>\r
          <a href="#industries">Manufacturing</a>\r
          <a href="#industries">GCCs</a>\r
        </div>\r
        <div class="ft-col">\r
          <span class="ft-col-head">Resources</span>\r
          <a href="#insights">Blog</a>\r
          <a href="#casestudies">Case Studies</a>\r
          <a href="#contact">AI Guide</a>\r
          <a href="#contact">Webinars</a>\r
        </div>\r
      </nav>\r
      <div class="ft-right">\r
        <a class="ft-email" href="mailto:hello@innovsol.ai">hello@innovsol.ai</a>\r
        <a href="tel:+919582799988" class="ft-phone">+91 95827 99988</a>\r
        <a href="#contact-form" class="btn btn-orange ft-cta">Book a Strategy Call &rarr;</a>\r
      </div>\r
    </div>\r
    <!-- Bottom bar -->\r
    <div class="ft-bar">\r
      <p>&copy; 2026 Innovsol &nbsp;·&nbsp; Innovate . Disrupt . Transform</p>\r
      <div class="ft-bar-links">\r
        <a href="#">Privacy Policy</a>\r
        <a href="#">Cookie Policy</a>\r
        <a href="#">Terms of Use</a>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
\r
<button id="totop" onclick="window.scrollTo({top:0,behavior:'smooth'})">&#8679;</button>\r
<div id="toast">Message sent! We'll be in touch within 1 business day. ✓</div>\r
\r
<!-- ══ JAVASCRIPT ══════════════════════════════════════════════════════════ -->\r
\r
`,a=`\r
// ── Mobile nav drawer (right-side slide-in) ──────────────────────────────\r
function toggleMob () {\r
  const nav    = document.getElementById('mobNav');\r
  const ham    = document.getElementById('ham');\r
  const overlay = document.getElementById('mobOverlay');\r
  const isOpen = nav.classList.toggle('open');\r
  ham.classList.toggle('open', isOpen);\r
  overlay.classList.toggle('open', isOpen);\r
  document.body.style.overflow = isOpen ? 'hidden' : '';\r
}\r
\r
// close on overlay click\r
document.addEventListener('DOMContentLoaded', () => {\r
  const overlay = document.getElementById('mobOverlay');\r
  if (overlay) overlay.addEventListener('click', toggleMob);\r
});\r
\r
// ── Hero Reel — 4-slide enterprise video carousel ────────────────────────\r
(function () {\r
  // Guard: prevent double-init from React StrictMode's double effect invocation\r
  if (window.__reelInit) return;\r
  window.__reelInit = true;\r
\r
  const videos  = Array.from(document.querySelectorAll('.reel-video'));\r
  const slides  = Array.from(document.querySelectorAll('.reel-slide'));\r
  const dots    = Array.from(document.querySelectorAll('.reel-dot'));\r
\r
  if (!videos.length) return;\r
\r
  // Playback speed per slide (0 = first, last = videos.length-1)\r
  const rates = [0.6, 1.0, 1.0, 2.5];\r
  function applyRate (idx) {\r
    videos[idx].playbackRate = rates[idx] ?? 1.0;\r
  }\r
\r
  let current       = 0;\r
  let transitioning = false;\r
  let fallback      = null;\r
\r
  // Hard fallback — advance after 12s max per slide regardless of video state\r
  function resetFallback () {\r
    clearTimeout(fallback);\r
    fallback = setTimeout(() => goTo(current + 1), 12000);\r
  }\r
\r
  function goTo (idx) {\r
    if (transitioning) return;\r
    const next = ((idx % videos.length) + videos.length) % videos.length;\r
    if (next === current) return;\r
    transitioning = true;\r
\r
    clearTimeout(fallback);\r
    const prev = current;\r
    current = next;\r
\r
    // Videos: crossfade\r
    videos[prev].classList.remove('reel-active');\r
    videos[prev].pause();\r
    videos[current].classList.add('reel-active');\r
    videos[current].muted = true;\r
    videos[current].currentTime = 0;\r
    applyRate(current);\r
    videos[current].play().catch(() => {});\r
\r
    // Slides: fade out old, fade in new\r
    slides[prev].classList.remove('reel-active');\r
    slides[prev].classList.add('reel-exit');\r
    slides[current].classList.add('reel-active');\r
\r
    // Dots\r
    dots.forEach((d, i) => d.classList.toggle('reel-dot-active', i === current));\r
\r
    setTimeout(() => {\r
      slides[prev].classList.remove('reel-exit');\r
      transitioning = false;\r
      resetFallback();\r
    }, 950);\r
  }\r
\r
  // Three layers of advance detection (most → least reliable)\r
  videos.forEach((v, i) => {\r
    // 1. ended event (primary)\r
    v.addEventListener('ended', () => {\r
      if (i === current) goTo(current + 1);\r
    });\r
    // 2. timeupdate: advance when 97% through (catches ended-event failures)\r
    v.addEventListener('timeupdate', () => {\r
      if (i !== current || !v.duration) return;\r
      if (v.currentTime / v.duration >= 0.97) goTo(current + 1);\r
    });\r
    // 3. error: skip broken video immediately\r
    v.addEventListener('error', () => {\r
      if (i === current) goTo(current + 1);\r
    });\r
  });\r
\r
  // Dot clicks\r
  dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.idx)));\r
\r
  // Keyboard navigation\r
  document.addEventListener('keydown', e => {\r
    if (e.key === 'ArrowRight') goTo(current + 1);\r
    if (e.key === 'ArrowLeft')  goTo(current - 1);\r
  });\r
\r
  // Init — React's dangerouslySetInnerHTML doesn't trigger browser autoplay;\r
  // we must call .play() programmatically after the DOM has settled.\r
  function tryPlay () {\r
    const v = videos[0];\r
    if (!v) return;\r
    v.muted = true;          // ensure muted flag is set in DOM\r
    v.currentTime = 0;\r
    applyRate(0);\r
    const p = v.play();\r
    if (p !== undefined) {\r
      p.catch(() => {\r
        // Browser blocked autoplay — retry on first user gesture\r
        const resume = () => {\r
          v.play().catch(() => {});\r
          document.removeEventListener('click',      resume);\r
          document.removeEventListener('touchstart', resume);\r
          document.removeEventListener('keydown',    resume);\r
        };\r
        document.addEventListener('click',      resume, { once: true });\r
        document.addEventListener('touchstart', resume, { once: true });\r
        document.addEventListener('keydown',    resume, { once: true });\r
      });\r
    }\r
  }\r
\r
  // Wait two animation frames so React's paint + browser layout are complete\r
  requestAnimationFrame(() => requestAnimationFrame(() => {\r
    tryPlay();\r
    resetFallback();\r
  }));\r
})();\r
\r
// ── Navbar scroll shadow ─────────────────────────────────────────────────\r
const nav = document.getElementById('nav');\r
window.addEventListener('scroll', () => {\r
  nav.classList.toggle('sc', window.scrollY > 60);\r
}, { passive: true });\r
\r
// ── Active nav link ──────────────────────────────────────────────────────\r
const navLinks   = document.querySelectorAll('.nav-links a');\r
const allSections = Array.from(document.querySelectorAll('section[id], div[id].eng-scroll-driver'));\r
\r
function updateActiveNav () {\r
  const offset = 120; // navbar height + buffer\r
  let current  = '';\r
  allSections.forEach(sec => {\r
    if (window.scrollY >= sec.offsetTop - offset) current = sec.id;\r
  });\r
  navLinks.forEach(a => {\r
    a.classList.toggle('act', a.getAttribute('href') === '#' + current);\r
  });\r
}\r
\r
window.addEventListener('scroll', updateActiveNav, { passive: true });\r
updateActiveNav(); // run once on load\r
\r
// ── Showcase video: autoplay ─────────────────────────────────────────────\r
const showcase = document.getElementById('showcase');\r
const scVid = showcase && showcase.querySelector('.sc-video');\r
if (scVid) {\r
  scVid.play().catch(() => {});\r
  scVid.addEventListener('error', function(){\r
    const sources = scVid.querySelectorAll('source');\r
    let idx = 0;\r
    const tryNext = () => {\r
      if (idx >= sources.length) return;\r
      scVid.src = sources[idx++].src;\r
      scVid.load();\r
      scVid.play().catch(tryNext);\r
    };\r
    tryNext();\r
  });\r
  document.addEventListener('click', () => { if (scVid.paused) scVid.play().catch(()=>{}); }, { once: true });\r
}\r
\r
// ── Showcase text reveal: add sc-go when section enters view ─────────────\r
if (showcase) {\r
  const scIO = new IntersectionObserver((entries) => {\r
    entries.forEach(e => {\r
      if (e.isIntersecting) {\r
        showcase.classList.add('sc-go');\r
        scIO.unobserve(showcase);\r
      }\r
    });\r
  }, { threshold: 0.15 });\r
  scIO.observe(showcase);\r
}\r
\r
// ── Auto-assign slow left/right animation to all section titles ──────────\r
(function () {\r
  const sections = document.querySelectorAll(\r
    '#services,#why,#industries,#engagement,#casestudies,#fde,#insights,#careers,#contact'\r
  );\r
  sections.forEach((sec, idx) => {\r
    const fromLeft  = idx % 2 === 0;   // alternate direction per section\r
    const labels = sec.querySelectorAll('.section-label');\r
    const h2s    = sec.querySelectorAll('h2');\r
\r
    labels.forEach(el => {\r
      el.classList.remove('fi','fi-left','fi-right');\r
      el.classList.add(fromLeft ? 'fi-left' : 'fi-right', 'title-label');\r
    });\r
    h2s.forEach(el => {\r
      el.classList.remove('fi','fi-left','fi-right');\r
      // h2 comes from opposite side to label for a spreading effect\r
      el.classList.add(fromLeft ? 'fi-right' : 'fi-left', 'title-h2');\r
    });\r
  });\r
})();\r
\r
// ── Intersection observer: fade-in animations ────────────────────────────\r
const ioFade = new IntersectionObserver((entries) => {\r
  entries.forEach(e => {\r
    if (!e.isIntersecting) return;\r
    e.target.classList.add('on');\r
    e.target.querySelectorAll('[data-count]').forEach(animNum);\r
    ioFade.unobserve(e.target);\r
  });\r
}, { threshold: 0.12 });\r
\r
document.querySelectorAll('.fi,.fi-left,.fi-right').forEach(el => ioFade.observe(el));\r
\r
// ── Engagement sticky scroll — page scroll drives card transitions ────────\r
(function () {\r
  const driver = document.getElementById('engagement');\r
  const cards  = Array.from(document.querySelectorAll('.eng-card'));\r
  const steps  = Array.from(document.querySelectorAll('.eng-steplbl'));\r
  const dots   = Array.from(document.querySelectorAll('.eng-dot'));\r
  if (!driver || !cards.length) return;\r
\r
  let activeIdx  = 0;\r
  let exiting    = false;\r
\r
  function getIdx () {\r
    const rect      = driver.getBoundingClientRect();\r
    const scrolled  = Math.max(0, -rect.top);\r
    const available = driver.offsetHeight - window.innerHeight;\r
    if (available <= 0) return 0;\r
    const progress  = Math.min(1, scrolled / available);\r
    return Math.min(cards.length - 1, Math.floor(progress * cards.length));\r
  }\r
\r
  function activate (idx) {\r
    if (idx === activeIdx) return;\r
    const prev = activeIdx;\r
    activeIdx  = idx;\r
\r
    // Exit previous\r
    cards[prev].classList.remove('eng-active');\r
    cards[prev].classList.add('eng-exit');\r
    setTimeout(() => cards[prev]?.classList.remove('eng-exit'), 450);\r
\r
    // Enter next\r
    cards[idx].classList.add('eng-active');\r
\r
    // Sync sidebar steps\r
    steps.forEach((s, i) => s.classList.toggle('active', i === idx));\r
\r
    // Sync progress dots\r
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));\r
  }\r
\r
  window.addEventListener('scroll', () => activate(getIdx()), { passive: true });\r
  activate(getIdx()); // init\r
\r
  // Click sidebar step → scroll to that card's position in the driver\r
  steps.forEach((s, i) => {\r
    s.addEventListener('click', (ev) => {\r
      ev.preventDefault();\r
      const available = driver.offsetHeight - window.innerHeight;\r
      const target    = driver.getBoundingClientRect().top + window.scrollY\r
                        + (i / cards.length) * available;\r
      window.scrollTo({ top: target, behavior: 'smooth' });\r
    });\r
  });\r
})();\r
\r
// ── Staggered grid children ──────────────────────────────────────────────\r
const ioGrid = new IntersectionObserver((entries) => {\r
  entries.forEach(e => {\r
    if (!e.isIntersecting) return;\r
    [...e.target.children].forEach((c, i) =>\r
      setTimeout(() => c.classList.add('on'), i * 90));\r
    ioGrid.unobserve(e.target);\r
  });\r
}, { threshold: 0.08 });\r
\r
document.querySelectorAll('.why-grid,.ind-grid,.cs-grid,.ins-grid,.roles,.svc-grid').forEach(grid => {\r
  ioGrid.observe(grid);\r
});\r
\r
// ── Number counter animation ─────────────────────────────────────────────\r
function animNum(el) {\r
  const target = +el.getAttribute('data-count');\r
  if (isNaN(target)) return;\r
  const pfx = el.getAttribute('data-pfx') || '';\r
  const sfx = el.getAttribute('data-sfx') || '';\r
  const dur = 1800, start = performance.now();\r
  const tick = now => {\r
    const t = Math.min((now - start) / dur, 1);\r
    const ease = 1 - Math.pow(1 - t, 3);\r
    el.textContent = pfx + Math.round(ease * target) + sfx;\r
    if (t < 1) requestAnimationFrame(tick);\r
  };\r
  requestAnimationFrame(tick);\r
}\r
\r
// ── Contact form ─────────────────────────────────────────────────────────\r
function sendForm(e) {\r
  e.preventDefault();\r
  const btn = e.target.querySelector('.fsub');\r
  btn.textContent = 'Sending...'; btn.disabled = true;\r
  setTimeout(() => {\r
    btn.textContent = 'Send Message →'; btn.disabled = false;\r
    e.target.reset();\r
    const t = document.getElementById('toast');\r
    t.classList.add('on');\r
    setTimeout(() => t.classList.remove('on'), 4500);\r
  }, 1300);\r
}\r
\r
// ── Fire hero stats on load ──────────────────────────────────────────────\r
window.addEventListener('load', () => {\r
  document.querySelectorAll('.hero-txt .hn[data-count]').forEach(el => animNum(el));\r
});\r
`;function s(){return n.useEffect(()=>{const r=document.createElement("script");return r.type="text/javascript",r.text=a,document.body.appendChild(r),()=>{r.remove(),window.__reelInit=!1}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:i}}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})]})}export{s as component};
