const CATS = {
  "all": "All Products",
  "pure-linen": "Pure Linen",
  "linen-blends": "Linen Blends",
  "home-textile": "Home Textile"
};

function renderFilters(active) {
  const box = document.getElementById("filters");
  if (!box) return;
  box.innerHTML = Object.keys(CATS).map(k =>
    `<button class="${k===active?'on':''}" onclick="renderProducts('${k}')">${CATS[k]}</button>`
  ).join("");
}

function renderProducts(cat) {
  renderFilters(cat);
  const grid = document.getElementById("p-grid");
  const list = PRODUCTS.filter(p => cat === "all" || p.category === cat);
  grid.innerHTML = list.map((p, i) => `
    <div class="p-card" onclick="openModal(${PRODUCTS.indexOf(p)})">
      <img src="${p.image}" alt="${p.name}">
      <div class="body">
        <h4>${p.name}</h4>
        <small>${p.composition || ""}</small>
      </div>
    </div>`).join("");
}

function openModal(i) {
  const p = PRODUCTS[i];
  const m = document.getElementById("modal");
  document.getElementById("m-img").src = p.image;
  document.getElementById("m-body").innerHTML = `
    <h3 style="margin-bottom:10px">${p.name}</h3>
    <p><b>Composition:</b> ${p.composition || "-"}</p>
    <p><b>Weight:</b> ${p.weight || "-"}</p>
    <p><b>Width:</b> ${p.width || "-"}</p>
    <p style="color:var(--muted);font-size:14px;margin-top:10px">
      For pricing and samples, please contact us by email or WhatsApp.</p>`;
  m.classList.add("open");
}
function closeModal(){ document.getElementById("modal").classList.remove("open"); }
document.addEventListener("click", e => {
  if (e.target.id === "modal") closeModal();
});
