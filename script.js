let card = document.querySelector('.card');
let search = document.getElementById('search');
let allProducts = [];

fetch('https://fakestoreapi.com/products?limit=20')
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
  });

function renderProducts(products) {
  card.innerHTML = "";
  products.forEach(e => {
    let div = document.createElement('div');
    div.classList.add('product');

    div.innerHTML = `
      <img src="${e.image}" alt="${e.title}" width="150">
      <p class="title">${e.title}</p>
      <h3 class="category">${e.category}</h3>
      <p>Price: $${e.price} / Rating: ${e.rating.rate}</p>
    `;
    card.appendChild(div);
  });
}

search.addEventListener('input', (e) => {
  let text = e.target.value.toLowerCase(); // ✅ to‘g‘rilandi
  let filtered = allProducts.filter(item =>
    item.title.toLowerCase().includes(text)
  );
  renderProducts(filtered);
});
