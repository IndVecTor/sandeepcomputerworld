const OWNER_WA = "917388245758";

// 1. Unique SVG Logo Generator
function generateLogoSVG(uid) {
  return `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="display:block;">
    <defs>
      <radialGradient id="bgGrad_${uid}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1e40af"/>
        <stop offset="100%" stop-color="#062559"/>
      </radialGradient>
      <path id="topArc_${uid}" d="M 38,150 A 112,112 0 1,1 262,150" />
      <path id="bottomArc_${uid}" d="M 32,155 A 118,118 0 0,0 268,155" />
    </defs>
    <circle cx="150" cy="150" r="145" fill="url(#bgGrad_${uid})" stroke="#facc15" stroke-width="8"/>
    <circle cx="150" cy="150" r="102" fill="#071e46" stroke="#facc15" stroke-width="3"/>
    <text fill="#ffffff" font-size="20.5" font-weight="900" letter-spacing="1.4">
      <textPath href="#topArc_${uid}" startOffset="50%" text-anchor="middle">SANDEEP COMPUTER WORLD</textPath>
    </text>
    <text fill="#facc15" font-size="14" font-weight="800" letter-spacing="1">
      <textPath href="#bottomArc_${uid}" startOffset="50%" text-anchor="middle">LAPTOP, COMPUTER &amp; CCTV SERVICES</textPath>
    </text>
    <text x="150" y="76" fill="#facc15" font-size="13" font-weight="700" text-anchor="middle">जीयनपुर, आज़मगढ़</text>
    <text x="150" y="92" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">JIYANPUR, AZAMGARH</text>
    <rect x="75" y="112" width="68" height="46" rx="4" fill="#38bdf8" stroke="#fff" stroke-width="2.5"/>
    <rect x="81" y="118" width="56" height="34" fill="#0f172a"/>
    <rect x="103" y="158" width="12" height="10" fill="#cbd5e1"/>
    <rect x="93" y="168" width="32" height="4" rx="2" fill="#facc15"/>
    <g transform="translate(158, 114)">
      <rect x="0" y="6" width="48" height="22" rx="4" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
      <circle cx="48" cy="17" r="9" fill="#1e293b" stroke="#facc15" stroke-width="2"/>
      <circle cx="48" cy="17" r="4" fill="#38bdf8"/>
      <path d="M18,28 L18,42 L34,42" fill="none" stroke="#cbd5e1" stroke-width="3"/>
    </g>
    <rect x="115" y="156" width="66" height="40" rx="3" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
    <rect x="120" y="161" width="56" height="30" fill="#1d4ed8"/>
    <polygon points="105,196 191,196 198,203 98,203" fill="#facc15"/>
    <circle cx="28" cy="150" r="5" fill="#dc2626"/>
    <circle cx="272" cy="150" r="5" fill="#dc2626"/>
  </svg>`;
}

// 2. Bilingual Dictionary (Hindi & English)
const TRANSLATIONS = {
  hi: {
    nav_home: "होम (Home)",
    nav_services: "सेवाएं (Services)",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",
    nav_login: "ऑफिशियल लॉगिन",
    hero_badge: "📍 जीयनपुर, आज़मगढ़ का भरोसेमंद टेक सेंटर",
    hero_title: "कंप्यूटर, लैपटॉप रिपेयरिंग और <span>CCTV कैमरा</span> की संपूर्ण सेवा",
    hero_desc: "प्रो. संदीप यादव द्वारा संचालित — घर, दुकान, ऑफिस और सोसाइटी के लिए तेज़ रिपेयरिंग और आधुनिक सिक्योरिटी कैमरा इंस्टॉलेशन।",
    btn_call: "📞 कॉल करें: 7388245758",
    btn_wa: "💬 Direct WhatsApp",
    sec_services_title: "हमारी प्रमुख सेवाएं (Our Services)",
    sec_services_sub: "सभी प्रकार के हार्डवेयर, सॉफ्टवेयर और सिक्योरिटी समाधान एक ही छत के नीचे",
    card1_title: "💻 लैपटॉप रिपेयरिंग",
    card1_desc: "सभी कंपनियों के लैपटॉप की चिप-लेवल और पार्ट रिपेयरिंग की जाती है।",
    card2_title: "🖥️ कंप्यूटर व सॉफ्टवेयर",
    card2_desc: "नए डेस्कटॉप असेंबलिंग से लेकर सभी सॉफ्टवेयर समस्याओं का समाधान।",
    card3_title: "📹 CCTV कैमरा इंस्टॉलेशन",
    card3_desc: "अपने घर, दुकान और ऑफिस को 24x7 सुरक्षित रखें।",
    btn_all_services: "सभी सेवाएं विस्तार से देखें →",
    wa_box_title: "💬 सीधे संदीप यादव जी को WhatsApp मैसेज भेजें",
    wa_box_sub: "अपनी समस्या लिखें और सीधे WhatsApp पर तुरंत जवाब पाएं",
    btn_send_wa: "WhatsApp पर मैसेज भेजें ➤",
    about_title: "Sandeep Computer World के बारे में",
    about_p1: "<strong>संदीप कंप्यूटर वर्ल्ड (Sandeep Computer World)</strong> जीयनपुर, आज़मगढ़ का एक प्रमुख और विश्वसनीय कंप्यूटर, लैपटॉप रिपेयरिंग और CCTV सिक्योरिटी सर्विस सेंटर है। इसके संस्थापक और मुख्य संचालक <strong>संदीप यादव (Sandeep Yadav)</strong> हैं।",
    about_p2: "हमारा उद्देश्य ग्राहकों को उचित दाम पर ईमानदार, तेज़ और टिकाऊ तकनीकी सेवा प्रदान करना है। चाहे आपके लैपटॉप में कोई खराबी हो या आपको अपने घर और दुकान की सुरक्षा के लिए CCTV कैमरा लगवाना हो—हम हर काम पूरी जिम्मेदारी के साथ करते हैं।",
    contact_title: "हमसे संपर्क करें (Contact Us)",
    contact_sub: "किसी भी पूछताछ या सर्विस बुकिंग के लिए सीधे कॉल या व्हाट्सएप करें"
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_login: "Official Login",
    hero_badge: "📍 Trusted Tech & Security Center in Jiyanpur, Azamgarh",
    hero_title: "Complete Computer, Laptop Repair & <span>CCTV Camera</span> Services",
    hero_desc: "Managed by Prop. Sandeep Yadav — Fast chip-level repair and modern security camera installation for homes, shops, and offices.",
    btn_call: "📞 Call Now: 7388245758",
    btn_wa: "💬 Direct WhatsApp",
    sec_services_title: "Our Core Services",
    sec_services_sub: "Complete hardware, software, and security solutions under one roof",
    card1_title: "💻 Laptop Repairing",
    card1_desc: "Chip-level motherboard and spare part repair for all laptop brands.",
    card2_title: "🖥️ Computer & Software",
    card2_desc: "New desktop assembling and complete Windows & software solutions.",
    card3_title: "📹 CCTV Camera Installation",
    card3_desc: "Keep your home, shop, and office secure 24x7 with HD & IP cameras.",
    btn_all_services: "Explore All Services →",
    wa_box_title: "💬 Send Direct WhatsApp Message to Sandeep Yadav",
    wa_box_sub: "Describe your issue and get an instant reply on WhatsApp",
    btn_send_wa: "Send Message on WhatsApp ➤",
    about_title: "About Sandeep Computer World",
    about_p1: "<strong>Sandeep Computer World</strong> is a leading and trusted computer, laptop repairing, and CCTV security service center in Jiyanpur, Azamgarh, founded and managed by <strong>Sandeep Yadav</strong>.",
    about_p2: "Our mission is to provide honest, fast, and durable technical services at fair prices. Whether your laptop needs repair or you want CCTV security for your home and shop, we deliver every job with complete dedication.",
    contact_title: "Contact Us",
    contact_sub: "Call or WhatsApp directly for any inquiry or service booking"
  }
};

// 3. Theme Mode Switcher
function toggleTheme() {
  const next = document.body.classList.contains("dark-theme") ? "light" : "dark";
  localStorage.setItem("scw_theme", next);
  applyTheme(next);
}

function applyTheme(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (btn) btn.innerText = "☀️ Light";
  } else {
    document.body.classList.remove("dark-theme");
    if (btn) btn.innerText = "🌙 Dark";
  }
}

// 4. Language Switcher
function toggleLanguage() {
  const current = localStorage.getItem("scw_lang") || "hi";
  const next = current === "hi" ? "en" : "hi";
  localStorage.setItem("scw_lang", next);
  applyLanguage(next);
}

function applyLanguage(lang) {
  const btn = document.getElementById("langToggleBtn");
  if (btn) btn.innerText = lang === "hi" ? "🌐 English" : "🌐 हिंदी";
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

// 5. Social Links Renderer
function getSocialConfig() {
  const saved = localStorage.getItem("scw_social_links");
  return saved ? JSON.parse(saved) : {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  };
}

function renderSocialLinks() {
  const config = getSocialConfig();
  document.querySelectorAll(".dynamic-socials").forEach(box => {
    let html = "";
    if (config.facebook && config.facebook.trim() !== "") {
      html += `<a href="${config.facebook}" target="_blank" class="social-btn fb-bg">📘 Facebook</a>`;
    }
    if (config.instagram && config.instagram.trim() !== "") {
      html += `<a href="${config.instagram}" target="_blank" class="social-btn ig-bg">📸 Instagram</a>`;
    }
    box.innerHTML = html;
  });
}

// 6. Direct WhatsApp Message
function sendWhatsAppMessage(event) {
  if (event) event.preventDefault();
  const name = document.getElementById("waName")?.value || "Customer";
  const service = document.getElementById("waService")?.value || "General Inquiry";
  const msg = document.getElementById("waMsg")?.value || "Hello Sandeep Ji, mujhe service chahiye.";
  const text = `नमस्ते संदीप जी (Sandeep Computer World),%0A*नाम:* ${encodeURIComponent(name)}%0A*सर्विस:* ${encodeURIComponent(service)}%0A*संदेश:* ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${OWNER_WA}?text=${text}`, "_blank");
}

// 7. Official Login & Logout
function handleLogin(event) {
  if (event) event.preventDefault();
  const role = document.getElementById("loginRole").value;
  const user = document.getElementById("loginUser").value.trim().toLowerCase();
  const pass = document.getElementById("loginPass").value.trim();

  if (role === "owner" && user === "sandeep" && pass === "sandeep123") {
    localStorage.setItem("scw_auth_role", "owner");
    window.location.href = "dashboard.html";
  } else if (role === "superadmin" && user === "admin" && pass === "admin123") {
    localStorage.setItem("scw_auth_role", "superadmin");
    window.location.href = "dashboard.html";
  } else {
    alert("❌ गलत यूज़रनेम या पासवर्ड!\n\nShop Owner: sandeep / sandeep123\nSuper Admin: admin / admin123");
  }
}

function logoutUser() {
  localStorage.removeItem("scw_auth_role");
  window.location.href = "login.html";
}

// 8. Dashboard & Billing System Logic (Runs only on dashboard.html)
let billCounter = localStorage.getItem("scw_bill_counter") || 1001;

function initDashboard() {
  const billingSection = document.getElementById("billingSection");
  if (!billingSection) return; // Exit if not on dashboard page

  const role = localStorage.getItem("scw_auth_role");
  if (!role) {
    window.location.href = "login.html";
    return;
  }

  if (role === "superadmin") {
    document.getElementById("superAdminSection").style.display = "block";
    document.getElementById("roleBadge").innerText = "Super Admin & Billing Panel";
    const currentSocials = getSocialConfig();
    document.getElementById("adminFbUrl").value = currentSocials.facebook;
    document.getElementById("adminIgUrl").value = currentSocials.instagram;
  } else {
    document.getElementById("roleBadge").innerText = "Shop Owner Billing Panel (Sandeep Yadav)";
  }

  document.getElementById("prevBillNo").innerText = "SCW-" + billCounter;
  document.getElementById("prevDate").innerText = new Date().toLocaleDateString("hi-IN");
  addItemRow("Laptop / Computer Service", 1, 500);
}

function saveSocialLinks(e) {
  e.preventDefault();
  const fb = document.getElementById("adminFbUrl").value.trim();
  const ig = document.getElementById("adminIgUrl").value.trim();
  localStorage.setItem("scw_social_links", JSON.stringify({ facebook: fb, instagram: ig }));
  alert("✅ Facebook और Instagram लिंक मुख्य वेबसाइट पर अपडेट हो गए हैं!");
}

function addItemRow(desc = "", qty = 1, rate = 0) {
  const container = document.getElementById("itemsContainer");
  if (!container) return;
  const row = document.createElement("div");
  row.className = "item-row";
  row.style.cssText = "display: grid; grid-template-columns: 2fr 0.7fr 1fr auto; gap: 10px; margin-bottom: 10px;";
  row.innerHTML = `
    <input type="text" class="form-control item-desc" placeholder="आइटम या सर्विस का नाम (जैसे: Laptop Screen / CCTV Setup)" value="${desc}" oninput="updateBillPreview()" />
    <input type="number" class="form-control item-qty" placeholder="Qty" value="${qty}" min="1" oninput="updateBillPreview()" />
    <input type="number" class="form-control item-rate" placeholder="Rate ₹" value="${rate}" min="0" oninput="updateBillPreview()" />
    <button type="button" class="btn btn-danger" onclick="this.parentElement.remove(); updateBillPreview();" style="padding: 0.5rem 0.8rem;">✕</button>
  `;
  container.appendChild(row);
  updateBillPreview();
}

function updateBillPreview() {
  if (!document.getElementById("prevCustName")) return;
  document.getElementById("prevCustName").innerText = document.getElementById("custName").value || "______________________";
  document.getElementById("prevCustPhone").innerText = document.getElementById("custPhone").value || "______________";
  document.getElementById("prevCustAddress").innerText = document.getElementById("custAddress").value || "______________________";

  const rows = document.querySelectorAll(".item-row");
  const tbody = document.getElementById("prevItemsBody");
  tbody.innerHTML = "";
  let subTotal = 0;

  rows.forEach((row, index) => {
    const desc = row.querySelector(".item-desc").value || "Item " + (index + 1);
    const qty = parseFloat(row.querySelector(".item-qty").value) || 0;
    const rate = parseFloat(row.querySelector(".item-rate").value) || 0;
    const amount = qty * rate;
    subTotal += amount;
    tbody.innerHTML += `<tr><td>${index + 1}</td><td>${desc}</td><td>${qty}</td><td>₹ ${rate.toFixed(2)}</td><td>₹ ${amount.toFixed(2)}</td></tr>`;
  });

  const discount = parseFloat(document.getElementById("billDiscount").value) || 0;
  const taxableAmount = Math.max(0, subTotal - discount);

  document.getElementById("prevSubTotal").innerText = subTotal.toFixed(2);
  document.getElementById("prevDiscountRow").style.display = discount > 0 ? "table-row" : "none";
  document.getElementById("prevDiscount").innerText = discount.toFixed(2);

  const isGstApplied = document.getElementById("gstToggle").checked;
  const gstPercent = parseFloat(document.getElementById("gstPercent").value) || 0;
  let gstAmount = 0;

  if (isGstApplied) {
    document.getElementById("gstNumberBox").style.display = "block";
    document.getElementById("prevGstRow").style.display = "table-row";
    document.getElementById("invoiceTypeTitle").innerText = "TAX INVOICE (GST)";
    const gstinVal = document.getElementById("shopGstin").value.trim();
    document.getElementById("printGstinRow").style.display = gstinVal ? "block" : "none";
    document.getElementById("prevGstin").innerText = gstinVal;
    gstAmount = (taxableAmount * gstPercent) / 100;
    document.getElementById("prevGstRate").innerText = gstPercent;
    document.getElementById("prevGstAmount").innerText = gstAmount.toFixed(2);
  } else {
    document.getElementById("gstNumberBox").style.display = "none";
    document.getElementById("prevGstRow").style.display = "none";
    document.getElementById("printGstinRow").style.display = "none";
    document.getElementById("invoiceTypeTitle").innerText = "CASH MEMO / INVOICE";
  }

  document.getElementById("prevGrandTotal").innerText = (taxableAmount + gstAmount).toFixed(2);
}

function printInvoice() {
  billCounter++;
  localStorage.setItem("scw_bill_counter", billCounter);
  window.print();
  document.getElementById("prevBillNo").innerText = "SCW-" + billCounter;
}

function sendBillOnWhatsApp() {
  const custName = document.getElementById("custName").value || "Customer";
  const custPhone = document.getElementById("custPhone").value.replace(/\D/g, "");
  const billNo = document.getElementById("prevBillNo").innerText;
  const total = document.getElementById("prevGrandTotal").innerText;
  if (custPhone.length < 10) {
    alert("कृपया ग्राहक का 10 अंकों का सही मोबाइल नंबर डालें!");
    return;
  }
  const waNumber = custPhone.length === 10 ? "91" + custPhone : custPhone;
  const msg = `*SANDEEP COMPUTER WORLD* (जीयनपुर, आज़मगढ़)%0A%0Aनमस्ते *${encodeURIComponent(custName)}* जी,%0Aआपका बिल जनरेट हो गया है:%0A🧾 *Bill No:* ${billNo}%0A💰 *कुल राशि (Total):* ₹${total}%0A%0Aधन्यवाद!%0A- संदीप यादव (7388245758)`;
  window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
}

// Run on every page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".inject-logo").forEach((el, idx) => {
    el.innerHTML = generateLogoSVG("logo_" + idx);
  });
  applyTheme(localStorage.getItem("scw_theme") || "light");
  applyLanguage(localStorage.getItem("scw_lang") || "hi");
  renderSocialLinks();
  initDashboard();
});