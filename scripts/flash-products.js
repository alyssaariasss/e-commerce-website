const products = [
  {
    imgSrc: "./img/flash-sale-product1.png",
    discount: "-40%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "$120",
    prevPrice: "$160",
    stars: 5,
    totalRatings: 88,
  },

  {
    imgSrc: "./img/flash-sale-product2.png",
    discount: "35%",
    title: "AK-900 Wired Keyboard",
    currentPrice: "$960",
    prevPrice: "$1160",
    stars: 4,
    totalRatings: 75,
  },

  {
    imgSrc: "./img/flash-sale-product3.png",
    discount: "-30%",
    title: "IPS LCD Gaming Monitor",
    currentPrice: "$370",
    prevPrice: "$400",
    stars: 5,
    totalRatings: 99,
  },

  {
    imgSrc: "./img/flash-sale-product4.png",
    discount: "-25%",
    title: "S-Series Comfort Chair ",
    currentPrice: "$375",
    prevPrice: "$400",
    stars: 4,
    totalRatings: 99,
  },

  {
    imgSrc: "./img/flash-sale-product3.png",
    discount: "-30%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: "$190",
    prevPrice: "$230",
    stars: 4,
    totalRatings: 75,
  },

  {
    imgSrc: "./img/flash-sale-product2.png",
    discount: "-50%",
    title: "TIBVAH AX-F24 Gamepad",
    currentPrice: "$160",
    prevPrice: "$200",
    stars: 3,
    totalRatings: 67,
  },
];

let currentProductIndex = 0;

const flashProducts = document.getElementById("flashProducts");

function displayProducts() {
  // Clear the existing content
  flashProducts.innerHTML = "";

  // Create and append product cards
  for (const product of products) {
    const newProductCard = document.createElement("div");
    newProductCard.className = "product-card";

    newProductCard.innerHTML = createProductCardHTML(product);

    flashProducts.appendChild(newProductCard);
  }

  // Duplicate the product cards for continuous display
  flashProducts.innerHTML += flashProducts.innerHTML;
}

function createProductCardHTML(product) {
  return `
    <div class="product-card-body">
      <div class="product-img">
        <img src="${product.imgSrc}" alt="Flash Sale Product" />
      </div>

      <div class="product-overlays">
        <div class="product-tag">
          <p>${product.discount}</p>
        </div>

        <div class="product-buttons">
          <div class="bg-btn">
            <i class="fa-regular fa-heart"></i>
          </div>

          <div class="bg-btn">
            <i class="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>

      <div class="add-cart">
        <p>Add to Cart</p>
      </div>
    </div>

    <div class="product-card-text">
      <div class="product-title">
        <p>${product.title}</p>
      </div>

      <div class="product-price">
        <p class="current-price">${product.currentPrice}</p>
        <p class="prev-price"><strike>${product.prevPrice}</strike></p>
      </div>

      <div class="product-ratings">
        <div class="stars">
          ${generateStars(product.stars)}
        </div>

        <div class="total-rating">
          <p>${product.totalRatings}</p>
        </div>
      </div>
    </div>
  </div>`;
}

function generateStars(starCount) {
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    const starClass = i < starCount ? "fa-solid fa-star" : "fa-regular fa-star";
    starsHTML += `<i class="${starClass}"></i>`;
  }

  return starsHTML;
}

function showPrevProduct() {
  currentProductIndex =
    (currentProductIndex - 1 + products.length) % products.length;
  updateProductVisibility();
}

function showNextProduct() {
  currentProductIndex = (currentProductIndex + 1) % products.length;
  updateProductVisibility();
}

function updateProductVisibility() {
  // Calculate the distance to scroll
  const scrollDistance = currentProductIndex * 270;

  // Scroll the container to show the correct products
  flashProducts.scrollTo({
    top: 0,
    left: scrollDistance,
    behavior: "smooth",
  });
}

// Initial display of all products
displayProducts();

// Update visibility when the window is resized
window.addEventListener("resize", updateProductVisibility);
