const products = document.querySelector(".containerResults")

const productsCart = document.querySelector(".cartContainer")

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

let cart = JSON.parse(localStorage.getItem("cart")) || []

const saveCart = (cartList) => localStorage.setItem("cart", JSON.stringify(cartList))

const renderProduct = (product) => {
  const { name, price, image, id } = product
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
          data-name=${name} 
          data-price=${price} 
          data-image=${image}
        >
        <i class="fa-solid fa-heart container__icon"></i>
        </button>
      </div>
      <div class="container__footer">
        <h3>$${price}</h3>
      </div>
    </div>
  `
}

const renderFilterProducts = (category) => {
  const productsFiltered = gamesData.filter((product) => product.category === category)
  products.innerHTML = productsFiltered.map(renderProduct).join("")
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
  cartMenu.classList.remove("openCart");
};

const renderCartProduct = (cartProduct) => {
  const { price, id, name, image, quantity } = cartProduct
  return `
    <div>
      <img src="${image}" alt="${name}"/>
      <h3>${name}</h3>
      <p>${price}</p>
      <div>
        <span class="quantityHandlerDown" data-id="${id}">-</span>
        <span class="quantityItem">${quantity}</span>
        <span class="quantityHandlerUp" data-id="${id}">+</span>
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
  totalPrice.innerHTML = `$${getCartTotal().toFixed(2)}`
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

const addToCart = (e) => {
  if (!e.target.parentElement.classList.contains("header__icon")) {
    return
  }
  const { id, name, price, image } = e.target.parentElement.dataset
  const productInCart = cart.find((product) => product.id === id)
  if (productInCart) {
    productInCart.quantity++
  } else {
    cart.push({ id, name, price, image, quantity: 1 })
  }
  checkCartState()
}

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  navBtn.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", closeOnClick);
  cartBtn.addEventListener("click", toggleCart);
  window.addEventListener("scroll", closeOnScroll);
  document.addEventListener("DOMContentLoaded", renderCarts);
  document.addEventListener("DOMContentLoaded", renderCartTotal);
  products.addEventListener("click", addToCart);
  disabledBtn(btnBuy);
  disabledBtn(deleteBtn);
  renderCartTotal();
}

init()
