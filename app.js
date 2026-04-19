// ══════════════════════════════════════════════════════════════════
//  ECO GUARD TECHNOLOGIES  –  Pipeline Security Monitor
//  Pure Vanilla JS/SVG — no external dependencies
// ══════════════════════════════════════════════════════════════════

// ─── THEMES ───────────────────────────────────────────────────────
const THEMES = {
  dark: {
    name:"Dark Ocean", icon:"dark", swatch:"#22d3ee",
    bg:"#060f1e", surface:"rgba(15,30,54,0.6)", surfaceHover:"rgba(15,30,54,0.9)",
    border:"rgba(34,211,238,0.18)", borderStrong:"rgba(34,211,238,0.35)",
    header:"rgba(15,30,54,0.97)", headerBorder:"rgba(34,211,238,0.2)",
    text:"#ffffff", textMuted:"rgba(34,211,238,0.55)", textFaint:"rgba(34,211,238,0.35)",
    accent:"#22d3ee", accentBg:"rgba(34,211,238,0.1)", accentBgHover:"rgba(34,211,238,0.2)",
    navActive:"#22d3ee", navInactive:"rgba(34,211,238,0.45)",
    inputBg:"rgba(5,14,26,0.8)", inputBorder:"rgba(34,211,238,0.25)",
    cardGrid:"#060f1e", gridLine:"#0f1e36", tooltipBg:"#0a1628",
  },
  army: {
    name:"Army Green", icon:"army", swatch:"#4ade80",
    bg:"#0d1a0e", surface:"rgba(20,40,22,0.7)", surfaceHover:"rgba(20,40,22,0.95)",
    border:"rgba(74,222,128,0.18)", borderStrong:"rgba(74,222,128,0.35)",
    header:"rgba(13,26,14,0.97)", headerBorder:"rgba(74,222,128,0.2)",
    text:"#f0fdf4", textMuted:"rgba(74,222,128,0.6)", textFaint:"rgba(74,222,128,0.35)",
    accent:"#4ade80", accentBg:"rgba(74,222,128,0.1)", accentBgHover:"rgba(74,222,128,0.2)",
    navActive:"#4ade80", navInactive:"rgba(74,222,128,0.45)",
    inputBg:"rgba(8,16,9,0.9)", inputBorder:"rgba(74,222,128,0.25)",
    cardGrid:"#0d1a0e", gridLine:"#132615", tooltipBg:"#0d1a0e",
  },
  amber: {
    name:"Amber Alert", icon:"amber", swatch:"#fbbf24",
    bg:"#1a1200", surface:"rgba(40,28,0,0.7)", surfaceHover:"rgba(40,28,0,0.95)",
    border:"rgba(251,191,36,0.18)", borderStrong:"rgba(251,191,36,0.35)",
    header:"rgba(26,18,0,0.97)", headerBorder:"rgba(251,191,36,0.2)",
    text:"#fffbeb", textMuted:"rgba(251,191,36,0.6)", textFaint:"rgba(251,191,36,0.35)",
    accent:"#fbbf24", accentBg:"rgba(251,191,36,0.1)", accentBgHover:"rgba(251,191,36,0.2)",
    navActive:"#fbbf24", navInactive:"rgba(251,191,36,0.45)",
    inputBg:"rgba(13,9,0,0.9)", inputBorder:"rgba(251,191,36,0.25)",
    cardGrid:"#1a1200", gridLine:"#241900", tooltipBg:"#1a1200",
  },
  white: {
    name:"Clean White", icon:"white", swatch:"#0f76a8",
    bg:"#f8fafc", surface:"rgba(255,255,255,0.9)", surfaceHover:"rgba(255,255,255,1)",
    border:"rgba(15,118,168,0.15)", borderStrong:"rgba(15,118,168,0.4)",
    header:"rgba(255,255,255,0.98)", headerBorder:"rgba(15,118,168,0.15)",
    text:"#0f172a", textMuted:"rgba(15,118,168,0.7)", textFaint:"rgba(15,118,168,0.4)",
    accent:"#0f76a8", accentBg:"rgba(15,118,168,0.08)", accentBgHover:"rgba(15,118,168,0.15)",
    navActive:"#0f76a8", navInactive:"rgba(15,118,168,0.45)",
    inputBg:"#f1f5f9", inputBorder:"rgba(15,118,168,0.25)",
    cardGrid:"#f8fafc", gridLine:"#e2e8f0", tooltipBg:"#ffffff",
  },
  slate: {
    name:"Slate Pro", icon:"slate", swatch:"#94a3b8",
    bg:"#0f172a", surface:"rgba(30,41,59,0.7)", surfaceHover:"rgba(30,41,59,0.95)",
    border:"rgba(148,163,184,0.18)", borderStrong:"rgba(148,163,184,0.35)",
    header:"rgba(15,23,42,0.97)", headerBorder:"rgba(148,163,184,0.18)",
    text:"#f1f5f9", textMuted:"rgba(148,163,184,0.75)", textFaint:"rgba(148,163,184,0.4)",
    accent:"#94a3b8", accentBg:"rgba(148,163,184,0.1)", accentBgHover:"rgba(148,163,184,0.2)",
    navActive:"#e2e8f0", navInactive:"rgba(148,163,184,0.5)",
    inputBg:"rgba(15,23,42,0.9)", inputBorder:"rgba(148,163,184,0.2)",
    cardGrid:"#0f172a", gridLine:"#1e293b", tooltipBg:"#1e293b",
  },
};

// ─── USERS ────────────────────────────────────────────────────────
const USERS = [
  { email:"AmoahAnshel@ecoguard.com",            password:"UEBO529325", role:"admin",    name:"Amoah Anshel",                zone:"ALL" },
  { email:"AhwirenAgnesAbrefi@ecoguard.com",     password:"UEB0532325", role:"engineer", name:"Ahwiren Agnes Abrefi",         zone:"A" },
  { email:"AduGyamfiBeatrice@ecoguard.com",      password:"UEB0516825", role:"engineer", name:"Adu Gyamfi Beatrice",          zone:"B" },
  { email:"AduDeborahGyamfi@ecoguard.com",       password:"UEBO511825", role:"engineer", name:"Adu Deborah Gyamfi",           zone:"C" },
  { email:"AdongoRichardAdiba@ecoguard.com",     password:"EUB0515025", role:"engineer", name:"Adongo Richard Adiba",         zone:"D" },
  { email:"BuneraahMartinAnbanbieo@ecoguard.com",password:"UEB0523725", role:"engineer", name:"Buneraah Martin Anbanbieo",   zone:"E" },
  { email:"SapakbonJenniferYindaanpoka@ecoguard.com",password:"UEB0531925",role:"engineer",name:"Sapakbon Jennifer Yindaanpoka",zone:"F"},
  { email:"ChukwukaOluomaMarian@ecoguard.com",   password:"UEB0506925", role:"engineer", name:"Chukwuka Oluoma Marian",       zone:"G" },
  { email:"BoakyeEgyimaNanaYaa@ecoguard.com",    password:"UEB0523925", role:"engineer", name:"Boakye Egyima Nana Yaa",       zone:"H" },
  { email:"TwumasiChristabel@ecoguard.com",      password:"URB0522125", role:"engineer", name:"Twumasi Christabel",           zone:"I" },
  { email:"MensahMary@ecoguard.com",             password:"UEB0532625", role:"engineer", name:"Mensah Mary",                  zone:"J" },
  { email:"AnabaJessica@ecoguard.com",           password:"UEB0531325", role:"engineer", name:"Anaba Jessica",                zone:"K" },
  { email:"LouisaAnimaApraku@ecoguard.com",      password:"UEB0519425", role:"engineer", name:"Louisa Anima Apraku",          zone:"L" },
];

const COMPANIES = [
  { id:"shell",       name:"Shell Petroleum",      status:"operational", pipelines:12, alerts:0, region:"Gulf of Guinea",   pressure:"normal",   flow:"normal",  lastUpdate:"2 min ago" },
  { id:"chevron",     name:"TotalEnergies Ghana",  status:"warning",     pipelines:8,  alerts:2, region:"Tano Basin",       pressure:"warning",  flow:"normal",  lastUpdate:"1 min ago" },
  { id:"exxon",       name:"Eni Ghana E&P",        status:"operational", pipelines:15, alerts:0, region:"Cape Three Points", pressure:"normal",   flow:"normal",  lastUpdate:"3 min ago" },
  { id:"bp",          name:"Tullow Oil Ghana",     status:"critical",    pipelines:10, alerts:1, region:"Jubilee Field",    pressure:"critical", flow:"warning", lastUpdate:"30 sec ago" },
];

const ENGINEERS_BY_ZONE = Object.fromEntries(
  USERS.filter(u => u.role === "engineer").map(u => [u.zone, u])
);
const ZONE_PIPELINE_MAP = {
  A:"shell",B:"shell",C:"chevron",D:"chevron",
  E:"exxon",F:"exxon",G:"bp",H:"bp",I:"shell",J:"chevron",K:"exxon",L:"bp",
};

// ─── PIPELINE CONFIGS ─────────────────────────────────────────────
const PIPELINE_CONFIGS = {
  shell: [
    { id:"pipeline-1", name:"Main Pipeline A (Zone A)", status:"operational",
      path:"M 80 180 L 280 180 L 480 140 L 680 140",
      sensors:[{id:"s1",type:"pressure",x:140,y:180,status:"normal"},{id:"s2",type:"flow",x:330,y:160,status:"normal"},{id:"s3",type:"acoustic",x:520,y:140,status:"normal"},{id:"s4",type:"infrared",x:670,y:140,status:"normal"},{id:"s5",type:"temperature",x:200,y:170,status:"normal"}]},
    { id:"pipeline-2", name:"Secondary Line B (Zone B)", status:"operational",
      path:"M 80 280 L 300 280 L 500 300 L 700 280",
      sensors:[{id:"s6",type:"pressure",x:150,y:280,status:"normal"},{id:"s7",type:"flow",x:380,y:290,status:"normal"},{id:"s8",type:"vibration",x:600,y:285,status:"normal"}]},
    { id:"pipeline-3", name:"Offshore Link (Zone I)", status:"operational",
      path:"M 80 380 L 400 360 L 700 380",
      sensors:[{id:"s9",type:"pressure",x:200,y:374,status:"normal"},{id:"s10",type:"acoustic",x:550,y:368,status:"normal"},{id:"s11",type:"corrosion",x:650,y:375,status:"normal"}]},
  ],
  chevron: [
    { id:"pipeline-1", name:"Tano Main Line (Zone C)", status:"warning",
      path:"M 80 150 L 250 200 L 480 200 L 700 150",
      sensors:[{id:"s12",type:"pressure",x:140,y:170,status:"warning"},{id:"s13",type:"flow",x:350,y:200,status:"normal"},{id:"s14",type:"acoustic",x:580,y:170,status:"warning"},{id:"s15",type:"gas",x:450,y:190,status:"normal"}]},
    { id:"pipeline-2", name:"Deepwater Line D (Zone D)", status:"warning",
      path:"M 80 320 L 350 300 L 620 320 L 700 360",
      sensors:[{id:"s16",type:"pressure",x:200,y:314,status:"warning"},{id:"s17",type:"infrared",x:490,y:308,status:"normal"},{id:"s18",type:"temperature",x:300,y:310,status:"normal"}]},
    { id:"pipeline-3", name:"Export Connector (Zone J)", status:"operational",
      path:"M 80 440 L 400 420 L 700 440",
      sensors:[{id:"s19",type:"flow",x:250,y:434,status:"normal"},{id:"s20",type:"pressure",x:560,y:430,status:"normal"},{id:"s21",type:"water",x:400,y:425,status:"normal"}]},
  ],
  exxon: [
    { id:"pipeline-1", name:"Cape Three Points Alpha (Zone E)", status:"operational",
      path:"M 80 120 L 300 100 L 550 120 L 700 100",
      sensors:[{id:"s22",type:"pressure",x:170,y:114,status:"normal"},{id:"s23",type:"flow",x:410,y:108,status:"normal"},{id:"s24",type:"infrared",x:620,y:112,status:"normal"},{id:"s25",type:"vibration",x:250,y:105,status:"normal"}]},
    { id:"pipeline-2", name:"Offshore F Line (Zone F)", status:"operational",
      path:"M 80 260 L 240 240 L 500 260 L 700 240",
      sensors:[{id:"s26",type:"acoustic",x:160,y:254,status:"normal"},{id:"s27",type:"pressure",x:370,y:250,status:"normal"},{id:"s28",type:"corrosion",x:500,y:255,status:"normal"}]},
    { id:"pipeline-3", name:"Sankofa K Export (Zone K)", status:"operational",
      path:"M 80 400 L 380 380 L 700 400",
      sensors:[{id:"s29",type:"flow",x:220,y:394,status:"normal"},{id:"s30",type:"infrared",x:540,y:390,status:"normal"},{id:"s31",type:"gas",x:350,y:385,status:"normal"}]},
  ],
  bp: [
    { id:"pipeline-1", name:"Jubilee Main G (Zone G)", status:"critical",
      path:"M 80 160 L 220 180 L 460 160 L 680 180",
      sensors:[{id:"s32",type:"pressure",x:140,y:168,status:"critical"},{id:"s33",type:"flow",x:330,y:162,status:"warning"},{id:"s34",type:"acoustic",x:550,y:168,status:"critical"},{id:"s35",type:"temperature",x:200,y:175,status:"critical"}]},
    { id:"pipeline-2", name:"TEN Field H (Zone H)", status:"warning",
      path:"M 80 310 L 300 290 L 550 310 L 700 290",
      sensors:[{id:"s36",type:"infrared",x:180,y:305,status:"warning"},{id:"s37",type:"pressure",x:420,y:300,status:"warning"},{id:"s38",type:"water",x:550,y:295,status:"normal"}]},
    { id:"pipeline-3", name:"Enyenra-Ntomme L (Zone L)", status:"warning",
      path:"M 80 430 L 380 410 L 700 430",
      sensors:[{id:"s39",type:"flow",x:220,y:424,status:"warning"},{id:"s40",type:"pressure",x:540,y:418,status:"normal"},{id:"s41",type:"vibration",x:400,y:415,status:"warning"}]},
  ],
};

// ─── DYNAMIC COMPANIES (mutable, starts with defaults) ────────────
let COMPANIES_DATA = [...COMPANIES]; // mutable copy
// Override COMPANIES reference with a getter proxy pattern
function getCompanies() { return COMPANIES_DATA; }

// ─── STATE ────────────────────────────────────────────────────────
let state = {
  user: null,
  page: "dashboard",
  theme: "dark",
  sensorStates: {},
  showAddCompany: false,
  addCompanyForm: { name:'', region:'', pipelines:'', status:'operational' },
  alerts: {
    bp: [
      { id:"a1", severity:"critical", type:"pressure", title:"Critical Pressure Drop Detected",
        description:"Sudden pressure drop of 15% in main pipeline. Possible leak at junction point. Immediate intervention required.",
        location:"Pipeline 1, Sensor P-001", timestamp:new Date(), resolved:false, assignedTo:null },
      { id:"a2", severity:"warning", type:"flow", title:"Flow Imbalance Warning",
        description:"Inlet-outlet flow differential exceeds 10%. Potential oil loss detected.",
        location:"Pipeline 1, Junction 3", timestamp:new Date(Date.now()-120000), resolved:false, assignedTo:null },
      { id:"a3", severity:"critical", type:"temperature", title:"Overheating Detected",
        description:"Pipeline temperature exceeding safe limits. Risk of material degradation.",
        location:"Pipeline 1, Sensor T-001", timestamp:new Date(Date.now()-60000), resolved:false, assignedTo:null },
    ],
    chevron: [
      { id:"a4", severity:"warning", type:"pressure", title:"Pressure Abnormality Detected",
        description:"Early-stage pressure fluctuation. Monitoring for structural stress.",
        location:"Primary Transport Line, Sensor P-002", timestamp:new Date(Date.now()-60000), resolved:false, assignedTo:null },
      { id:"a5", severity:"warning", type:"flow", title:"Minor Flow Rate Variation",
        description:"Flow rate showing minor variations. Trend analysis underway.",
        location:"Primary Transport Line, Flow Monitor F-001", timestamp:new Date(Date.now()-300000), resolved:false, assignedTo:null },
      { id:"a6", severity:"warning", type:"gas", title:"Gas Leak Suspected",
        description:"Elevated gas levels detected. Potential leak in gas monitoring system.",
        location:"Tano Main Line, Gas Sensor G-001", timestamp:new Date(Date.now()-180000), resolved:false, assignedTo:null },
    ],
    shell: [
      { id:"a7", severity:"info", type:"acoustic", title:"Routine Maintenance Reminder",
        description:"All sensors operational. No abnormalities detected.",
        location:"All Pipelines", timestamp:new Date(Date.now()-600000), resolved:false, assignedTo:null },
      { id:"a8", severity:"warning", type:"vibration", title:"Vibration Anomaly",
        description:"Unusual vibration patterns detected. Possible equipment malfunction.",
        location:"Secondary Line B, Vibration Sensor V-001", timestamp:new Date(Date.now()-240000), resolved:false, assignedTo:null },
    ],
    exxon: [
      { id:"a9", severity:"info", type:"infrared", title:"System Health Check Complete",
        description:"All monitoring systems operational. No anomalies detected.",
        location:"All Pipelines", timestamp:new Date(Date.now()-900000), resolved:false, assignedTo:null },
      { id:"a10", severity:"warning", type:"corrosion", title:"Corrosion Warning",
        description:"Corrosion rate above threshold. Schedule inspection.",
        location:"Offshore F Line, Corrosion Sensor C-001", timestamp:new Date(Date.now()-360000), resolved:false, assignedTo:null },
    ],
  },
  companyPage: { selectedPipeline:"pipeline-1", tab:"sensors" },
  alertFilter: "all",
  showAlarmDropdown: false,
  showThemePicker: false,
  sensorData: { pressure:[], flow:[], acoustic:[], infrared:[], temperature:[], vibration:[], corrosion:[], gas:[], water:[] },
  sensorInterval: null,
  alarmActive: false,
  alarmInterval: null,
  voiceCooldown: false,
  alarmEnabled: true,       // master alarm toggle (sound + modal)
  alarmSoundEnabled: true,  // audio-only sub-toggle
  alarmVoiceEnabled: true,  // voice announcement sub-toggle
  mapSelectedNode: null,    // which company node is selected on the map
  alarmTypesEnabled: { pressure: true, flow: true, acoustic: true, infrared: true, temperature: true, vibration: true, corrosion: true, gas: true, water: true }, // per-type alarm toggles
};

// ─── AUDIO ENGINE ─────────────────────────────────────────────────
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playAlarmSound(severity) {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const duration = severity === 'critical' ? 4 : 3; // longer for critical nuclear alert

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, now);
    masterGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
    masterGain.connect(ctx.destination);

    // Nuclear bomb alarm: rapid high-frequency oscillations
    const osc = ctx.createOscillator();
    osc.type = 'square'; // harsh, piercing sound
    osc.frequency.setValueAtTime(900, now);

    // Create rapid frequency modulation for nuclear siren effect
    const freqMod = ctx.createOscillator();
    freqMod.type = 'sawtooth';
    freqMod.frequency.setValueAtTime(severity === 'critical' ? 3 : 2, now); // faster for critical

    const freqGain = ctx.createGain();
    freqGain.gain.setValueAtTime(200, now); // modulation depth

    freqMod.connect(freqGain);
    freqGain.connect(osc.frequency);

    // Add secondary oscillator for richer tone
    const osc2 = ctx.createOscillator();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(950, now);

    const freqMod2 = ctx.createOscillator();
    freqMod2.type = 'sawtooth';
    freqMod2.frequency.setValueAtTime(severity === 'critical' ? 3.1 : 2.1, now); // slightly offset

    const freqGain2 = ctx.createGain();
    freqGain2.gain.setValueAtTime(180, now);

    freqMod2.connect(freqGain2);
    freqGain2.connect(osc2.frequency);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.15, now);

    osc.connect(masterGain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + duration);
    freqMod.start(now);
    freqMod.stop(now + duration);

    osc2.start(now);
    osc2.stop(now + duration);
    freqMod2.start(now);
    freqMod2.stop(now + duration);

    // Add pulsing effect for urgency
    const pulseGain = ctx.createGain();
    pulseGain.gain.setValueAtTime(1, now);

    // Create rapid pulses
    for (let i = 0; i < duration * 10; i++) {
      const pulseTime = now + i * 0.1;
      pulseGain.gain.setValueAtTime(1, pulseTime);
      pulseGain.gain.setValueAtTime(0.7, pulseTime + 0.05);
    }

    // Apply pulse to master gain
    pulseGain.connect(masterGain.gain);

  } catch(e) { /* audio not available */ }
}

function speakAlert(text) {
  if (!('speechSynthesis' in window) || state.voiceCooldown) return;
  state.voiceCooldown = true;
  setTimeout(() => { state.voiceCooldown = false; }, 12000);
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.88; utt.pitch = 0.8; utt.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => /david|mark|daniel|george|james|male/i.test(v.name))
    || voices.find(v => v.lang === 'en-US') || voices[0];
  if (preferred) utt.voice = preferred;
  window.speechSynthesis.speak(utt);
}

// ─── ALARM MODAL ──────────────────────────────────────────────────
function showAlarmModal(severity, alerts) {
  // Remove any existing modal
  const existing = document.getElementById('alarm-modal-overlay');
  if (existing) existing.remove();

  const isCritical = severity === 'critical';
  const alert = alerts[0];
  const companyId = Object.entries(state.alerts).find(([cid, list]) =>
    list.some(a => a.id === alert.id)
  )?.[0];
  const company = getCompanies().find(c => c.id === companyId);
  const zone = Object.entries(ZONE_PIPELINE_MAP).find(([z,c]) => c === companyId)?.[0];
  const engineer = zone ? ENGINEERS_BY_ZONE[zone] : null;

  const overlay = document.createElement('div');
  overlay.id = 'alarm-modal-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;
    padding:1rem;background:${isCritical ? 'rgba(120,0,0,0.55)' : 'rgba(100,60,0,0.45)'};
    backdrop-filter:blur(6px);animation:fadeIn 0.2s ease;
  `;

  const borderColor = isCritical ? '#ef4444' : '#f59e0b';
  const glowColor   = isCritical ? 'rgba(239,68,68,0.25)' : 'rgba(245,158,11,0.2)';
  const titleColor  = isCritical ? '#fca5a5' : '#fcd34d';
  const bgColor     = isCritical ? 'rgba(20,5,5,0.97)' : 'rgba(20,14,2,0.97)';
  const badgeBg     = isCritical ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.12)';

  overlay.innerHTML = `
    <div style="width:100%;max-width:460px;background:${bgColor};border:2px solid ${borderColor};border-radius:18px;
      box-shadow:0 0 60px ${glowColor},0 20px 60px rgba(0,0,0,0.7);overflow:hidden;animation:slideDown 0.25s ease">

      <!-- Pulsing top bar -->
      <div style="height:5px;background:linear-gradient(90deg,${borderColor},${isCritical?'#fbbf24':borderColor});
        animation:pulse 0.8s ease infinite"></div>

      <div style="padding:1.5rem 1.5rem 0.75rem">
        <!-- Severity badge + title -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <div style="width:44px;height:44px;border-radius:12px;background:${badgeBg};border:1.5px solid ${borderColor};
            display:flex;align-items:center;justify-content:center;flex-shrink:0;animation:pulse ${isCritical?'0.7s':'1.2s'} ease infinite">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${borderColor}" stroke-width="2">
              ${isCritical
                ? '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
                : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
            </svg>
          </div>
          <div>
            <div style="color:${borderColor};font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:2px">
              ${isCritical ? '⚠ CRITICAL ALARM — IMMEDIATE ACTION REQUIRED' : '⚠ WARNING ALERT — INVESTIGATION REQUIRED'}
            </div>
            <div style="color:${titleColor};font-size:1rem;font-weight:700;line-height:1.3">${alert.title}</div>
          </div>
        </div>

        <!-- Alert details -->
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.85rem;margin-bottom:1rem">
          <div style="color:rgba(255,255,255,0.55);font-size:0.72rem;margin-bottom:6px;line-height:1.55">${alert.description}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
            <span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:5px;
              padding:3px 8px;color:rgba(255,255,255,0.5);font-size:0.7rem">
              📍 ${alert.location}
            </span>
            <span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:5px;
              padding:3px 8px;color:rgba(255,255,255,0.5);font-size:0.7rem">
              🏢 ${company?.name || companyId}
            </span>
          </div>
        </div>

        <!-- Engineer notification -->
        ${engineer ? `
        <div style="background:rgba(34,211,238,0.07);border:1px solid rgba(34,211,238,0.2);border-radius:10px;padding:0.75rem;margin-bottom:1rem;display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:9px;background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.3);
            display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div style="flex:1;min-width:0">
            <div style="color:#22d3ee;font-size:0.72rem;font-weight:600;margin-bottom:1px">Assigned Engineer — Zone ${zone}</div>
            <div style="color:rgba(255,255,255,0.8);font-size:0.82rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${engineer.name}</div>
            <div style="color:rgba(34,211,238,0.5);font-size:0.68rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${engineer.email}</div>
          </div>
          <div style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);border-radius:6px;padding:4px 9px;font-size:0.68rem;color:#34d399;font-weight:600;flex-shrink:0">NOTIFIED</div>
        </div>` : ''}
      </div>

      <!-- Action buttons -->
      <div style="padding:0 1.5rem 1.5rem;display:flex;gap:0.75rem">
        <button id="alarm-modal-goto" style="flex:1;padding:0.7rem 0.5rem;background:${isCritical?'rgba(239,68,68,0.15)':'rgba(245,158,11,0.12)'};
          border:1.5px solid ${borderColor};border-radius:10px;color:${titleColor};font-size:0.82rem;font-weight:700;cursor:pointer">
          View Alert
        </button>
        <button id="alarm-modal-dismiss" style="flex:1;padding:0.7rem 0.5rem;background:rgba(255,255,255,0.06);
          border:1.5px solid rgba(255,255,255,0.12);border-radius:10px;color:rgba(255,255,255,0.6);font-size:0.82rem;font-weight:600;cursor:pointer">
          Acknowledge
        </button>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  // Bind modal buttons
  document.getElementById('alarm-modal-goto')?.addEventListener('click', () => {
    overlay.remove();
    state.page = 'alerts';
    render();
  });
  document.getElementById('alarm-modal-dismiss')?.addEventListener('click', () => {
    overlay.remove();
  });
  // Click outside to dismiss
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.remove();
  });
}

function checkAndTriggerAlerts() {
  if (!state.alarmEnabled) return;   // master off-switch

  const critAlerts = Object.values(state.alerts).flat()
    .filter(a => !a.resolved && a.severity === 'critical' && state.alarmTypesEnabled[a.type]);
  const warnAlerts = Object.values(state.alerts).flat()
    .filter(a => !a.resolved && a.severity === 'warning' && state.alarmTypesEnabled[a.type]);

  if (critAlerts.length > 0) {
    if (state.alarmSoundEnabled) playAlarmSound('critical');
    if (state.alarmVoiceEnabled) speakAlert(`Critical alarm. ${critAlerts[0].title}. Immediate action required.`);
    showAlarmModal('critical', critAlerts);
  } else if (warnAlerts.length > 0) {
    if (state.alarmSoundEnabled) playAlarmSound('warning');
    if (state.alarmVoiceEnabled) speakAlert(`Warning alert. ${warnAlerts[0].location}. Please investigate.`);
    showAlarmModal('warning', warnAlerts);
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────
function t() { return THEMES[state.theme]; }

function genVal(status, scale) {
  const m = status==="critical"?0.6:status==="warning"?0.85:0.97;
  return (m + Math.random()*0.04) * scale;
}

function fmtTime(d) {
  const s = Math.floor((Date.now() - new Date(d)) / 1000);
  return s < 60 ? `${s}s ago` : s < 3600 ? `${Math.floor(s/60)}m ago` : `${Math.floor(s/3600)}h ago`;
}

function statusBadgeHTML(status) {
  const map = {
    operational:["rgba(52,211,153,0.15)","#34d399","rgba(52,211,153,0.3)"],
    normal:     ["rgba(52,211,153,0.15)","#34d399","rgba(52,211,153,0.3)"],
    warning:    ["rgba(245,158,11,0.15)","#f59e0b","rgba(245,158,11,0.3)"],
    critical:   ["rgba(239,68,68,0.15)", "#f87171","rgba(239,68,68,0.3)"],
    info:       ["rgba(96,165,250,0.15)","#60a5fa","rgba(96,165,250,0.3)"],
    offline:    ["rgba(107,114,128,0.15)","#9ca3af","rgba(107,114,128,0.3)"],
    Ready:      ["rgba(52,211,153,0.15)","#34d399","rgba(52,211,153,0.3)"],
    Pending:    ["rgba(245,158,11,0.15)","#f59e0b","rgba(245,158,11,0.3)"],
    Archived:   ["rgba(96,165,250,0.15)","#60a5fa","rgba(96,165,250,0.3)"],
  };
  const [bg,col,border] = map[status] || map.info;
  return `<span style="background:${bg};color:${col};border:1px solid ${border};border-radius:5px;font-size:0.7rem;padding:2px 8px;font-weight:600;text-transform:capitalize;white-space:nowrap">${status}</span>`;
}

function miniChartHTML(data, color, unit) {
  if (!data || data.length < 2) return '<div style="height:65px;display:flex;align-items:center;justify-content:center;color:rgba(100,100,100,0.5);font-size:0.7rem">collecting data…</div>';
  const W=300, H=65, pad=4;
  const min=Math.min(...data), max=Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v,i) => {
    const x = pad + (i/(data.length-1))*(W-pad*2);
    const y = H - pad - ((v-min)/range)*(H-pad*2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const last = data[data.length-1];
  const lastX = W - pad;
  const lastY = H - pad - ((last-min)/range)*(H-pad*2);
  const labelY = Math.max(lastY - 6, 10); // keep label inside viewbox
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:65px;overflow:visible">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${lastX.toFixed(1)}" cy="${lastY.toFixed(1)}" r="3" fill="${color}"/>
    <text x="${(lastX-2).toFixed(1)}" y="${labelY.toFixed(1)}" fill="${color}" font-size="9" text-anchor="end">${last.toFixed(1)} ${unit}</text>
  </svg>`;
}

// ─── SVG PIPELINE MAP ─────────────────────────────────────────────
function pipelineSVGHTML(companyId) {
  const th = t();
  const pipelines = PIPELINE_CONFIGS[companyId] || [];
  const sel = state.companyPage.selectedPipeline;
  const sColors = { normal:"#34d399", warning:"#f59e0b", critical:"#ef4444", offline:"#6b7280" };
  const pColors = { operational:"#3b82f6", warning:"#f59e0b", critical:"#ef4444" };

  let svgContent = `
    <defs>
      <pattern id="pgrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${th.gridLine}" stroke-width="1"/>
      </pattern>
      <filter id="glow-blue"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-warn"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-crit"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="780" height="480" fill="${th.cardGrid}"/>
    <rect width="780" height="480" fill="url(#pgrid)"/>`;

  pipelines.forEach(pl => {
    const isSel = pl.id === sel;
    const col   = pColors[pl.status] || '#3b82f6';
    const filterId = pl.status==='critical' ? 'glow-crit' : pl.status==='warning' ? 'glow-warn' : 'glow-blue';
    const flowCls  = pl.status==='critical' ? 'pipeline-flow-critical' : 'pipeline-flow-slow';

    // Pipe body (thick background tube)
    svgContent += `<path d="${pl.path}" stroke="${isSel ? '#1a3a6b' : '#0f1e36'}" stroke-width="${isSel?14:8}" fill="none" stroke-linecap="round"/>`;
    // Pipe highlight
    svgContent += `<path d="${pl.path}" stroke="${isSel ? col : col+'55'}" stroke-width="${isSel?10:5}" fill="none" stroke-linecap="round" ${isSel?`filter="url(#${filterId})"`:''} style="cursor:pointer" data-pipeline="${pl.id}" data-company="${companyId}"/>`;

    // Animated flow particles (dashes moving through)
    if (isSel) {
      const flowColor = pl.status==='critical' ? '#ef444488' : pl.status==='warning' ? '#f59e0b88' : '#3b82f688';
      svgContent += `<path d="${pl.path}" stroke="${flowColor}" stroke-width="4" fill="none" stroke-linecap="round" class="${flowCls}" style="pointer-events:none"/>`;
      // Second layer — brighter particles
      const brightColor = pl.status==='critical' ? '#fca5a8' : pl.status==='warning' ? '#fcd34d' : '#93c5fd';
      svgContent += `<path d="${pl.path}" stroke="${brightColor}" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 28" class="pipeline-flow" style="pointer-events:none;animation-delay:0.4s"/>`;
    }

    // Sensors (only for selected pipeline)
    if (isSel) {
      pl.sensors.forEach(s => {
        const key = `${companyId}-${pl.id}-${s.id}`;
        const isOn = state.sensorStates[key] !== false;
        const effStatus = isOn ? s.status : 'offline';
        const sc = sColors[effStatus] || '#34d399';

        if (effStatus !== 'normal' && effStatus !== 'offline') {
          svgContent += `<circle cx="${s.x}" cy="${s.y}" r="22" fill="none" stroke="${sc}" stroke-width="1.5" opacity="0.5" class="sensor-pulse-ring">
            <animate attributeName="r" from="22" to="34" dur="1.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.5" to="0" dur="1.4s" repeatCount="indefinite"/>
          </circle>`;
        }
        svgContent += `<circle cx="${s.x}" cy="${s.y}" r="16" fill="${th.cardGrid}" stroke="${sc}" stroke-width="2.5" style="cursor:pointer"/>`;
        svgContent += `<text x="${s.x}" y="${s.y+5}" text-anchor="middle" fill="${sc}" font-size="10" font-weight="bold" style="pointer-events:none">${s.type[0].toUpperCase()}</text>`;
        if (!isOn) {
          svgContent += `<line x1="${s.x-10}" y1="${s.y-10}" x2="${s.x+10}" y2="${s.y+10}" stroke="#6b7280" stroke-width="2.5" style="pointer-events:none"/>`;
        }
      });
    }
  });

  // Legend
  svgContent += `<g transform="translate(16,446)">
    <text fill="${th.textMuted}" font-size="10" font-weight="600">Sensors: </text>`;
  [["P","Pressure","#60a5fa"],["F","Flow","#a78bfa"],["A","Acoustic","#34d399"],["T","Temp","#f97316"]].forEach(([ch,lbl,col],i) => {
    svgContent += `<g transform="translate(${70+i*130},0)">
      <circle cx="0" cy="-4" r="10" fill="${th.cardGrid}" stroke="${col}" stroke-width="2"/>
      <text x="0" y="-1" text-anchor="middle" fill="${col}" font-size="9" font-weight="bold">${ch}</text>
      <text x="16" y="0" fill="${th.textMuted}" font-size="10">${lbl}</text>
    </g>`;
  });
  svgContent += `</g>`;

  return `<svg viewBox="0 0 780 480" style="width:100%;background:${th.cardGrid};border-radius:8px" id="pipeline-svg">${svgContent}</svg>`;
}

// ─── RENDER ENGINE ────────────────────────────────────────────────
function render() {
  try {
    document.body.style.background = t().bg;
    document.body.style.color = t().text;
    const root = document.getElementById('app');

    if (!root) {
      console.error('App root element not found');
      return;
    }

    if (!state.user) {
      // Login: remove shell class so page scrolls naturally
      document.body.classList.remove('app-active');
      document.body.style.overflow = '';
      root.innerHTML = renderLogin();
      bindLogin();
      return;
    }

    // App shell: fixed height, only #main-content scrolls
    document.body.classList.add('app-active');

    const companyId = state.page.startsWith('company/') ? state.page.split('/')[1] : null;

    root.innerHTML = `
      ${renderHeader()}
      <main id="main-content">
        ${companyId ? renderCompanyPage(companyId)
          : state.page === 'dashboard' ? renderDashboard()
          : state.page === 'alerts'    ? renderAlertsPage()
          : state.page === 'sensors'   ? renderSensorsPage()
          : state.page === 'map'       ? renderMapPage()
          : state.page === 'reports'   ? renderReportsPage()
          : state.page === 'settings'  ? renderSettingsPage()
          : renderDashboard()}
      </main>`;

    bindAll();
  } catch (error) {
    console.error('Render failed:', error);
    const root = document.getElementById('app');
    if (root) {
      root.innerHTML = '<div style="padding:20px;color:red;">Failed to render page. Please refresh.</div>';
    }
  }
}

// ─── LOGIN ────────────────────────────────────────────────────────
function renderLogin() {
  return `
  <div style="min-height:100vh;background:linear-gradient(135deg,#050e1a,#0a1628,#071322);display:flex;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top) + 1rem) calc(env(safe-area-inset-right) + 1rem) calc(env(safe-area-inset-bottom) + 1rem) calc(env(safe-area-inset-left) + 1rem);position:relative;overflow:hidden">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(34,211,238,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.03) 1px,transparent 1px);background-size:40px 40px;pointer-events:none"></div>
    <div style="width:100%;max-width:440px;position:relative;z-index:1">
      <div style="text-align:center;margin-bottom:2rem">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(59,130,246,0.2));border-radius:16px;border:1.5px solid rgba(34,211,238,0.4);margin-bottom:1rem">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div style="font-size:1.6rem;font-weight:700;color:#fff;letter-spacing:0.04em;margin-bottom:0.25rem">ECO GUARD</div>
        <div style="font-size:0.78rem;color:rgba(34,211,238,0.6);letter-spacing:0.12em;text-transform:uppercase">Technologies · Pipeline Security</div>
      </div>
      <div style="background:rgba(15,30,54,0.6);border:1px solid rgba(34,211,238,0.2);border-radius:16px;padding:2rem;backdrop-filter:blur(12px)">
        <h2 style="color:#fff;font-size:1rem;font-weight:600;margin-bottom:1.5rem;text-align:center">Sign in to your account</h2>
        <div id="login-error" style="display:none;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:0.65rem 0.9rem;margin-bottom:1rem;color:#fca5a5;font-size:0.82rem"></div>
        <div style="margin-bottom:1rem">
          <label style="display:block;color:rgba(34,211,238,0.8);font-size:0.78rem;font-weight:500;margin-bottom:0.4rem;letter-spacing:0.04em">EMAIL ADDRESS</label>
          <input id="login-email" type="email" placeholder="yourname@ecoguard.com"
            style="width:100%;padding:0.75rem 1rem;background:rgba(5,14,26,0.8);border:1px solid rgba(34,211,238,0.25);border-radius:8px;color:#fff;font-size:0.88rem;outline:none;box-sizing:border-box"/>
        </div>
        <div style="margin-bottom:1.5rem">
          <label style="display:block;color:rgba(34,211,238,0.8);font-size:0.78rem;font-weight:500;margin-bottom:0.4rem;letter-spacing:0.04em">PASSWORD</label>
          <div style="position:relative">
            <input id="login-pw" type="password" placeholder="Enter your password"
              style="width:100%;padding:0.75rem 2.8rem 0.75rem 1rem;background:rgba(5,14,26,0.8);border:1px solid rgba(34,211,238,0.25);border-radius:8px;color:#fff;font-size:0.88rem;outline:none;box-sizing:border-box"/>
            <button id="pw-toggle" type="button" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(34,211,238,0.5);cursor:pointer;padding:4px">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
        <button id="login-btn" style="width:100%;padding:0.85rem;background:linear-gradient(90deg,#0891b2,#2563eb);border:none;border-radius:8px;color:#fff;font-size:0.92rem;font-weight:600;cursor:pointer;letter-spacing:0.04em">Sign In</button>
      </div>
      <div style="margin-top:1.5rem;display:flex;justify-content:space-between;align-items:center">
        <div style="display:flex;align-items:center;gap:6px">
          <div style="width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 6px #34d399;animation:pulse 2s infinite"></div>
          <span style="color:#34d399;font-size:0.75rem;font-weight:500">NO ACTIVE INCIDENTS</span>
        </div>
        <span style="color:rgba(34,211,238,0.3);font-size:0.72rem">© 2026 Eco Guard Technologies</span>
      </div>
    </div>
  </div>`;
}

// ─── HEADER ───────────────────────────────────────────────────────
function renderHeader() {
  const th = t();
  const totalAlerts = Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity!=='info').length;
  const navItems = state.user.role==='admin'
    ? ["DASHBOARD","SENSORS","ALERTS","MAP","REPORTS","SETTINGS"]
    : ["DASHBOARD","ALERTS","MAP"];

  const alarmDropdown = state.showAlarmDropdown ? `
    <div style="position:absolute;right:0;top:calc(100% + 8px);width:310px;background:${th.header};border:1px solid ${th.borderStrong};border-radius:12px;box-shadow:0 16px 40px rgba(0,0,0,0.5);z-index:200;animation:slideDown 0.2s ease" id="alarm-dropdown">
      <div style="padding:0.75rem 1rem;border-bottom:1px solid ${th.border};display:flex;justify-content:space-between;align-items:center">
        <span style="color:${th.text};font-weight:600;font-size:0.85rem">Active Alerts</span>
        <button id="close-alarm-dropdown" style="background:none;border:none;color:${th.textMuted};cursor:pointer;font-size:1.1rem">×</button>
      </div>
      <div style="max-height:260px;overflow-y:auto">
        ${Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity!=='info').length===0
          ? `<div style="padding:1.5rem;text-align:center;color:${th.textMuted};font-size:0.82rem">No active alerts</div>`
          : Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity!=='info').map(a=>`
            <div style="padding:0.7rem 1rem;border-bottom:1px solid ${th.border};display:flex;gap:10px">
              <div style="width:8px;height:8px;border-radius:50%;background:${a.severity==='critical'?'#ef4444':'#f59e0b'};margin-top:5px;flex-shrink:0"></div>
              <div>
                <div style="color:${a.severity==='critical'?'#fca5a5':'#fcd34d'};font-size:0.8rem;font-weight:600">${a.title}</div>
                <div style="color:${th.textFaint};font-size:0.7rem;margin-top:2px">${a.location} · ${fmtTime(a.timestamp)}</div>
              </div>
            </div>`).join('')}
      </div>
      <div style="padding:0.6rem 1rem">
        <button data-nav="alerts" style="width:100%;padding:0.5rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:6px;color:${th.accent};font-size:0.78rem;cursor:pointer">View All Alerts</button>
      </div>
    </div>` : '';

  const themeDropdown = state.showThemePicker ? `
    <div style="position:absolute;right:0;top:calc(100% + 6px);background:${th.header};border:1px solid ${th.borderStrong};border-radius:10px;box-shadow:0 12px 32px rgba(0,0,0,0.4);z-index:300;min-width:172px;overflow:hidden;animation:slideDown 0.15s ease" id="theme-dropdown">
      ${Object.entries(THEMES).map(([key,th2])=>`
      <button data-theme="${key}" style="width:100%;display:flex;align-items:center;gap:10px;padding:0.6rem 1rem;background:${state.theme===key?th.accentBg:'transparent'};border:none;cursor:pointer;color:${state.theme===key?th.accent:th.text};font-size:0.82rem;text-align:left">
        <span style="width:14px;height:14px;border-radius:50%;background:${th2.swatch};flex-shrink:0;display:inline-block;box-shadow:0 0 5px ${th2.swatch}99"></span>
        <span>${th2.name}</span>
        ${state.theme===key?`<svg style="margin-left:auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`:''}
      </button>`).join('')}
    </div>` : '';

  const page = state.page;
  return `
  <header style="background:${th.header};border-bottom:1px solid ${th.headerBorder};position:sticky;top:0;z-index:100;backdrop-filter:blur(12px)">
    <div style="padding:0.65rem 1rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem">
        <div data-nav="dashboard" style="display:flex;align-items:center;gap:10px;cursor:pointer">
          <div style="width:36px;height:36px;background:${th.accentBg};border-radius:9px;border:1.5px solid ${th.borderStrong};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${th.accent}" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div style="color:${th.text};font-weight:700;font-size:0.95rem;letter-spacing:0.06em">ECO GUARD</div>
            <div style="color:${th.textMuted};font-size:0.62rem;letter-spacing:0.08em">PIPELINE SECURITY</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <div style="display:flex;align-items:center;gap:5px;padding:3px 8px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:6px">
            <div style="width:6px;height:6px;border-radius:50%;background:#34d399;animation:pulse 2s infinite"></div>
            <span style="color:#34d399;font-size:0.65rem;font-weight:600;letter-spacing:0.06em">LIVE</span>
          </div>
          <div style="padding:3px 8px;background:${th.accentBg};border:1px solid ${th.border};border-radius:6px">
            <span class="zone-badge-text" style="color:${th.accent};font-size:0.65rem;font-weight:600">${state.user.role==='admin'?'ADMIN':`ZONE ${state.user.zone}`}</span>
          </div>
          <!-- Theme Picker -->
          <div style="position:relative">
            <button id="theme-btn" style="padding:0 10px;height:32px;background:${th.accentBg};border:1px solid ${th.border};border-radius:8px;display:flex;align-items:center;gap:5px;cursor:pointer;color:${th.accent};font-size:0.75rem;font-weight:600">
              <span style="width:12px;height:12px;border-radius:50%;background:${THEMES[state.theme].swatch};display:inline-block;flex-shrink:0;box-shadow:0 0 4px ${THEMES[state.theme].swatch}88"></span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            ${themeDropdown}
          </div>
          <!-- Bell -->
          <div style="position:relative">
            <button id="alarm-btn" style="width:32px;height:32px;background:${totalAlerts>0?'rgba(239,68,68,0.15)':th.accentBg};border:1px solid ${totalAlerts>0?'rgba(239,68,68,0.35)':th.border};border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:${totalAlerts>0?'#f87171':th.accent};${totalAlerts>0?'animation:ring 1.5s ease infinite':''}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            </button>
            ${totalAlerts>0?`<span style="position:absolute;top:-4px;right:-4px;min-width:17px;height:17px;background:#ef4444;border-radius:9px;font-size:0.62rem;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;padding:0 3px;border:1.5px solid ${th.bg}">${totalAlerts}</span>`:''}
            ${alarmDropdown}
          </div>
          <!-- Logout -->
          <button id="logout-btn" style="width:32px;height:32px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#f87171">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </div>
      <nav style="display:flex;gap:1px">
        ${navItems.map(tab=>{
          const key=tab.toLowerCase();
          const active=page===key||(tab==='DASHBOARD'&&page.startsWith('company/'));
          const cnt=tab==='ALERTS'&&totalAlerts>0?`<span style="margin-left:5px;background:#ef4444;color:#fff;border-radius:9px;font-size:0.58rem;padding:1px 5px;font-weight:700">${totalAlerts}</span>`:'';
          return `<button data-nav="${key}" style="padding:0.4rem 0.75rem;font-size:0.72rem;font-weight:600;letter-spacing:0.07em;background:none;border:none;border-bottom:2px solid ${active?th.navActive:'transparent'};color:${active?th.navActive:th.navInactive};cursor:pointer;white-space:nowrap">${tab}${cnt}</button>`;
        }).join('')}
      </nav>
    </div>
  </header>`;
}

// ─── DASHBOARD ────────────────────────────────────────────────────
function renderDashboard() {
  const th = t();
  const companies = getCompanies();
  const total = Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity!=='info').length;
  const crit  = Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity==='critical').length;
  const op    = companies.filter(c=>c.status==='operational').length;
  const vis   = state.user.role==='admin' ? companies : companies.filter(c=>c.id===ZONE_PIPELINE_MAP[state.user.zone]);

  return `
  <div style="padding:1rem;max-width:1200px;margin:0 auto" class="fade-in">
    <div class="stat-grid">
      ${[
        ["Total Pipelines", companies.reduce((s,c)=>s+c.pipelines,0), "All monitored", th.accent],
        ["Active Alerts", total, "Require attention", total?th.accent:"#34d399"],
        ["Critical", crit, "Immediate action", crit?"#ef4444":"#34d399"],
        ["Operational", `${op}/${companies.length}`, `${Math.round(op/companies.length*100)}% healthy`, "#34d399"],
      ].map(([l,v,s,c])=>`
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1rem">
        <div style="color:${th.textMuted};font-size:0.72rem;margin-bottom:6px">${l}</div>
        <div style="color:${th.text};font-size:1.8rem;font-weight:700;line-height:1">${v}</div>
        <div style="color:${c};font-size:0.72rem;margin-top:8px">${s}</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;gap:8px;flex-wrap:wrap">
      <h2 style="color:${th.text};font-size:1rem;font-weight:600;margin:0">
        ${state.user.role==='admin'?'All Pipeline Infrastructure':`Zone ${state.user.zone} — Your Assigned Pipeline`}
      </h2>
      ${state.user.role==='admin'?`
      <button id="add-company-btn" style="display:flex;align-items:center;gap:6px;padding:0.45rem 1rem;background:${th.accentBg};border:1px solid ${th.borderStrong};border-radius:8px;color:${th.accent};font-size:0.82rem;font-weight:600;cursor:pointer;white-space:nowrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Company
      </button>`:''}
    </div>
    <div class="company-grid">
      ${vis.map(c=>`
      <div data-company="${c.id}" class="company-card" style="background:${th.surface};border:1px solid ${c.status==='critical'?'rgba(239,68,68,0.35)':c.status==='warning'?'rgba(245,158,11,0.3)':th.border};border-radius:14px;padding:1.25rem;cursor:pointer;transition:border-color 0.2s">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem">
          <div>
            <div style="color:${th.text};font-weight:600;font-size:1rem">${c.name}</div>
            <div style="color:${th.textMuted};font-size:0.78rem;margin-top:2px">${c.region} · ${c.pipelines} pipelines</div>
          </div>
          ${statusBadgeHTML(c.status)}
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:1rem">
          ${[["Pressure",c.pressure],["Flow",c.flow]].map(([l,s])=>`
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="color:${th.textMuted};font-size:0.8rem">${l}</span>
            ${statusBadgeHTML(s)}
          </div>`).join('')}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.75rem;border-top:1px solid ${th.border}">
          <span style="color:${th.textFaint};font-size:0.72rem">Updated ${c.lastUpdate}</span>
          <span style="color:${th.accent};font-size:0.78rem;display:flex;align-items:center;gap:4px">
            View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>`).join('')}
    </div>
  </div>
  ${state.showAddCompany ? renderAddCompanyModal() : ''}`;
}

// ─── ADD COMPANY MODAL ────────────────────────────────────────────
function renderAddCompanyModal() {
  const th = t();
  const f = state.addCompanyForm;
  return `
  <div id="add-company-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(4px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:1rem">
    <div style="background:${th.bg};border:1px solid ${th.borderStrong};border-radius:16px;padding:1.75rem;width:100%;max-width:460px;box-shadow:0 25px 60px rgba(0,0,0,0.5)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
        <h3 style="color:${th.text};font-size:1rem;font-weight:700;margin:0">Add New Company</h3>
        <button id="close-add-company" style="background:transparent;border:none;color:${th.textMuted};cursor:pointer;font-size:1.5rem;line-height:1;padding:0 4px">×</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        <div>
          <label style="color:${th.textMuted};font-size:0.75rem;font-weight:600;letter-spacing:0.05em;display:block;margin-bottom:5px">COMPANY NAME *</label>
          <input id="ac-name" value="${f.name}" placeholder="e.g. TotalEnergies" style="width:100%;box-sizing:border-box;padding:0.6rem 0.9rem;background:${th.inputBg};border:1px solid ${th.inputBorder};border-radius:8px;color:${th.text};font-size:0.85rem;outline:none">
        </div>
        <div>
          <label style="color:${th.textMuted};font-size:0.75rem;font-weight:600;letter-spacing:0.05em;display:block;margin-bottom:5px">REGION *</label>
          <input id="ac-region" value="${f.region}" placeholder="e.g. North Africa" style="width:100%;box-sizing:border-box;padding:0.6rem 0.9rem;background:${th.inputBg};border:1px solid ${th.inputBorder};border-radius:8px;color:${th.text};font-size:0.85rem;outline:none">
        </div>
        <div>
          <label style="color:${th.textMuted};font-size:0.75rem;font-weight:600;letter-spacing:0.05em;display:block;margin-bottom:5px">NUMBER OF PIPELINES *</label>
          <input id="ac-pipelines" type="number" min="1" max="99" value="${f.pipelines}" placeholder="e.g. 6" style="width:100%;box-sizing:border-box;padding:0.6rem 0.9rem;background:${th.inputBg};border:1px solid ${th.inputBorder};border-radius:8px;color:${th.text};font-size:0.85rem;outline:none">
        </div>
        <div>
          <label style="color:${th.textMuted};font-size:0.75rem;font-weight:600;letter-spacing:0.05em;display:block;margin-bottom:5px">INITIAL STATUS</label>
          <div style="display:flex;gap:0.5rem">
            ${['operational','warning','critical'].map(s=>`
            <button data-ac-status="${s}" style="flex:1;padding:0.5rem;background:${f.status===s?'rgba(34,211,238,0.15)':'transparent'};border:1px solid ${f.status===s?th.borderStrong:th.border};border-radius:8px;color:${f.status===s?th.accent:th.textMuted};font-size:0.75rem;font-weight:600;cursor:pointer;text-transform:capitalize">${s}</button>`).join('')}
          </div>
        </div>
        <div id="ac-error" style="color:#f87171;font-size:0.78rem;display:none"></div>
        <div style="display:flex;gap:0.75rem;margin-top:0.5rem">
          <button id="close-add-company-2" style="flex:1;padding:0.65rem;background:transparent;border:1px solid ${th.border};border-radius:8px;color:${th.textMuted};font-size:0.85rem;cursor:pointer">Cancel</button>
          <button id="save-add-company" style="flex:1;padding:0.65rem;background:${th.accent};border:none;border-radius:8px;color:#000;font-size:0.85rem;font-weight:700;cursor:pointer">Add Company</button>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── COMPANY / PIPELINE PAGE ───────────────────────────────────────
function renderCompanyPage(companyId) {
  const th = t();
  const company = getCompanies().find(c=>c.id===companyId);
  if (!company) return `<div style="padding:2rem;color:#f87171">Company not found.</div>`;

  const sel = state.companyPage.selectedPipeline;
  const tab = state.companyPage.tab;
  const pipelineStatus = company.status==='critical'?'critical':company.status==='warning'?'warning':'normal';

  const selPipelineData = (PIPELINE_CONFIGS[companyId]||[]).find(p=>p.id===sel);
  const activeSensorTypes = new Set(
    (selPipelineData?.sensors||[])
      .filter(s=>state.sensorStates[`${companyId}-${sel}-${s.id}`]!==false)
      .map(s=>s.type)
  );

  const cp = (state.sensorData.pressure.slice(-1)[0]||95).toFixed(1);
  const cf = (state.sensorData.flow.slice(-1)[0]||950).toFixed(0);
  const ca = (state.sensorData.acoustic.slice(-1)[0]||46).toFixed(1);
  const ci = (state.sensorData.infrared.slice(-1)[0]||25).toFixed(1);
  const ct = (state.sensorData.temperature.slice(-1)[0]||25).toFixed(1);
  const cv = (state.sensorData.vibration.slice(-1)[0]||2).toFixed(1);
  const cc = (state.sensorData.corrosion.slice(-1)[0]||0.05).toFixed(3);
  const cg = (state.sensorData.gas.slice(-1)[0]||50).toFixed(0);
  const cw = (state.sensorData.water.slice(-1)[0]||5).toFixed(1);
  const pressureDrop = pipelineStatus==='critical'?15:pipelineStatus==='warning'?8:2;
  const flowImb = ((parseFloat(cf)-parseFloat(cf)*(pipelineStatus==='critical'?0.85:pipelineStatus==='warning'?0.95:0.99))/parseFloat(cf)*100).toFixed(1);

  const sensorReadings = [
    {label:"Pressure",  value:cp, unit:"PSI",   data:state.sensorData.pressure,  color:"#60a5fa", type:"pressure",  status:pressureDrop>10?"critical":pressureDrop>5?"warning":"normal", sub:`Drop: ${pressureDrop}%`},
    {label:"Flow Rate", value:cf, unit:"L/min",  data:state.sensorData.flow,      color:"#a78bfa", type:"flow",      status:parseFloat(flowImb)>8?"critical":parseFloat(flowImb)>4?"warning":"normal", sub:`Imbalance: ${flowImb}%`},
    {label:"Acoustic",  value:ca, unit:"dB",     data:state.sensorData.acoustic,  color:"#34d399", type:"acoustic",  status:pipelineStatus, sub:pipelineStatus==='normal'?'No vibration':'Anomaly detected'},
    {label:"Temp",      value:ci, unit:"°C",     data:state.sensorData.infrared,  color:"#fb923c", type:"infrared",  status:parseFloat(ci)>32?"warning":"normal", sub:parseFloat(ci)>32?"Above threshold":"Normal range"},
    {label:"Temperature", value:ct, unit:"°C",   data:state.sensorData.temperature, color:"#ef4444", type:"temperature", status:parseFloat(ct)>35?"critical":parseFloat(ct)>30?"warning":"normal", sub:parseFloat(ct)>35?"Overheating":"Normal"},
    {label:"Vibration", value:cv, unit:"mm/s",   data:state.sensorData.vibration, color:"#8b5cf6", type:"vibration", status:parseFloat(cv)>3?"warning":"normal", sub:parseFloat(cv)>3?"High vibration":"Stable"},
    {label:"Corrosion", value:cc, unit:"mm/yr", data:state.sensorData.corrosion, color:"#f59e0b", type:"corrosion", status:parseFloat(cc)>0.1?"warning":"normal", sub:parseFloat(cc)>0.1?"Accelerated":"Normal rate"},
    {label:"Gas Level", value:cg, unit:"ppm",    data:state.sensorData.gas,       color:"#10b981", type:"gas",       status:parseFloat(cg)>80?"critical":parseFloat(cg)>60?"warning":"normal", sub:parseFloat(cg)>60?"Elevated":"Safe"},
    {label:"Water Ingress", value:cw, unit:"L/h", data:state.sensorData.water,    color:"#06b6d4", type:"water",     status:parseFloat(cw)>7?"warning":"normal", sub:parseFloat(cw)>7?"Leak detected":"Dry"},
  ];

  const companyAlerts = state.alerts[companyId]||[];
  const activeAlerts  = companyAlerts.filter(a=>!a.resolved);

  // sensor toggle panel
  const pipeline = (PIPELINE_CONFIGS[companyId]||[]).find(p=>p.id===sel);
  const typeColors = {pressure:"#60a5fa",flow:"#a78bfa",acoustic:"#34d399",infrared:"#f97316",temperature:"#ef4444",vibration:"#8b5cf6",corrosion:"#f59e0b",gas:"#10b981",water:"#06b6d4"};
  const allOn = pipeline ? pipeline.sensors.every(s=>state.sensorStates[`${companyId}-${sel}-${s.id}`]!==false) : true;

  const sensorTogglePanel = pipeline ? `
  <div style="background:${th.surface};border:1px solid ${th.border};border-radius:10px;padding:0.85rem;margin-top:0.75rem">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem">
      <span style="color:${th.textMuted};font-size:0.72rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase">Sensor Controls</span>
      <button id="toggle-all-sensors" data-company="${companyId}" data-pipeline="${sel}" data-allon="${allOn}" style="padding:3px 10px;background:${allOn?th.accentBg:'rgba(107,114,128,0.15)'};border:1px solid ${allOn?th.borderStrong:'rgba(107,114,128,0.3)'};border-radius:5px;color:${allOn?th.accent:'#9ca3af'};font-size:0.7rem;cursor:pointer;font-weight:600">
        ${allOn?'All OFF':'All ON'}
      </button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.5rem">
      ${pipeline.sensors.map(s=>{
        const key=`${companyId}-${sel}-${s.id}`;
        const isOn=state.sensorStates[key]!==false;
        const col=typeColors[s.type]||th.accent;
        return `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0.7rem;background:${isOn?`${col}12`:'rgba(107,114,128,0.08)'};border:1px solid ${isOn?`${col}40`:'rgba(107,114,128,0.2)'};border-radius:7px">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:8px;height:8px;border-radius:50%;background:${isOn?col:'#4b5563'};box-shadow:${isOn?`0 0 5px ${col}`:'none'}"></div>
            <div>
              <div style="color:${isOn?col:'#6b7280'};font-size:0.72rem;font-weight:600;text-transform:capitalize">${s.type}</div>
              <div style="color:${th.textFaint};font-size:0.65rem">${s.id.toUpperCase()}</div>
            </div>
          </div>
          <button data-sensor-key="${key}" data-sensor-val="${isOn}" style="width:36px;height:20px;border-radius:10px;background:${isOn?col:'rgba(75,85,99,0.5)'};border:none;cursor:pointer;position:relative;flex-shrink:0">
            <div style="position:absolute;top:2px;left:${isOn?'18px':'2px'};width:16px;height:16px;border-radius:50%;background:#fff;transition:left 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></div>
          </button>
        </div>`;
      }).join('')}
    </div>
  </div>` : '';

  return `
  <div style="display:flex;flex-direction:column" class="fade-in">
    <div style="background:${th.header};border-bottom:1px solid ${th.border};padding:0.65rem 1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div style="display:flex;align-items:center;gap:8px;min-width:0">
        <button data-nav="dashboard" style="display:flex;align-items:center;gap:4px;color:${th.accent};background:none;border:none;cursor:pointer;font-size:0.78rem;white-space:nowrap;flex-shrink:0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Dashboard
        </button>
        <span style="color:${th.textFaint};flex-shrink:0">|</span>
        <div style="min-width:0">
          <span style="color:${th.text};font-weight:600;font-size:0.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">${company.name}</span>
          <span style="color:${th.textMuted};font-size:0.72rem">${company.region}</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
        ${statusBadgeHTML(company.status)}
        <div style="display:flex;align-items:center;gap:5px;padding:3px 8px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);border-radius:6px">
          <div style="width:5px;height:5px;border-radius:50%;background:#34d399;animation:pulse 2s infinite"></div>
          <span style="color:#34d399;font-size:0.68rem;font-weight:600">LIVE</span>
        </div>
      </div>
    </div>
    <div class="company-split" style="--split-border:${th.border}">
      <!-- Left: Map + controls -->
      <div class="split-left">
        <div id="pipeline-map-container">${pipelineSVGHTML(companyId)}</div>
        ${sensorTogglePanel}
        <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem">
          ${(PIPELINE_CONFIGS[companyId]||[]).map(pl=>`
          <div data-select-pipeline="${pl.id}" data-company="${companyId}" style="padding:0.6rem 0.9rem;background:${pl.id===sel?th.accentBg:th.surface};border:1px solid ${pl.id===sel?th.borderStrong:th.border};border-radius:8px;cursor:pointer;display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="color:${pl.id===sel?th.accent:th.text};font-size:0.82rem;font-weight:500">${pl.name}</div>
              <div style="color:${th.textFaint};font-size:0.72rem">
                ${pl.sensors.filter(s=>state.sensorStates[`${companyId}-${pl.id}-${s.id}`]!==false).length}/${pl.sensors.length} sensors active
              </div>
            </div>
            ${statusBadgeHTML(pl.status)}
          </div>`).join('')}
        </div>
      </div>
      <!-- Right: Sensors / Alerts panel -->
      <div class="split-right">
        <div style="display:flex;background:${th.header};border-bottom:1px solid ${th.border};position:sticky;top:0;z-index:10;flex-shrink:0">
          ${["sensors","alerts"].map(tb=>`
          <button data-tab="${tb}" style="flex:1;padding:0.75rem;font-size:0.78rem;font-weight:600;background:none;border:none;border-bottom:2px solid ${tab===tb?th.navActive:'transparent'};color:${tab===tb?th.navActive:th.navInactive};cursor:pointer;text-transform:uppercase">
            ${tb}${tb==='alerts'&&activeAlerts.filter(a=>a.severity!=='info').length>0?`<span style="margin-left:6px;background:#ef4444;color:#fff;border-radius:9px;font-size:0.6rem;padding:1px 5px;font-weight:700">${activeAlerts.filter(a=>a.severity!=='info').length}</span>`:''}
          </button>`).join('')}
        </div>
        <div class="split-right-body">
          ${tab==='sensors' ? `
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            <div style="padding:0.6rem 0.9rem;background:${pipelineStatus==='critical'?'rgba(239,68,68,0.08)':pipelineStatus==='warning'?'rgba(245,158,11,0.08)':'rgba(52,211,153,0.08)'};border:1px solid ${pipelineStatus==='critical'?'rgba(239,68,68,0.3)':pipelineStatus==='warning'?'rgba(245,158,11,0.3)':'rgba(52,211,153,0.3)'};border-radius:8px">
              <div style="display:flex;justify-content:space-between">
                <span style="color:${th.text};font-size:0.8rem;font-weight:600">System Status</span>
                ${statusBadgeHTML(pipelineStatus==='normal'?'operational':pipelineStatus)}
              </div>
              ${selPipelineData?`<div style="color:${th.textMuted};font-size:0.72rem;margin-top:4px">${selPipelineData.name}</div>`:''}
            </div>
            ${sensorReadings.map(s=>{
              const isActive=activeSensorTypes.has(s.type);
              return `
              <div style="background:${th.surface};border:1px solid ${isActive?th.border:'rgba(107,114,128,0.15)'};border-radius:10px;padding:0.75rem;opacity:${isActive?1:0.45}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
                  <div>
                    <div style="display:flex;align-items:center;gap:6px">
                      <div style="width:7px;height:7px;border-radius:50%;background:${isActive?s.color:'#4b5563'}"></div>
                      <div style="color:${th.textMuted};font-size:0.72rem;margin-bottom:2px">${s.label}</div>
                    </div>
                    <div style="color:${isActive?th.text:'#6b7280'};font-weight:700;font-size:1.1rem">
                      <span id="sv-${s.type}">${isActive?s.value:'—'}</span> <span style="font-size:0.7rem;font-weight:400;color:${th.textFaint}">${isActive?s.unit:''}</span>
                    </div>
                    <div id="ss-${s.type}" style="color:${isActive?(s.status==='normal'?'#34d399':s.status==='warning'?'#f59e0b':'#ef4444'):'#4b5563'};font-size:0.7rem">
                      ${isActive?s.sub:'Sensor offline'}
                    </div>
                  </div>
                  ${statusBadgeHTML(isActive?s.status:'offline')}
                </div>
                ${isActive?`<div id="sc-${s.type}">${miniChartHTML(s.data,s.color,s.unit)}</div>`:''}
              </div>`;
            }).join('')}
          </div>`
          : `
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">
              ${[["Critical",activeAlerts.filter(a=>a.severity==='critical').length,"#ef4444","rgba(239,68,68,0.1)"],
                 ["Warning",activeAlerts.filter(a=>a.severity==='warning').length,"#f59e0b","rgba(245,158,11,0.1)"],
                 ["Info",activeAlerts.filter(a=>a.severity==='info').length,"#60a5fa","rgba(96,165,250,0.1)"]
              ].map(([l,c,col,bg])=>`
              <div style="background:${bg};border:1px solid ${col}40;border-radius:8px;padding:0.6rem;text-align:center">
                <div style="color:${col};font-size:1.4rem;font-weight:700">${c}</div>
                <div style="color:${col};font-size:0.68rem">${l}</div>
              </div>`).join('')}
            </div>
            ${activeAlerts.length===0
              ? `<div style="text-align:center;padding:2rem;color:${th.textMuted};font-size:0.82rem"><div style="font-size:2rem;margin-bottom:8px">✓</div>All systems operational</div>`
              : activeAlerts.map(alert=>`
              <div style="background:${th.surface};border:1px solid ${alert.severity==='critical'?'rgba(239,68,68,0.3)':alert.severity==='warning'?'rgba(245,158,11,0.25)':'rgba(96,165,250,0.2)'};border-radius:10px;padding:0.75rem">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
                  <div style="color:${alert.severity==='critical'?'#fca5a5':alert.severity==='warning'?'#fcd34d':'#93c5fd'};font-weight:600;font-size:0.82rem;flex:1">${alert.title}</div>
                  ${statusBadgeHTML(alert.severity)}
                </div>
                <p style="color:${th.textMuted};font-size:0.76rem;margin-bottom:8px;line-height:1.5">${alert.description}</p>
                <div style="color:${th.textFaint};font-size:0.7rem;margin-bottom:8px">📍 ${alert.location} · ⏱ ${fmtTime(alert.timestamp)}</div>
                ${alert.assignedTo?`<div style="color:#34d399;font-size:0.72rem;margin-bottom:8px">👷 ${alert.assignedTo}</div>`:''}
                ${alert.severity!=='info'?`
                <div style="display:flex;gap:6px">
                  <button data-dispatch="${alert.id}" data-company="${companyId}" ${alert.assignedTo?'disabled':''} style="flex:1;padding:0.4rem 0.6rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:6px;color:${alert.assignedTo?th.textFaint:th.accent};font-size:0.72rem;cursor:${alert.assignedTo?'default':'pointer'}">
                    ${alert.assignedTo?'Dispatched':'Dispatch Team'}
                  </button>
                  <button data-resolve="${alert.id}" data-company="${companyId}" style="flex:1;padding:0.4rem 0.6rem;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);border-radius:6px;color:#34d399;font-size:0.72rem;cursor:pointer">
                    Resolve
                  </button>
                </div>`:''}
              </div>`).join('')}
          </div>`}
        </div>
      </div>
    </div>
  </div>`;
}

// ─── ALERTS PAGE ──────────────────────────────────────────────────
function renderAlertsPage() {
  const th = t();
  const all = Object.entries(state.alerts).flatMap(([cid,list])=>list.map(a=>({...a,companyId:cid})));
  const filtered = state.alertFilter==='all'?all:all.filter(a=>a.severity===state.alertFilter);
  return `
  <div style="padding:1rem;max-width:900px;margin:0 auto" class="fade-in">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:8px">
      <h2 style="color:${th.text};font-size:1rem;font-weight:600">All System Alerts</h2>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${["all","critical","warning","info"].map(f=>`
        <button data-filter="${f}" style="padding:0.3rem 0.7rem;background:${state.alertFilter===f?th.accentBg:'transparent'};border:1px solid ${state.alertFilter===f?th.borderStrong:th.border};border-radius:6px;color:${state.alertFilter===f?th.accent:th.navInactive};font-size:0.73rem;cursor:pointer;text-transform:capitalize">
          ${f}
        </button>`).join('')}
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      ${filtered.map(a=>{
        const co=getCompanies().find(c=>c.id===a.companyId);
        return `
        <div style="background:${th.surface};border:1px solid ${a.resolved?th.border:a.severity==='critical'?'rgba(239,68,68,0.3)':a.severity==='warning'?'rgba(245,158,11,0.25)':'rgba(96,165,250,0.2)'};border-radius:12px;padding:1rem;opacity:${a.resolved?0.5:1}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div style="flex:1">
              <div style="color:${th.text};font-weight:600;font-size:0.88rem;margin-bottom:2px">${a.title}</div>
              <div style="color:${th.textMuted};font-size:0.72rem">${co?.name} · ${a.location}</div>
            </div>
            <div style="display:flex;gap:6px;align-items:center">
              ${statusBadgeHTML(a.severity)}${a.resolved?statusBadgeHTML('normal'):''}
            </div>
          </div>
          <p style="color:${th.textMuted};font-size:0.78rem;margin-bottom:8px;line-height:1.5">${a.description}</p>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="color:${th.textFaint};font-size:0.72rem">⏱ ${fmtTime(a.timestamp)}</span>
            ${!a.resolved&&a.severity!=='info'?`
            <button data-resolve-global="${a.id}" data-company="${a.companyId}" style="padding:0.3rem 0.75rem;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);border-radius:6px;color:#34d399;font-size:0.73rem;cursor:pointer">
              Resolve
            </button>`:''}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── SENSORS PAGE ─────────────────────────────────────────────────
function renderSensorsPage() {
  const th = t();
  const allSensors = getCompanies().flatMap(c=>
    (PIPELINE_CONFIGS[c.id]||[]).flatMap(pl=>
      pl.sensors.map(s=>({...s,pipeline:pl.name,pipelineId:pl.id,company:c.name,companyId:c.id,companyStatus:c.status,key:`${c.id}-${pl.id}-${s.id}`}))
    )
  );
  const activeCount = allSensors.filter(s=>state.sensorStates[s.key]!==false).length;
  const typeColors  = {pressure:"#60a5fa",flow:"#a78bfa",acoustic:"#34d399",infrared:"#f97316"};
  const allOn = allSensors.every(s=>state.sensorStates[s.key]!==false);
  return `
  <div style="padding:1rem;max-width:1100px;margin:0 auto" class="fade-in">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:8px">
      <div>
        <h2 style="color:${th.text};font-size:1rem;font-weight:600">Live Sensor Overview</h2>
        <div style="color:${th.textMuted};font-size:0.78rem;margin-top:2px">${activeCount}/${allSensors.length} sensors active</div>
      </div>
      <button id="toggle-all-global" data-allon="${allOn}" style="padding:0.4rem 1rem;background:${th.accentBg};border:1px solid ${th.borderStrong};border-radius:7px;color:${th.accent};font-size:0.78rem;cursor:pointer;font-weight:600;white-space:nowrap">
        ${allOn?'Turn All OFF':'Turn All ON'}
      </button>
    </div>
    <div class="sensor-grid">
      ${allSensors.map(s=>{
        const isOn=state.sensorStates[s.key]!==false;
        const col=typeColors[s.type]||th.accent;
        return `
        <div style="background:${th.surface};border:1px solid ${isOn?th.border:'rgba(107,114,128,0.15)'};border-radius:10px;padding:0.9rem;opacity:${isOn?1:0.55};transition:opacity 0.25s">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
            <div style="display:flex;align-items:center;gap:8px">
              <div style="width:32px;height:32px;border-radius:8px;background:${col}18;border:1px solid ${isOn?`${col}40`:'rgba(107,114,128,0.2)'};display:flex;align-items:center;justify-content:center">
                <div style="width:10px;height:10px;border-radius:50%;background:${isOn?col:'#4b5563'};box-shadow:${isOn?`0 0 5px ${col}`:'none'}"></div>
              </div>
              <div>
                <div style="color:${isOn?th.text:'#6b7280'};font-size:0.8rem;font-weight:600;text-transform:capitalize">${s.type}</div>
                <div style="color:${th.textFaint};font-size:0.68rem">${s.id.toUpperCase()}</div>
              </div>
            </div>
            <button data-sensor-key="${s.key}" data-sensor-val="${isOn}" style="width:40px;height:22px;border-radius:11px;background:${isOn?col:'rgba(75,85,99,0.5)'};border:none;cursor:pointer;position:relative;flex-shrink:0">
              <div style="position:absolute;top:3px;left:${isOn?'20px':'3px'};width:16px;height:16px;border-radius:50%;background:#fff;transition:left 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></div>
            </button>
          </div>
          <div style="color:${th.textMuted};font-size:0.7rem;margin-bottom:2px">${s.pipeline}</div>
          <div style="color:${th.textFaint};font-size:0.68rem">${s.company}</div>
          <div style="margin-top:8px;padding-top:8px;border-top:1px solid ${th.border};display:flex;justify-content:space-between;align-items:center">
            ${statusBadgeHTML(isOn?s.status:'offline')}
            <span style="color:${isOn?'#34d399':'#6b7280'};font-size:0.68rem;font-weight:600">${isOn?'● ACTIVE':'○ OFFLINE'}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── MAP PAGE ─────────────────────────────────────────────────────
function renderMapPage() {
  const th = t();
  const companies = getCompanies();

  // Derive status live from alerts
  const liveStatus = (cid) => {
    const hasCrit = (state.alerts[cid]||[]).some(a=>!a.resolved&&a.severity==='critical');
    const hasWarn = (state.alerts[cid]||[]).some(a=>!a.resolved&&a.severity==='warning');
    const co = companies.find(c=>c.id===cid);
    if (hasCrit || co?.status==='critical') return 'critical';
    if (hasWarn || co?.status==='warning') return 'warning';
    return 'operational';
  };

  // Company node positions on SVG
  const nodes = [
    {id:"shell",   name:"Shell Petroleum",    shortName:"Shell",   x:180, y:210},
    {id:"chevron", name:"TotalEnergies Ghana", shortName:"Total",   x:420, y:170},
    {id:"exxon",   name:"Eni Ghana E&P",       shortName:"Eni",     x:660, y:200},
    {id:"bp",      name:"Tullow Oil Ghana",    shortName:"Tullow",  x:360, y:340},
  ];

  // Pipeline connection lines between companies
  const connections = [
    {a:0,b:1, flow:'normal'},
    {a:1,b:2, flow:'normal'},
    {a:0,b:3, flow:'warning'},
    {a:1,b:3, flow:'critical'},
    {a:2,b:3, flow:'normal'},
  ];

  // Engineers grouped by company
  const engineersByCompany = {};
  USERS.filter(u=>u.role==='engineer').forEach(u => {
    const cid = ZONE_PIPELINE_MAP[u.zone];
    if (!engineersByCompany[cid]) engineersByCompany[cid] = [];
    engineersByCompany[cid].push(u);
  });

  // Selected node state
  const sel = state.mapSelectedNode || null;
  const selCompany = sel ? companies.find(c=>c.id===sel) : null;
  const selAlerts  = sel ? (state.alerts[sel]||[]).filter(a=>!a.resolved&&a.severity!=='info') : [];
  const selEngs    = sel ? (engineersByCompany[sel]||[]) : [];

  const colOf = (status) =>
    status==='critical'?'#ef4444':status==='warning'?'#f59e0b':'#34d399';

  // Flow animation class per connection
  const flowCls = (f) =>
    f==='critical'?'pipeline-flow-critical':f==='warning'?'pipeline-flow':'pipeline-flow-slow';

  // Build SVG
  let svgLines = '';
  connections.forEach(({a,b,flow}) => {
    const na=nodes[a], nb=nodes[b];
    const fc = flow==='critical'?'#ef444466':flow==='warning'?'#f59e0b66':'#22d3ee33';
    const fc2 = flow==='critical'?'#fca5a8':flow==='warning'?'#fcd34d':'#67e8f9';
    const mx=(na.x+nb.x)/2, my=(na.y+nb.y)/2-30;
    const pathD=`M ${na.x} ${na.y} Q ${mx} ${my} ${nb.x} ${nb.y}`;
    svgLines += `
      <path d="${pathD}" stroke="${fc}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="${pathD}" stroke="${fc2}" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="10 20" class="${flowCls(flow)}" style="pointer-events:none"/>`;
  });

  let svgNodes = '';
  nodes.forEach(n => {
    const status = liveStatus(n.id);
    const col = colOf(status);
    const isSel = sel===n.id;
    const alertCount = (state.alerts[n.id]||[]).filter(a=>!a.resolved&&a.severity!=='info').length;
    const engs = engineersByCompany[n.id]||[];
    const ringR = isSel ? 38 : 32;
    svgNodes += `
      <g data-company="${n.id}" class="map-node" style="cursor:pointer">
        <!-- Outer pulse ring -->
        <circle cx="${n.x}" cy="${n.y}" r="${ringR}" fill="none" stroke="${col}" stroke-width="${isSel?2:1}" opacity="${isSel?0.5:0.3}">
          <animate attributeName="r" from="${ringR}" to="${ringR+16}" dur="${status==='critical'?'0.9s':'2s'}" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="${isSel?0.5:0.3}" to="0" dur="${status==='critical'?'0.9s':'2s'}" repeatCount="indefinite"/>
        </circle>
        <!-- Selected highlight ring -->
        ${isSel?`<circle cx="${n.x}" cy="${n.y}" r="34" fill="none" stroke="${col}" stroke-width="2.5" stroke-dasharray="6 3"/>`:''}
        <!-- Main node circle -->
        <circle cx="${n.x}" cy="${n.y}" r="26" fill="${isSel?col+'44':col+'1a'}" stroke="${col}" stroke-width="${isSel?2.5:2}"/>
        <!-- Company initial letter -->
        <text x="${n.x}" y="${n.y-2}" text-anchor="middle" fill="${col}" font-size="13" font-weight="bold" style="pointer-events:none">${n.shortName[0]}</text>
        <!-- Pipeline count -->
        <text x="${n.x}" y="${n.y+11}" text-anchor="middle" fill="${col}aa" font-size="8" style="pointer-events:none">${(companies.find(c=>c.id===n.id)?.pipelines||0)}PL</text>
        <!-- Company name label -->
        <text x="${n.x}" y="${n.y+42}" text-anchor="middle" fill="${th.text}" font-size="10" font-weight="600" style="pointer-events:none">${n.shortName}</text>
        <!-- Engineer count badge -->
        <circle cx="${n.x+20}" cy="${n.y-20}" r="9" fill="${th.header}" stroke="${th.accent}" stroke-width="1.5" style="pointer-events:none"/>
        <text x="${n.x+20}" y="${n.y-16}" text-anchor="middle" fill="${th.accent}" font-size="8" font-weight="bold" style="pointer-events:none">${engs.length}</text>
        <!-- Alert badge -->
        ${alertCount>0?`
        <circle cx="${n.x-20}" cy="${n.y-20}" r="9" fill="#ef4444" stroke="${th.header}" stroke-width="1.5" style="pointer-events:none"/>
        <text x="${n.x-20}" y="${n.y-16}" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold" style="pointer-events:none">${alertCount}</text>
        `:''}
      </g>`;
  });

  // Legend
  const legend = `
    <g transform="translate(16, 460)">
      ${[['operational','#34d399','Operational'],['warning','#f59e0b','Warning'],['critical','#ef4444','Critical']].map(([s,c,l],i)=>`
        <circle cx="${i*110}" cy="0" r="5" fill="${c}33" stroke="${c}" stroke-width="1.5"/>
        <text x="${i*110+12}" y="4" fill="${th.textMuted}" font-size="10">${l}</text>
      `).join('')}
      <text x="340" y="4" fill="${th.textFaint}" font-size="9">· badge = engineers · red badge = alerts</text>
    </g>`;

  // Right panel: engineer monitoring
  const rightPanel = sel && selCompany ? `
    <div style="border-top:1px solid ${th.border}">

      <!-- Company header -->
      <div style="padding:0.85rem 1rem;background:${colOf(liveStatus(sel))}15;border-bottom:1px solid ${th.border}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <div style="color:${th.text};font-weight:700;font-size:0.9rem">${selCompany.name}</div>
          ${statusBadgeHTML(liveStatus(sel))}
        </div>
        <div style="color:${th.textMuted};font-size:0.72rem">${selCompany.region} · ${selCompany.pipelines} pipelines</div>
      </div>

      <!-- Active alerts for this company -->
      <div style="padding:0.75rem 1rem;border-bottom:1px solid ${th.border}">
        <div style="color:${th.textMuted};font-size:0.68rem;font-weight:700;letter-spacing:0.08em;margin-bottom:0.5rem">ACTIVE ALERTS</div>
        ${selAlerts.length===0
          ? `<div style="color:${th.textFaint};font-size:0.78rem;padding:0.4rem 0">No active alerts</div>`
          : selAlerts.map(a=>`
            <div style="display:flex;gap:8px;align-items:flex-start;padding:0.5rem 0;border-bottom:1px solid ${th.border}">
              <div style="width:7px;height:7px;border-radius:50%;background:${a.severity==='critical'?'#ef4444':'#f59e0b'};margin-top:4px;flex-shrink:0;${a.severity==='critical'?'animation:pulse 0.8s ease infinite':''}"></div>
              <div style="flex:1;min-width:0">
                <div style="color:${a.severity==='critical'?'#fca5a5':'#fcd34d'};font-size:0.75rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.title}</div>
                <div style="color:${th.textFaint};font-size:0.68rem;margin-top:1px">${fmtTime(a.timestamp)}</div>
              </div>
              ${!a.resolved?`<button data-resolve="${a.id}" data-company="${sel}" style="padding:2px 7px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:4px;color:#34d399;font-size:0.65rem;cursor:pointer;flex-shrink:0">Resolve</button>`:''}
            </div>`).join('')}
      </div>

      <!-- Assigned engineers -->
      <div style="padding:0.75rem 1rem">
        <div style="color:${th.textMuted};font-size:0.68rem;font-weight:700;letter-spacing:0.08em;margin-bottom:0.5rem">MONITORING ENGINEERS</div>
        ${selEngs.length===0
          ? `<div style="color:${th.textFaint};font-size:0.78rem">No engineers assigned</div>`
          : selEngs.map(eng=>{
              const zone = eng.zone;
              const zoneAlerts = (state.alerts[sel]||[]).filter(a=>!a.resolved&&a.severity!=='info'&&
                Object.entries(ZONE_PIPELINE_MAP).some(([z,c])=>z===zone&&c===sel));
              const dispatched = (state.alerts[sel]||[]).some(a=>a.assignedTo===eng.name);
              return `
              <div style="display:flex;align-items:center;gap:8px;padding:0.55rem 0.7rem;background:${th.accentBg};border:1px solid ${dispatched?th.borderStrong:th.border};border-radius:8px;margin-bottom:5px">
                <div style="width:30px;height:30px;border-radius:50%;background:${dispatched?'rgba(52,211,153,0.2)':th.surface};border:1.5px solid ${dispatched?'#34d399':th.border};display:flex;align-items:center;justify-content:center;flex-shrink:0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${dispatched?'#34d399':th.textMuted}" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div style="flex:1;min-width:0">
                  <div style="color:${th.text};font-size:0.75rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${eng.name}</div>
                  <div style="color:${th.textFaint};font-size:0.65rem">Zone ${zone} ${dispatched?'· <span style="color:#34d399">Dispatched</span>':''}</div>
                </div>
                ${dispatched
                  ? `<span style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);color:#34d399;font-size:0.62rem;padding:2px 6px;border-radius:4px;flex-shrink:0;font-weight:600">ON SITE</span>`
                  : selAlerts.length>0
                    ? `<button data-dispatch="${selAlerts[0].id}" data-company="${sel}" style="padding:2px 8px;background:${th.accentBg};border:1px solid ${th.borderStrong};border-radius:5px;color:${th.accent};font-size:0.65rem;cursor:pointer;flex-shrink:0;font-weight:600">Alert</button>`
                    : `<span style="background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.2);color:rgba(52,211,153,0.6);font-size:0.62rem;padding:2px 6px;border-radius:4px;flex-shrink:0">STANDBY</span>`
                }
              </div>`;
            }).join('')}
        <!-- View company detail button -->
        <button data-company-nav="${sel}" style="margin-top:0.6rem;width:100%;padding:0.5rem;background:${th.accentBg};border:1px solid ${th.borderStrong};border-radius:8px;color:${th.accent};font-size:0.75rem;font-weight:600;cursor:pointer">
          Inspect Pipeline Detail →
        </button>
      </div>
    </div>
  ` : `
    <div style="padding:1.5rem 1rem;text-align:center;color:${th.textMuted};font-size:0.8rem">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${th.textFaint}" stroke-width="1.5" style="display:block;margin:0 auto 0.5rem"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
      Tap a company node<br>to view engineers &amp; alerts
    </div>
  `;

  return `
  <div style="padding:1rem;display:flex;flex-direction:column;gap:1rem" class="fade-in">
    <!-- Title row with legend pills -->
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <h2 style="color:${th.text};font-size:1rem;font-weight:600;margin:0">Ghana Pipeline Network</h2>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${companies.map(c=>{
          const s=liveStatus(c.id);
          const col=colOf(s);
          return `<div style="display:flex;align-items:center;gap:4px;padding:3px 8px;background:${col}15;border:1px solid ${col}40;border-radius:5px">
            <div style="width:6px;height:6px;border-radius:50%;background:${col};${s==='critical'?'animation:pulse 0.8s ease infinite':''}"></div>
            <span style="color:${col};font-size:0.65rem;font-weight:600">${c.name.split(' ')[0]}</span>
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Map + right panel side by side on desktop, stacked on mobile -->
    <div style="display:flex;flex-direction:column;gap:1rem">
      <!-- SVG map -->
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;overflow:hidden">
        <svg viewBox="0 0 860 500" style="width:100%;display:block;background:${th.cardGrid}">
          <defs>
            <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${th.gridLine}" stroke-width="0.8"/>
            </pattern>
            <radialGradient id="glow-op" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#34d39922"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            <radialGradient id="glow-warn" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b22"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            <radialGradient id="glow-crit" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ef444422"/><stop offset="100%" stop-color="transparent"/></radialGradient>
          </defs>

          <!-- Background grid -->
          <rect width="860" height="500" fill="${th.cardGrid}"/>
          <rect width="860" height="500" fill="url(#mapgrid)"/>

          <!-- Ghana coastline suggestion -->
          <path d="M 60 430 Q 160 410 260 420 Q 380 435 500 415 Q 620 400 740 410 Q 790 415 820 420"
            stroke="${th.accent}25" stroke-width="3" fill="none" stroke-dasharray="8,5"/>
          <text x="440" y="450" fill="${th.textFaint}" font-size="10" text-anchor="middle" font-style="italic">Gulf of Guinea coastline</text>

          <!-- Tano Basin / region labels -->
          <text x="390" y="155" fill="${th.textFaint}" font-size="9" text-anchor="middle">Tano Basin</text>
          <text x="180" y="270" fill="${th.textFaint}" font-size="9" text-anchor="middle">Gulf of Guinea</text>
          <text x="660" y="155" fill="${th.textFaint}" font-size="9" text-anchor="middle">Cape Three Points</text>
          <text x="360" y="390" fill="${th.textFaint}" font-size="9" text-anchor="middle">Jubilee Field</text>

          <!-- Pipeline connections -->
          ${svgLines}

          <!-- Company nodes -->
          ${svgNodes}

          <!-- Legend -->
          ${legend}

          <!-- Title -->
          <text x="430" y="22" fill="${th.textMuted}" font-size="11" text-anchor="middle" font-weight="600">GHANA OFFSHORE PIPELINE NETWORK · LIVE</text>
        </svg>
      </div>

      <!-- Engineer / alert panel -->
      <div style="background:${th.surface};border:1px solid ${sel&&liveStatus(sel)==='critical'?'rgba(239,68,68,0.35)':sel&&liveStatus(sel)==='warning'?'rgba(245,158,11,0.3)':th.border};border-radius:12px;overflow:hidden">
        <!-- Panel header -->
        <div style="padding:0.7rem 1rem;background:${th.header};border-bottom:1px solid ${th.border};display:flex;justify-content:space-between;align-items:center">
          <div style="color:${th.text};font-size:0.8rem;font-weight:600">
            ${sel ? `${selCompany?.name || sel}` : 'Engineer Monitor'}
          </div>
          <div style="display:flex;gap:5px">
            ${companies.map(c=>{
              const s=liveStatus(c.id);
              const col=colOf(s);
              return `<button data-map-node="${c.id}" style="padding:3px 8px;background:${sel===c.id?col+'22':'transparent'};border:1px solid ${sel===c.id?col:th.border};border-radius:5px;color:${sel===c.id?col:th.textMuted};font-size:0.65rem;cursor:pointer;font-weight:600">${c.name.split(' ')[0]}</button>`;
            }).join('')}
          </div>
        </div>
        ${rightPanel}
      </div>
    </div>
  </div>`;
}

// ─── REPORTS PAGE ─────────────────────────────────────────────────
function renderReportsPage() {
  const th = t();
  const companies = getCompanies();
  const reports = [
    ["Monthly Incident Report","April 2026","Ready","📊","monthly-incident"],
    ["Pipeline Health Summary","Q1 2026","Ready","🔧","pipeline-health"],
    ["Sensor Calibration Log","March 2026","Ready","📡","sensor-calibration"],
    ["Environmental Impact Audit","Q1 2026","Pending","🌿","env-audit"],
    ["Engineer Dispatch Log","April 2026","Ready","👷","engineer-dispatch"],
    ["Annual Safety Review","2025","Archived","🛡️","annual-safety"],
  ];
  return `
  <div style="padding:1rem;max-width:900px;margin:0 auto" class="fade-in">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:8px">
      <h2 style="color:${th.text};font-size:1rem;font-weight:600;margin:0">Reports</h2>
      <span style="color:${th.textMuted};font-size:0.75rem">${companies.length} compan${companies.length===1?'y':'ies'} monitored</span>
    </div>
    <div class="report-grid">
      ${reports.map(([title,date,status,icon,key])=>`
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1.25rem">
        <div style="font-size:1.8rem;margin-bottom:8px">${icon}</div>
        <div style="color:${th.text};font-weight:600;font-size:0.9rem;margin-bottom:4px">${title}</div>
        <div style="color:${th.textMuted};font-size:0.75rem;margin-bottom:12px">${date}</div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          ${statusBadgeHTML(status)}
          ${status==='Ready'?`<button data-pdf-report="${key}" data-pdf-title="${title}" data-pdf-date="${date}" style="display:flex;align-items:center;gap:5px;padding:0.3rem 0.8rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:6px;color:${th.accent};font-size:0.73rem;cursor:pointer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </button>`:''}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ─── SETTINGS PAGE ────────────────────────────────────────────────
function renderSettingsPage() {
  const th = t();
  const engineers = USERS.filter(u=>u.role==='engineer');

  function toggle(on) {
    return `
    <div style="width:44px;height:24px;border-radius:12px;background:${on?th.accent:'rgba(107,114,128,0.4)'};position:relative;flex-shrink:0;transition:background 0.2s;cursor:pointer">
      <div style="position:absolute;top:3px;left:${on?'23px':'3px'};width:18px;height:18px;border-radius:50%;background:#fff;transition:left 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></div>
    </div>`;
  }

  return `
  <div style="padding:1rem;max-width:900px;margin:0 auto" class="fade-in">
    <h2 style="color:${th.text};font-size:1rem;font-weight:600;margin-bottom:1rem">Settings</h2>
    <div class="settings-grid">

      <!-- Account card -->
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1.25rem">
        <h3 style="color:${th.accent};font-size:0.78rem;font-weight:700;margin-bottom:1rem;letter-spacing:0.08em">YOUR ACCOUNT</h3>
        ${[["Name",state.user.name],["Email",state.user.email],["Role",state.user.role.toUpperCase()],["Zone",state.user.zone]].map(([k,v])=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid ${th.border}">
          <span style="color:${th.textMuted};font-size:0.8rem">${k}</span>
          <span style="color:${th.text};font-size:0.8rem;font-weight:500;text-align:right;max-width:60%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
        </div>`).join('')}
      </div>

      <!-- Theme card -->
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1.25rem">
        <h3 style="color:${th.accent};font-size:0.78rem;font-weight:700;margin-bottom:1rem;letter-spacing:0.08em">THEME</h3>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
          ${Object.entries(THEMES).map(([key,th2])=>`
          <button data-theme="${key}" style="display:flex;align-items:center;gap:12px;padding:0.65rem 0.9rem;background:${state.theme===key?th.accentBg:'transparent'};border:1px solid ${state.theme===key?th.borderStrong:th.border};border-radius:8px;cursor:pointer;text-align:left">
            <span style="width:16px;height:16px;border-radius:50%;background:${th2.swatch};flex-shrink:0;display:inline-block;box-shadow:0 0 6px ${th2.swatch}99"></span>
            <span style="color:${state.theme===key?th.accent:th.text};font-size:0.82rem;font-weight:500;flex:1">${th2.name}</span>
            ${state.theme===key?`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${th.accent}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`:''}
          </button>`).join('')}
        </div>
      </div>

      <!-- Alarm settings card -->
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1.25rem">
        <h3 style="color:${th.accent};font-size:0.78rem;font-weight:700;margin-bottom:0.25rem;letter-spacing:0.08em">ALARM SYSTEM</h3>
        <p style="color:${th.textMuted};font-size:0.72rem;margin-bottom:1rem;line-height:1.5">Control alerts, audio and voice announcements.</p>

        <!-- Master toggle -->
        <div style="padding:0.65rem 0.9rem;background:${state.alarmEnabled?'rgba(239,68,68,0.07)':'rgba(107,114,128,0.06)'};border:1px solid ${state.alarmEnabled?'rgba(239,68,68,0.25)':'rgba(107,114,128,0.2)'};border-radius:10px;margin-bottom:0.75rem">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="color:${th.text};font-size:0.85rem;font-weight:600">Alarm Alerts</div>
              <div style="color:${th.textMuted};font-size:0.72rem;margin-top:2px">Show modal + trigger audio on critical/warning events</div>
            </div>
            <button id="toggle-alarm-master" data-val="${state.alarmEnabled}" style="background:none;border:none;padding:0;cursor:pointer;flex-shrink:0;margin-left:12px">
              ${toggle(state.alarmEnabled)}
            </button>
          </div>
        </div>

        <!-- Sub-toggles (greyed out when master is off) -->
        <div style="display:flex;flex-direction:column;gap:0.5rem;opacity:${state.alarmEnabled?1:0.4};pointer-events:${state.alarmEnabled?'auto':'none'}">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.9rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:8px">
            <div>
              <div style="color:${th.text};font-size:0.8rem;font-weight:500">Sound Effects</div>
              <div style="color:${th.textMuted};font-size:0.7rem;margin-top:1px">Nuclear attack siren</div>
            </div>
            <button id="toggle-alarm-sound" data-val="${state.alarmSoundEnabled}" style="background:none;border:none;padding:0;cursor:pointer;flex-shrink:0;margin-left:12px">
              ${toggle(state.alarmSoundEnabled)}
            </button>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.9rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:8px">
            <div>
              <div style="color:${th.text};font-size:0.8rem;font-weight:500">Voice Announcements</div>
              <div style="color:${th.textMuted};font-size:0.7rem;margin-top:1px">Text-to-speech alert readout</div>
            </div>
            <button id="toggle-alarm-voice" data-val="${state.alarmVoiceEnabled}" style="background:none;border:none;padding:0;cursor:pointer;flex-shrink:0;margin-left:12px">
              ${toggle(state.alarmVoiceEnabled)}
            </button>
          </div>
        </div>

        <!-- Alarm Types (greyed out when master is off) -->
        <div style="margin-top:0.75rem;opacity:${state.alarmEnabled?1:0.4};pointer-events:${state.alarmEnabled?'auto':'none'}">
          <div style="color:${th.textMuted};font-size:0.72rem;margin-bottom:0.5rem">Enable alarms for specific issue types:</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.5rem">
            ${Object.entries(state.alarmTypesEnabled).map(([type, enabled]) => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.45rem 0.7rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:6px">
              <div>
                <div style="color:${th.text};font-size:0.75rem;font-weight:500;text-transform:capitalize">${type}</div>
              </div>
              <button id="toggle-alarm-${type}" data-val="${enabled}" style="background:none;border:none;padding:0;cursor:pointer;flex-shrink:0">
                ${toggle(enabled)}
              </button>
            </div>`).join('')}
          </div>
        </div>

        <!-- Test button -->
        <button id="test-alarm-btn" style="margin-top:0.85rem;width:100%;padding:0.55rem;background:${th.accentBg};border:1px solid ${th.borderStrong};border-radius:8px;color:${th.accent};font-size:0.78rem;font-weight:600;cursor:pointer;opacity:${state.alarmEnabled?1:0.4}" ${state.alarmEnabled?'':'disabled'}>
          Test Alarm Now
        </button>
      </div>

      ${state.user.role==='admin'?`
      <!-- Engineer directory — spans full width -->
      <div style="background:${th.surface};border:1px solid ${th.border};border-radius:12px;padding:1.25rem" class="settings-full">
        <h3 style="color:${th.accent};font-size:0.78rem;font-weight:700;margin-bottom:1rem;letter-spacing:0.08em">ENGINEER DIRECTORY</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:0.5rem">
          ${engineers.map(e=>`
          <div style="padding:0.6rem 0.9rem;background:${th.accentBg};border:1px solid ${th.border};border-radius:8px;display:flex;justify-content:space-between;align-items:center;gap:8px;min-width:0">
            <div style="min-width:0">
              <div style="color:${th.text};font-size:0.8rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.name}</div>
              <div style="color:${th.textFaint};font-size:0.68rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.email}</div>
            </div>
            <span style="background:${th.accentBg};border:1px solid ${th.border};color:${th.accent};font-size:0.7rem;padding:2px 8px;border-radius:6px;font-weight:600;flex-shrink:0">Zone ${e.zone}</span>
          </div>`).join('')}
        </div>
      </div>`:''}
    </div>
  </div>`;
}

// ─── EVENT BINDING ────────────────────────────────────────────────
function bindLogin() {
  const emailEl = document.getElementById('login-email');
  const pwEl    = document.getElementById('login-pw');
  const errEl   = document.getElementById('login-error');
  const btn     = document.getElementById('login-btn');
  const toggle  = document.getElementById('pw-toggle');

  if (toggle) toggle.addEventListener('click', () => {
    const isText = pwEl.type === 'text';
    pwEl.type = isText ? 'password' : 'text';
  });

  const doLogin = () => {
    const email = emailEl.value.trim();
    const pw    = pwEl.value;
    if (!email || !pw) { errEl.textContent='Please enter email and password.'; errEl.style.display='block'; return; }
    btn.textContent = 'Authenticating…';
    btn.disabled = true;
    setTimeout(() => {
      const user = USERS.find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.password===pw);
      if (user) {
        state.user = user;
        startSensorInterval();
        render();
        // trigger initial alarm check after short delay
        setTimeout(checkAndTriggerAlerts, 1500);
      } else {
        errEl.textContent='Invalid email or password.';
        errEl.style.display='block';
        btn.textContent='Sign In';
        btn.disabled=false;
      }
    }, 600);
  };

  btn.addEventListener('click', doLogin);
  pwEl.addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
}

function bindAll() {
  try {
    // Nav buttons
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => {
        const nav = el.dataset.nav;
        if (nav === 'dashboard') state.page = 'dashboard';
        else state.page = nav;
        state.showAlarmDropdown = false;
        state.showThemePicker   = false;
        render();
      });
    });

    // Company cards
    document.querySelectorAll('[data-company]').forEach(el => {
      // Only navigate if it's a card click (not a resolve/dispatch button inside)
      if (el.tagName === 'DIV' && el.classList.contains('company-card')) {
        el.addEventListener('click', () => {
          state.page = `company/${el.dataset.company}`;
          state.companyPage.selectedPipeline = 'pipeline-1';
          state.companyPage.tab = 'sensors';
          state.sensorData = { pressure:[], flow:[], acoustic:[], infrared:[], temperature:[], vibration:[], corrosion:[], gas:[], water:[] };
          render();
        });
      }
      // Map nodes — select node to show engineer panel (don't navigate away)
      if (el.tagName === 'G' || el.tagName === 'g' || el.classList.contains('map-node')) {
        el.addEventListener('click', () => {
          const cid = el.dataset.company;
          state.mapSelectedNode = state.mapSelectedNode === cid ? null : cid;
          render();
        });
      }
    });

    // Map panel company tab buttons
    document.querySelectorAll('[data-map-node]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const cid = el.dataset.mapNode;
        state.mapSelectedNode = state.mapSelectedNode === cid ? null : cid;
        render();
      });
    });

    // "Inspect Pipeline Detail" button on map panel
    document.querySelectorAll('[data-company-nav]').forEach(el => {
      el.addEventListener('click', () => {
        const cid = el.dataset.companyNav;
        state.page = `company/${cid}`;
        state.companyPage.selectedPipeline = 'pipeline-1';
        state.companyPage.tab = 'sensors';
        state.sensorData = { pressure:[], flow:[], acoustic:[], infrared:[], temperature:[], vibration:[], corrosion:[], gas:[], water:[] };
        render();
      });
    });

    // SVG pipeline clicks
    document.querySelectorAll('[data-pipeline]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const cid = el.dataset.company;
        const pid = el.dataset.pipeline;
        state.companyPage.selectedPipeline = pid;
        state.sensorData = { pressure:[], flow:[], acoustic:[], infrared:[], temperature:[], vibration:[], corrosion:[], gas:[], water:[] };
        // Partial re-render of map + panel
        const container = document.getElementById('pipeline-map-container');
        if (container) container.innerHTML = pipelineSVGHTML(cid);
        render(); // full render to update panel
      });
    });

    // Pipeline list items
    document.querySelectorAll('[data-select-pipeline]').forEach(el => {
      el.addEventListener('click', () => {
        state.companyPage.selectedPipeline = el.dataset.selectPipeline;
        state.sensorData = { pressure:[], flow:[], acoustic:[], infrared:[], temperature:[], vibration:[], corrosion:[], gas:[], water:[] };
        render();
      });
    });

    // Tabs
    document.querySelectorAll('[data-tab]').forEach(el => {
      el.addEventListener('click', () => {
        state.companyPage.tab = el.dataset.tab;
        render();
      });
    });

    // Theme
    document.querySelectorAll('[data-theme]').forEach(el => {
      el.addEventListener('click', () => {
        state.theme = el.dataset.theme;
        state.showThemePicker = false;
        render();
      });
    });

    // Alert filter
    document.querySelectorAll('[data-filter]').forEach(el => {
      el.addEventListener('click', () => {
        state.alertFilter = el.dataset.filter;
        render();
      });
    });

    // Resolve alert
    document.querySelectorAll('[data-resolve],[data-resolve-global]').forEach(el => {
      el.addEventListener('click', () => {
        const aid = el.dataset.resolve || el.dataset.resolveGlobal;
        const cid = el.dataset.company;
        state.alerts[cid] = state.alerts[cid].map(a => a.id===aid ? {...a,resolved:true} : a);
        render();
      });
    });

    // Dispatch
    document.querySelectorAll('[data-dispatch]').forEach(el => {
      el.addEventListener('click', () => {
        const aid = el.dataset.dispatch;
        const cid = el.dataset.company;
        const zone = Object.entries(ZONE_PIPELINE_MAP).find(([z,c])=>c===cid)?.[0];
        const eng  = zone ? ENGINEERS_BY_ZONE[zone] : null;
        state.alerts[cid] = state.alerts[cid].map(a => a.id===aid ? {...a,assignedTo:eng?.name||'Field Team'} : a);
        render();
      });
    });

    // Sensor toggles
    document.querySelectorAll('[data-sensor-key]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const key = el.dataset.sensorKey;
        const cur = el.dataset.sensorVal === 'true';
        state.sensorStates[key] = !cur;
        render();
      });
    });

    // Toggle all sensors (pipeline panel)
    const toggleAllBtn = document.getElementById('toggle-all-sensors');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        const cid = toggleAllBtn.dataset.company;
        const pid = toggleAllBtn.dataset.pipeline;
        const allOn = toggleAllBtn.dataset.allon === 'true';
        const pipeline = (PIPELINE_CONFIGS[cid]||[]).find(p=>p.id===pid);
        if (pipeline) {
          pipeline.sensors.forEach(s => {
            state.sensorStates[`${cid}-${pid}-${s.id}`] = !allOn;
          });
        }
        render();
      });
    }

    // Toggle all global
    const toggleAllGlobal = document.getElementById('toggle-all-global');
    if (toggleAllGlobal) {
      toggleAllGlobal.addEventListener('click', () => {
        const allOn = toggleAllGlobal.dataset.allon === 'true';
        getCompanies().forEach(c => {
          (PIPELINE_CONFIGS[c.id]||[]).forEach(pl => {
            pl.sensors.forEach(s => {
              state.sensorStates[`${c.id}-${pl.id}-${s.id}`] = !allOn;
            });
          });
        });
        render();
      });
    }

    // Header alarm btn
    const alarmBtn = document.getElementById('alarm-btn');
    if (alarmBtn) alarmBtn.addEventListener('click', e => {
      e.stopPropagation();
      state.showAlarmDropdown = !state.showAlarmDropdown;
      state.showThemePicker = false;
      render();
    });

    const closeAlarm = document.getElementById('close-alarm-dropdown');
    if (closeAlarm) closeAlarm.addEventListener('click', () => {
      state.showAlarmDropdown = false;
      render();
    });

    // Theme btn
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', e => {
      e.stopPropagation();
      state.showThemePicker = !state.showThemePicker;
      state.showAlarmDropdown = false;
      render();
    });

    // Add Company button
    const addCompanyBtn = document.getElementById('add-company-btn');
    if (addCompanyBtn) addCompanyBtn.addEventListener('click', () => {
      state.showAddCompany = true;
      state.addCompanyForm = { name:'', region:'', pipelines:'', status:'operational' };
      render();
    });

    // Add Company modal controls
    const closeAdd1 = document.getElementById('close-add-company');
    const closeAdd2 = document.getElementById('close-add-company-2');
    [closeAdd1, closeAdd2].forEach(btn => {
      if (btn) btn.addEventListener('click', () => {
        state.showAddCompany = false;
        render();
      });
    });

    // Status selector in modal
    document.querySelectorAll('[data-ac-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.addCompanyForm.status = btn.dataset.acStatus;
        render();
      });
    });

    // Save new company
    const saveBtn = document.getElementById('save-add-company');
    if (saveBtn) saveBtn.addEventListener('click', () => {
      const name     = document.getElementById('ac-name')?.value.trim();
      const region   = document.getElementById('ac-region')?.value.trim();
      const pipes    = parseInt(document.getElementById('ac-pipelines')?.value, 10);
      const errEl    = document.getElementById('ac-error');
      if (!name || !region || !pipes || pipes < 1) {
        if (errEl) {
          errEl.textContent = 'Please fill in all required fields.';
          errEl.style.display = 'block';
        }
        return;
      }
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').slice(0, 20);
      const newCompany = {
        id, name, status: state.addCompanyForm.status,
        pipelines: pipes, alerts: 0, region,
        pressure: 'normal', flow: 'normal', lastUpdate: 'just now'
      };
      COMPANIES_DATA.push(newCompany);
      state.alerts[id] = [];
      PIPELINE_CONFIGS[id] = [
        { id:'pipeline-1', name:`Main Pipeline (${name})`, status: state.addCompanyForm.status,
          path:'M 80 200 L 380 180 L 700 200',
          sensors:[
            {id:'s1',type:'pressure',x:180,y:193,status:'normal'},
            {id:'s2',type:'flow',x:390,y:183,status:'normal'},
            {id:'s3',type:'acoustic',x:600,y:196,status:'normal'},
          ]
        }
      ];
      state.showAddCompany = false;
      render();
    });

    // PDF Downloads
    document.querySelectorAll('[data-pdf-report]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key   = btn.dataset.pdfReport;
        const title = btn.dataset.pdfTitle;
        const date  = btn.dataset.pdfDate;
        generatePDF(key, title, date);
      });
    });

    // Alarm master toggle
    const toggleAlarmMaster = document.getElementById('toggle-alarm-master');
    if (toggleAlarmMaster) toggleAlarmMaster.addEventListener('click', () => {
      state.alarmEnabled = toggleAlarmMaster.dataset.val !== 'true';
      render();
    });

    // Alarm sound toggle
    const toggleAlarmSound = document.getElementById('toggle-alarm-sound');
    if (toggleAlarmSound) toggleAlarmSound.addEventListener('click', () => {
      state.alarmSoundEnabled = toggleAlarmSound.dataset.val !== 'true';
      render();
    });

    // Alarm voice toggle
    const toggleAlarmVoice = document.getElementById('toggle-alarm-voice');
    if (toggleAlarmVoice) toggleAlarmVoice.addEventListener('click', () => {
      state.alarmVoiceEnabled = toggleAlarmVoice.dataset.val !== 'true';
      render();
    });

    // Alarm type toggles
    Object.keys(state.alarmTypesEnabled).forEach(type => {
      const toggle = document.getElementById(`toggle-alarm-${type}`);
      if (toggle) toggle.addEventListener('click', () => {
        state.alarmTypesEnabled[type] = toggle.dataset.val !== 'true';
        render();
      });
    });

    // Test alarm
    const testAlarmBtn = document.getElementById('test-alarm-btn');
    if (testAlarmBtn) testAlarmBtn.addEventListener('click', () => {
      const critAlerts = Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity==='critical'&&state.alarmTypesEnabled[a.type]);
      const warnAlerts = Object.values(state.alerts).flat().filter(a=>!a.resolved&&a.severity==='warning'&&state.alarmTypesEnabled[a.type]);
      if (state.alarmSoundEnabled) playAlarmSound(critAlerts.length ? 'critical' : 'warning');
      if (critAlerts.length) showAlarmModal('critical', critAlerts);
      else if (warnAlerts.length) showAlarmModal('warning', warnAlerts);
      else { if (state.alarmSoundEnabled) playAlarmSound('warning'); }
    });

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
      state.user = null;
      state.page = 'dashboard';
      clearSensorInterval();
      if (state.alarmInterval) { clearInterval(state.alarmInterval); state.alarmInterval = null; }
      window.speechSynthesis && window.speechSynthesis.cancel();
      const modal = document.getElementById('alarm-modal-overlay');
      if (modal) modal.remove();
      render();
    });

    // Close dropdowns on outside click — handled by persistent listener set up at boot
  } catch (error) {
    console.error('bindAll failed:', error);
  }
}

function outsideClickHandler(e) {
  if (!state.showAlarmDropdown && !state.showThemePicker) return;
  const alarmDrop = document.getElementById('alarm-dropdown');
  const themeDrop = document.getElementById('theme-dropdown');
  const alarmBtn  = document.getElementById('alarm-btn');
  const themeBtn  = document.getElementById('theme-btn');
  const clickedInside =
    (alarmDrop && alarmDrop.contains(e.target)) ||
    (themeDrop && themeDrop.contains(e.target)) ||
    (alarmBtn  && alarmBtn.contains(e.target))  ||
    (themeBtn  && themeBtn.contains(e.target));
  if (!clickedInside) {
    state.showAlarmDropdown = false;
    state.showThemePicker   = false;
    render();
  }
}

// ─── SENSOR INTERVAL ──────────────────────────────────────────────
function startSensorInterval() {
  clearSensorInterval();
  state.sensorInterval = setInterval(() => {
    if (!state.user) return;
    const companyId = state.page.startsWith('company/') ? state.page.split('/')[1] : null;
    if (!companyId) return;
    const company = getCompanies().find(c=>c.id===companyId);
    if (!company) return;
    const ps = company.status==='critical'?'critical':company.status==='warning'?'warning':'normal';

    // Update data arrays
    state.sensorData.pressure = [...state.sensorData.pressure.slice(-19), genVal(ps,100)];
    state.sensorData.flow     = [...state.sensorData.flow.slice(-19),     genVal(ps,1000)];
    state.sensorData.acoustic = [...state.sensorData.acoustic.slice(-19), genVal(ps,50)];
    state.sensorData.infrared = [...state.sensorData.infrared.slice(-19), 20+genVal(ps,10)];
    state.sensorData.temperature = [...state.sensorData.temperature.slice(-19), 20+genVal(ps,15)];
    state.sensorData.vibration = [...state.sensorData.vibration.slice(-19), genVal(ps,5)];
    state.sensorData.corrosion = [...state.sensorData.corrosion.slice(-19), genVal(ps,0.1)];
    state.sensorData.gas = [...state.sensorData.gas.slice(-19), genVal(ps,100)];
    state.sensorData.water = [...state.sensorData.water.slice(-19), genVal(ps,10)];

    // Patch DOM surgically — no full re-render
    patchSensorDOM(companyId, ps);
  }, 1000);

  // Periodic alarm check every 15s
  if (!state.alarmInterval) {
    state.alarmInterval = setInterval(() => {
      if (state.user) checkAndTriggerAlerts();
    }, 15000);
  }
}

function clearSensorInterval() {
  if (state.sensorInterval) { clearInterval(state.sensorInterval); state.sensorInterval=null; }
}

// ─── SURGICAL DOM PATCH (no blink) ────────────────────────────────
function patchSensorDOM(companyId, ps) {
  // Only patch when on the sensors tab of a company page
  if (state.companyPage.tab !== 'sensors') return;
  if (!document.getElementById('sv-pressure')) return; // not rendered yet

  const pressureDrop = ps==='critical'?15:ps==='warning'?8:2;
  const cf = state.sensorData.flow.slice(-1)[0]||950;
  const ci = state.sensorData.infrared.slice(-1)[0]||25;
  const flowImb = ((cf - cf*(ps==='critical'?0.85:ps==='warning'?0.95:0.99))/cf*100).toFixed(1);

  const readings = [
    { key:'pressure', value:(state.sensorData.pressure.slice(-1)[0]||95).toFixed(1), unit:'PSI',
      color:'#60a5fa', sub:`Drop: ${pressureDrop}%`,
      status:pressureDrop>10?'critical':pressureDrop>5?'warning':'normal',
      data:state.sensorData.pressure },
    { key:'flow',     value:cf.toFixed(0), unit:'L/min',
      color:'#a78bfa', sub:`Imbalance: ${flowImb}%`,
      status:parseFloat(flowImb)>8?'critical':parseFloat(flowImb)>4?'warning':'normal',
      data:state.sensorData.flow },
    { key:'acoustic', value:(state.sensorData.acoustic.slice(-1)[0]||46).toFixed(1), unit:'dB',
      color:'#34d399', sub:ps==='normal'?'No vibration':'Anomaly detected',
      status:ps, data:state.sensorData.acoustic },
    { key:'infrared', value:ci.toFixed(1), unit:'°C',
      color:'#fb923c', sub:ci>32?'Above threshold':'Normal range',
      status:ci>32?'warning':'normal', data:state.sensorData.infrared },
  ];

  readings.forEach(r => {
    // Update numeric value
    const valEl = document.getElementById(`sv-${r.key}`);
    if (valEl) valEl.textContent = r.value;

    // Update sub-text
    const subEl = document.getElementById(`ss-${r.key}`);
    if (subEl) subEl.textContent = r.sub;

    // Update mini chart
    const chartEl = document.getElementById(`sc-${r.key}`);
    if (chartEl) chartEl.innerHTML = miniChartHTML(r.data, r.color, r.unit);
  });
}

// ─── PDF GENERATION ───────────────────────────────────────────────
function generatePDF(key, title, date) {
  const companies = getCompanies();
  const alerts    = state.alerts;
  const user      = state.user;
  const now       = new Date().toLocaleString();

  // Build report data per key
  const reportData = {
    'monthly-incident': {
      summary: 'This report summarises all pipeline incidents recorded during the current month across all monitored companies.',
      sections: [
        { heading: 'Incident Overview', rows: companies.map(c => {
          const co_alerts = (alerts[c.id]||[]).filter(a=>!a.resolved && a.severity!=='info');
          return [c.name, c.region, String(co_alerts.length), co_alerts.length?co_alerts[0].severity:'none'];
        }), headers: ['Company','Region','Active Alerts','Highest Severity'] },
        { heading: 'Alert Detail', rows: Object.entries(alerts).flatMap(([cid,list])=>
          list.filter(a=>a.severity!=='info').map(a=>[
            companies.find(c=>c.id===cid)?.name||cid, a.severity.toUpperCase(), a.title, a.location
          ])
        ), headers: ['Company','Severity','Title','Location'] },
      ]
    },
    'pipeline-health': {
      summary: 'Quarterly pipeline health assessment across all monitored infrastructure.',
      sections: [
        { heading: 'Pipeline Status Summary', rows: companies.map(c=>[
          c.name, c.region, String(c.pipelines), c.status, c.pressure, c.flow
        ]), headers: ['Company','Region','Pipelines','Status','Pressure','Flow'] },
        { heading: 'Sensor Configuration', rows: companies.flatMap(c=>
          (PIPELINE_CONFIGS[c.id]||[]).map(p=>[c.name, p.name, String(p.sensors.length), p.status])
        ), headers: ['Company','Pipeline','Sensors','Status'] },
      ]
    },
    'sensor-calibration': {
      summary: 'Calibration log for all active sensors across monitored pipelines.',
      sections: [
        { heading: 'Sensor Inventory', rows: companies.flatMap(c=>
          (PIPELINE_CONFIGS[c.id]||[]).flatMap(p=>p.sensors.map(s=>[
            c.name, p.name, s.id.toUpperCase(), s.type, s.status, 'Calibrated'
          ]))
        ), headers: ['Company','Pipeline','Sensor ID','Type','Status','Calibration'] },
      ]
    },
    'engineer-dispatch': {
      summary: 'Log of engineer assignments and dispatch records for this period.',
      sections: [
        { heading: 'Engineer Zone Assignments', rows: USERS.filter(u=>u.role==='engineer').map(u=>[
          u.name, u.email, `Zone ${u.zone}`, companies.find(c=>c.id===ZONE_PIPELINE_MAP[u.zone])?.name||'Unassigned'
        ]), headers: ['Engineer','Email','Zone','Company'] },
        { heading: 'Alert Assignments', rows: Object.entries(alerts).flatMap(([cid,list])=>
          list.filter(a=>a.assignedTo).map(a=>[a.assignedTo, a.title, a.severity, a.location])
        ).length ? Object.entries(alerts).flatMap(([cid,list])=>
          list.filter(a=>a.assignedTo).map(a=>[a.assignedTo, a.title, a.severity, a.location])
        ) : [['No assignments recorded','—','—','—']],
          headers: ['Assigned To','Alert','Severity','Location'] },
      ]
    },
    'annual-safety': {
      summary: 'Annual safety review covering all pipeline operations for the period.',
      sections: [
        { heading: 'Company Safety Overview', rows: companies.map(c=>{
          const total = (alerts[c.id]||[]).length;
          const res   = (alerts[c.id]||[]).filter(a=>a.resolved).length;
          return [c.name, c.region, String(c.pipelines), String(total), String(res), c.status];
        }), headers: ['Company','Region','Pipelines','Total Alerts','Resolved','Status'] },
      ]
    },
  };

  const data = reportData[key] || {
    summary: 'Report data for this period.',
    sections: [{ heading: 'Summary', rows: companies.map(c=>[c.name, c.status]), headers: ['Company','Status'] }]
  };

  // Use print-to-PDF approach with a styled hidden window
  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) { alert('Please allow pop-ups to download PDF reports.'); return; }

  const tableStyle = `
    border-collapse:collapse;width:100%;margin-bottom:24px;font-size:12px;
  `;
  const thStyle = `
    background:#0a1628;color:#22d3ee;padding:8px 12px;text-align:left;
    border:1px solid #1e3a5f;font-size:11px;letter-spacing:0.04em;
  `;
  const tdStyle = `padding:7px 12px;border:1px solid #e2e8f0;color:#1e293b;`;
  const trAlt   = `background:#f8fafc;`;

  const sectionsHTML = data.sections.map(sec => `
    <h3 style="color:#0a1628;font-size:14px;font-weight:700;margin:24px 0 10px;border-left:4px solid #22d3ee;padding-left:10px">${sec.heading}</h3>
    <table style="${tableStyle}">
      <thead><tr>${sec.headers.map(h=>`<th style="${thStyle}">${h}</th>`).join('')}</tr></thead>
      <tbody>${sec.rows.map((row,i)=>`
        <tr style="${i%2===1?trAlt:''}">
          ${row.map(cell=>`<td style="${tdStyle}">${cell}</td>`).join('')}
        </tr>`).join('')}
      </tbody>
    </table>
  `).join('');

  win.document.write(`<!DOCTYPE html>
<html><head>
  <meta charset="UTF-8">
  <title>${title} — EcoGuard Technologies</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    * { margin:0;padding:0;box-sizing:border-box; }
    body { font-family:'Inter',sans-serif;color:#1e293b;background:#fff;padding:40px; }
    @media print {
      body { padding:20px; }
      .no-print { display:none; }
      @page { margin:1.5cm; }
    }
  </style>
</head><body>
  <!-- Header bar -->
  <div style="background:#0a1628;border-radius:10px;padding:24px 28px;margin-bottom:28px;display:flex;justify-content:space-between;align-items:center">
    <div>
      <div style="color:#22d3ee;font-size:11px;font-weight:700;letter-spacing:0.1em;margin-bottom:4px">ECO GUARD TECHNOLOGIES</div>
      <div style="color:#fff;font-size:22px;font-weight:700">${title}</div>
      <div style="color:rgba(34,211,238,0.7);font-size:12px;margin-top:4px">${date}</div>
    </div>
    <div style="text-align:right">
      <div style="color:rgba(255,255,255,0.5);font-size:10px">Generated by</div>
      <div style="color:#22d3ee;font-size:13px;font-weight:600">${user.name}</div>
      <div style="color:rgba(255,255,255,0.4);font-size:10px;margin-top:2px">${now}</div>
    </div>
  </div>

  <!-- Summary -->
  <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:14px 18px;margin-bottom:24px">
    <div style="color:#0369a1;font-size:11px;font-weight:700;letter-spacing:0.05em;margin-bottom:4px">EXECUTIVE SUMMARY</div>
    <p style="color:#1e293b;font-size:13px;line-height:1.6">${data.summary}</p>
  </div>

  <!-- Stats row -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px">
    ${[
      ['Companies', String(companies.length)],
      ['Total Pipelines', String(companies.reduce((s,c)=>s+c.pipelines,0))],
      ['Active Alerts', String(Object.values(alerts).flat().filter(a=>!a.resolved&&a.severity!=='info').length)],
      ['Operational', String(companies.filter(c=>c.status==='operational').length)+'/'+companies.length],
    ].map(([l,v])=>`
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px">
      <div style="color:#64748b;font-size:10px;font-weight:600;letter-spacing:0.05em">${l.toUpperCase()}</div>
      <div style="color:#0a1628;font-size:22px;font-weight:700;margin-top:4px">${v}</div>
    </div>`).join('')}
  </div>

  <!-- Sections -->
  ${sectionsHTML}

  <!-- Footer -->
  <div style="border-top:2px solid #e2e8f0;margin-top:32px;padding-top:16px;display:flex;justify-content:space-between;align-items:center">
    <div style="color:#94a3b8;font-size:10px">Eco Guard Technologies — Pipeline Security Monitoring System</div>
    <div style="color:#94a3b8;font-size:10px">CONFIDENTIAL — Internal Use Only</div>
  </div>

  <!-- Print button -->
  <div class="no-print" style="position:fixed;bottom:24px;right:24px">
    <button onclick="window.print()" style="background:#0a1628;color:#22d3ee;border:none;border-radius:10px;padding:12px 24px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
      ⬇ Save as PDF
    </button>
  </div>
</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 600);
}

// ─── PWA INSTALL BANNER ───────────────────────────────────────────
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  if (document.getElementById('install-banner')) return;
  const banner = document.createElement('div');
  banner.id = 'install-banner';
  banner.innerHTML = `
    <div class="install-icon">📲</div>
    <div class="install-text">
      <div class="install-title">Install Eco Guard</div>
      <div class="install-sub">Add to home screen for quick access</div>
    </div>
    <button class="install-btn" id="install-accept">Install</button>
    <button class="install-close" id="install-dismiss">×</button>`;
  document.body.appendChild(banner);

  document.getElementById('install-accept').addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
    banner.remove();
  });
  document.getElementById('install-dismiss').addEventListener('click', () => banner.remove());
}

// Show banner on iOS (manual instructions)
function checkiOS() {
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone;
  if (isIOS && !isStandalone) {
    setTimeout(() => {
      if (document.getElementById('install-banner')) return;
      const banner = document.createElement('div');
      banner.id = 'install-banner';
      banner.innerHTML = `
        <div class="install-icon">📲</div>
        <div class="install-text">
          <div class="install-title">Install on iPhone/iPad</div>
          <div class="install-sub">Tap Share → "Add to Home Screen"</div>
        </div>
        <button class="install-close" id="install-dismiss">×</button>`;
      document.body.appendChild(banner);
      document.getElementById('install-dismiss').addEventListener('click', () => banner.remove());
    }, 3000);
  }
}

// ─── BOOT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(err => {
        console.warn('Service Worker registration failed:', err);
      });
    }

    // Preload voices
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.addEventListener('voiceschanged', () => window.speechSynthesis.getVoices());
      } catch (e) {
        console.warn('Speech synthesis not available:', e);
      }
    }

    // Single persistent outside-click handler (never stacks)
    document.addEventListener('click', outsideClickHandler);

    // Add-company overlay: click outside modal to close
    document.addEventListener('click', e => {
      if (state.showAddCompany && e.target && e.target.id === 'add-company-overlay') {
        state.showAddCompany = false;
        render();
      }
    });

    checkiOS();
    render();
  } catch (error) {
    console.error('App initialization failed:', error);
    document.body.innerHTML = '<div style="padding:20px;color:red;">App failed to load. Please refresh the page.</div>';
  }
});
