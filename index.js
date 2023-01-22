const products = document.querySelector(".trandingGames__container")

const productsCart = document.querySelector(".cart__container")

const totalPrice = document.querySelector(".total")

const categories = document.querySelector(".popularCategories__card")

const categoriesList = document.querySelector(".popularCategories__card__container")

const btnBuy = document.querySelector(".container__footer")

const cartBubble = document.querySelector(".cart__bubble")

const cartBtn = document.querySelector(".cart__label")

const navBtn = document.querySelector(".menuLabel")

const cartMenu = document.querySelector(".cart")

const navMenu = document.querySelector(".navbarList")

const overlay = document.querySelector(".overlay")

const successModal = document.querySelector(".addModal")

const deleteBtn = document.querySelector(".deleteBtn")

let cart = JSON.parse(localStorage.getItem("cart")) || []

const saveCart = (cartList) => localStorage.setItem("cart", JSON.stringify(cartList))

const renderProduct = (product) => {
  const { name, price, image, id } = product
  return
  `
  <div class="cardTrending__container">
    <div class="container__zoom">
      <img src="${image}" alt="${name}" />
    </div>
    <div class="container__header">
      <h3>${name}</h3>
      <button class="header__icon" data-id=${id} data-name=${name} data-price=${price} data-image=${image}>
      <i class="fa-solid fa-heart container__icon"></i>
      </button>
    </div>
    <div class="container__footer">
      <h3>$${price}</h3>
    </div>
  </div>
  `
}

const filterProducts = (category) => {
  return gamesData.filter((product) => product.category === category)
}

const renderProducts = (category = undefined) => {
  if (!category) {

  }
}

const init = () => {

}

init()