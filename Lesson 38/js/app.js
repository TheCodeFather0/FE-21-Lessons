const url = "https://dummyjson.com/products";
const productContainer = document.querySelector("#productContainer");

axios.get(url).then(function ({ data }) {
  const { products } = data;
  products.forEach(({ brand, title, description, thumbnail }) => {
    productContainer.innerHTML += `<div class="col-3 border">
          <img class="productImage" src="${thumbnail}"/>
          <h3>${brand} - ${title}</h3>
          <p>${description}</p>
        </div>`;
  });
});
