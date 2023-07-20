import { v4 as uuidv4 } from "uuid";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM": {
      const { item, amount } = payload;
      const newItem = {
        id: uuidv4(),
        item,
        isShopped: false,
        amount,
      };
      return [...state, newItem];
    }
    case "ITEM_SHOPPED": {
      const { id } = payload;
      return state.map((item) =>
        item.id === id ? { ...item, isShopped: !item.isShopped } : item
      );
    }
    case "DELETE_ITEM": {
      const { id } = payload;
      return state.filter((item) => item.id !== id);
    }
    case "SET_AMOUNT": {
      const { id, amount } = payload;
      return state.map((item) => (item.id === id ? { ...item, amount } : item));
    }

    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
};
