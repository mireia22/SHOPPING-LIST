import { CounterWrp, CounterButton } from "./Counter-styles";

const Counter = ({ amount, setAmount, buttonStyle }) => {
  const incrementCount = () => setAmount(amount + 1);
  const decrementCount = () => setAmount(Math.max(1, amount - 1));

  return (
    <CounterWrp>
      <CounterButton style={buttonStyle} onClick={decrementCount}>
        -
      </CounterButton>
      <p>{amount}</p>
      <CounterButton style={buttonStyle} onClick={incrementCount}>
        +
      </CounterButton>
    </CounterWrp>
  );
};

export default Counter;
