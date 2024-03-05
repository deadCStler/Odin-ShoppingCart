export const setSignIN = (obj) => {
  console.log(obj);
  localStorage.setItem("userDetails", JSON.stringify(obj));
};

export const getSingIN = () => {
  const value = JSON.parse(localStorage.getItem("userDetails"));
  console.log(value);
};
