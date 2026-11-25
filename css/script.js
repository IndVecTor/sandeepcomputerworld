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

// 2. Bilingual Dictionary (Public Pages + Login Page)
const TRANSLATIONS = {
  hi: {
    nav_home: "होम (Home)", nav_services: "सेवाएं (Services)", nav_about: "हमारे बारे में", nav_contact: "संपर्क करें", nav_login: "ऑफिशियल लॉगिन",
    hero_badge: "📍 जीयनपुर, आज़मगढ़ का भरोसेमंद टेक सेंटर",
    hero_title: "कंप्यूटर, लैपटॉप रिपेयरिंग और <span>CCTV कैमरा</span> की संपूर्ण सेवा",
    hero_desc: "प्रो. संदीप यादव द्वारा संचालित — घर, दुकान, ऑफिस और सोसाइटी के लिए तेज़ रिपेयरिंग और आधुनिक सिक्योरिटी कैमरा इंस्टॉलेशन।",
    btn_call: "📞 कॉल करें: 7388245758", btn_wa: "💬 Direct WhatsApp",
    sec_services_title: "हमारी प्रमुख सेवाएं (Our Services)",
    sec_services_sub: "सभी प्रकार के हार्डवेयर, सॉफ्टवेयर और सिक्योरिटी समाधान एक ही छत के नीचे",
    card1_title: "💻 लैपटॉप रिपेयरिंग", card1_desc: "सभी कंपनियों के लैपटॉप की चिप-लेवल और पार्ट रिपेयरिंग की जाती है।",
    card2_title: "🖥️ कंप्यूटर व सॉफ्टवेयर", card2_desc: "नए डेस्कटॉप असेंबलिंग से लेकर सभी सॉफ्टवेयर समस्याओं का समाधान।",
    card3_title: "📹 CCTV कैमरा इंस्टॉलेशन", card3_desc: "अपने घर, दुकान और ऑफिस को 24x7 सुरक्षित रखें।",
    btn_all_services: "सभी सेवाएं विस्तार से देखें →",
    wa_box_title: "💬 सीधे संदीप यादव जी को WhatsApp मैसेज भेजें",
    wa_box_sub: "अपनी समस्या लिखें और सीधे WhatsApp पर तुरंत जवाब पाएं",
    btn_send_wa: "WhatsApp पर मैसेज भेजें ➤",
    about_title: "Sandeep Computer World के बारे में",
    about_p1: "<strong>संदीप कंप्यूटर वर्ल्ड (Sandeep Computer World)</strong> जीयनपुर, आज़मगढ़ का एक प्रमुख और विश्वसनीय कंप्यूटर, लैपटॉप रिपेयरिंग और CCTV सिक्योरिटी सर्विस सेंटर है। इसके संस्थापक और मुख्य संचालक <strong>संदीप यादव (Sandeep Yadav)</strong> हैं।",
    about_p2: "हमारा उद्देश्य ग्राहकों को उचित दाम पर ईमानदार, तेज़ और टिकाऊ तकनीकी सेवा प्रदान करना है। चाहे आपके लैपटॉप में कोई खराबी हो या आपको अपने घर और दुकान की सुरक्षा के लिए CCTV कैमरा लगवाना हो—हम हर काम पूरी जिम्मेदारी के साथ करते हैं।",
    contact_title: "हमसे संपर्क करें (Contact Us)",
    contact_sub: "किसी भी पूछताछ या सर्विस बुकिंग के लिए सीधे कॉल या व्हाट्सएप करें",
    login_sub_brand: "ऑफिशियल स्टाफ एवं एडमिन पोर्टल",
    back_home: "← वापस Home पर जाएं",
    login_title: "ऑफिशियल लॉगिन (Official Login)",
    login_desc: "बिलिंग सिस्टम और एडमिन कंट्रोल के लिए लॉगिन करें",
    login_role_lbl: "लॉगिन प्रकार चुनें (Select Role)",
    login_user_lbl: "यूज़रनेम (Username)",
    login_pass_lbl: "पासवर्ड (Password)",
    login_btn: "🔐 सुरक्षित लॉगिन करें"
  },
  en: {
    nav_home: "Home", nav_services: "Services", nav_about: "About Us", nav_contact: "Contact", nav_login: "Official Login",
    hero_badge: "📍 Trusted Tech & Security Center in Jiyanpur, Azamgarh",
    hero_title: "Complete Computer, Laptop Repair & <span>CCTV Camera</span> Services",
    hero_desc: "Managed by Prop. Sandeep Yadav — Fast chip-level repair and modern security camera installation for homes, shops, and offices.",
    btn_call: "📞 Call Now: 7388245758", btn_wa: "💬 Direct WhatsApp",
    sec_services_title: "Our Core Services",
    sec_services_sub: "Complete hardware, software, and security solutions under one roof",
    card1_title: "💻 Laptop Repairing", card1_desc: "Chip-level motherboard and spare part repair for all laptop brands.",
    card2_title: "🖥️ Computer & Software", card2_desc: "New desktop assembling and complete Windows & software solutions.",
    card3_title: "📹 CCTV Camera Installation", card3_desc: "Keep your home, shop, and office secure 24x7 with HD & IP cameras.",
    btn_all_services: "Explore All Services →",
    wa_box_title: "💬 Send Direct WhatsApp Message to Sandeep Yadav",
    wa_box_sub: "Describe your issue and get an instant reply on WhatsApp",
    btn_send_wa: "Send Message on WhatsApp ➤",
    about_title: "About Sandeep Computer World",
    about_p1: "<strong>Sandeep Computer World</strong> is a leading and trusted computer, laptop repairing, and CCTV security service center in Jiyanpur, Azamgarh, founded and managed by <strong>Sandeep Yadav</strong>.",
    about_p2: "Our mission is to provide honest, fast, and durable technical services at fair prices. Whether your laptop needs repair or you want CCTV security for your home and shop, we deliver every job with complete dedication.",
    contact_title: "Contact Us",
    contact_sub: "Call or WhatsApp directly for any inquiry or service booking",
    login_sub_brand: "Official Staff & Admin Portal",
    back_home: "← Back to Home",
    login_title: "Official Login",
    login_desc: "Sign in to access the Billing ERP & Admin Control Panel",
    login_role_lbl: "Select Login Role",
    login_user_lbl: "Username",
    login_pass_lbl: "Password",
    login_btn: "🔐 Login Securely"
  }
};

// 3. Theme & Language
function toggleTheme() {
  const next = document.body.classList.contains("dark-theme") ? "light" : "dark";
  localStorage.setItem("scw_theme", next);
  applyTheme(next);
}

function applyTheme(theme) {
  const btn = document.getElementById("themeToggleBtn");
  document.body.classList.toggle("dark-theme", theme === "dark");
  if (btn) btn.innerText = theme === "dark" ? "☀️ Light" : "🌙 Dark";
}

function toggleLanguage() {
  const next = (localStorage.getItem("scw_lang") || "hi") === "hi" ? "en" : "hi";
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

// 4. Social Links
function getSocialConfig() {
  const saved = localStorage.getItem("scw_social_links");
  return saved ? JSON.parse(saved) : { facebook: "https://facebook.com", instagram: "https://instagram.com" };
}

function renderSocialLinks() {
  const config = getSocialConfig();
  document.querySelectorAll(".dynamic-socials").forEach(box => {
    let html = "";
    if (config.facebook && config.facebook.trim() !== "") html += `<a href="${config.facebook}" target="_blank" class="social-btn fb-bg">📘 Facebook</a>`;
    if (config.instagram && config.instagram.trim() !== "") html += `<a href="${config.instagram}" target="_blank" class="social-btn ig-bg">📸 Instagram</a>`;
    box.innerHTML = html;
  });
}

// 5. Direct WhatsApp
function sendWhatsAppMessage(event) {
  if (event) event.preventDefault();
  const name = document.getElementById("waName")?.value || "Customer";
  const service = document.getElementById("waService")?.value || "General Inquiry";
  const msg = document.getElementById("waMsg")?.value || "";
  const text = `नमस्ते संदीप जी (Sandeep Computer World),%0A*नाम:* ${encodeURIComponent(name)}%0A*सर्विस:* ${encodeURIComponent(service)}%0A*संदेश:* ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${OWNER_WA}?text=${text}`, "_blank");
}

// 6. Official Login & Logout
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

// ==================== 7. ERP STORAGE & EXCEL EXPORT ENGINE ====================
function getDB(key, fallback = []) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

function setDB(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function exportTableToExcel(filename, headers, rows) {
  if (!rows || rows.length === 0) {
    alert("एक्सपोर्ट करने के लिए कोई डेटा उपलब्ध नहीं है!");
    return;
  }
  const csvContent = [
    headers.join(","),
    ...rows.map(r => r.map(cell => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
  ].join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==================== 8. DASHBOARD & BILLING SYSTEM ====================
function switchTab(tabId, btnEl) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".sidebar-btn").forEach(b => b.classList.remove("active"));
  const panel = document.getElementById(tabId);
  if (panel) panel.classList.add("active");
  if (btnEl) btnEl.classList.add("active");
  document.getElementById("erpSidebar")?.classList.remove("open");

  if (tabId === "tab-overview") refreshOverviewStats();
  if (tabId === "tab-bills") renderBillsTable();
  if (tabId === "tab-customers") renderCustomersTable();
  if (tabId === "tab-repairs") renderRepairsTable();
  if (tabId === "tab-stock") renderStockTable();
  if (tabId === "tab-due") renderDueTable();
}

function initDashboard() {
  const wrapper = document.getElementById("erpWrapper");
  if (!wrapper) return;

  const role = localStorage.getItem("scw_auth_role");
  if (!role) {
    window.location.href = "login.html";
    return;
  }

  if (role === "superadmin") {
    document.getElementById("superAdminNavItem").style.display = "block";
    document.getElementById("roleBadge").innerText = "Super Admin & Billing ERP";
    const socials = getSocialConfig();
    document.getElementById("adminFbUrl").value = socials.facebook;
    document.getElementById("adminIgUrl").value = socials.instagram;
  } else {
    document.getElementById("roleBadge").innerText = "Shop Owner: Sandeep Yadav";
  }

  if (getDB("scw_stock", null) === null) {
    setDB("scw_stock", [
      { id: 1, name: "Laptop General Service & Cleaning", rate: 300, warranty: "No Warranty" },
      { id: 2, name: "Windows 10/11 Installation + Software", rate: 400, warranty: "No Warranty" },
      { id: 3, name: "256GB NVMe / SATA SSD Upgrade", rate: 2200, warranty: "3 Years" },
      { id: 4, name: "CCTV 2MP HD Bullet/Dome Camera", rate: 1450, warranty: "2 Years" },
      { id: 5, name: "4 Channel DVR Setup + Installation", rate: 3500, warranty: "2 Years" }
    ]);
  }

  const todayISO = new Date().toISOString().slice(0, 10);
  document.getElementById("billDateInput").value = todayISO;
  updateNextBillNo();
  populateStockDatalist();
  addItemRow("Laptop / Computer Service", 1, 500, "No Warranty");
  refreshOverviewStats();
}

function updateNextBillNo() {
  const bills = getDB("scw_bills", []);
  const nextNum = 1001 + bills.length;
  document.getElementById("prevBillNo").innerText = "SCW-" + nextNum;
}

// Mobile Number First Lookup & Permanent Customer Save
function handleMobileLookup() {
  const rawPhone = document.getElementById("custPhone").value.replace(/\D/g, "");
  const hint = document.getElementById("custLookupHint");
  if (rawPhone.length < 10) {
    if (hint) hint.style.display = "none";
    return;
  }
  const customers = getDB("scw_customers", []);
  const found = customers.find(c => (c.phone || "").replace(/\D/g, "").endsWith(rawPhone.slice(-10)));
  if (found) {
    document.getElementById("custName").value = found.name || "";
    document.getElementById("custAddress").value = found.address || "";
    if (hint) hint.style.display = "block";
    updateBillPreview();
  } else {
    if (hint) hint.style.display = "none";
  }
}

function saveCustomerPermanently(name, phone, address) {
  if (!name) return;
  const customers = getDB("scw_customers", []);
  const cleanPhone = (phone || "").replace(/\D/g, "");
  const existingIdx = customers.findIndex(c => (cleanPhone && (c.phone || "").replace(/\D/g, "") === cleanPhone) || c.name.toLowerCase() === name.toLowerCase());
  const record = {
    name,
    phone: phone || "",
    address: address || "",
    lastVisit: new Date().toISOString().slice(0, 10)
  };
  if (existingIdx >= 0) {
    customers[existingIdx] = { ...customers[existingIdx], ...record };
  } else {
    customers.push(record);
  }
  setDB("scw_customers", customers);
}

// Smart Autocomplete Datalist & Auto-Save New Items to Rate List
function populateStockDatalist() {
  const stock = getDB("scw_stock", []);
  const dl = document.getElementById("stockSuggestionsDatalist");
  if (!dl) return;
  dl.innerHTML = stock.map(item => `<option value="${item.name}">₹${item.rate} (${item.warranty})</option>`).join("");
}

function handleItemNameInput(inputEl) {
  const val = inputEl.value.trim().toLowerCase();
  if (!val) {
    updateBillPreview();
    return;
  }
  const stock = getDB("scw_stock", []);
  const matched = stock.find(s => s.name.toLowerCase() === val);
  if (matched) {
    const row = inputEl.closest(".item-row");
    if (row) {
      row.querySelector(".item-rate").value = matched.rate;
      row.querySelector(".item-warranty").value = matched.warranty || "No Warranty";
    }
  }
  updateBillPreview();
}

function syncItemsToStockList(itemsList) {
  const stock = getDB("scw_stock", []);
  let updated = false;
  itemsList.forEach(it => {
    const cleanName = (it.desc || "").trim();
    if (!cleanName || cleanName.startsWith("Item ")) return;
    const exists = stock.some(s => s.name.toLowerCase() === cleanName.toLowerCase());
    if (!exists) {
      stock.push({
        id: Date.now() + Math.random(),
        name: cleanName,
        rate: Number(it.rate) || 0,
        warranty: it.warranty || "No Warranty"
      });
      updated = true;
    }
  });
  if (updated) {
    setDB("scw_stock", stock);
    populateStockDatalist();
  }
}

// Invoice Item Rows (With Smart Datalist Autocomplete)
function addItemRow(desc = "", qty = 1, rate = 0, warranty = "No Warranty") {
  const container = document.getElementById("itemsContainer");
  const row = document.createElement("div");
  row.className = "item-row";
  row.style.cssText = "display: grid; grid-template-columns: 2.2fr 1.1fr 0.6fr 0.9fr auto; gap: 8px; margin-bottom: 8px;";
  row.innerHTML = `
    <input type="text" list="stockSuggestionsDatalist" class="form-control item-desc" placeholder="सामान / सर्विस का नाम लिखें (सुझाव दिखेगा)..." value="${desc}" oninput="handleItemNameInput(this)" />
    <input type="text" class="form-control item-warranty" placeholder="Warranty" value="${warranty}" oninput="updateBillPreview()" />
    <input type="number" class="form-control item-qty" placeholder="Qty" value="${qty}" min="1" oninput="updateBillPreview()" />
    <input type="number" class="form-control item-rate" placeholder="Rate ₹" value="${rate}" min="0" oninput="updateBillPreview()" />
    <button type="button" class="btn btn-danger" onclick="this.parentElement.remove(); updateBillPreview();" style="padding: 0.45rem 0.75rem;">✕</button>
  `;
  container.appendChild(row);
  updateBillPreview();
}

function getSelectedTick(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : "";
}

function updateBillPreview() {
  document.getElementById("prevCustName").innerText = document.getElementById("custName").value || "______________________";
  document.getElementById("prevCustPhone").innerText = document.getElementById("custPhone").value || "______________";
  document.getElementById("prevCustAddress").innerText = document.getElementById("custAddress").value || "______________________";

  const rawDate = document.getElementById("billDateInput").value;
  if (rawDate) {
    const [y, m, d] = rawDate.split("-");
    document.getElementById("prevDate").innerText = `${d}/${m}/${y}`;
  }

  const payMode = getSelectedTick("payMode");
  const payStatus = getSelectedTick("payStatus");
  document.getElementById("prevPayMode").innerText = payMode;
  document.getElementById("prevPayStatus").innerText = payStatus;

  const dueBox = document.getElementById("partialPaidBox");
  dueBox.style.display = payStatus === "Partial (आधा जमा)" ? "block" : "none";

  const rows = document.querySelectorAll(".item-row");
  const tbody = document.getElementById("prevItemsBody");
  tbody.innerHTML = "";
  let subTotal = 0;
  const itemsList = [];

  rows.forEach((row, index) => {
    const desc = row.querySelector(".item-desc").value || "Item " + (index + 1);
    const warranty = row.querySelector(".item-warranty").value || "-";
    const qty = parseFloat(row.querySelector(".item-qty").value) || 0;
    const rate = parseFloat(row.querySelector(".item-rate").value) || 0;
    const amount = qty * rate;
    subTotal += amount;
    itemsList.push({ desc, warranty, qty, rate, amount });

    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${desc}</td>
        <td>${warranty}</td>
        <td>${qty}</td>
        <td>₹ ${rate.toFixed(2)}</td>
        <td>₹ ${amount.toFixed(2)}</td>
      </tr>
    `;
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
    document.getElementById("invoiceTypeTitle").innerText = "A4 CASH MEMO / INVOICE";
  }

  const grandTotal = taxableAmount + gstAmount;
  document.getElementById("prevGrandTotal").innerText = grandTotal.toFixed(2);

  let paidAmount = grandTotal;
  let dueAmount = 0;
  if (payStatus === "Unpaid (उधार)") {
    paidAmount = 0;
    dueAmount = grandTotal;
  } else if (payStatus === "Partial (आधा जमा)") {
    paidAmount = parseFloat(document.getElementById("paidAmountInput").value) || 0;
    dueAmount = Math.max(0, grandTotal - paidAmount);
  }

  document.getElementById("prevPaidRow").style.display = dueAmount > 0 ? "table-row" : "none";
  document.getElementById("prevDueRow").style.display = dueAmount > 0 ? "table-row" : "none";
  document.getElementById("prevPaidAmount").innerText = paidAmount.toFixed(2);
  document.getElementById("prevDueAmount").innerText = dueAmount.toFixed(2);

  return {
    billNo: document.getElementById("prevBillNo").innerText,
    date: rawDate,
    custName: document.getElementById("custName").value.trim(),
    custPhone: document.getElementById("custPhone").value.trim(),
    custAddress: document.getElementById("custAddress").value.trim(),
    payMode,
    payStatus,
    isGstApplied,
    gstPercent,
    gstin: document.getElementById("shopGstin").value.trim(),
    items: itemsList,
    subTotal,
    discount,
    gstAmount,
    grandTotal,
    paidAmount,
    dueAmount
  };
}

function persistCurrentBill() {
  const billData = updateBillPreview();
  if (!billData.custName) {
    alert("कृपया ग्राहक का नाम जरूर लिखें!");
    return null;
  }

  saveCustomerPermanently(billData.custName, billData.custPhone, billData.custAddress);
  syncItemsToStockList(billData.items);

  const bills = getDB("scw_bills", []);
  const existingIndex = bills.findIndex(b => b.billNo === billData.billNo);
  if (existingIndex >= 0) {
    bills[existingIndex] = billData;
  } else {
    bills.unshift(billData);
  }
  setDB("scw_bills", bills);
  refreshOverviewStats();
  return billData;
}

function saveAndPrintInvoice() {
  const saved = persistCurrentBill();
  if (!saved) return;
  window.print();
  updateNextBillNo();
}

// 1-Click PDF Generation & WhatsApp Share
async function downloadPdfAndShareWhatsApp() {
  const billData = persistCurrentBill();
  if (!billData) return;

  const phone = billData.custPhone.replace(/\D/g, "");
  if (phone.length < 10) {
    alert("कृपया ग्राहक का 10 अंकों का सही मोबाइल नंबर डालें!");
    return;
  }

  const element = document.getElementById("printableInvoice");
  const filename = `${billData.billNo}_${billData.custName.replace(/\s+/g, "_")}.pdf`;

  const opt = {
    margin: 6,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  if (typeof html2pdf !== "undefined") {
    try {
      const pdfBlob = await html2pdf().set(opt).from(element).outputPdf("blob");
      const pdfFile = new File([pdfBlob], filename, { type: "application/pdf" });

      // Trigger direct download so user always has the PDF
      const dlLink = document.createElement("a");
      dlLink.href = URL.createObjectURL(pdfBlob);
      dlLink.download = filename;
      dlLink.click();

      // If mobile/supported browser supports direct file sharing, open share sheet
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: `Invoice ${billData.billNo}`,
          text: `Sandeep Computer World - Bill ${billData.billNo}`
        });
        updateNextBillNo();
        return;
      }
    } catch (err) {
      console.warn("PDF generation fallback:", err);
    }
  }

  // Open Customer WhatsApp directly with summary
  const waNumber = phone.length === 10 ? "91" + phone : phone;
  const dueLine = billData.dueAmount > 0 ? `%0A⚠️ *बकाया राशि (Due):* ₹${billData.dueAmount.toFixed(2)}` : "";
  const msg = `*SANDEEP COMPUTER WORLD* (जीयनपुर, आज़मगढ़)%0A%0Aनमस्ते *${encodeURIComponent(billData.custName)}* जी,%0Aआपकी A4 रसीद (PDF) तैयार है (फ़ाइल डाउनलोड हो गई है, संलग्न की जा रही है):%0A🧾 *Bill No:* ${billData.billNo}%0A📅 *तारीख:* ${billData.date}%0A💳 *पेमेंट:* ${billData.payMode} (${billData.payStatus})%0A💰 *कुल राशि:* ₹${billData.grandTotal.toFixed(2)}${dueLine}%0A%0Aधन्यवाद!%0A- संदीप यादव (7388245758)`;
  window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
  updateNextBillNo();
}

// ==================== 9. ALL BILLS (DATE FILTER & REPRINT) ====================
function renderBillsTable() {
  const bills = getDB("scw_bills", []);
  const search = (document.getElementById("billSearchInput")?.value || "").toLowerCase();
  const fromDate = document.getElementById("filterFromDate")?.value || "";
  const toDate = document.getElementById("filterToDate")?.value || "";

  const filtered = bills.filter(b => {
    const matchText = b.custName.toLowerCase().includes(search) || b.billNo.toLowerCase().includes(search) || (b.custPhone || "").includes(search);
    const matchFrom = !fromDate || b.date >= fromDate;
    const matchTo = !toDate || b.date <= toDate;
    return matchText && matchFrom && matchTo;
  });

  const tbody = document.getElementById("allBillsBody");
  if (!tbody) return;
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">इस तारीख या सर्च के लिए कोई बिल नहीं मिला।</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td><strong>${b.billNo}</strong></td>
      <td>${b.date}</td>
      <td>${b.custName}<br><small>${b.custPhone || "-"}</small></td>
      <td>${b.payMode}</td>
      <td><strong>₹${Number(b.grandTotal).toFixed(2)}</strong></td>
      <td>${b.dueAmount > 0 ? `<span class="status-pill pill-due">Due: ₹${Number(b.dueAmount).toFixed(2)}</span>` : `<span class="status-pill pill-paid">Paid</span>`}</td>
      <td><button class="btn btn-primary btn-sm" onclick="loadBillForReprint('${b.billNo}')">🖨️ View / Print</button></td>
    </tr>
  `).join("");
}

function loadBillForReprint(billNo) {
  const bills = getDB("scw_bills", []);
  const b = bills.find(item => item.billNo === billNo);
  if (!b) return;

  switchTab("tab-create-bill", document.getElementById("navCreateBill"));
  document.getElementById("prevBillNo").innerText = b.billNo;
  document.getElementById("billDateInput").value = b.date;
  document.getElementById("custName").value = b.custName;
  document.getElementById("custPhone").value = b.custPhone;
  document.getElementById("custAddress").value = b.custAddress;
  document.getElementById("billDiscount").value = b.discount || 0;
  document.getElementById("gstToggle").checked = !!b.isGstApplied;
  document.getElementById("gstPercent").value = b.gstPercent || 18;
  document.getElementById("shopGstin").value = b.gstin || "";

  document.querySelectorAll(`input[name="payMode"]`).forEach(r => { r.checked = (r.value === b.payMode); });
  document.querySelectorAll(`input[name="payStatus"]`).forEach(r => { r.checked = (r.value === b.payStatus); });
  document.getElementById("paidAmountInput").value = b.paidAmount || 0;

  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";
  (b.items || []).forEach(it => addItemRow(it.desc, it.qty, it.rate, it.warranty || "No Warranty"));
  updateBillPreview();
}

function exportBillsExcel() {
  const bills = getDB("scw_bills", []);
  const headers = ["Bill No", "Date", "Customer Name", "Mobile", "Address", "Payment Mode", "Status", "Sub Total", "Discount", "GST", "Grand Total", "Paid", "Due"];
  const rows = bills.map(b => [b.billNo, b.date, b.custName, b.custPhone, b.custAddress, b.payMode, b.payStatus, b.subTotal, b.discount, b.gstAmount, b.grandTotal, b.paidAmount, b.dueAmount]);
  exportTableToExcel("SandeepComputerWorld_Bills", headers, rows);
}

// ==================== 10. SAVED CUSTOMERS ====================
function renderCustomersTable() {
  const customers = getDB("scw_customers", []);
  const q = (document.getElementById("custSearchInput")?.value || "").toLowerCase();
  const filtered = customers.filter(c => c.name.toLowerCase().includes(q) || (c.phone || "").includes(q) || (c.address || "").toLowerCase().includes(q));
  const tbody = document.getElementById("savedCustomersBody");
  if (!tbody) return;

  tbody.innerHTML = filtered.length ? filtered.map((c, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${c.name}</strong></td>
      <td>${c.phone || "-"}</td>
      <td>${c.address || "-"}</td>
      <td>${c.lastVisit || "-"}</td>
      <td><button class="btn btn-primary btn-sm" onclick="startBillForCustomer('${c.name}', '${c.phone}', '${c.address}')">🧾 नया बिल बनाएं</button></td>
    </tr>
  `).join("") : `<tr><td colspan="6" style="text-align:center;">अभी कोई ग्राहक सेव नहीं है।</td></tr>`;
}

function startBillForCustomer(name, phone, address) {
  switchTab("tab-create-bill", document.getElementById("navCreateBill"));
  updateNextBillNo();
  document.getElementById("custName").value = name;
  document.getElementById("custPhone").value = phone;
  document.getElementById("custAddress").value = address;
  updateBillPreview();
}

function exportCustomersExcel() {
  const customers = getDB("scw_customers", []);
  exportTableToExcel("Saved_Customers", ["Name", "Mobile", "Address", "Last Visit"], customers.map(c => [c.name, c.phone, c.address, c.lastVisit]));
}

// ==================== 11. REPAIRING JOB SHEET ====================
function addRepairJob(e) {
  e.preventDefault();
  const jobs = getDB("scw_repairs", []);
  jobs.unshift({
    jobId: "JOB-" + (101 + jobs.length),
    date: new Date().toISOString().slice(0, 10),
    custName: document.getElementById("repCustName").value.trim(),
    custPhone: document.getElementById("repCustPhone").value.trim(),
    device: document.getElementById("repDevice").value.trim(),
    issue: document.getElementById("repIssue").value.trim(),
    estCost: parseFloat(document.getElementById("repCost").value) || 0,
    status: "Pending"
  });
  setDB("scw_repairs", jobs);
  saveCustomerPermanently(document.getElementById("repCustName").value.trim(), document.getElementById("repCustPhone").value.trim(), "");
  e.target.reset();
  renderRepairsTable();
  refreshOverviewStats();
}

function updateRepairStatus(idx, newStatus) {
  const jobs = getDB("scw_repairs", []);
  if (jobs[idx]) {
    jobs[idx].status = newStatus;
    setDB("scw_repairs", jobs);
    renderRepairsTable();
    refreshOverviewStats();
  }
}

function convertRepairToBill(idx) {
  const jobs = getDB("scw_repairs", []);
  const j = jobs[idx];
  if (!j) return;
  switchTab("tab-create-bill", document.getElementById("navCreateBill"));
  updateNextBillNo();
  document.getElementById("custName").value = j.custName;
  document.getElementById("custPhone").value = j.custPhone;
  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";
  addItemRow(`${j.device} Repair (${j.issue})`, 1, j.estCost, "No Warranty");
  updateBillPreview();
}

function renderRepairsTable() {
  const jobs = getDB("scw_repairs", []);
  const tbody = document.getElementById("repairsBody");
  if (!tbody) return;
  tbody.innerHTML = jobs.length ? jobs.map((j, idx) => `
    <tr>
      <td><strong>${j.jobId}</strong><br><small>${j.date}</small></td>
      <td>${j.custName}<br><small>${j.custPhone}</small></td>
      <td>${j.device}<br><small style="color:var(--muted);">${j.issue}</small></td>
      <td>₹${j.estCost}</td>
      <td>
        <select class="form-control" style="padding:4px;" onchange="updateRepairStatus(${idx}, this.value)">
          <option value="Pending" ${j.status === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Ready" ${j.status === "Ready" ? "selected" : ""}>Ready</option>
          <option value="Delivered" ${j.status === "Delivered" ? "selected" : ""}>Delivered</option>
        </select>
      </td>
      <td><button class="btn btn-primary btn-sm" onclick="convertRepairToBill(${idx})">🧾 Bill बनाएं</button></td>
    </tr>
  `).join("") : `<tr><td colspan="6" style="text-align:center;">कोई रिपेयरिंग जॉब दर्ज नहीं है।</td></tr>`;
}

function exportRepairsExcel() {
  const jobs = getDB("scw_repairs", []);
  exportTableToExcel("Repairing_Jobs", ["Job ID", "Date", "Customer", "Mobile", "Device", "Issue", "Est Cost", "Status"], jobs.map(j => [j.jobId, j.date, j.custName, j.custPhone, j.device, j.issue, j.estCost, j.status]));
}

// ==================== 12. STOCK & RATE LIST ====================
function addStockItem(e) {
  e.preventDefault();
  const stock = getDB("scw_stock", []);
  stock.push({
    id: Date.now(),
    name: document.getElementById("stkName").value.trim(),
    rate: parseFloat(document.getElementById("stkRate").value) || 0,
    warranty: document.getElementById("stkWarranty").value.trim() || "No Warranty"
  });
  setDB("scw_stock", stock);
  e.target.reset();
  renderStockTable();
  populateStockDatalist();
}

function deleteStockItem(idx) {
  const stock = getDB("scw_stock", []);
  stock.splice(idx, 1);
  setDB("scw_stock", stock);
  renderStockTable();
  populateStockDatalist();
}

function renderStockTable() {
  const stock = getDB("scw_stock", []);
  const tbody = document.getElementById("stockBody");
  if (!tbody) return;
  tbody.innerHTML = stock.map((s, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${s.name}</strong></td>
      <td>₹${Number(s.rate).toFixed(2)}</td>
      <td>${s.warranty}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteStockItem(${idx})">Delete</button></td>
    </tr>
  `).join("");
}

function exportStockExcel() {
  const stock = getDB("scw_stock", []);
  exportTableToExcel("Stock_Rate_List", ["Item / Service Name", "Rate", "Warranty"], stock.map(s => [s.name, s.rate, s.warranty]));
}

// ==================== 13. DUE / UDHAAR KHATA ====================
function renderDueTable() {
  const bills = getDB("scw_bills", []);
  const dueBills = bills.filter(b => Number(b.dueAmount) > 0);
  const tbody = document.getElementById("dueBody");
  if (!tbody) return;

  tbody.innerHTML = dueBills.length ? dueBills.map(b => `
    <tr>
      <td><strong>${b.billNo}</strong> (${b.date})</td>
      <td>${b.custName}<br><small>${b.custPhone || "-"}</small></td>
      <td>₹${Number(b.grandTotal).toFixed(2)}</td>
      <td>₹${Number(b.paidAmount).toFixed(2)}</td>
      <td><strong style="color:var(--danger);">₹${Number(b.dueAmount).toFixed(2)}</strong></td>
      <td><button class="btn btn-whatsapp btn-sm" onclick="markBillAsPaid('${b.billNo}')">✅ Mark Full Paid</button></td>
    </tr>
  `).join("") : `<tr><td colspan="6" style="text-align:center;">कोई बकाया (Due) नहीं है!</td></tr>`;
}

function markBillAsPaid(billNo) {
  const bills = getDB("scw_bills", []);
  const idx = bills.findIndex(b => b.billNo === billNo);
  if (idx >= 0) {
    bills[idx].paidAmount = bills[idx].grandTotal;
    bills[idx].dueAmount = 0;
    bills[idx].payStatus = "Paid (पूरा जमा)";
    setDB("scw_bills", bills);
    renderDueTable();
    refreshOverviewStats();
  }
}

function exportDueExcel() {
  const dueBills = getDB("scw_bills", []).filter(b => Number(b.dueAmount) > 0);
  exportTableToExcel("Due_Udhaar_Khata", ["Bill No", "Date", "Customer", "Mobile", "Total", "Paid", "Due Amount"], dueBills.map(b => [b.billNo, b.date, b.custName, b.custPhone, b.grandTotal, b.paidAmount, b.dueAmount]));
}

// ==================== 14. EXPANDED OVERVIEW STATS & SUPER ADMIN ====================
function refreshOverviewStats() {
  const bills = getDB("scw_bills", []);
  const customers = getDB("scw_customers", []);
  const repairs = getDB("scw_repairs", []);
  const today = new Date().toISOString().slice(0, 10);
  const currentMonth = today.slice(0, 7);

  const todaySales = bills.filter(b => b.date === today).reduce((sum, b) => sum + Number(b.grandTotal || 0), 0);
  const monthSales = bills.filter(b => (b.date || "").startsWith(currentMonth)).reduce((sum, b) => sum + Number(b.grandTotal || 0), 0);
  const totalDue = bills.reduce((sum, b) => sum + Number(b.dueAmount || 0), 0);

  const cashPaid = bills.filter(b => b.payMode === "Cash").reduce((sum, b) => sum + Number(b.paidAmount || 0), 0);
  const upiPaid = bills.filter(b => (b.payMode || "").includes("UPI")).reduce((sum, b) => sum + Number(b.paidAmount || 0), 0);

  const pendingRep = repairs.filter(r => r.status === "Pending").length;
  const readyRep = repairs.filter(r => r.status === "Ready").length;

  if (document.getElementById("statTodaySales")) document.getElementById("statTodaySales").innerText = "₹" + todaySales.toFixed(2);
  if (document.getElementById("statMonthSales")) document.getElementById("statMonthSales").innerText = "₹" + monthSales.toFixed(2);
  if (document.getElementById("statTotalDue")) document.getElementById("statTotalDue").innerText = "₹" + totalDue.toFixed(2);
  if (document.getElementById("statCashUpi")) document.getElementById("statCashUpi").innerText = `Cash: ₹${cashPaid.toFixed(0)} | UPI: ₹${upiPaid.toFixed(0)}`;
  if (document.getElementById("statRepairBreakdown")) document.getElementById("statRepairBreakdown").innerText = `Pending: ${pendingRep} | Ready: ${readyRep}`;
  if (document.getElementById("statBillsCustomers")) document.getElementById("statBillsCustomers").innerText = `${bills.length} Bills | ${customers.length} Customers`;

  // Recent 5 Bills
  const recentTbody = document.getElementById("overviewRecentBills");
  if (recentTbody) {
    const recent = bills.slice(0, 5);
    recentTbody.innerHTML = recent.length ? recent.map(b => `
      <tr>
        <td><strong>${b.billNo}</strong><br><small>${b.date}</small></td>
        <td>${b.custName}</td>
        <td>₹${Number(b.grandTotal).toFixed(2)}</td>
        <td><button class="btn btn-primary btn-sm" onclick="loadBillForReprint('${b.billNo}')">🖨️ Print</button></td>
      </tr>
    `).join("") : `<tr><td colspan="4" style="text-align:center;">अभी कोई बिल नहीं बना है।</td></tr>`;
  }

  // Top Pending Dues
  const duesTbody = document.getElementById("overviewTopDues");
  if (duesTbody) {
    const topDues = bills.filter(b => Number(b.dueAmount) > 0).slice(0, 5);
    duesTbody.innerHTML = topDues.length ? topDues.map(b => `
      <tr>
        <td>${b.custName}<br><small>${b.custPhone || "-"}</small></td>
        <td>${b.billNo}</td>
        <td><strong style="color:var(--danger);">₹${Number(b.dueAmount).toFixed(2)}</strong></td>
        <td><button class="btn btn-whatsapp btn-sm" onclick="markBillAsPaid('${b.billNo}')">✅ Paid</button></td>
      </tr>
    `).join("") : `<tr><td colspan="4" style="text-align:center;">कोई बकाया नहीं है।</td></tr>`;
  }
}

function saveSocialLinks(e) {
  e.preventDefault();
  const fb = document.getElementById("adminFbUrl").value.trim();
  const ig = document.getElementById("adminIgUrl").value.trim();
  localStorage.setItem("scw_social_links", JSON.stringify({ facebook: fb, instagram: ig }));
  alert("✅ Facebook और Instagram लिंक मुख्य वेबसाइट पर अपडेट हो गए हैं!");
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".inject-logo").forEach((el, idx) => {
    el.innerHTML = generateLogoSVG("logo_" + idx);
  });
  applyTheme(localStorage.getItem("scw_theme") || "light");
  applyLanguage(localStorage.getItem("scw_lang") || "hi");
  renderSocialLinks();
  initDashboard();
});