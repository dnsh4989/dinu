const Utils = {
  setItemToLocalStorage(item) {
    localStorage.setItem(item);
  },

  getItemFromLocalStorage(item) {
    localStorage.getItem(item);
  },

  setBlockUi(isLoading) {
    document.getElementById("blockUi").style.display = isLoading
      ? "flex"
      : "none";
  },
};

module.exports = Utils;
