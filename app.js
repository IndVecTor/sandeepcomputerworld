// 1. Official Custom Logo SVG (Sandeep Computer World - Jiyanpur, Azamgarh)
const SCW_LOGO_SVG = `
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#062559"/>
    </radialGradient>
    <path id="topArc" d="M 38,150 A 112,112 0 1,1 262,150" />
    <path id="bottomArc" d="M 32,155 A 118,118 0 0,0 268,155" />
  </defs>
  <!-- Outer Gold Ring -->
  <circle cx="150" cy="150" r="145" fill="url(#bgGrad)" stroke="#facc15" stroke-width="8"/>
  <circle cx="150" cy="150" r="102" fill="#071e46" stroke="#facc15" stroke-width="3"/>
  
  <!-- Top Brand Text -->
  <text fill="#ffffff" font-size="21" font-weight="900" letter-spacing="1.5">
    <textPath href="#topArc" startOffset="50%" text-anchor="middle">SANDEEP COMPUTER WORLD</textPath>
  </text>
  
  <!-- Bottom Service Text -->
  <text fill="#facc15" font-size="14.5" font-weight="800" letter-spacing="1">
    <textPath href="#bottomArc" startOffset="50%" text-anchor="middle">LAPTOP, COMPUTER &amp; CCTV SERVICES</textPath>
  </text>

  <!-- Location -->
  <text x="150" y="76" fill="#facc15" font-size="13" font-weight="700" text-anchor="middle">जीयनपुर, आज़मगढ़</text>
  <text x="150" y="92" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">JIYANPUR, AZAMGARH</text>

  <!-- Center Graphics: Monitor, Laptop & CCTV -->
  <!-- Desktop Monitor -->
  <rect x="75" y="112" width="68" height="46" rx="4" fill="#38bdf8" stroke="#fff" stroke-width="2.5"/>
  <rect x="81" y="118" width="56" height="34" fill="#0f172a"/>
  <rect x="103" y="158" width="12" height="10" fill="#cbd5e1"/>
  <rect x="93" y="168" width="32" height="4" rx="2" fill="#facc15"/>

  <!-- CCTV Camera -->
  <g transform="translate(158, 114)">
    <rect x="0" y="6" width="48" height="22" rx="4" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
    <circle cx="48" cy="17" r="9" fill="#1e293b" stroke="#facc15" stroke-width="2"/>
    <circle cx="48" cy="17" r="4" fill="#38bdf8"/>
    <path d="M18,28 L18,42 L34,42" fill="none" stroke="#cbd5e1" stroke-width="3"/>
  </g>

  <!-- Laptop -->
  <rect x="115" y="156" width="66" height="40" rx="3" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <rect x="120" y="161" width="56" height="30" fill="#1d4ed8"/>
  <polygon points="105,196 191,196 198,203 98,203" fill="#facc15"/>

  <!-- Side Dots -->
  <circle cx="28" cy="150" r="5" fill="#dc2626"/>
  <circle cx="272" cy="150" r="5" fill="#dc2626"/>
</svg>
`;

const OWNER_PHONE = "7388245758";
const OWNER_WA = "917388245758";

// Inject Logo & Social Links on every page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".inject-logo").forEach(el => {
    el.innerHTML = SCW_LOGO_SVG;
  });

  renderSocialLinks();
});

// 2. Social Media Links (Controlled by Super Admin)
function getSocialConfig() {
  const saved = localStorage.getItem("scw_social_links");
  return saved ? JSON.parse(saved) : {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  };
}

function renderSocialLinks() {
  const config = getSocialConfig();
  const containers = document.querySelectorAll(".dynamic-socials");
  containers.forEach(box => {
    let html = "";
    if (config.facebook && config.facebook.trim() !== "") {
      html += `<a href="${config.facebook}" target="_blank" class="social-btn fb-bg">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
        Facebook
      </a>`;
    }
    if (config.instagram && config.instagram.trim() !== "") {
      html += `<a href="${config.instagram}" target="_blank" class="social-btn ig-bg">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
        Instagram
      </a>`;
    }
    box.innerHTML = html;
  });
}

// 3. Direct WhatsApp Message Function
function sendWhatsAppMessage(event) {
  if (event) event.preventDefault();
  const name = document.getElementById("waName")?.value || "Customer";
  const service = document.getElementById("waService")?.value || "General Inquiry";
  const msg = document.getElementById("waMsg")?.value || "Hello Sandeep Ji, mujhe computer/CCTV service chahiye.";

  const text = `नमस्ते संदीप जी (Sandeep Computer World),%0A*नाम:* ${encodeURIComponent(name)}%0A*सर्विस:* ${encodeURIComponent(service)}%0A*संदेश:* ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${OWNER_WA}?text=${text}`, "_blank");
}

// 4. Official Login Logic (Owner & Super Admin)
function handleLogin(event) {
  event.preventDefault();
  const role = document.getElementById("loginRole").value;
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  // Default Credentials
  if (role === "owner" && user === "sandeep" && pass === "sandeep123") {
    sessionStorage.setItem("scw_auth_role", "owner");
    window.location.href = "dashboard.html";
  } else if (role === "superadmin" && user === "admin" && pass === "admin123") {
    sessionStorage.setItem("scw_auth_role", "superadmin");
    window.location.href = "dashboard.html";
  } else {
    alert("❌ गलत यूज़रनेम या पासवर्ड! कृपया सही जानकारी डालें।");
  }
}

function logoutUser() {
  sessionStorage.removeItem("scw_auth_role");
  window.location.href = "login.html";
}