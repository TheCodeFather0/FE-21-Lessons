const Decrement = ({ reqem, azalt }) => {
  return <button onClick={() => azalt(reqem - 1)}>Decrement</button>;
};

export default Decrement;
