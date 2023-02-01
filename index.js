const products = document.querySelector(".containerResults")

const productsCart = document.querySelector(".cartContainer")

const trendingProducts = document.querySelector(".cardTrending")

const latestProducts = document.querySelector(".latestCards")

const totalPrice = document.querySelector(".total")

const categories = document.querySelector(".categories")

const categoriesList = document.querySelector(".category")

const titleFilteredBy = document.querySelector(".filterBy")

const btnBuy = document.querySelector(".btnBuy")

const cartBtn = document.querySelector(".cart__bubble")

const cartBubble = document.querySelector(".cartBubbleNumberTotal")

const cartMenu = document.querySelector(".cart")

const navBtn = document.querySelector(".menuLabel")

const navMenu = document.querySelector(".navList")

const successModal = document.querySelector(".addModal")

const deleteBtn = document.querySelector(".btnDelete")

const divider = document.querySelector(".dividerCartContainer")

const cartTotal = document.querySelector(".cartTotal")

const containerImagesSlider = document.querySelector("#landing")

const heroTitle = document.querySelector(".hero__title")

const overview = document.querySelector(".hero__overview")

const header = document.querySelector(".header")

let sliderIndex = 0;

let sliderIndexTrending = 0;

const trendingPrevBtn = document.querySelector(".trendingPrevBtn")

const trendingNextBtn = document.querySelector(".trendingNextBtn")

let sliderIndexLatest = 0;

containerImagesSlider.style.backgroundImage = `url(../assets/silenthill2vs.jpg)`;
heroTitle.innerHTML = "Silent Hill 2";
overview.innerHTML = `“En mis sueños más inquietos, veo esa ciudad. Silent Hill. Prometiste volver a llevarme
allí algún día. Pero nunca lo hiciste. Y ahora estoy aquí sola… En nuestro "lugar
especial" esperándote...”.`;

let cart = JSON.parse(localStorage.getItem("cart")) || []

const saveCart = (cartList) => localStorage.setItem("cart", JSON.stringify(cartList))


const showPrevTrendingCard = () => {
  sliderIndexTrending--;
  if (currentCard < 0) {
    currentCard = cards.length - 1;
  }
}

const changeBackgroundImage = () => {
  containerImagesSlider.style.backgroundImage = `url(${imagesBackgroundArray[sliderIndex]})`
  heroTitle.innerHTML = `${titleArray[sliderIndex]}`
  overview.innerHTML = `${overviewArray[sliderIndex]}`
  sliderIndex = (sliderIndex + 1) % imagesBackgroundArray.length
}

const renderProduct = (product) => {
  const { name, price, olderPrice, image, id } = product
  return `
    <div class="cardTrending__container">
      <div class="container__zoom">
        <img src="${image}" alt="${name}" />
      </div>
      <div class="container__header">
        <h3>${name}</h3>
        <button
          class="header__icon"
          data-id=${id} 
          data-name="${name}"
          data-price=${price} 
          data-image=${image}
        >
        <i class="fa-solid fa-heart container__icon"></i>
        </button>
      </div>
      <div class="container__footer">
        <h3>$${price}</h3>
        ${olderPrice ? `<h3>$${olderPrice}</h3>` : ""}
      </div>
    </div>
  `
}

const renderFilterProducts = (category) => {
  const productsFiltered = gamesData.filter((product) => product.category === category)
  products.innerHTML = productsFiltered.map(renderProduct).join("")
}

const renderTrendingProducts = () => {
  trendingProducts.innerHTML = trendingProductsArray.map(renderProduct).join("")
}

const renderLatestProduct = () => {
  latestProducts.innerHTML = latestProductsArray.map(renderProduct).join("")
}

const renderProducts = (category = undefined) => {
  if (!category) return
  renderFilterProducts(category)
}

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) {
    return;
  }
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    titleFilteredBy.innerHTML = `Juegos filtrados por <span>${e.target.dataset.category}</span>`;
    renderProducts(e.target.dataset.category);
  }
};

const toggleMenu = () => {
  navMenu.classList.toggle("openMenu");
  if (cartMenu.classList.contains("openCart")) {
    cartMenu.classList.remove("openCart");
    return;
  }
};

const toggleCart = () => {
  cartMenu.classList.toggle("openCart");
  if (navMenu.classList.contains("openMenu")) {
    navMenu.classList.remove("openMenu");
    return;
  }
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar__item")) {
    return;
  }
  navMenu.classList.remove("openMenu");
};

const closeOnScroll = () => {
  if (
    !navMenu.classList.contains("openMenu") &&
    !cartMenu.classList.contains("openCart")
  ) {
    return;
  }
  navMenu.classList.remove("openMenu");
  // cartMenu.classList.remove("openCart");
};

const renderCartProduct = (cartProduct) => {
  const { price, id, name, image, quantity } = cartProduct
  return `
    <div class="cartContainer__product">
      <img src="${image}" alt="${name}"/>
      <div class="cartContainer__body">
        <div class="cartContainer__header">
          <h3>${name}</h3>
          <p>$${price}</p>
        </div>
        <div class="cartContainer__btn">
          <button class="quantityHandlerDown" data-id="${id}">-</button>
          <span class="quantityItem">${quantity}</span>
          <button class="quantityHandlerUp" data-id="${id}">+</button>
        </div>
      </div>
    </div>
  `
}

const renderCarts = () => {
  if (!cart.length) {
    productsCart.innerHTML = "<p>Ey! Todavia no hay nada en tu carrito</p>"
    return
  }
  productsCart.innerHTML = cart.map(renderCartProduct).join("")
}

const getCartTotal = () => {
  return cart.reduce((acc, { price, quantity }) => acc + Number(price) * quantity, 0)
}

const renderCartTotal = () => {
  return totalPrice.innerHTML = `$${getCartTotal().toFixed(2)}`
}

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, { quantity }) => acc + quantity, 0)
}

const disabledBtn = (btn) => {
  if (!cart.length) {
    divider.classList.add("disabledBtns")
    btn.classList.add("disabledBtns")
    cartTotal.classList.add("disabledBtns")
  } else {
    divider.classList.remove("disabledBtns")
    btn.classList.remove("disabledBtns")
    cartTotal.classList.remove("disabledBtns")
  }
}

const checkCartState = () => {
  saveCart(cart)
  renderCartBubble()
  renderCarts()
  renderCartTotal()
  disabledBtn(btnBuy)
  disabledBtn(deleteBtn)
}

const showSuccessModal = (message) => {
  successModal.classList.add("showSuccessModal");
  successModal.innerHTML = message;
  setTimeout(() => {
    successModal.classList.remove("showSuccessModal")
    successModal.classList.add("hideSuccessModal")
  }, 2000)
}

const addToCart = (e) => {
  if (!e.target.parentElement.classList.contains("header__icon")) {
    return
  }
  const { id, name, price, image } = e.target.parentElement.dataset
  const productInCart = cart.find((product) => product.id === id)
  if (productInCart) {
    productInCart.quantity++
    showSuccessModal(`<i class="fa-regular fa-circle-check"></i><p>Se agregó una unidad más al carrito</p>`)
  } else {
    cart.push({ id, name, price, image, quantity: 1 })
    showSuccessModal(`<i class="fa-regular fa-circle-check"></i><p>Se agregó <span>${name}</span> al carrito</p>`)
  }
  checkCartState()
}

const changeColorBackground = () => {
  if (document.body.scrollTop || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = "var(--backgroundBox)";
  } else {
    header.style.backgroundColor = "transparent";
  }
}

const handleMinusQuantity = (id) => {
  const product = cart.find((product) => product.id === id)
  if (product.quantity === 1) {
    cart = cart.filter((product) => product.id !== id)
    return
  } else {
    subtractQuantity(product)
  }
  checkCartState()
}

const subtractQuantity = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: Number(cartProduct.quantity) - 1 }
      : cartProduct
  )
}

const handlePlusQuantity = (id) => {
  const product = cart.find((product) => product.id === id)
  sumQuantity(product)
  checkCartState()
}

const sumQuantity = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: Number(cartProduct.quantity) + 1 }
      : cartProduct
  )
}

const handleQuantity = (e) => {
  if (!e.target.classList.contains("quantityHandlerDown") && !e.target.classList.contains("quantityHandlerUp")) {
    return
  }
  const { id } = e.target.dataset
  if (e.target.classList.contains("quantityHandlerDown")) {
    handleMinusQuantity(id)
  } else {
    handlePlusQuantity(id)
  }
  checkCartState()
}

const init = () => {
  setInterval(changeBackgroundImage, 6000);
  renderProducts();
  renderCartBubble();
  renderTrendingProducts();
  renderLatestProduct();
  categories.addEventListener("click", applyFilter);
  navBtn.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", closeOnClick);
  cartBtn.addEventListener("click", toggleCart);
  window.addEventListener("scroll", closeOnScroll);
  document.addEventListener("DOMContentLoaded", renderCarts);
  document.addEventListener("DOMContentLoaded", renderCartTotal);
  products.addEventListener("click", addToCart);
  trendingProducts.addEventListener("click", addToCart);
  latestProducts.addEventListener("click", addToCart)
  disabledBtn(btnBuy);
  disabledBtn(deleteBtn);
  renderCartTotal();
  window.addEventListener("scroll", changeColorBackground)
  trendingPrevBtn.addEventListener("click", showPrevTrendingCard)
  productsCart.addEventListener("click", handleQuantity)
}

init()
