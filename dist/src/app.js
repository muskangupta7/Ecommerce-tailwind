document.addEventListener("alpine:init", () => {
  Alpine.store("header", {
    cartItemsObject: Alpine.$persist({}),
    watchingItems: Alpine.$persist([]),
    get watchlistItems() {
      return this.watchingItems.length;
    },
    get cartItems() {
      return Object.values(this.cartItemsObject).reduce(
        (accum, next) => accum + parseInt(next.quantity),
        0
      );
    },
  })})