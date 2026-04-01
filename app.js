/* ═══════════════════════════════════════════
   app.js — OfficeHub Microsoft Software Store
═══════════════════════════════════════════ */

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Microsoft Word',
    tagline: "The world's most powerful word processor",
    category: 'Productivity',
    icon: '📝',
    color: '#185abd',
    glowColor: 'rgba(24,90,189,0.2)',
    badge: 'Best Seller', badgeClass: 'badge-best',
    rating: 4.9, reviews: 124500,
    shortDesc: 'Create, edit and collaborate on professional documents with AI-powered writing assistance and rich formatting tools.',
    longDesc: "Microsoft Word is the gold standard in document creation. From simple letters to complex reports, Word's intelligent tools help you write more confidently. The AI-powered Editor suggests grammar fixes, clarity improvements, and even tone adjustments in real time. Co-author with teammates live, track changes, and manage versions effortlessly.",
    features: [
      { title: 'AI-powered Editor', desc: 'Real-time grammar, clarity, and tone suggestions as you type' },
      { title: 'Live Co-authoring', desc: 'Collaborate simultaneously with teammates in real time' },
      { title: 'Advanced Templates', desc: '1,000+ professional templates for every document type' },
      { title: 'Cross-platform sync', desc: 'Access your documents from any device, anywhere' },
      { title: 'PDF Export & Edit', desc: 'Convert, edit, and sign PDF documents with ease' },
    ],
    chips: ['AI Writing', 'Templates', 'PDF', 'Cloud Sync'],
    plans: [
      { name: 'Monthly',  desc: 'Billed every month',              price: 6.99,   period: '/mo' },
      { name: 'Annual',   desc: 'Save 20% — billed yearly',        price: 69.99,  period: '/yr',  savings: 'Save $13.89' },
      { name: 'Lifetime', desc: 'One-time purchase, no subscription', price: 149.99, period: '', savings: 'Best Value' },
    ],
    screenshots: [{ icon: '📄', label: 'Editor' }, { icon: '🤝', label: 'Collab' }, { icon: '📊', label: 'Track' }],
  },
  {
    id: 2,
    name: 'Microsoft Excel',
    tagline: 'Advanced spreadsheets and data analysis',
    category: 'Data & Analytics',
    icon: '📊',
    color: '#107c41',
    glowColor: 'rgba(16,124,65,0.2)',
    badge: 'Popular', badgeClass: 'badge-pop',
    rating: 4.8, reviews: 98700,
    shortDesc: 'Powerful spreadsheet software with 400+ formulas, pivot tables, dynamic charts, and AI-driven data analysis.',
    longDesc: "Excel transforms raw numbers into actionable insights. With over 400 functions, powerful pivot tables, and the new Copilot integration, data analysis has never been faster. Build dashboards, forecast trends with built-in ML tools, automate repetitive tasks with Macros, and connect live to databases or web sources.",
    features: [
      { title: '400+ Functions',  desc: 'Financial, statistical, logical, and lookup formulas' },
      { title: 'Pivot Tables',    desc: 'Instantly summarise and analyse large datasets' },
      { title: 'AI Insights',     desc: 'Copilot-powered trend detection and formula suggestions' },
      { title: 'Power Query',     desc: 'Import, transform, and reshape data from any source' },
      { title: 'Dynamic Charts',  desc: '70+ chart types including 3D, maps, and sparklines' },
    ],
    chips: ['Formulas', 'Pivot Tables', 'Macros', 'Power BI'],
    plans: [
      { name: 'Monthly',  desc: 'Billed every month',       price: 6.99,   period: '/mo' },
      { name: 'Annual',   desc: 'Save 20% — billed yearly', price: 69.99,  period: '/yr', savings: 'Save $13.89' },
      { name: 'Lifetime', desc: 'One-time purchase',         price: 149.99, period: '',    savings: 'Best Value' },
    ],
    screenshots: [{ icon: '🗃️', label: 'Sheets' }, { icon: '📈', label: 'Charts' }, { icon: '🔄', label: 'Pivot' }],
  },
  {
    id: 3,
    name: 'Microsoft PowerPoint',
    tagline: 'Create stunning presentations that captivate',
    category: 'Presentations',
    icon: '📽️',
    color: '#c43e1c',
    glowColor: 'rgba(196,62,28,0.2)',
    badge: 'New AI', badgeClass: 'badge-new',
    rating: 4.7, reviews: 75200,
    shortDesc: 'Design professional slide decks with Copilot AI, 500+ templates, smooth animations, and real-time collaboration.',
    longDesc: "PowerPoint is the world's leading presentation software, now supercharged with Microsoft Copilot. Generate entire slide decks from a prompt, automatically design layouts using Designer AI, add 3D models and cinematic transitions, and rehearse with the AI-powered Presenter Coach.",
    features: [
      { title: 'Copilot AI Slides', desc: 'Auto-generate full decks from a text prompt instantly' },
      { title: 'Designer AI',       desc: 'Smart layout and design suggestions for every slide' },
      { title: 'Presenter Coach',   desc: 'AI feedback on pace, tone, and delivery while rehearsing' },
      { title: '3D & Morph',        desc: '3D models, Morph transitions, and Zoom navigation' },
      { title: '500+ Templates',    desc: 'Professionally designed slide templates for every industry' },
    ],
    chips: ['Copilot AI', 'Animations', '3D Models', 'Templates'],
    plans: [
      { name: 'Monthly',  desc: 'Billed every month',       price: 6.99,   period: '/mo' },
      { name: 'Annual',   desc: 'Save 20% — billed yearly', price: 69.99,  period: '/yr', savings: 'Save $13.89' },
      { name: 'Lifetime', desc: 'One-time purchase',         price: 149.99, period: '',    savings: 'Best Value' },
    ],
    screenshots: [{ icon: '🖼️', label: 'Slides' }, { icon: '✨', label: 'Design' }, { icon: '🎙️', label: 'Coach' }],
  },
  {
    id: 4,
    name: 'Microsoft 365',
    tagline: 'The complete productivity suite for everyone',
    category: 'Bundles',
    icon: '⊞',
    color: '#0067b8',
    glowColor: 'rgba(0,103,184,0.2)',
    badge: 'Best Value', badgeClass: 'badge-best',
    rating: 4.9, reviews: 210000,
    shortDesc: 'Get Word, Excel, PowerPoint, Outlook, Teams, OneDrive and more — all in one subscription with 1 TB cloud storage.',
    longDesc: "Microsoft 365 is the ultimate productivity bundle. One subscription gives you the full suite — Word, Excel, PowerPoint, Outlook, OneNote, Teams, OneDrive (1 TB per user), and Clipchamp for video editing. With Microsoft Copilot built into every app and seamless cross-device sync, your team stays connected and productive wherever they are.",
    features: [
      { title: 'All Apps Included',    desc: 'Word, Excel, PowerPoint, Outlook, Teams, OneNote & more' },
      { title: '1 TB OneDrive Storage',desc: 'Per user — store, share, and sync everything in the cloud' },
      { title: 'Copilot AI Built-in',  desc: 'AI assistant across every Microsoft 365 application' },
      { title: 'Up to 6 Users',        desc: 'Family plan allows installation on up to 6 devices each' },
      { title: 'Always Up-to-Date',    desc: 'Latest features and security updates automatically' },
    ],
    chips: ['All Apps', '1 TB Cloud', 'Copilot AI', 'Teams'],
    plans: [
      { name: 'Personal',       desc: '1 user, 1 TB storage',            price: 6.99,  period: '/mo' },
      { name: 'Family',         desc: 'Up to 6 users, 6 TB total',       price: 9.99,  period: '/mo', savings: 'Most Popular' },
      { name: 'Business Basic', desc: 'Per user — Teams + cloud apps',   price: 6.00,  period: '/user/mo', savings: 'For Teams' },
    ],
    screenshots: [{ icon: '📝', label: 'Word' }, { icon: '📊', label: 'Excel' }, { icon: '📽️', label: 'PPT' }],
  },
  {
    id: 5,
    name: 'Microsoft Teams',
    tagline: 'Unified communication and collaboration hub',
    category: 'Communication',
    icon: '💬',
    color: '#6264a7',
    glowColor: 'rgba(98,100,167,0.2)',
    badge: 'New AI', badgeClass: 'badge-new',
    rating: 4.6, reviews: 89300,
    shortDesc: 'Video calls, team chat, file sharing, and task management — all in one powerful collaboration platform.',
    longDesc: "Microsoft Teams is your all-in-one hub for teamwork. Host HD video meetings for up to 1,000 participants, chat in organised channels, share and co-edit files in real time, and manage projects with built-in tasks. Copilot in Teams can summarise meetings you missed and surface key decisions from long threads instantly.",
    features: [
      { title: 'HD Video Meetings', desc: 'Up to 1,000 participants with noise suppression and blur' },
      { title: 'Persistent Chat',   desc: 'Organised channels by team, project, or topic' },
      { title: 'Copilot Summaries', desc: 'AI recaps of meetings and threads you missed' },
      { title: 'App Integrations',  desc: '700+ integrations including GitHub and Salesforce' },
      { title: 'Live Captions',     desc: 'Real-time captions and translation in 30+ languages' },
    ],
    chips: ['Video Calls', 'Chat', 'File Share', 'Copilot'],
    plans: [
      { name: 'Essentials',         desc: 'Chat + meetings only',                 price: 4.00,  period: '/user/mo' },
      { name: 'Microsoft 365 Basic',desc: 'Teams + web apps + 1 TB storage',      price: 6.00,  period: '/user/mo', savings: 'Popular' },
      { name: 'Business Standard',  desc: 'Full desktop Office + Teams',          price: 12.50, period: '/user/mo', savings: 'Best for Teams' },
    ],
    screenshots: [{ icon: '🎥', label: 'Meetings' }, { icon: '💬', label: 'Chat' }, { icon: '📁', label: 'Files' }],
  },
  {
    id: 6,
    name: 'Microsoft Outlook',
    tagline: 'Smart email and calendar management',
    category: 'Communication',
    icon: '📧',
    color: '#0067b8',
    glowColor: 'rgba(0,103,184,0.2)',
    badge: null,
    rating: 4.5, reviews: 65400,
    shortDesc: 'Manage email, calendar, contacts, and tasks in one place with intelligent inbox organisation and scheduling tools.',
    longDesc: "Outlook keeps your communications and schedule under perfect control. The Focused Inbox intelligently separates important email from clutter. Copilot can draft emails, summarise long threads, and schedule meetings on your behalf. The integrated calendar syncs with Teams for seamless scheduling.",
    features: [
      { title: 'Focused Inbox',     desc: 'AI-powered email triage keeps important messages first' },
      { title: 'Copilot Drafting',  desc: 'Generate and refine emails with AI in seconds' },
      { title: 'Integrated Calendar',desc:'Schedule meetings, rooms, and events with one click' },
      { title: 'Advanced Rules',    desc: 'Automate sorting, flagging, and forwarding of emails' },
      { title: 'Offline Access',    desc: 'Read and compose emails even without internet' },
    ],
    chips: ['Email', 'Calendar', 'Contacts', 'Copilot'],
    plans: [
      { name: 'Monthly',              desc: 'Standalone Outlook',                 price: 1.99,  period: '/mo' },
      { name: 'Microsoft 365 Personal',desc:'Outlook + full Office suite',        price: 6.99,  period: '/mo', savings: 'Recommended' },
      { name: 'Lifetime',             desc: 'One-time purchase, permanent licence',price: 49.99, period: '',    savings: 'Best Value' },
    ],
    screenshots: [{ icon: '📬', label: 'Inbox' }, { icon: '📅', label: 'Calendar' }, { icon: '✉️', label: 'Compose' }],
  },
  {
    id: 7,
    name: 'Microsoft OneNote',
    tagline: 'Your digital notebook for everything',
    category: 'Productivity',
    icon: '📒',
    color: '#7719aa',
    glowColor: 'rgba(119,25,170,0.2)',
    badge: 'Free', badgeClass: 'badge-new',
    rating: 4.7, reviews: 43200,
    shortDesc: 'Capture notes, drawings, web clips, and audio recordings in a free-form digital notebook synced across all devices.',
    longDesc: "OneNote is your always-available digital notebook. Capture anything — typed notes, handwritten ink, sketches, photos, audio recordings, and web clips. With Copilot, OneNote can summarise meeting notes, generate action items, and draft content from your existing notes. Available free on all devices.",
    features: [
      { title: 'Free-form Canvas',  desc: 'Click anywhere on the page and start writing or drawing' },
      { title: 'Ink to Text',       desc: 'Convert handwritten notes to typed text automatically' },
      { title: 'Web Clipper',       desc: 'Save articles, screenshots, and pages from any browser' },
      { title: 'Shared Notebooks',  desc: 'Collaborate and share notebooks with teammates in real time' },
      { title: 'Copilot Summaries', desc: 'Let AI summarise, organise, and expand your notes' },
    ],
    chips: ['Free', 'Handwriting', 'Web Clip', 'Cloud Sync'],
    plans: [
      { name: 'Free',                   desc: 'Core features — always free',              price: 0,    period: '' },
      { name: 'Microsoft 365 Personal', desc: 'Premium features + full Office suite',     price: 6.99, period: '/mo', savings: 'More features' },
      { name: 'Microsoft 365 Family',   desc: 'Up to 6 users with premium OneNote',       price: 9.99, period: '/mo', savings: 'Best for families' },
    ],
    screenshots: [{ icon: '✏️', label: 'Write' }, { icon: '🎨', label: 'Draw' }, { icon: '🔗', label: 'Clip' }],
  },
  {
    id: 8,
    name: 'Microsoft Access',
    tagline: 'Powerful desktop database management',
    category: 'Data & Analytics',
    icon: '🗄️',
    color: '#a4373a',
    glowColor: 'rgba(164,55,58,0.2)',
    badge: 'Pro', badgeClass: 'badge-pop',
    rating: 4.4, reviews: 18700,
    shortDesc: 'Build and manage custom relational databases with forms, queries, macros, and reports — no server required.',
    longDesc: "Microsoft Access brings the power of a full relational database to your desktop. Build custom business applications with forms, automated workflows, and pixel-perfect reports without a server. Link Access to SQL Server, SharePoint, or Excel to combine desktop ease with enterprise-grade data.",
    features: [
      { title: 'Relational Database', desc: 'Tables, queries, relationships, and referential integrity' },
      { title: 'Custom Forms',        desc: 'Drag-and-drop form designer for data entry interfaces' },
      { title: 'Macro Automation',    desc: 'Automate tasks and workflows without writing code' },
      { title: 'SQL Server Link',     desc: 'Connect to SQL Server and Azure for enterprise data' },
      { title: 'Report Builder',      desc: 'Professional reports with grouping, sorting, and totals' },
    ],
    chips: ['Database', 'Queries', 'Forms', 'Reports'],
    plans: [
      { name: 'Lifetime',               desc: 'One-time purchase, Access standalone',     price: 129.99, period: '',           savings: 'Best Value' },
      { name: 'Microsoft 365 Business', desc: 'Access + full Office apps subscription',   price: 12.50,  period: '/user/mo' },
    ],
    screenshots: [{ icon: '🗃️', label: 'Tables' }, { icon: '🔍', label: 'Queries' }, { icon: '📋', label: 'Forms' }],
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let cartCount = 0;
let currentFilter = 'All';
const categories = ['All', ...new Set(products.map(p => p.category))];

// ── HELPERS ───────────────────────────────────────────────────────────────────
function setCart(n) {
  cartCount = n;
  document.getElementById('cartCount').textContent = cartCount;
}

function showToast(msg) {
  const ex = document.querySelector('.toast');
  if (ex) ex.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span style="color:#4ade80;font-weight:700;">✓</span> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 300); }, 2500);
}

function showCartMsg() {
  showToast(`${cartCount} item${cartCount !== 1 ? 's' : ''} in your cart`);
}

function starsHTML(r) {
  return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
}

function formatNum(n) {
  return n >= 1000 ? (n / 1000).toFixed(0) + 'k+' : n;
}

// ── FOOTER HTML ───────────────────────────────────────────────────────────────
function footerHTML() {
  return `
  <footer>
    <div class="footer-top">
      <div class="footer-col">
        <div class="footer-brand-logo" onclick="showStore()">
          <span class="footer-brand-logo-icon">⊞</span> OfficeHub
        </div>
        <p class="footer-brand-desc">Your independent e-commerce destination for Microsoft Office software licences. Instant delivery, genuine keys, and 30-day peace-of-mind guarantee.</p>
        <div class="footer-social">
          <a class="social-btn" title="Twitter/X">𝕏</a>
          <a class="social-btn" title="LinkedIn">in</a>
          <a class="social-btn" title="Facebook">f</a>
          <a class="social-btn" title="YouTube">▶</a>
        </div>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">Products</div>
        <ul>
          <li><span onclick="filterBy('Productivity')">Productivity</span></li>
          <li><span onclick="filterBy('Data & Analytics')">Data & Analytics</span></li>
          <li><span onclick="filterBy('Presentations')">Presentations</span></li>
          <li><span onclick="filterBy('Communication')">Communication</span></li>
          <li><span onclick="filterBy('Bundles')">Bundles & Suites</span></li>
        </ul>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">Support</div>
        <ul>
          <li><span>How to Activate</span></li>
          <li><span>Download Instructions</span></li>
          <li><span>System Requirements</span></li>
          <li><span>Returns & Refunds</span></li>
          <li><span>Contact Us</span></li>
        </ul>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">Company</div>
        <ul>
          <li><span>About OfficeHub</span></li>
          <li><span>Privacy Policy</span></li>
          <li><span>Terms of Service</span></li>
          <li><span>Cookie Settings</span></li>
          <li><span>Sitemap</span></li>
        </ul>
      </div>
    </div>

    <div class="footer-disclaimer">
      <div class="disclaimer-inner">
        <span class="disclaimer-icon">⚠️</span>
        <div class="disclaimer-body">
          <div class="disclaimer-label">Disclaimer</div>
          <p class="disclaimer-text">
            All Products Featured On This Site Are Directly Endorsed By Their Respective Brands.
            OfficeHub Operates As An Independent E-Commerce Platform, Offering A Diverse Range Of Products.
            We Explicitly Disclaim Any Affiliation Or Association With The Products Or Subscriptions Listed On Our Site.
            The Items Showcased Are Also Available On The Official Websites Of The Individual Brand Owners.
          </p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} OfficeHub. All rights reserved. Independent retailer — not affiliated with Microsoft Corporation.</span>
      <div class="footer-links">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Cookies</span>
        <span>Accessibility</span>
      </div>
      <div class="ms-flag" title="Microsoft flag colours">
        <span class="ms-r"></span><span class="ms-g"></span>
        <span class="ms-b"></span><span class="ms-y"></span>
      </div>
    </div>
  </footer>`;
}

// ── STORE PAGE ────────────────────────────────────────────────────────────────
function renderStore() {
  const filtered = currentFilter === 'All'
    ? products
    : products.filter(p => p.category === currentFilter);

  const filterBtns = categories.map(c =>
    `<button class="filter-chip ${c === currentFilter ? 'active' : ''}" onclick="filterBy('${c}')">${c}</button>`
  ).join('');

  const cards = filtered.map(p => `
    <div class="product-card" onclick="showDetail(${p.id})">
      <div class="card-top">
        <div class="app-icon" style="background:${p.color}18; color:${p.color};">${p.icon}</div>
        ${p.badge ? `<span class="card-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="app-name">${p.name}</div>
        <div class="app-tagline">${p.tagline}</div>
        <div class="app-desc">${p.shortDesc}</div>
        <div class="app-features">
          ${p.chips.map(c => `<span class="feature-tag">${c}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div>
            <span class="price-main">${p.plans[0].price === 0 ? 'Free' : '$' + p.plans[0].price}</span>
            <span class="price-period">${p.plans[0].period || ''}</span>
            ${p.plans[1] ? `<span class="price-old">from $${p.plans[1].price}${p.plans[1].period}</span>` : ''}
          </div>
          <button class="buy-now-btn" onclick="event.stopPropagation(); showDetail(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('app').innerHTML = `
    <div class="store-page page">
      <div class="hero">
        <div class="hero-inner">
          <span class="hero-eyebrow">Official Microsoft Software</span>
          <h1>The Microsoft<br>Office Suite</h1>
          <p class="hero-sub">Authentic licences for the world's most trusted productivity software — Word, Excel, PowerPoint, Teams, and more. Instant download, genuine keys.</p>
          <div class="hero-btns">
            <button class="btn-primary" onclick="document.querySelector('.product-grid').scrollIntoView({behavior:'smooth'})">Browse Products</button>
            <button class="btn-outline" onclick="filterBy('Bundles')">View Bundles →</button>
          </div>
        </div>
      </div>

      <div class="stats-strip">
        <div class="stat-item"><span class="stat-num">1.2B+</span><span class="stat-label">Active Users Worldwide</span></div>
        <div class="stat-item"><span class="stat-num">200+</span><span class="stat-label">Countries Supported</span></div>
        <div class="stat-item"><span class="stat-num">4.8★</span><span class="stat-label">Average Rating</span></div>
        <div class="stat-item"><span class="stat-num">Instant</span><span class="stat-label">Key Delivery</span></div>
      </div>

      <div class="products-section">
        <div class="section-header">
          <div class="section-title">All Software</div>
          <div class="result-count">${filtered.length} product${filtered.length !== 1 ? 's' : ''}</div>
        </div>
        <div class="filters">${filterBtns}</div>
        <div class="product-grid">${cards}</div>
      </div>
    </div>
    ${footerHTML()}
  `;
}

function filterBy(cat) {
  currentFilter = cat;
  renderStore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStore() {
  currentFilter = 'All';
  renderStore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── DETAIL PAGE ───────────────────────────────────────────────────────────────
function showDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  window._selectedPlan = 0;
  window._product = p;
  const related = products.filter(x => x.category === p.category && x.id !== id).slice(0, 3);
  renderDetail(p, related);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetail(p, related) {
  const plan = p.plans[window._selectedPlan];

  const planOptions = p.plans.map((pl, i) => `
    <div class="plan-option ${i === window._selectedPlan ? 'selected' : ''}" onclick="selectPlan(${i})">
      <div class="plan-option-left">
        <div class="plan-radio"></div>
        <div>
          <div class="plan-name">${pl.name}</div>
          <div class="plan-desc">${pl.desc}</div>
        </div>
      </div>
      <div class="plan-price">
        ${pl.price === 0 ? 'Free' : '$' + pl.price}
        <span class="plan-period">${pl.period}</span>
        ${pl.savings ? `<span class="plan-savings">${pl.savings}</span>` : ''}
      </div>
    </div>
  `).join('');

  const relatedCards = related.map(r => `
    <div class="product-card" onclick="showDetail(${r.id})">
      <div class="card-top">
        <div class="app-icon" style="background:${r.color}18; color:${r.color};">${r.icon}</div>
        ${r.badge ? `<span class="card-badge ${r.badgeClass}">${r.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="app-name">${r.name}</div>
        <div class="app-tagline">${r.tagline}</div>
        <div class="card-footer" style="margin-top:1rem;">
          <span class="price-main" style="font-size:1.2rem;">${r.plans[0].price === 0 ? 'Free' : '$' + r.plans[0].price}<span class="price-period">${r.plans[0].period}</span></span>
          <button class="buy-now-btn" style="font-size:.8rem;padding:.45rem 1rem;" onclick="event.stopPropagation(); showDetail(${r.id})">View →</button>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('app').innerHTML = `
    <div class="detail-page page">
      <div class="breadcrumb">
        <span class="bc-link" onclick="showStore()">Home</span>
        <span class="bc-sep">›</span>
        <span class="bc-link" onclick="filterBy('${p.category}')">${p.category}</span>
        <span class="bc-sep">›</span>
        <span>${p.name}</span>
      </div>

      <div class="detail-layout">
        <!-- LEFT -->
        <div>
          <div class="detail-icon-box" style="background:${p.color}0c;">
            <div class="icon-glow" style="--icon-glow:${p.glowColor};"></div>
            <span style="font-size:7rem; position:relative; z-index:1; animation:floatIcon 3.5s ease-in-out infinite;">${p.icon}</span>
          </div>
          <div class="screenshots">
            ${p.screenshots.map(s => `<div class="screenshot-thumb">${s.icon}<span>${s.label}</span></div>`).join('')}
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <div class="detail-app-header">
            <div class="detail-icon" style="background:${p.color}18; color:${p.color};">${p.icon}</div>
            <div>
              <div class="detail-app-name">${p.name}</div>
              <div class="detail-app-sub">${p.tagline}</div>
            </div>
          </div>

          <div class="rating-row">
            <span class="stars-filled">${starsHTML(p.rating)}</span>
            <span style="font-size:.85rem; font-weight:600;">${p.rating}</span>
            <span class="review-count">${formatNum(p.reviews)} reviews</span>
            <span class="verified">✓ Verified Seller</span>
          </div>

          <p class="product-long-desc">${p.longDesc}</p>

          <div class="plan-selector">
            <div class="plan-label">Choose Your Plan</div>
            <div class="plans">${planOptions}</div>
          </div>

          <div class="detail-price-display">
            <div>
              <div class="total-label">Total Price</div>
              <div class="total-price">
                ${plan.price === 0 ? 'Free' : '$' + plan.price}<span class="total-price-period"> ${plan.period}</span>
              </div>
              ${plan.savings ? `<div class="total-savings">🎉 ${plan.savings}</div>` : ''}
            </div>
            ${plan.price > 0 ? `<div class="instant-badge">⚡ Instant Download</div>` : ''}
          </div>

          <div class="actions">
            <button class="add-cart-btn" id="addCartBtn" onclick="addToCart('${p.name}')">
              🛒 Add to Cart
            </button>
            <button class="try-btn" onclick="showToast('Redirecting to free trial…')">Try Free →</button>
          </div>

          <div class="guarantees">
            <div class="guarantee-item"><span class="guarantee-icon">🔒</span> Secure checkout</div>
            <div class="guarantee-item"><span class="guarantee-icon">⚡</span> Instant delivery</div>
            <div class="guarantee-item"><span class="guarantee-icon">🔄</span> 30-day refund</div>
            <div class="guarantee-item"><span class="guarantee-icon">✅</span> Genuine licence</div>
          </div>

          <div class="features-section">
            <div class="features-heading">Key Features</div>
            <div class="feature-list">
              ${p.features.map(f => `
                <div class="feature-row">
                  <div class="feature-check">✓</div>
                  <div class="feature-text"><strong>${f.title}</strong> — ${f.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      ${related.length > 0 ? `
        <div class="related-section">
          <div class="related-heading">You Might Also Like</div>
          <div class="product-grid">${relatedCards}</div>
        </div>
      ` : ''}
    </div>
    ${footerHTML()}
  `;
}

function selectPlan(i) {
  window._selectedPlan = i;
  const related = products.filter(x => x.category === window._product.category && x.id !== window._product.id).slice(0, 3);
  renderDetail(window._product, related);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(name) {
  setCart(cartCount + 1);
  const btn = document.getElementById('addCartBtn');
  if (btn) {
    btn.textContent = '✓ Added to Cart!';
    btn.classList.add('success');
    setTimeout(() => { btn.textContent = '🛒 Add to Cart'; btn.classList.remove('success'); }, 2000);
  }
  showToast(`${name} added to cart`);
}

// ── INIT ──────────────────────────────────────────────────────────────────────
renderStore();
