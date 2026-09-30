// =============================================================
// 产品数据 —— 以后加新款/改内容，只改这个文件
// 每个产品一组大括号，照样子复制粘贴新增即可
// category 只能填三选一: "pure-linen" / "linen-blends" / "home-textile"
// image: 图片放在 images/ 文件夹里，写文件名即可
// =============================================================
const PRODUCTS = [
  // ---------- Pure Linen ----------
  { name: "Pure Linen Fabric A-101", category: "pure-linen",
    image: "images/pure-linen-1.jpg",
    composition: "100% Linen", weight: "185 GSM", width: "140 cm" },
  { name: "Pure Linen Fabric A-102", category: "pure-linen",
    image: "images/pure-linen-2.jpg",
    composition: "100% Linen", weight: "210 GSM", width: "140 cm" },
  { name: "Pure Linen Fabric A-103", category: "pure-linen",
    image: "images/pure-linen-3.jpg",
    composition: "100% Linen", weight: "160 GSM", width: "138 cm" },
  { name: "Pure Linen Fabric A-104", category: "pure-linen",
    image: "images/pure-linen-4.jpg",
    composition: "100% Linen", weight: "230 GSM", width: "140 cm" },

  // ---------- Linen Blends ----------
  { name: "Linen Cotton Blend B-201", category: "linen-blends",
    image: "images/linen-blends-1.jpg",
    composition: "55% Linen / 45% Cotton", weight: "175 GSM", width: "145 cm" },
  { name: "Linen Viscose Blend B-202", category: "linen-blends",
    image: "images/linen-blends-2.jpg",
    composition: "50% Linen / 50% Viscose", weight: "190 GSM", width: "145 cm" },
  { name: "Linen Cotton Blend B-203", category: "linen-blends",
    image: "images/linen-blends-3.jpg",
    composition: "30% Linen / 70% Cotton", weight: "150 GSM", width: "148 cm" },
  { name: "Linen Blends B-204", category: "linen-blends",
    image: "images/linen-blends-4.jpg",
    composition: "45% Linen / 55% Viscose", weight: "200 GSM", width: "145 cm" },

  // ---------- Home Textile ----------
  { name: "Linen Curtain Fabric C-301", category: "home-textile",
    image: "images/home-textile-1.jpg",
    composition: "100% Linen", weight: "260 GSM", width: "280 cm" },
  { name: "Linen Tablecloth Fabric C-302", category: "home-textile",
    image: "images/home-textile-2.jpg",
    composition: "100% Linen", weight: "240 GSM", width: "150 cm" },
  { name: "Linen Bedding Fabric C-303", category: "home-textile",
    image: "images/home-textile-3.jpg",
    composition: "Linen / Cotton", weight: "180 GSM", width: "250 cm" },
  { name: "Home Textile Fabric C-304", category: "home-textile",
    image: "images/home-textile-4.jpg",
    composition: "100% Linen", weight: "300 GSM", width: "140 cm" },
];
