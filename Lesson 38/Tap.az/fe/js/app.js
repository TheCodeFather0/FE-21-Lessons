const url = "http://localhost:3000/products";
const productContainer = document.querySelector("#productContainer");

axios.get(url).then(function ({ data }) {
  data.forEach(({ image, description, price, currency }) => {
    productContainer.innerHTML += `<div class="col-3 my-1">
          <div class='border p-2'><img class="productImage" src="${image}"/>
          <h3>${description}</h3>
          <h4>${price} ${currency}</h4></div>
        </div>`;
  });
});
