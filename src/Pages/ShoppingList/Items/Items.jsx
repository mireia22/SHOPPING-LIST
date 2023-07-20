import React from "react";
import { AppButton } from "../ShoppingList-styles";
import { ItemsWrp, ItemData, ItemWrp, ImgWrp } from "./Item-styles";
import Counter from "../../../components/Counter/Counter";

const Items = ({ shopList, dispatch, deleteItem }) => {
  const crossItem = (id) => {
    dispatch({
      type: "ITEM_SHOPPED",
      payload: { id },
    });
  };

  const clearList = () => {
    dispatch({
      type: "CLEAR_LIST",
    });
  };

  const setItemAmount = (id, newAmount) => {
    dispatch({
      type: "SET_AMOUNT",
      payload: { id, amount: newAmount },
    });
  };

  return (
    <ItemsWrp>
      <h2>Items:</h2>

      <ul>
        {shopList.map(({ item, isShopped, id, amount }) => {
          const style = isShopped
            ? {
                textDecoration: "line-through",
              }
            : { textDecoration: "inherit" };
          return (
            <ItemWrp key={id}>
              <p style={style} onClick={() => crossItem(id)}>
                {item.toUpperCase()}{" "}
              </p>
              <ItemData>
                <Counter
                  amount={amount}
                  setAmount={(newAmount) => setItemAmount(id, newAmount)}
                  buttonStyle={{
                    width: "1.2rem",
                    height: "1.2rem",
                  }}
                />

                <ImgWrp>
                  <img
                    onClick={() => deleteItem(id)}
                    src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                  />
                </ImgWrp>
              </ItemData>
            </ItemWrp>
          );
        })}
      </ul>
      {shopList.length && (
        <>
          <AppButton
            style={{
              width: "50%",
              margin: " 0 auto ",
              background: "var(--primary)",
              color: "white",
            }}
            onClick={clearList}
          >
            Clear list
          </AppButton>
          <AppButton
            style={{
              width: "50%",
              margin: " 0 auto ",
              background: "var(--secondary)",
              color: "white",
            }}
            // onClick={saveList}
          >
            Save List
          </AppButton>
        </>
      )}
    </ItemsWrp>
  );
};

export default Items;
