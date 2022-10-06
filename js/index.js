import overlayFunc from "./overlay.js";

const cartItem = document.querySelector(".cotalog__content");
const searchInput = document.querySelector(".cotalog__search");

export let cart = [];
import renderCartItems from "./renderCartItems.js";
export const filterCart = (itemId) => {
  cart = cart.filter((item) => +item.id !== +itemId);
};

const animCards = () => {
  gsap.from(".cardItem", {
    duration: 0.4,
    opacity: 0,
    y: 30,
    delay: 0.1,
    stagger: 0.3,
  });
};

const response = async () => {
  const result = await fetch(
    "https://632f0797b7314fc02f4e7e68.mockapi.io/goods"
  );
  const data = await result.json();

  const handleAdd = () => {
    const addCartItem = cartItem.querySelectorAll(".addCartItem");
    addCartItem.forEach((cartAdd) => {
      cartAdd.addEventListener("click", () => {
        const itemId =
          cartAdd.parentElement.parentElement.parentElement.dataset.id;
        cart.push(data.find((item) => +item.id === +itemId));
        renderCartItems();
      });
    });

    const deleteCartItem = cartItem.querySelectorAll(".deleteCartItem");
    deleteCartItem.forEach((cartDelete) => {
      cartDelete.addEventListener("click", () => {
        const itemId =
          cartDelete.parentElement.parentElement.parentElement.dataset.id;
        cart = cart.filter((item) => +item.id !== +itemId);
        filterCart(itemId);
        renderCartItems();
      });
    });
    const heart = document.querySelectorAll(".card__heart");
    const box = document.querySelectorAll(".card__box");

    heart.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

    box.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  };
  const renderGoods = (func) => {
    cartItem.innerHTML = "";
    func.forEach((element) => {
      cartItem.innerHTML += `
          <div data-id="${element.id}" class="cardItem">
                              <div class="card__top">
                                  <div class="card__heart">
                                      <img src="./assets/img/unliked.svg" alt="unliked-icon">
                                      <img src="./assets/img/liked.svg" alt="liked-icon">
                                  </div>
                                  <img src="${element.imgURL}" alt="sneaker-img" id="sneaker">
                              </div>
      
                              <h3>${element.name}</h3>
                              <div class="card__bottom">
                                  <div class="price">
                                      Цена:
                                      <span>
                                         ${element.price} руб.
                                      </span>
                                  </div>
                                  <div class="card__box">
                                      <img  class='addCartItem'src="./assets/img/add.svg" alt="add-icon">
                                      <img class='deleteCartItem'src="./assets/img/added.svg" alt="added-icon">
                                  </div>
                              </div>
                          </div>
          `;
    });
    handleAdd();
    animCards();
  };

  renderGoods(data);

  searchInput.addEventListener("keypress", () => {
    cartItem.innerHTML = "";

    const filteredGoods = data.filter((element) =>
      element.name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase().trim())
    );

    if (searchInput.value.trim() === "") {
      renderGoods(data);
    } else {
      renderGoods(filteredGoods);
    }
  });

  renderCartItems();

  return data;
};
response();
overlayFunc();
