const productsDetail = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  },
  {
    id: 3,
    title: "Gaming Laptop Pro",
    price: 1850,
    rating: 4.7,
    stock: 6,
    category: "laptops",
    tags: ["computer", "gaming", "performance"],
    dimensions: { width: 36, height: 2.5, depth: 26 },
    reviews: [
      { user: "F", rating: 5, comment: "Super smooth for AAA games" },
      { user: "G", rating: 4, comment: "Runs a bit hot under full load" }
    ]
  },
  {
    id: 4,
    title: "Ultrabook Air",
    price: 1100,
    rating: 4.6,
    stock: 12,
    category: "laptops",
    tags: ["computer", "ultrabook", "travel"],
    dimensions: { width: 28, height: 1.2, depth: 19 },
    reviews: [
      { user: "H", rating: 5, comment: "Incredibly light and long battery" },
      { user: "I", rating: 4, comment: "Keyboard travel is a bit shallow" }
    ]
  },
  {
    id: 5,
    title: "Business Workstation 15",
    price: 1450,
    rating: 4.3,
    stock: 8,
    category: "laptops",
    tags: ["computer", "office", "workstation"],
    dimensions: { width: 35, height: 1.9, depth: 24 },
    reviews: [
      { user: "J", rating: 4, comment: "Solid build and great security features" },
      { user: "K", rating: 5, comment: "Reliable machine for daily multitasking" }
    ]
  },
  {
    id: 6,
    title: "Convertible 2-in-1 Touch",
    price: 950,
    rating: 4.1,
    stock: 7,
    category: "laptops",
    tags: ["computer", "touchscreen", "student"],
    dimensions: { width: 31, height: 1.6, depth: 21 },
    reviews: [
      { user: "L", rating: 4, comment: "Stylus support is great for taking notes" },
      { user: "M", rating: 4, comment: "Good display colors" }
    ]
  },
  {
    id: 7,
    title: "Flagship Ultra Phone",
    price: 1250,
    rating: 4.8,
    stock: 9,
    category: "phones",
    tags: ["mobile", "flagship", "camera"],
    dimensions: { width: 7.5, height: 0.9, depth: 16.2 },
    reviews: [
      { user: "N", rating: 5, comment: "Best camera zoom on any phone" },
      { user: "O", rating: 5, comment: "Display is stunning and very bright" }
    ]
  },
  {
    id: 8,
    title: "Budget Daily Phone",
    price: 320,
    rating: 4.0,
    stock: 25,
    category: "phones",
    tags: ["mobile", "budget", "battery"],
    dimensions: { width: 7.6, height: 0.9, depth: 16.4 },
    reviews: [
      { user: "P", rating: 4, comment: "Huge battery life, easily lasts 2 days" },
      { user: "Q", rating: 4, comment: "Decent performance for social media" }
    ]
  },
  {
    id: 9,
    title: "Gaming Phone Max",
    price: 900,
    rating: 4.4,
    stock: 11,
    category: "phones",
    tags: ["mobile", "gaming", "performance"],
    dimensions: { width: 7.7, height: 1.0, depth: 17 },
    reviews: [
      { user: "R", rating: 5, comment: "Triggers and cooling fan are top-notch" },
      { user: "S", rating: 4, comment: "A bit heavy in hand" }
    ]
  },
  {
    id: 10,
    title: "Compact Flip Phone",
    price: 1050,
    rating: 4.3,
    stock: 5,
    category: "phones",
    tags: ["mobile", "foldable", "stylish"],
    dimensions: { width: 7.2, height: 1.5, depth: 8.5 },
    reviews: [
      { user: "T", rating: 5, comment: "Fits perfectly in any small pocket" },
      { user: "U", rating: 3, comment: "Crease on the screen is slightly noticeable" }
    ]
  }
];


function groupByCategory(productsDetail) {
  return productsDetail.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(product);
    return groups;
  }, {});
}

const groupedProducts = groupByCategory(productsDetail);
// console.log(groupedProducts);

function showCategorySummary(groupedData) {
  const summary = Object.keys(groupedData).map(category => {
    return {
      "Kategori": category,
      "Jumlah Produk": groupedData[category].length
    };
  });
  console.table(summary);
  return summary;
}
showCategorySummary(groupedProducts);
