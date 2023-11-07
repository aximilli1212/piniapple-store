import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
        };
    },
    actions: {
        async fetchProducts() {
            this.products = (await import("@/data/products.json")).default;
        },
    },
    // getters
});
