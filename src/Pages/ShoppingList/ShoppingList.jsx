import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../../../Reducer";
import Items from "./Items/Items";
import Counter from "../../components/Counter/Counter";
import { ListWrp, InputsWrp, AppButton } from "./ShoppingList-styles";

const SHOP_LIST_LOCALSTORAGE_KEY = "shop-list";
const localStorageShopList = localStorage.getItem(SHOP_LIST_LOCALSTORAGE_KEY);

const initialState = localStorageShopList
  ? JSON.parse(localStorageShopList)
  : [];

const ShoppingList = () => {
  const [itemToShop, setItemToShop] = useState("");
  const [amountToShop, setAmount] = useState(1);

  const [shopList, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { id },
    });
  };

  useEffect(() => {
    localStorage.setItem(SHOP_LIST_LOCALSTORAGE_KEY, JSON.stringify(shopList));
  }, [shopList]);

  console.log(shopList);
  const handleItemChange = (e) => setItemToShop(e.target.value);

  const handleClick = () => {
    if (itemToShop && amountToShop) {
      dispatch({
        type: "ADD_ITEM",
        payload: { item: itemToShop, amount: amountToShop },
      });
      setItemToShop("");
      setAmount(1);
    }
  };

  // const savedList = (shopList) => {
  //   return (
  //     <>
  //       <ul>
  //         <li>{shopList.item}</li>
  //       </ul>
  //     </>
  //   );
  // };
  return (
    <ListWrp>
      <p>Add item:</p>
      <InputsWrp>
        <input type="text" value={itemToShop} onChange={handleItemChange} />
        <Counter amount={amountToShop} setAmount={setAmount} />
      </InputsWrp>
      <AppButton onClick={handleClick}>Add</AppButton>

      <Items
        item={itemToShop}
        amount={amountToShop}
        shopList={shopList}
        dispatch={dispatch}
        deleteItem={deleteItem}
        setAmount={setAmount}
      />
    </ListWrp>
  );
};

export default ShoppingList;
