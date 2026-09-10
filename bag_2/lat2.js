const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Monitor", price: 300, category: "monitors", stock: 7 },
  { id: 5, title: "Keyboard", price: 50, category: "accessories", stock: 20 },
  { id: 6, title: "Wireless Mouse", price: 25, category: "accessories", stock: 35 },
  { id: 7, title: "Gaming Laptop", price: 1800, category: "laptops", stock: 4 },
  { id: 8, title: "Tablet Pro", price: 650, category: "tablets", stock: 10 },
  { id: 9, title: "Smartwatch", price: 200, category: "wearables", stock: 12 },
  { id: 10, title: "External SSD 1TB", price: 110, category: "storage", stock: 18 },
  { id: 11, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 14 },
  { id: 12, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 9 },
  { id: 13, title: "4K Monitor 27 inch", price: 400, category: "monitors", stock: 6 },
  { id: 14, title: "Webcam HD", price: 60, category: "accessories", stock: 22 },
  { id: 15, title: "Noise-Cancelling Earbuds", price: 150, category: "audio", stock: 11 },
  { id: 16, title: "Budget Smartphone", price: 300, category: "phones", stock: 25 },
  { id: 17, title: "USB-C Hub Multiport", price: 40, category: "accessories", stock: 30 },
  { id: 18, title: "Laptop Stand", price: 35, category: "accessories", stock: 40 },
  { id: 19, title: "Curved Gaming Monitor", price: 500, category: "monitors", stock: 5 },
  { id: 20, title: "Wi-Fi 6 Router", price: 130, category: "networking", stock: 8 },
  { id: 21, title: "Ultrabook Thin & Light", price: 1400, category: "laptops", stock: 6 },
  { id: 22, title: "Fitness Tracker Band", price: 45, category: "wearables", stock: 28 },
  { id: 23, title: "MicroSD Card 256GB", price: 30, category: "storage", stock: 50 },
  { id: 24, title: "Studio Microphone", price: 120, category: "audio", stock: 7 },
  { id: 25, title: "Drawing Tablet", price: 250, category: "tablets", stock: 8 },
  { id: 26, title: "Portable Power Bank 20k", price: 55, category: "accessories", stock: 19 },
  { id: 27, title: "Desk Mat XXL", price: 20, category: "accessories", stock: 45 },
  { id: 28, title: "Flagship Smartphone", price: 1100, category: "phones", stock: 7 },
  { id: 29, title: "Soundbar TV", price: 160, category: "audio", stock: 6 },
  { id: 30, title: "NAS Storage Bay", price: 350, category: "storage", stock: 3 }
];


function findProductById(products, id) { 
  return products.find(product => product.id === id);
}
//  console.log(findProductById(products, 10));

 function lowStockProducts(products) {
  return products.filter(product => product.stock < 10);
 }
 
//  const lowStock = lowStockProducts(products);
//  console.log(lowStock);

function updateStock (products, id, newStock) {
  return products.map(p => (
    p.id === id ? {...p, stock: newStock} : p
  )
  );
}

const updatedProducts = updateStock(products, 3, 20);
console.log(updatedProducts[2]); 
