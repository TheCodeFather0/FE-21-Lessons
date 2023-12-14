const Increment = ({ reqem, artir }) => {
  return <button onClick={() => artir(reqem + 1)}>increment</button>;
};

export default Increment;
