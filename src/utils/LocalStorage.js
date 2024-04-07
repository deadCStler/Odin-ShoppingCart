export const setSignIN = (obj) => {
  localStorage.setItem("userDetails", JSON.stringify(obj));
};

export const getSingIN = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};

export const setSignOut = () => {
  localStorage.removeItem("userDetails");
};

export const addToCart = (id) => {
  if (!localStorage.getItem("cart")) {
    const cart = {};
    cart[id] = 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[id]) {
      cart[id]++;
    } else {
      cart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const reduceFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[id] && cart[id] > 0) {
    cart[id]--;
    if (cart[id] === 0) {
      delete cart[id];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[id] && cart[id] > 0) {
    delete cart[id];

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || {};
};
