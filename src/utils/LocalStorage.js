export const setSignIN = (obj) => {
  console.log(obj);
  localStorage.setItem("userDetails", JSON.stringify(obj));
};

export const getSingIN = () => {
  const value = JSON.parse(localStorage.getItem("userDetails"));
  return value;
};

export const addToCart = (id) => {
  if (!localStorage.getItem("cart")) {
    const cart = {};
    cart[id] = 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  } else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[id]) {
      cart[id]++;
    } else {
      cart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
};
