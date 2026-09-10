const products = [
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
 }
]

const allTags = products.map(product => product.tags);

// console.log(allTags);


const findProductByTags = (products, tag) => {
  return products.find(product => product.tags.includes(tag));
}

// console.log(findProductByTags(products, "mobile"));

const reviewCount = products.map(product =>({
    id: product.id,
    title: product.title,
    reviewCount: product.reviews.length
})
);

//console.log(reviewCount);

const fiveStar = products.map(product => product.reviews.filter(
    review => review.rating === 5));

// console.log(fiveStar);  

