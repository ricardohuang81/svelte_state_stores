import { writable } from 'svelte/store';

const cart = writable([
  {
    id: "p3",
    title: "Test",
    price: 9.99
  },
  {
    id: "p4",
    title: "Test",
    price: 9.99
  }
]);

const customCart = {
  subscribe: cart.subscribe,
  addItem: item  => {
    cart.update(items => {
      if (items.find(itm => itm.id === items.id)) {
        return [...items];
      }
      return [ ...items, item ];
    })
  },
  removeItem: (id) => {
    cart.update(items => {
      return items.filter(itm => itm.id !== id);
    });
  }
};

export default customCart;