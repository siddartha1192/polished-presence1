import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const styles = "\r\n/* ═══ RESET & ROOT ════════════════════════════════════════════════════════ */\r\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r\n:root{\r\n  /* Brand palette — Blue + Orange + Black + White */\r\n  --blue:    #3f6cb5;   /* primary brand blue */\r\n  --blue2:   #2d5294;   /* deeper blue — hover/darks */\r\n  --blue3:   #edf2fb;   /* pale blue tint */\r\n  --orange:  #faa720;   /* primary brand orange / CTA */\r\n  --orange2: #d4890f;   /* deeper orange — hover */\r\n  --orange3: #fff8e8;   /* pale orange tint */\r\n  --dark:    #0f1923;   /* near-black */\r\n  --dark2:   #1e2d3d;   /* secondary dark */\r\n  --gray:    #5a6a7a;\r\n  --lgray:   #8fa3b8;\r\n  --bg:      #f8f9fc;\r\n  --bg2:     #edf2fb;\r\n  --border:  #c5d5ef;\r\n  --white:   #FFFFFF;\r\n  --font:'Inter','Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;\r\n}\r\nhtml{scroll-behavior:smooth}\r\n/* Offset all anchor sections by the fixed navbar height */\r\nsection[id]{scroll-margin-top:104px}\r\nbody{font-family:var(--font);background:var(--white);color:var(--dark);line-height:1.65;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:'cv02','cv03','cv04','cv11'}\r\nh1,h2,h3,h4{line-height:1.15;font-weight:700;letter-spacing:-.02em}\r\na{text-decoration:none;color:inherit}\r\nimg{max-width:100%;display:block}\r\n\r\n/* ═══ UTILITIES ═══════════════════════════════════════════════════════════ */\r\n.container{max-width:1480px;margin:0 auto;padding:0 48px}\r\n.section-label{\r\n  display:inline-flex;align-items:center;gap:.65rem;\r\n  font-size:1rem;font-weight:800;letter-spacing:.12em;\r\n  color:var(--orange);text-transform:uppercase;margin-bottom:.75rem}\r\n.section-label::before{\r\n  content:'';display:inline-block;width:26px;height:3px;\r\n  background:var(--orange);border-radius:2px;flex-shrink:0}\r\n.btn{display:inline-flex;align-items:center;gap:.4rem;padding:.72rem 1.4rem;border-radius:8px;font-size:.88rem;font-weight:600;cursor:pointer;transition:all .22s;border:none;font-family:var(--font);letter-spacing:-.005em}\r\n.btn-blue{background:var(--blue);color:#fff}\r\n.btn-blue:hover{background:var(--blue2);transform:translateY(-2px);box-shadow:0 6px 24px rgba(63,108,181,.32)}\r\n.btn-orange{background:var(--orange);color:#0f1923}\r\n.btn-orange:hover{background:var(--orange2);color:#fff;transform:translateY(-2px);box-shadow:0 6px 24px rgba(250,167,32,.4)}\r\n.btn-outline-blue{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.6)}\r\n.btn-outline-blue:hover{background:rgba(255,255,255,.15);color:#fff;border-color:#fff}\r\n#nav.sc .btn-outline-blue{color:var(--blue);border-color:var(--blue)}\r\n#nav.sc .btn-outline-blue:hover{background:var(--blue);color:#fff}\r\n.btn-ghost{background:rgba(255,255,255,.1);color:#fff;border:1.5px solid rgba(255,255,255,.25)}\r\n.btn-ghost:hover{background:rgba(255,255,255,.2)}\r\n.btn-white{background:#fff;color:var(--blue)}\r\n.btn-white:hover{background:var(--blue3)}\r\n\r\n/* ── Hero-specific button pair ─────────────────────────────────────────── */\r\n/* Primary CTA on dark video — orange fill, near-black text, warm glow */\r\n.btn-hero-primary{\r\n  padding:.45rem 1.1rem;font-size:.78rem;font-weight:700;letter-spacing:.01em;\r\n  box-shadow:0 4px 20px rgba(250,167,32,.35),0 1px 4px rgba(0,0,0,.25)}\r\n.btn-hero-primary:hover{\r\n  background:var(--orange2);color:#fff;\r\n  box-shadow:0 8px 32px rgba(250,167,32,.55),0 2px 8px rgba(0,0,0,.3);\r\n  transform:translateY(-3px)}\r\n\r\n/* Secondary CTA on dark video — frosted white border, fills blue on hover */\r\n.btn-outline-light{\r\n  padding:.45rem 1.1rem;font-size:.78rem;font-weight:700;letter-spacing:.01em;\r\n  background:var(--blue);color:#fff;border:2px solid var(--blue);\r\n  box-shadow:0 4px 18px rgba(63,108,181,.45),0 1px 4px rgba(0,0,0,.3)}\r\n.btn-outline-light:hover{\r\n  background:var(--blue2);border-color:var(--blue2);\r\n  box-shadow:0 8px 28px rgba(63,108,181,.55),0 2px 8px rgba(0,0,0,.35);\r\n  transform:translateY(-3px)}\r\n\r\n/* fade-in on scroll */\r\n.fi{opacity:0;transform:translateY(32px);transition:opacity .9s cubic-bezier(.25,.46,.45,.94),transform .9s cubic-bezier(.25,.46,.45,.94)}\r\n.fi.on{opacity:1;transform:none}\r\n\r\n/* Slow-motion left/right title reveals */\r\n.fi-left{opacity:0;transform:translateX(-80px);\r\n  transition:opacity 1.4s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1)}\r\n.fi-left.on{opacity:1;transform:none}\r\n.fi-right{opacity:0;transform:translateX(80px);\r\n  transition:opacity 1.4s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1)}\r\n.fi-right.on{opacity:1;transform:none}\r\n\r\n/* Stagger: label slightly before h2 */\r\n.fi-left.title-label,.fi-right.title-label{transition-duration:1.2s}\r\n.fi-left.title-h2,.fi-right.title-h2{transition-delay:.15s;transition-duration:1.5s}\r\n\r\n/* ═══ NAVBAR ══════════════════════════════════════════════════════════════ */\r\n/* Navbar: transparent glass on hero, solid white when scrolled */\r\n#nav{position:fixed;top:0;left:0;right:0;z-index:1000;\r\n  background:transparent;border-bottom:1px solid transparent;\r\n  transition:background .4s ease,box-shadow .4s ease,border-color .4s ease}\r\n#nav.sc{background:rgba(255,255,255,.96);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-color:var(--border);box-shadow:0 4px 24px rgba(15,40,90,.06)}\r\n.nav-wrap{display:flex;align-items:center;justify-content:space-between;height:104px;gap:2rem}\r\n.nav-logo img{height:198px;width:auto;display:block}\r\n.nav-links{display:flex;align-items:center;gap:2.4rem}\r\n.nav-links a{font-size:1rem;color:rgba(255,255,255,.88);font-weight:600;transition:color .3s;position:relative;padding:6px 0;letter-spacing:-.01em}\r\n.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--orange);border-radius:2px;transition:width .25s}\r\n.nav-links a:hover,.nav-links a.act{color:#fff}\r\n.nav-links a:hover::after,.nav-links a.act::after{width:100%}\r\n/* Active link on transparent navbar — orange underline */\r\n.nav-links a.act{color:#fff}\r\n.nav-links a.act::after{background:var(--orange);width:100%}\r\n\r\n#nav.sc .nav-links a{color:var(--dark2)}\r\n#nav.sc .nav-links a:hover,#nav.sc .nav-links a.act{color:var(--dark)}\r\n#nav.sc .nav-links a::after{background:var(--blue)}\r\n#nav.sc .nav-links a.act{color:var(--blue);font-weight:700}\r\n#nav.sc .nav-links a.act::after{background:var(--blue);width:100%}\r\n.nav-right{display:flex;align-items:center;gap:.8rem}\r\n.ham{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:none}\r\n.ham span{width:22px;height:2px;background:#fff;border-radius:2px;transition:.3s;display:block}\r\n#nav.sc .ham span{background:var(--dark)}\r\n.mob-nav{display:none;position:fixed;top:104px;left:0;right:0;background:#fff;border-bottom:1px solid var(--border);\r\n  padding:1.5rem 2rem;z-index:999;flex-direction:column;gap:1rem;box-shadow:0 8px 24px rgba(0,0,0,.08)}\r\n.mob-nav a{font-size:1rem;color:var(--dark);font-weight:600;padding:.4rem 0;border-bottom:1px solid var(--border)}\r\n\r\n/* ═══ HERO REEL — 4-slide enterprise video carousel ══════════════════════ */\r\n.hero-reel{\r\n  position:relative;height:100vh;min-height:600px;overflow:hidden;\r\n  display:flex;align-items:center}\r\n\r\n/* ── Video layer ──────────────────────────────────────────────────────── */\r\n.reel-bg{position:absolute;inset:0;z-index:0}\r\n.reel-video{\r\n  position:absolute;inset:0;width:100%;height:100%;\r\n  object-fit:cover;object-position:center;\r\n  opacity:0;transition:opacity 1.2s ease;pointer-events:none}\r\n.reel-video.reel-active{opacity:1}\r\n\r\n/* ── Overlay — directional dark + brand-blue bloom + bottom dissolve ──── */\r\n.hero-overlay{display:none}\r\n\r\n/* ── Slide counter top-right ─────────────────────────────────────────── */\r\n.reel-counter{\r\n  position:absolute;top:50%;transform:translateY(-50%);right:48px;z-index:10;\r\n  display:flex;align-items:baseline;gap:.25rem;pointer-events:none}\r\n.reel-c-cur{font-size:2.4rem;font-weight:900;color:#fff;line-height:1;\r\n  text-shadow:0 2px 12px rgba(0,0,0,.5)}\r\n.reel-c-sep{font-size:.9rem;color:rgba(255,255,255,.35);margin:0 .1rem}\r\n.reel-c-tot{font-size:.9rem;font-weight:600;color:rgba(255,255,255,.35)}\r\n\r\n/* ── Slides container ─────────────────────────────────────────────────── */\r\n.reel-slides{position:absolute;inset:0;z-index:3}\r\n.reel-slide{\r\n  position:absolute;inset:0;\r\n  display:flex;align-items:center;\r\n  padding-top:8rem;padding-bottom:9rem;\r\n  opacity:0;pointer-events:none;\r\n  transition:opacity .9s ease}\r\n.reel-slide.reel-active{opacity:1;pointer-events:auto}\r\n.reel-slide.reel-exit{opacity:0;transition:opacity .5s ease}\r\n\r\n/* ── Slide inner text — default invisible ───────────────────────────────── */\r\n.reel-inner{max-width:860px}\r\n.reel-inner > *{opacity:0}\r\n.reel-btns{opacity:0}\r\n\r\n/* Alternating left / right entrance — creates a cinematic cross-slide feel */\r\n.reel-slide.reel-active .reel-eyebrow{animation:reel-left  1.1s cubic-bezier(.16,1,.3,1) .05s forwards}\r\n.reel-slide.reel-active h1           {animation:reel-right 1.4s cubic-bezier(.16,1,.3,1) .2s  forwards}\r\n.reel-slide.reel-active .reel-sub    {animation:reel-left  1.2s cubic-bezier(.16,1,.3,1) .38s forwards}\r\n.reel-slide.reel-active .reel-stats,\r\n.reel-slide.reel-active .reel-stat-highlight{animation:reel-right 1.1s cubic-bezier(.16,1,.3,1) .52s forwards}\r\n.reel-slide.reel-active .reel-btns   {animation:reel-left  1.1s cubic-bezier(.16,1,.3,1) .6s  forwards}\r\n\r\n@keyframes reel-left{\r\n  from{opacity:0;transform:translateX(-80px)}\r\n  to  {opacity:1;transform:translateX(0)}\r\n}\r\n@keyframes reel-right{\r\n  from{opacity:0;transform:translateX(80px)}\r\n  to  {opacity:1;transform:translateX(0)}\r\n}\r\n\r\n/* ── Eyebrow — large, bold, unmissable ────────────────────────────────── */\r\n.reel-eyebrow{\r\n  display:inline-flex;align-items:center;gap:.75rem;\r\n  font-size:1rem;font-weight:800;letter-spacing:.12em;\r\n  color:var(--orange);text-transform:uppercase;margin-bottom:1rem;\r\n  text-shadow:0 1px 8px rgba(0,0,0,.75),0 0 24px rgba(0,0,0,.5)}\r\n.reel-eyebrow::before{\r\n  content:'';display:inline-block;width:30px;height:3px;\r\n  background:var(--orange);border-radius:2px;flex-shrink:0}\r\n\r\n/* ── Headline — pure white, triple-layer shadow for video readability ───── */\r\n.reel-slide h1{\r\n  font-size:clamp(1.8rem,3vw,2.8rem);color:#fff;\r\n  margin:0 0 1rem;line-height:1.12;font-weight:800;letter-spacing:-.03em;\r\n  text-shadow:\r\n    0 1px 2px rgba(0,0,0,.9),\r\n    0 4px 16px rgba(0,0,0,.75),\r\n    0 12px 40px rgba(0,0,0,.55)}\r\n\r\n/* ── Em/accent — orange glow, dark halo keeps it readable on bright video ── */\r\n.reel-slide h1 em{\r\n  color:var(--orange);font-style:normal;\r\n  text-shadow:\r\n    0 1px 2px rgba(0,0,0,.9),\r\n    0 0 24px rgba(250,167,32,.7),\r\n    0 4px 16px rgba(0,0,0,.6)}\r\n\r\n/* ── Subtext — white with a tight dark shadow for crisp legibility ────────── */\r\n.reel-sub{\r\n  font-size:.92rem;color:#fff;\r\n  max-width:580px;margin:0 0 1.8rem;line-height:1.75;font-weight:400;\r\n  text-shadow:\r\n    0 1px 3px rgba(0,0,0,.85),\r\n    0 4px 18px rgba(0,0,0,.65),\r\n    0 8px 32px rgba(0,0,0,.4)}\r\n\r\n/* ── Buttons — pinned to bottom-centre of the hero ───────────────────── */\r\n.reel-btns{\r\n  position:absolute;bottom:3.5rem;left:0;right:0;\r\n  display:flex;justify-content:center;align-items:center;\r\n  gap:.65rem;flex-wrap:nowrap}\r\n\r\n/* ── Stats row (slide 1) ──────────────────────────────────────────────── */\r\n.reel-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-top:3.5rem;max-width:820px}\r\n.hstat{\r\n  text-align:center;padding:1.4rem 1rem;\r\n  border:1px solid rgba(255,255,255,.13);border-radius:14px;\r\n  background:rgba(6,16,31,.48);\r\n  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);\r\n  box-shadow:0 4px 24px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.07);\r\n  transition:box-shadow .25s,transform .25s,border-color .25s}\r\n.hstat:hover{\r\n  box-shadow:0 8px 40px rgba(63,108,181,.35),inset 0 1px 0 rgba(255,255,255,.12);\r\n  transform:translateY(-4px);border-color:rgba(63,108,181,.45)}\r\n.hstat .hn{\r\n  font-size:2rem;font-weight:900;color:var(--orange);line-height:1;\r\n  text-shadow:0 0 24px rgba(250,167,32,.45)}\r\n.hstat .hl{\r\n  font-size:.72rem;color:rgba(255,255,255,.65);\r\n  margin-top:.5rem;font-weight:600;letter-spacing:.04em;line-height:1.4;\r\n  text-shadow:0 1px 4px rgba(0,0,0,.5)}\r\n\r\n/* ── Stat highlight (slide 3) ─────────────────────────────────────────── */\r\n.reel-stat-highlight{\r\n  display:flex;align-items:center;gap:1.5rem;\r\n  margin-top:3rem;padding:1.4rem 1.8rem;\r\n  background:rgba(6,16,31,.5);border:1px solid rgba(250,167,32,.25);\r\n  border-radius:14px;backdrop-filter:blur(16px);max-width:620px;\r\n  box-shadow:0 4px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05)}\r\n.rsh-num{\r\n  font-size:3.2rem;font-weight:900;color:var(--orange);line-height:1;flex-shrink:0;\r\n  text-shadow:0 0 32px rgba(250,167,32,.5)}\r\n.rsh-txt{font-size:.9rem;color:rgba(255,255,255,.75);line-height:1.6;\r\n  text-shadow:0 1px 4px rgba(0,0,0,.5)}\r\n.rsh-txt strong{color:#fff}\r\n\r\n/* ── Bottom navigation ────────────────────────────────────────────────── */\r\n.reel-nav{\r\n  position:absolute;bottom:0;left:0;right:0;z-index:10;\r\n  display:flex;align-items:flex-end;gap:1.2rem;\r\n  padding:0 48px 2.2rem}\r\n.reel-dots{flex:1;display:flex;gap:1.5rem}\r\n.reel-dot{\r\n  flex:1;cursor:pointer;padding-bottom:.6rem;\r\n  border-bottom:1px solid rgba(255,255,255,.14);\r\n  transition:border-color .3s}\r\n.reel-dot.active{border-bottom-color:var(--orange)}\r\n.reel-dot-head{display:flex;align-items:center;gap:.55rem;margin-bottom:.5rem}\r\n.reel-dot-num{\r\n  font-size:.6rem;font-weight:800;letter-spacing:.1em;\r\n  color:rgba(255,255,255,.3);transition:color .3s}\r\n.reel-dot.active .reel-dot-num{color:var(--orange)}\r\n.reel-dot-lbl{\r\n  font-size:.75rem;font-weight:600;color:rgba(255,255,255,.45);\r\n  letter-spacing:.01em;transition:color .3s;white-space:nowrap}\r\n.reel-dot.active .reel-dot-lbl{color:#fff}\r\n.reel-dot-track{height:2px;background:rgba(255,255,255,.12);border-radius:2px;overflow:hidden}\r\n.reel-dot-fill{height:100%;width:0%;background:var(--orange);border-radius:2px;transition:none}\r\n\r\n/* ── Arrow buttons ────────────────────────────────────────────────────── */\r\n.reel-arrow{\r\n  width:44px;height:44px;border-radius:50%;flex-shrink:0;\r\n  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);\r\n  color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;\r\n  backdrop-filter:blur(10px);transition:all .2s;margin-bottom:.6rem}\r\n.reel-arrow:hover{background:var(--blue);border-color:var(--blue);transform:scale(1.08)}\r\n.reel-arrow svg{width:18px;height:18px}\r\n\r\n/* live-pulse */\r\n@keyframes live-pulse{0%,100%{box-shadow:0 0 0 0 rgba(250,167,32,.5)}60%{box-shadow:0 0 0 7px rgba(250,167,32,0)}}\r\n\r\n/* ═══ LOGO STRIP ══════════════════════════════════════════════════════════ */\r\n#strip{padding:4rem 0;background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden}\r\n.strip-label{text-align:center;font-size:1.15rem;color:var(--dark2);margin-bottom:2.5rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\r\n.marq-wrap{overflow:hidden;position:relative}\r\n.marq-wrap::before,.marq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:160px;z-index:1}\r\n.marq-wrap::before{left:0;background:linear-gradient(to right,#fff,transparent)}\r\n.marq-wrap::after{right:0;background:linear-gradient(to left,#fff,transparent)}\r\n.marq{display:flex;gap:2rem;animation:marq 40s linear infinite;width:max-content;align-items:center}\r\n.marq:hover{animation-play-state:paused}\r\n.logo-chip{\r\n  display:flex;align-items:center;gap:.9rem;\r\n  padding:1rem 2rem;border:1.5px solid var(--border);border-radius:12px;\r\n  font-size:1.1rem;font-weight:700;color:var(--dark2);white-space:nowrap;background:#fff;\r\n  letter-spacing:-.01em;transition:border-color .2s,box-shadow .2s,transform .2s}\r\n.logo-chip:hover{border-color:var(--blue);box-shadow:0 6px 22px rgba(63,108,181,.12);transform:translateY(-2px)}\r\n.logo-chip svg{width:28px;height:28px;flex-shrink:0;color:var(--blue);opacity:.85}\r\n@keyframes marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\r\n\r\n/* ═══ SERVICES ════════════════════════════════════════════════════════════ */\r\n#services{padding:6rem 0;background:var(--bg)}\r\n.sec-hd{margin-bottom:3.5rem;text-align:center;max-width:960px;margin-left:auto;margin-right:auto}\r\n.sec-hd h2{font-size:clamp(2rem,3vw,3rem);color:var(--dark);margin:.5rem 0 1rem}\r\n.sec-hd p{color:var(--gray);max-width:760px;line-height:1.7;margin:0 auto}\r\n.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2.4rem}\r\n.svc-card{background:#fff;border-radius:16px;border:1px solid var(--border);overflow:hidden;\r\n  transition:transform .25s,box-shadow .25s;cursor:pointer;display:flex;flex-direction:column}\r\n.svc-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(63,108,181,.13)}\r\n.svc-illus{height:190px;display:flex;align-items:center;justify-content:center;\r\n  background:#e8f4ff;position:relative;overflow:hidden}\r\n.svc-illus .svc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;\r\n  transition:transform .55s cubic-bezier(.22,.61,.36,1);z-index:0}\r\n.svc-card:hover .svc-img{transform:scale(1.07)}\r\n.svc-illus .svc-img-overlay{position:absolute;inset:0;\r\n  background:linear-gradient(to bottom,rgba(10,24,58,.08) 0%,rgba(10,24,58,.28) 100%);z-index:1}\r\n.svc-illus svg{width:120px;height:120px;filter:drop-shadow(0 4px 12px rgba(63,108,181,.18));position:relative;z-index:2}\r\n.svc-illus .svc-badge{position:absolute;top:12px;right:14px;background:var(--blue);color:#fff;\r\n  font-size:.65rem;font-weight:700;letter-spacing:.07em;padding:.25rem .6rem;border-radius:20px;\r\n  text-transform:uppercase;z-index:3;box-shadow:0 2px 8px rgba(0,0,0,.25)}\r\n.svc-body{padding:1.4rem 1.5rem 1.6rem;flex:1;display:flex;flex-direction:column}\r\n.svc-num2{font-size:.7rem;font-weight:800;color:var(--blue);letter-spacing:.12em;text-transform:uppercase;margin-bottom:.4rem;opacity:.7}\r\n.svc-title2{font-size:1.05rem;font-weight:800;color:var(--dark);margin:0 0 .8rem;line-height:1.3}\r\n.svc-desc2{font-size:.875rem;color:var(--gray);line-height:1.7;flex:1}\r\n.svc-link{display:inline-flex;align-items:center;gap:.35rem;margin-top:1.1rem;font-size:.8rem;\r\n  font-weight:700;color:var(--blue);text-decoration:none;transition:gap .2s}\r\n.svc-card:hover .svc-link{gap:.6rem}\r\n.svc-link svg{width:14px;height:14px}\r\n\r\n/* ═══ WHY INNOVSOL ════════════════════════════════════════════════════════ */\r\n#why{padding:6rem 0;background:#fff}\r\n.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}\r\n.why-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:0;\r\n  overflow:hidden;transition:transform .28s,box-shadow .28s;display:flex;flex-direction:column}\r\n.why-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(63,108,181,.14)}\r\n.why-img-wrap{height:160px;overflow:hidden;position:relative;flex-shrink:0}\r\n.why-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;\r\n  transition:transform .55s cubic-bezier(.22,.61,.36,1)}\r\n.why-card:hover .why-img-wrap img{transform:scale(1.07)}\r\n.why-img-wrap .why-img-tag{position:absolute;bottom:10px;left:12px;background:var(--blue);\r\n  color:#fff;font-size:.62rem;font-weight:700;letter-spacing:.08em;padding:.22rem .55rem;\r\n  border-radius:20px;text-transform:uppercase;box-shadow:0 2px 8px rgba(0,0,0,.3)}\r\n.why-body{padding:1.4rem 1.5rem 1.6rem;flex:1;border-top:3px solid var(--blue);\r\n  transition:border-top-color .25s}\r\n.why-card:hover .why-body{border-top-color:var(--orange)}\r\n.why-icon{width:44px;height:44px;border-radius:10px;background:var(--blue3);display:flex;align-items:center;\r\n  justify-content:center;margin-bottom:1rem;flex-shrink:0}\r\n.why-icon svg{width:22px;height:22px;color:var(--blue)}\r\n.why-card h3{font-size:.98rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}\r\n.why-card p{font-size:.86rem;color:var(--gray);line-height:1.65}\r\n\r\n/* ═══ METRICS ═════════════════════════════════════════════════════════════ */\r\n#metrics{padding:4rem 0;background:var(--blue)}\r\n.met-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0}\r\n.met-cell{\r\n  padding:2.2rem 1.8rem;\r\n  text-align:center;\r\n  position:relative;\r\n  border-right:1px solid rgba(255,255,255,.18)}\r\n.met-cell:last-child{border-right:none}\r\n.met-trend{display:none}\r\n.met-cell .mn{font-size:3.2rem;font-weight:900;color:#fff;display:block;line-height:1;\r\n  letter-spacing:-.04em;margin-bottom:.6rem}\r\n.met-cell .ml{font-size:.82rem;color:rgba(255,255,255,.7);line-height:1.5;font-weight:500;letter-spacing:.01em}\r\n.met-bar{width:48px;height:2px;background:rgba(255,255,255,.25);border-radius:2px;margin:1rem auto 0;overflow:hidden}\r\n.met-fill{height:100%;width:0;background:#fff;\r\n  border-radius:2px;animation:met-grow 1.4s cubic-bezier(.4,0,.2,1) .8s both}\r\n@keyframes met-grow{from{width:0}to{width:var(--w)}}\r\n\r\n/* ═══ INDUSTRIES ══════════════════════════════════════════════════════════ */\r\n#industries{padding:6rem 0;background:var(--bg)}\r\n.ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem;margin-top:2.5rem}\r\n.ind-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:0;cursor:pointer;\r\n  transition:transform .28s,box-shadow .28s;overflow:hidden;display:flex;flex-direction:column}\r\n.ind-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(63,108,181,.15)}\r\n.ind-img-wrap{height:145px;overflow:hidden;position:relative;flex-shrink:0}\r\n.ind-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;\r\n  transition:transform .55s cubic-bezier(.22,.61,.36,1)}\r\n.ind-card:hover .ind-img-wrap img{transform:scale(1.08)}\r\n.ind-img-wrap::after{content:'';position:absolute;inset:0;\r\n  background:linear-gradient(to bottom,transparent 55%,rgba(10,24,58,.45) 100%)}\r\n.ind-body{padding:1.1rem 1.2rem 1.3rem;flex:1;border-top:3px solid var(--blue);\r\n  transition:border-top-color .25s}\r\n.ind-card:hover .ind-body{border-top-color:var(--orange)}\r\n.ind-icon{width:44px;height:44px;border-radius:10px;background:var(--blue3);display:flex;align-items:center;justify-content:center;margin-bottom:.9rem;flex-shrink:0}\r\n.ind-icon svg{width:22px;height:22px;color:var(--blue)}\r\n.ind-card h3{font-size:.9rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}\r\n.ind-card p{font-size:.76rem;color:var(--gray);line-height:1.58}\r\n\r\n/* ═══ ENGAGEMENT ══════════════════════════════════════════════════════════ */\r\n/* ═══ ENGAGEMENT — sticky scroll storytelling ════════════════════════════ */\r\n\r\n/* Driver — shorter so cards respond faster (each card ≈ 60vh of scroll) */\r\n.eng-scroll-driver{height:calc(100vh + 240vh)}\r\n\r\n/* Driver is the scroll anchor — no offset needed */\r\n.eng-scroll-driver{scroll-margin-top:0}\r\n\r\n/* Section pins to viewport — padding-top clears the fixed navbar */\r\n.eng-section{\r\n  position:sticky;top:0;height:100vh;overflow:hidden;\r\n  background:linear-gradient(160deg,#f4f8ff 0%,#fff 65%);\r\n  display:flex;align-items:center;\r\n  padding-top:104px}\r\n\r\n/* Single centred column */\r\n.eng-wrapper{\r\n  display:flex;flex-direction:column;align-items:center;\r\n  text-align:center;width:100%;gap:1.8rem}\r\n\r\n/* Centred header */\r\n.eng-header{text-align:center}\r\n.eng-header h2{font-size:clamp(1.6rem,2.8vw,2.8rem);color:var(--dark);margin:.5rem 0 0;line-height:1.15}\r\n\r\n/* Horizontal step tabs */\r\n.eng-steplist{display:flex;flex-direction:row;gap:0;justify-content:center;flex-wrap:wrap}\r\n.eng-steplbl{\r\n  display:flex;align-items:center;gap:.55rem;\r\n  padding:.7rem 1.6rem;\r\n  border-bottom:3px solid var(--border);\r\n  font-size:.85rem;font-weight:600;color:var(--lgray);\r\n  cursor:pointer;transition:all .25s;text-decoration:none}\r\n.eng-steplbl .sn{font-size:.58rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--lgray);transition:color .25s;flex-shrink:0}\r\n.eng-steplbl.active{border-bottom-color:var(--orange);color:var(--dark)}\r\n.eng-steplbl.active .sn{color:var(--orange)}\r\n.eng-steplbl:hover{color:var(--dark);border-bottom-color:var(--blue)}\r\n\r\n/* Stage: centred, cards stacked */\r\n.eng-stage{position:relative;height:48vh;width:100%;max-width:760px;overflow:hidden}\r\n\r\n/* Cards — fast transitions */\r\n.eng-card{\r\n  position:absolute;inset:0;\r\n  display:flex;align-items:center;justify-content:center;\r\n  opacity:0;transform:translateY(45px);\r\n  transition:opacity .38s cubic-bezier(.22,.61,.36,1),transform .38s cubic-bezier(.22,.61,.36,1);\r\n  pointer-events:none}\r\n.eng-card.eng-active{opacity:1;transform:translateY(0);pointer-events:auto}\r\n.eng-card.eng-exit{opacity:0;transform:translateY(-35px);transition:opacity .28s ease,transform .28s ease}\r\n\r\n/* Ghost number watermark */\r\n.eng-ghost-num{\r\n  position:absolute;left:50%;top:50%;\r\n  transform:translate(-50%,-50%);\r\n  font-size:22rem;font-weight:900;color:var(--blue);opacity:.04;\r\n  line-height:1;pointer-events:none;user-select:none;\r\n  font-family:var(--font);letter-spacing:-.1em;white-space:nowrap}\r\n\r\n/* Card content — bold, centred, no box */\r\n.eng-card-body{position:relative;z-index:1;max-width:640px;text-align:center}\r\n\r\n.eng-card-tag{\r\n  display:inline-flex;align-items:center;justify-content:center;gap:.55rem;\r\n  font-size:.65rem;font-weight:800;letter-spacing:.15em;\r\n  text-transform:uppercase;color:var(--orange);margin-bottom:.9rem}\r\n.eng-card-tag::before{\r\n  content:'';display:inline-block;width:22px;height:3px;\r\n  background:var(--orange);border-radius:2px;flex-shrink:0}\r\n\r\n.eng-card-title{\r\n  font-size:clamp(2.8rem,5vw,5rem);font-weight:900;\r\n  color:var(--dark);letter-spacing:-.04em;line-height:.95;\r\n  margin:0 0 1.2rem}\r\n\r\n.eng-card-desc{\r\n  font-size:.98rem;color:var(--gray);\r\n  line-height:1.75;margin:0 0 1.5rem;font-weight:400}\r\n\r\n.eng-deliverable{display:flex;flex-direction:column;gap:.3rem;align-items:center}\r\n.eng-del-lbl{\r\n  font-size:.58rem;font-weight:800;letter-spacing:.14em;\r\n  text-transform:uppercase;color:var(--orange)}\r\n.eng-del-txt{font-size:.9rem;color:var(--dark2);font-weight:700}\r\n\r\n/* Progress dots — right side, vertical */\r\n.eng-progress{\r\n  position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);\r\n  display:flex;flex-direction:column;align-items:center;gap:.45rem}\r\n.eng-dot{\r\n  width:6px;height:6px;border-radius:50%;\r\n  background:var(--border);transition:all .3s;flex-shrink:0}\r\n.eng-dot.active{background:var(--orange);height:20px;border-radius:3px}\r\n.eng-scroll-lbl{\r\n  margin-top:.3rem;\r\n  font-size:.55rem;font-weight:700;letter-spacing:.14em;\r\n  text-transform:uppercase;color:var(--lgray);\r\n  writing-mode:vertical-rl;text-orientation:mixed}\r\n\r\n/* Pills row below the driver */\r\n.eng-pills-row{background:linear-gradient(160deg,#f4f8ff 0%,#fff 65%);padding:3rem 0 5rem}\r\n.eng-summary{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}\r\n.eng-sum-pill{\r\n  display:flex;align-items:center;gap:.6rem;background:#fff;\r\n  border:1.5px solid var(--border);border-radius:30px;\r\n  padding:.6rem 1.3rem;font-size:.83rem;color:var(--dark);font-weight:600;\r\n  box-shadow:0 2px 12px rgba(63,108,181,.06);transition:border-color .2s,box-shadow .2s}\r\n.eng-sum-pill:hover{border-color:var(--blue);box-shadow:0 4px 20px rgba(63,108,181,.12)}\r\n.eng-sum-pill svg{width:16px;height:16px;flex-shrink:0;color:var(--blue)}\r\n\r\n@media(max-width:860px){\r\n  .eng-scroll-driver{height:auto}\r\n  #engagement{position:relative;height:auto;padding:5rem 0}\r\n  .eng-wrapper{grid-template-columns:1fr;gap:2.5rem}\r\n  .eng-stage{height:auto;overflow:visible}\r\n  .eng-card{position:relative;opacity:1;transform:none;padding:2rem 0;pointer-events:auto}\r\n  .eng-card.eng-exit{opacity:1;transform:none}\r\n  .eng-ghost-num{display:none}\r\n  .eng-progress{display:none}\r\n}\r\n\r\n/* ═══ CASE STUDIES ════════════════════════════════════════════════════════ */\r\n#casestudies{padding:6rem 0;background:linear-gradient(135deg,var(--dark) 0%,#0D2147 100%)}\r\n#casestudies .sec-hd h2{color:#fff}\r\n#casestudies .sec-hd p{color:rgba(255,255,255,.6)}\r\n.cs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}\r\n.cs-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;\r\n  padding:1.8rem;transition:.3s;cursor:pointer}\r\n.cs-card:hover{background:rgba(63,108,181,.12);border-color:var(--blue);transform:translateY(-4px)}\r\n.cs-ind{font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.4)}\r\n.cs-type{font-size:.7rem;font-weight:700;color:var(--orange);margin-bottom:1rem}\r\n.cs-card h3{font-size:1.02rem;font-weight:700;color:#fff;line-height:1.38;margin-bottom:.55rem}\r\n.cs-det{font-size:.78rem;color:rgba(255,255,255,.38);margin-bottom:1.1rem;line-height:1.55}\r\n.cs-sep{height:1px;background:rgba(255,255,255,.08);margin-bottom:1rem}\r\n.cs-r1{font-size:.85rem;font-weight:700;color:var(--orange);margin-bottom:.35rem}\r\n.cs-r2{font-size:.85rem;font-weight:700;color:#7EC8F8}\r\n\r\n/* ═══ FDE TEAM ════════════════════════════════════════════════════════════ */\r\n#fde{padding:6rem 0;background:var(--bg)}\r\n.fde-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}\r\n.fde-lbl{font-size:.72rem;font-weight:800;letter-spacing:.14em;color:var(--orange);text-transform:uppercase;margin-bottom:.5rem}\r\n.fde-grid h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--dark);margin:.4rem 0 1.2rem}\r\n.fde-grid .lead{font-size:1rem;color:var(--gray);line-height:1.75;margin-bottom:.9rem}\r\n.fde-highlight{background:var(--blue3);border-left:4px solid var(--blue);border-radius:0 6px 6px 0;\r\n  padding:.9rem 1.2rem;font-size:.9rem;color:var(--dark2);margin:1.2rem 0;line-height:1.6}\r\n.fde-stages{margin:1.4rem 0;display:flex;flex-direction:column;gap:.65rem}\r\n.fde-stage{display:grid;grid-template-columns:88px 1fr;gap:1rem;align-items:center}\r\n.fde-wk{background:rgba(63,108,181,.12);color:var(--blue);font-size:.76rem;font-weight:800;\r\n  padding:.32rem .6rem;border-radius:5px;text-align:center;white-space:nowrap}\r\n.fde-act{font-size:.88rem;color:var(--dark2)}\r\n.fde-btns{display:flex;gap:.9rem;margin-top:1.6rem;flex-wrap:wrap}\r\n.stat-cards{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}\r\n.stat-card{background:#fff;border:1px solid var(--border);border-radius:10px;padding:1.8rem;\r\n  border-top:4px solid var(--blue);text-align:center;transition:.25s}\r\n.stat-card:nth-child(2n){border-top-color:var(--orange)}\r\n.stat-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(63,108,181,.1)}\r\n.stat-card .big{font-size:2.6rem;font-weight:800;color:var(--dark);line-height:1}\r\n.stat-card .sm{font-size:.8rem;color:var(--gray);margin-top:.5rem;line-height:1.45}\r\n\r\n/* ═══ INSIGHTS ════════════════════════════════════════════════════════════ */\r\n#insights{padding:6rem 0;background:#fff}\r\n.ins-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}\r\n.ins-card{border:1px solid var(--border);border-radius:10px;overflow:hidden;transition:.25s;cursor:pointer}\r\n.ins-card:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(63,108,181,.12);border-color:var(--blue)}\r\n.ins-top{height:130px;background:var(--bg2);padding:1.2rem;display:flex;flex-direction:column;gap:.5rem;position:relative}\r\n.ins-top::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(to right,var(--blue),var(--blue2))}\r\n.ins-tag{font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--blue)}\r\n.ins-date{font-size:.72rem;color:var(--lgray)}\r\n.ins-body{padding:1.4rem}\r\n.ins-body h3{font-size:.98rem;font-weight:700;color:var(--dark);line-height:1.4;margin-bottom:.7rem}\r\n.ins-body p{font-size:.82rem;color:var(--gray);line-height:1.65;margin-bottom:.9rem}\r\n.ins-link{font-size:.82rem;font-weight:700;color:var(--blue);display:inline-flex;align-items:center;gap:.3rem}\r\n.ins-link::after{content:'→';transition:transform .2s}\r\n.ins-card:hover .ins-link::after{transform:translateX(5px)}\r\n\r\n/* ═══ CAREERS ═════════════════════════════════════════════════════════════ */\r\n#careers{padding:6rem 0;background:var(--bg2)}\r\n.car-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:4rem;align-items:start}\r\n.car-grid h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--dark);margin:.4rem 0 1.1rem}\r\n.car-grid .lead{color:var(--gray);line-height:1.75;margin-bottom:1.5rem}\r\n.perks{display:flex;flex-direction:column;gap:.65rem;margin:1.2rem 0}\r\n.perk{display:flex;align-items:flex-start;gap:.7rem;font-size:.88rem;color:var(--dark2)}\r\n.pdot{width:7px;height:7px;border-radius:50%;background:var(--orange);margin-top:.5rem;flex-shrink:0}\r\n.roles{display:flex;flex-direction:column;gap:.75rem}\r\n.role{background:#fff;border:1px solid var(--border);border-radius:8px;padding:1rem 1.3rem;\r\n  display:flex;justify-content:space-between;align-items:center;transition:.22s;cursor:pointer}\r\n.role:hover{border-color:var(--blue);box-shadow:0 4px 18px rgba(63,108,181,.1);transform:translateX(4px)}\r\n.role-t{font-size:.92rem;font-weight:700;color:var(--dark)}\r\n.role-d{font-size:.77rem;color:var(--gray);margin-top:.15rem}\r\n.badge{font-size:.7rem;font-weight:800;color:#fff;background:var(--orange);padding:.28rem .65rem;border-radius:20px;white-space:nowrap}\r\n\r\n/* ═══ DUAL CTA ════════════════════════════════════════════════════════════ */\r\n#cta{padding:5rem 0;background:#fff}\r\n.cta-duo{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}\r\n.cta-l{background:linear-gradient(135deg,var(--dark) 0%,#0D2147 100%);border-radius:14px;padding:2.5rem;border-top:5px solid var(--blue)}\r\n.cta-r{background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 100%);border-radius:14px;padding:2.5rem;border-top:5px solid var(--orange)}\r\n.cta-l h3,.cta-r h3{font-size:1.5rem;color:#fff;margin:.3rem 0 1rem;line-height:1.25}\r\n.cta-l p,.cta-r p{color:rgba(255,255,255,.65);font-size:.9rem;margin-bottom:1.5rem;line-height:1.7}\r\n.cta-pill{margin-top:1.3rem;padding:.75rem 1rem;background:rgba(255,255,255,.07);border-radius:8px;\r\n  font-size:.8rem;color:rgba(255,255,255,.65);line-height:1.55;border:1px solid rgba(255,255,255,.1)}\r\n\r\n/* ═══ CONTACT ══════════════════════════════════════════════════════════════ */\r\n#contact{padding:6rem 0;background:linear-gradient(135deg,var(--dark) 0%,#0A2955 100%);position:relative;overflow:hidden}\r\n#contact::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;\r\n  background:radial-gradient(circle,rgba(63,108,181,.12),transparent 65%);right:-100px;bottom:-100px;pointer-events:none}\r\n.con-grid{display:grid;grid-template-columns:1fr 1.25fr;gap:4rem;align-items:start;position:relative;z-index:1}\r\n.con-left h2{font-size:clamp(1.8rem,3vw,2.5rem);color:#fff;margin:.5rem 0 1.2rem}\r\n.con-left p{color:rgba(255,255,255,.65);line-height:1.75;margin-bottom:1.8rem}\r\n.con-details{display:flex;flex-direction:column;gap:.9rem}\r\n.con-det{display:flex;align-items:center;gap:.8rem;font-size:.88rem;color:rgba(255,255,255,.75)}\r\n.con-icon{width:36px;height:36px;border-radius:50%;background:rgba(63,108,181,.2);\r\n  display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}\r\n.cform{background:#fff;border-radius:14px;padding:1.4rem}\r\n.cform h3{font-size:.9rem;font-weight:700;color:var(--dark);margin-bottom:.85rem;\r\n  padding-bottom:.5rem;border-bottom:1px solid var(--border)}\r\n.frow{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}\r\n.fg{display:flex;flex-direction:column;gap:.22rem;margin-bottom:.5rem}\r\n.fg label{font-size:.68rem;font-weight:700;color:var(--dark2)}\r\n.fg input,.fg select,.fg textarea{padding:.42rem .65rem;border:1.5px solid var(--border);border-radius:6px;\r\n  font-size:.78rem;font-family:var(--font);color:var(--dark);background:#fff;outline:none;transition:.2s}\r\n.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(63,108,181,.1)}\r\n.fg textarea{resize:vertical;min-height:58px}\r\n.fsub{width:100%;padding:.55rem;background:var(--blue);color:#fff;border:none;border-radius:7px;\r\n  font-size:.8rem;font-weight:700;cursor:pointer;transition:.2s;font-family:var(--font);margin-top:.15rem}\r\n.fsub:hover{background:var(--blue2);transform:translateY(-1px)}\r\n.fnote{font-size:.64rem;color:var(--lgray);margin-top:.4rem;text-align:center}\r\n\r\n/* ═══ FOOTER ══════════════════════════════════════════════════════════════ */\r\nfooter{background:#06101F;padding:3.5rem 0 1.5rem}\r\n.ft{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:2rem;padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,.05)}\r\n.ft-brand{display:flex;flex-direction:column;gap:.75rem}\r\n.ft-logo-img{\r\n  height:168px;width:auto;display:block;\r\n  background:#fff;\r\n  border-radius:10px;\r\n  padding:6px 14px;\r\n  box-shadow:0 4px 20px rgba(63,108,181,.45),0 1px 6px rgba(0,0,0,.3);\r\n  transition:box-shadow .3s,transform .3s}\r\n.ft-logo-img:hover{\r\n  box-shadow:0 8px 32px rgba(63,108,181,.6),0 2px 10px rgba(0,0,0,.35);\r\n  transform:translateY(-2px)}\r\n.ft-tagline{font-size:.78rem;color:rgba(255,255,255,.35);line-height:1.55;margin:0}\r\n.ft-email{font-size:.82rem;color:var(--blue);text-decoration:none}\r\n.ft-email:hover{color:var(--orange)}\r\n.fc h4{font-size:.75rem;font-weight:800;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem}\r\n.fc a{display:block;font-size:.79rem;color:rgba(255,255,255,.35);margin-bottom:.5rem;transition:color .2s}\r\n.fc a:hover{color:var(--orange)}\r\n.fb{display:flex;justify-content:space-between;align-items:center;padding-top:1.5rem;flex-wrap:wrap;gap:.5rem}\r\n.fb p,.fb a{font-size:.73rem;color:rgba(255,255,255,.22)}\r\n.fb a{transition:color .2s}.fb a:hover{color:rgba(255,255,255,.5)}\r\n.fb-links{display:flex;gap:1.5rem}\r\n\r\n/* ═══ EXTRAS ══════════════════════════════════════════════════════════════ */\r\n#totop{position:fixed;bottom:1.8rem;right:1.8rem;width:42px;height:42px;background:var(--blue);\r\n  color:#fff;border:none;border-radius:50%;font-size:1.2rem;cursor:pointer;\r\n  opacity:0;transform:scale(.7);transition:.3s;z-index:900;box-shadow:0 4px 16px rgba(63,108,181,.4)}\r\n#totop.on{opacity:1;transform:scale(1)}\r\n#totop:hover{background:var(--orange)}\r\n\r\n#toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(80px);\r\n  background:var(--dark);color:#fff;padding:.9rem 1.6rem;border-radius:8px;font-size:.88rem;\r\n  font-weight:600;opacity:0;transition:.4s;z-index:9999;border-bottom:3px solid var(--orange);\r\n  box-shadow:0 8px 24px rgba(0,0,0,.3);white-space:nowrap}\r\n#toast.on{opacity:1;transform:translateX(-50%) translateY(0)}\r\n\r\n\r\n/* ═══ AI SHOWCASE ══════════════════════════════════════════════════════════ */\r\n#showcase{position:relative;min-height:92vh;overflow:hidden;background:#0a1835;\r\n  display:flex;align-items:center;justify-content:center}\r\n.sc-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.64;z-index:0}\r\n.sc-overlay{position:absolute;inset:0;z-index:1;\r\n  background:linear-gradient(to bottom,rgba(10,24,58,.52) 0%,rgba(10,24,58,.08) 28%,rgba(10,24,58,.08) 68%,rgba(10,24,58,.65) 100%)}\r\n.sc-content{position:relative;z-index:2;text-align:center;max-width:860px;padding:0 2rem}\r\n.sc-label{display:inline-flex;align-items:center;gap:.6rem;font-size:.72rem;font-weight:800;\r\n  letter-spacing:.18em;text-transform:uppercase;color:#7EC8F8;margin-bottom:1.6rem}\r\n.sc-label-line{width:32px;height:1.5px;background:#7EC8F8;opacity:.6}\r\n.sc-h1{font-size:clamp(2.2rem,5.5vw,4.2rem);font-weight:900;color:#fff;line-height:1.05;\r\n  margin-bottom:1.6rem;letter-spacing:-.02em}\r\n.sc-h1 em{font-style:normal;\r\n  background:linear-gradient(90deg,#3f6cb5,#2d5294,#3f6cb5);background-size:200%;\r\n  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;\r\n  animation:shimmer 3s linear infinite}\r\n@keyframes shimmer{0%{background-position:0%}100%{background-position:200%}}\r\n.sc-sub{font-size:1.1rem;color:rgba(255,255,255,.65);line-height:1.75;max-width:640px;\r\n  margin:0 auto 2.6rem}\r\n.sc-caps{display:flex;flex-wrap:wrap;justify-content:center;gap:.65rem;margin-bottom:2.8rem}\r\n.sc-cap{padding:.42rem 1rem;border:1px solid rgba(63,108,181,.45);border-radius:30px;\r\n  font-size:.75rem;font-weight:700;color:rgba(255,255,255,.75);background:rgba(63,108,181,.1);\r\n  backdrop-filter:blur(6px);letter-spacing:.04em}\r\n.sc-stats{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;margin-bottom:2.8rem}\r\n.sc-stat{text-align:center}\r\n.sc-stat-val{font-size:2.4rem;font-weight:900;color:#fff;line-height:1;\r\n  background:linear-gradient(135deg,#fff,#7EC8F8);-webkit-background-clip:text;\r\n  -webkit-text-fill-color:transparent;background-clip:text}\r\n.sc-stat-lbl{font-size:.68rem;color:rgba(255,255,255,.45);letter-spacing:.08em;\r\n  text-transform:uppercase;margin-top:.3rem;font-weight:600}\r\n.sc-cta{display:inline-flex;align-items:center;gap:.7rem;background:linear-gradient(135deg,#3f6cb5,#2d5294);\r\n  color:#fff;font-weight:800;font-size:.92rem;padding:.85rem 2rem;border-radius:50px;\r\n  text-decoration:none;box-shadow:0 8px 32px rgba(63,108,181,.4);transition:.25s;letter-spacing:.02em}\r\n.sc-cta:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(63,108,181,.55)}\r\n.sc-cta-arrow{font-size:1.1rem;transition:transform .25s}\r\n.sc-cta:hover .sc-cta-arrow{transform:translateX(5px)}\r\n/* cinematic sequential reveal animation */\r\n@keyframes scReveal{\r\n  from{opacity:0;transform:translateY(38px);filter:blur(4px)}\r\n  to{opacity:1;transform:none;filter:none}\r\n}\r\n.sc-seq{opacity:0}\r\n#showcase.sc-go .sc-seq{animation:scReveal .75s cubic-bezier(.22,.61,.36,1) forwards}\r\n#showcase.sc-go .sc-d1{animation-delay:.1s}\r\n#showcase.sc-go .sc-d2{animation-delay:.5s}\r\n#showcase.sc-go .sc-d3{animation-delay:.95s}\r\n#showcase.sc-go .sc-d4{animation-delay:1.4s}\r\n#showcase.sc-go .sc-d5{animation-delay:1.8s}\r\n#showcase.sc-go .sc-d6{animation-delay:2.2s}\r\n#showcase.sc-go .sc-d7{animation-delay:2.65s}\r\n#showcase.sc-go .sc-d8{animation-delay:3.1s}\r\n@media(max-width:768px){\r\n  .sc-stats{gap:1.5rem}\r\n  .sc-stat-val{font-size:1.8rem}\r\n}\r\n/* ═══ RESPONSIVE ══════════════════════════════════════════════════════════ */\r\n@media(max-width:1024px){\r\n  .hero-inner{flex-direction:column;gap:2rem}\r\n\r\n  .why-grid{grid-template-columns:repeat(2,1fr)}\r\n  .ind-grid{grid-template-columns:repeat(2,1fr)}\r\n  .svc-grid{grid-template-columns:repeat(2,1fr)}\r\n  .met-grid{grid-template-columns:repeat(3,1fr)}\r\n  .ft{grid-template-columns:1fr 1fr;gap:2.5rem}\r\n}\r\n@media(max-width:768px){\r\n  .container{padding:0 24px}\r\n  .nav-links,.nav-right .btn-outline-blue{display:none}\r\n  .ham{display:flex}\r\n  .mob-nav.open{display:flex}\r\n  .svc-grid{grid-template-columns:1fr}\r\n  .fde-grid,.car-grid,.con-grid,.cta-duo{grid-template-columns:1fr}\r\n  .cs-grid,.ins-grid{grid-template-columns:1fr}\r\n  .stat-cards{grid-template-columns:1fr 1fr}\r\n  .hero-stats{grid-template-columns:repeat(2,1fr);max-width:100%}\r\n}\r\n@media(max-width:480px){\r\n  .met-grid{grid-template-columns:repeat(2,1fr)}\r\n  .ind-grid{grid-template-columns:1fr 1fr}\r\n  .frow{grid-template-columns:1fr}\r\n  .ft{grid-template-columns:1fr}\r\n}\r\n";
const body = `\r
\r
<!-- ══ NAVBAR ════════════════════════════════════════════════════════════ -->\r
<nav id="nav">\r
  <div class="container nav-wrap">\r
    <a href="#home"><img src="/images/logo.png" alt="Innovsol" style="height:198px;width:auto"/></a>\r
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
      <a href="#contact" class="btn btn-outline-blue" style="font-size:.9rem;padding:.6rem 1.3rem">Contact Us</a>\r
      <a href="#contact" class="btn btn-orange" style="font-size:.9rem;padding:.6rem 1.3rem">Book a Strategy Call</a>\r
      <button class="ham" id="ham" onclick="toggleMob()"><span></span><span></span><span></span></button>\r
    </div>\r
  </div>\r
  <div class="mob-nav" id="mobNav">\r
    <a href="#home" onclick="toggleMob()">Home</a>\r
    <a href="#services" onclick="toggleMob()">Services</a>\r
    <a href="#industries" onclick="toggleMob()">Industries</a>\r
    <a href="#casestudies" onclick="toggleMob()">Case Studies</a>\r
    <a href="#fde" onclick="toggleMob()">FDE Team</a>\r
    <a href="#insights" onclick="toggleMob()">Insights</a>\r
    <a href="#careers" onclick="toggleMob()">Careers</a>\r
    <a href="#contact" onclick="toggleMob()">Contact Us</a>\r
  </div>\r
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
  <!-- Slide counter top-right -->\r
  <div class="reel-counter">\r
    <span class="reel-c-cur">01</span>\r
    <span class="reel-c-sep">/</span>\r
    <span class="reel-c-tot">04</span>\r
  </div>\r
\r
  <!-- Slide content -->\r
  <div class="reel-slides">\r
\r
    <!-- 01 — Our Mission -->\r
    <div class="reel-slide reel-active" data-idx="0">\r
      <div class="container">\r
        <div class="reel-inner">\r
          <div class="reel-eyebrow">Our Mission</div>\r
          <h1>Elevate enterprise productivity<br><em>measurably</em> by embedding AI<br>where it matters most.</h1>\r
          <div class="reel-btns">\r
            <a href="#contact" class="btn btn-orange btn-hero-primary">Book a Strategy Call &rarr;</a>\r
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
            <a href="#contact" class="btn btn-orange btn-hero-primary">Book a Strategy Call &rarr;</a>\r
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
        <h2>Discover. Design. Deploy. Scale.</h2>\r
      </div>\r
\r
      <!-- ── Horizontal step tabs ───────────────────────────────────────── -->\r
      <nav class="eng-steplist">\r
        <a class="eng-steplbl active" data-phase="0"><span class="sn">01</span>Discover</a>\r
        <a class="eng-steplbl" data-phase="1"><span class="sn">02</span>Design</a>\r
        <a class="eng-steplbl" data-phase="2"><span class="sn">03</span>Deploy</a>\r
        <a class="eng-steplbl" data-phase="3"><span class="sn">04</span>Scale</a>\r
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
          <a href="#contact" class="btn btn-orange">Book a Strategy Call &rarr;</a>\r
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
<!-- ══ CONTACT ═════════════════════════════════════════════════════════════ -->\r
<section id="contact">\r
  <div class="container">\r
    <div class="con-grid">\r
      <div class="fi-left">\r
        <div class="section-label" style="color:var(--blue)">Get in Touch</div>\r
        <h2>Let's Talk About Your AI Journey.</h2>\r
        <p>Whether you're exploring AI for the first time or ready to scale an existing programme, a conversation with our team is the fastest way to understand what's possible for your organisation.</p>\r
        <div class="con-details">\r
          <div class="con-det"><span class="con-icon">✉️</span><span><a href="mailto:hello@innovsol.ai" style="color:inherit;text-decoration:none">hello@innovsol.ai</a></span></div>\r
          <div class="con-det"><span class="con-icon">📞</span><span><a href="tel:+919582799988" style="color:inherit;text-decoration:none">+91 95827 99988</a></span></div>\r
          <div class="con-det"><span class="con-icon">⚡</span><span>Strategy calls scheduled within 5 business days</span></div>\r
          <div class="con-det"><span class="con-icon">🔒</span><span>Enterprise-grade security · GDPR compliant</span></div>\r
          <div class="con-det"><span class="con-icon">🌍</span><span>Serving clients across North America, Europe &amp; Asia-Pacific</span></div>\r
        </div>\r
      </div>\r
      <div class="cform fi-right">\r
        <h3>Send Us a Message</h3>\r
        <form id="cform" onsubmit="sendForm(event)">\r
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
  </div>\r
</section>\r
\r
<!-- ══ FOOTER ══════════════════════════════════════════════════════════════ -->\r
<footer>\r
  <div class="container">\r
    <div class="ft">\r
      <div class="ft-brand">\r
        <a href="#home"><img src="/images/logo.png" alt="Innovsol" class="ft-logo-img"/></a>\r
        <p class="ft-tagline">Enterprise AI. Deployed,<br>Not Just Discussed.</p>\r
        <a class="ft-email" href="mailto:hello@innovsol.ai">hello@innovsol.ai</a>\r
      </div>\r
      <div class="fc"><h4>Company</h4><a href="#why">About Us</a><a href="#why">Mission &amp; Vision</a><a href="#fde">FDE Team</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div>\r
      <div class="fc"><h4>Services</h4><a href="#services">AI Strategy</a><a href="#services">AI Agents</a><a href="#services">FDE Engineering</a><a href="#services">Enterprise AI Infrastructure</a><a href="#services">GenAI Solutions</a><a href="#services">AI Product Eng</a></div>\r
      <div class="fc"><h4>Industries</h4><a href="#industries">Banking</a><a href="#industries">Manufacturing</a><a href="#industries">Healthcare</a><a href="#industries">Retail</a><a href="#industries">Insurance</a><a href="#industries">GCCs</a></div>\r
      <div class="fc"><h4>Resources</h4><a href="#insights">Insights / Blog</a><a href="#casestudies">Case Studies</a><a href="#contact">AI Readiness Guide</a><a href="#contact">Webinars</a></div>\r
    </div>\r
    <div class="fb">\r
      <p>&copy; 2026 Innovsol. All Rights Reserved. &nbsp;|&nbsp; Innovate . Disrupt . Transform</p>\r
      <div class="fb-links"><a href="#">Privacy Policy</a><a href="#">Cookie Policy</a><a href="#">Terms of Use</a></div>\r
    </div>\r
  </div>\r
</footer>\r
\r
<button id="totop" onclick="window.scrollTo({top:0,behavior:'smooth'})">&#8679;</button>\r
<div id="toast">Message sent! We'll be in touch within 1 business day. ✓</div>\r
\r
<!-- ══ JAVASCRIPT ══════════════════════════════════════════════════════════ -->\r
\r
`;
const script = "\r\n// ── Hero Reel — 4-slide enterprise video carousel ────────────────────────\r\n(function () {\r\n  // Guard: prevent double-init from React StrictMode's double effect invocation\r\n  if (window.__reelInit) return;\r\n  window.__reelInit = true;\r\n\r\n  const videos  = Array.from(document.querySelectorAll('.reel-video'));\r\n  const slides  = Array.from(document.querySelectorAll('.reel-slide'));\r\n  const curEl   = document.querySelector('.reel-c-cur');\r\n  const prevBtn = document.querySelector('.reel-prev');\r\n  const nextBtn = document.querySelector('.reel-next');\r\n\r\n  if (!videos.length) return;\r\n\r\n  let current       = 0;\r\n  let transitioning = false;\r\n  let fallback      = null;\r\n\r\n  // Hard fallback — advance after 12s max per slide regardless of video state\r\n  function resetFallback () {\r\n    clearTimeout(fallback);\r\n    fallback = setTimeout(() => goTo(current + 1), 12000);\r\n  }\r\n\r\n  function goTo (idx) {\r\n    if (transitioning) return;\r\n    const next = ((idx % videos.length) + videos.length) % videos.length;\r\n    if (next === current) return;\r\n    transitioning = true;\r\n\r\n    clearTimeout(fallback);\r\n    const prev = current;\r\n    current = next;\r\n\r\n    // Videos: crossfade\r\n    videos[prev].classList.remove('reel-active');\r\n    videos[prev].pause();\r\n    videos[current].classList.add('reel-active');\r\n    videos[current].muted = true;\r\n    videos[current].currentTime = 0;\r\n    videos[current].play().catch(() => {});\r\n\r\n    // Slides: fade out old, fade in new\r\n    slides[prev].classList.remove('reel-active');\r\n    slides[prev].classList.add('reel-exit');\r\n    slides[current].classList.add('reel-active');\r\n\r\n    // Counter\r\n    if (curEl) curEl.textContent = String(current + 1).padStart(2, '0');\r\n\r\n    setTimeout(() => {\r\n      slides[prev].classList.remove('reel-exit');\r\n      transitioning = false;\r\n      resetFallback();\r\n    }, 950);\r\n  }\r\n\r\n  // Three layers of advance detection (most → least reliable)\r\n  videos.forEach((v, i) => {\r\n    // 1. ended event (primary)\r\n    v.addEventListener('ended', () => {\r\n      if (i === current) goTo(current + 1);\r\n    });\r\n    // 2. timeupdate: advance when 97% through (catches ended-event failures)\r\n    v.addEventListener('timeupdate', () => {\r\n      if (i !== current || !v.duration) return;\r\n      if (v.currentTime / v.duration >= 0.97) goTo(current + 1);\r\n    });\r\n    // 3. error: skip broken video immediately\r\n    v.addEventListener('error', () => {\r\n      if (i === current) goTo(current + 1);\r\n    });\r\n  });\r\n\r\n  // Arrow clicks\r\n  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));\r\n  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));\r\n\r\n  // Keyboard navigation\r\n  document.addEventListener('keydown', e => {\r\n    if (e.key === 'ArrowRight') goTo(current + 1);\r\n    if (e.key === 'ArrowLeft')  goTo(current - 1);\r\n  });\r\n\r\n  // Init — React's dangerouslySetInnerHTML doesn't trigger browser autoplay;\r\n  // we must call .play() programmatically after the DOM has settled.\r\n  function tryPlay () {\r\n    const v = videos[0];\r\n    if (!v) return;\r\n    v.muted = true;          // ensure muted flag is set in DOM\r\n    v.currentTime = 0;\r\n    v.playbackRate = 2.5;    // first video plays 2.5× faster\r\n    const p = v.play();\r\n    if (p !== undefined) {\r\n      p.catch(() => {\r\n        // Browser blocked autoplay — retry on first user gesture\r\n        const resume = () => {\r\n          v.play().catch(() => {});\r\n          document.removeEventListener('click',      resume);\r\n          document.removeEventListener('touchstart', resume);\r\n          document.removeEventListener('keydown',    resume);\r\n        };\r\n        document.addEventListener('click',      resume, { once: true });\r\n        document.addEventListener('touchstart', resume, { once: true });\r\n        document.addEventListener('keydown',    resume, { once: true });\r\n      });\r\n    }\r\n  }\r\n\r\n  // Wait two animation frames so React's paint + browser layout are complete\r\n  requestAnimationFrame(() => requestAnimationFrame(() => {\r\n    tryPlay();\r\n    resetFallback();\r\n  }));\r\n})();\r\n\r\n// ── Navbar scroll shadow ─────────────────────────────────────────────────\r\nconst nav = document.getElementById('nav');\r\nwindow.addEventListener('scroll', () => {\r\n  nav.classList.toggle('sc', window.scrollY > 60);\r\n}, { passive: true });\r\n\r\n// ── Active nav link ──────────────────────────────────────────────────────\r\nconst navLinks   = document.querySelectorAll('.nav-links a');\r\nconst allSections = Array.from(document.querySelectorAll('section[id], div[id].eng-scroll-driver'));\r\n\r\nfunction updateActiveNav () {\r\n  const offset = 120; // navbar height + buffer\r\n  let current  = '';\r\n  allSections.forEach(sec => {\r\n    if (window.scrollY >= sec.offsetTop - offset) current = sec.id;\r\n  });\r\n  navLinks.forEach(a => {\r\n    a.classList.toggle('act', a.getAttribute('href') === '#' + current);\r\n  });\r\n}\r\n\r\nwindow.addEventListener('scroll', updateActiveNav, { passive: true });\r\nupdateActiveNav(); // run once on load\r\n\r\n// ── Showcase video: autoplay ─────────────────────────────────────────────\r\nconst showcase = document.getElementById('showcase');\r\nconst scVid = showcase && showcase.querySelector('.sc-video');\r\nif (scVid) {\r\n  scVid.play().catch(() => {});\r\n  scVid.addEventListener('error', function(){\r\n    const sources = scVid.querySelectorAll('source');\r\n    let idx = 0;\r\n    const tryNext = () => {\r\n      if (idx >= sources.length) return;\r\n      scVid.src = sources[idx++].src;\r\n      scVid.load();\r\n      scVid.play().catch(tryNext);\r\n    };\r\n    tryNext();\r\n  });\r\n  document.addEventListener('click', () => { if (scVid.paused) scVid.play().catch(()=>{}); }, { once: true });\r\n}\r\n\r\n// ── Showcase text reveal: add sc-go when section enters view ─────────────\r\nif (showcase) {\r\n  const scIO = new IntersectionObserver((entries) => {\r\n    entries.forEach(e => {\r\n      if (e.isIntersecting) {\r\n        showcase.classList.add('sc-go');\r\n        scIO.unobserve(showcase);\r\n      }\r\n    });\r\n  }, { threshold: 0.15 });\r\n  scIO.observe(showcase);\r\n}\r\n\r\n// ── Auto-assign slow left/right animation to all section titles ──────────\r\n(function () {\r\n  const sections = document.querySelectorAll(\r\n    '#services,#why,#industries,#engagement,#casestudies,#fde,#insights,#careers,#contact'\r\n  );\r\n  sections.forEach((sec, idx) => {\r\n    const fromLeft  = idx % 2 === 0;   // alternate direction per section\r\n    const labels = sec.querySelectorAll('.section-label');\r\n    const h2s    = sec.querySelectorAll('h2');\r\n\r\n    labels.forEach(el => {\r\n      el.classList.remove('fi','fi-left','fi-right');\r\n      el.classList.add(fromLeft ? 'fi-left' : 'fi-right', 'title-label');\r\n    });\r\n    h2s.forEach(el => {\r\n      el.classList.remove('fi','fi-left','fi-right');\r\n      // h2 comes from opposite side to label for a spreading effect\r\n      el.classList.add(fromLeft ? 'fi-right' : 'fi-left', 'title-h2');\r\n    });\r\n  });\r\n})();\r\n\r\n// ── Intersection observer: fade-in animations ────────────────────────────\r\nconst ioFade = new IntersectionObserver((entries) => {\r\n  entries.forEach(e => {\r\n    if (!e.isIntersecting) return;\r\n    e.target.classList.add('on');\r\n    e.target.querySelectorAll('[data-count]').forEach(animNum);\r\n    ioFade.unobserve(e.target);\r\n  });\r\n}, { threshold: 0.12 });\r\n\r\ndocument.querySelectorAll('.fi,.fi-left,.fi-right').forEach(el => ioFade.observe(el));\r\n\r\n// ── Engagement sticky scroll — page scroll drives card transitions ────────\r\n(function () {\r\n  const driver = document.getElementById('engagement');\r\n  const cards  = Array.from(document.querySelectorAll('.eng-card'));\r\n  const steps  = Array.from(document.querySelectorAll('.eng-steplbl'));\r\n  const dots   = Array.from(document.querySelectorAll('.eng-dot'));\r\n  if (!driver || !cards.length) return;\r\n\r\n  let activeIdx  = 0;\r\n  let exiting    = false;\r\n\r\n  function getIdx () {\r\n    const rect      = driver.getBoundingClientRect();\r\n    const scrolled  = Math.max(0, -rect.top);\r\n    const available = driver.offsetHeight - window.innerHeight;\r\n    if (available <= 0) return 0;\r\n    const progress  = Math.min(1, scrolled / available);\r\n    return Math.min(cards.length - 1, Math.floor(progress * cards.length));\r\n  }\r\n\r\n  function activate (idx) {\r\n    if (idx === activeIdx) return;\r\n    const prev = activeIdx;\r\n    activeIdx  = idx;\r\n\r\n    // Exit previous\r\n    cards[prev].classList.remove('eng-active');\r\n    cards[prev].classList.add('eng-exit');\r\n    setTimeout(() => cards[prev]?.classList.remove('eng-exit'), 450);\r\n\r\n    // Enter next\r\n    cards[idx].classList.add('eng-active');\r\n\r\n    // Sync sidebar steps\r\n    steps.forEach((s, i) => s.classList.toggle('active', i === idx));\r\n\r\n    // Sync progress dots\r\n    dots.forEach((d, i) => d.classList.toggle('active', i === idx));\r\n  }\r\n\r\n  window.addEventListener('scroll', () => activate(getIdx()), { passive: true });\r\n  activate(getIdx()); // init\r\n\r\n  // Click sidebar step → scroll to that card's position in the driver\r\n  steps.forEach((s, i) => {\r\n    s.addEventListener('click', (ev) => {\r\n      ev.preventDefault();\r\n      const available = driver.offsetHeight - window.innerHeight;\r\n      const target    = driver.getBoundingClientRect().top + window.scrollY\r\n                        + (i / cards.length) * available;\r\n      window.scrollTo({ top: target, behavior: 'smooth' });\r\n    });\r\n  });\r\n})();\r\n\r\n// ── Staggered grid children ──────────────────────────────────────────────\r\nconst ioGrid = new IntersectionObserver((entries) => {\r\n  entries.forEach(e => {\r\n    if (!e.isIntersecting) return;\r\n    [...e.target.children].forEach((c, i) =>\r\n      setTimeout(() => c.classList.add('on'), i * 90));\r\n    ioGrid.unobserve(e.target);\r\n  });\r\n}, { threshold: 0.08 });\r\n\r\ndocument.querySelectorAll('.why-grid,.ind-grid,.cs-grid,.ins-grid,.roles,.svc-grid').forEach(grid => {\r\n  ioGrid.observe(grid);\r\n});\r\n\r\n// ── Number counter animation ─────────────────────────────────────────────\r\nfunction animNum(el) {\r\n  const target = +el.getAttribute('data-count');\r\n  if (isNaN(target)) return;\r\n  const pfx = el.getAttribute('data-pfx') || '';\r\n  const sfx = el.getAttribute('data-sfx') || '';\r\n  const dur = 1800, start = performance.now();\r\n  const tick = now => {\r\n    const t = Math.min((now - start) / dur, 1);\r\n    const ease = 1 - Math.pow(1 - t, 3);\r\n    el.textContent = pfx + Math.round(ease * target) + sfx;\r\n    if (t < 1) requestAnimationFrame(tick);\r\n  };\r\n  requestAnimationFrame(tick);\r\n}\r\n\r\n// ── Contact form ─────────────────────────────────────────────────────────\r\nfunction sendForm(e) {\r\n  e.preventDefault();\r\n  const btn = e.target.querySelector('.fsub');\r\n  btn.textContent = 'Sending...'; btn.disabled = true;\r\n  setTimeout(() => {\r\n    btn.textContent = 'Send Message →'; btn.disabled = false;\r\n    e.target.reset();\r\n    const t = document.getElementById('toast');\r\n    t.classList.add('on');\r\n    setTimeout(() => t.classList.remove('on'), 4500);\r\n  }, 1300);\r\n}\r\n\r\n// ── Fire hero stats on load ──────────────────────────────────────────────\r\nwindow.addEventListener('load', () => {\r\n  document.querySelectorAll('.hero-txt .hn[data-count]').forEach(el => animNum(el));\r\n});\r\n";
function Index() {
  reactExports.useEffect(() => {
    const el = document.createElement("script");
    el.type = "text/javascript";
    el.text = script;
    document.body.appendChild(el);
    return () => {
      el.remove();
      window.__reelInit = false;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
      __html: styles
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: {
      __html: body
    } })
  ] });
}
export {
  Index as component
};
