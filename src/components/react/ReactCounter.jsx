// import useStore from "../../store.js";

// const ReactCounter = () => {
//   console.log(useStore);

//   const count = useStore.getState().count;

//   const increment = useStore.getState().inc;

//   const decrement = useStore.getState().dec;

//   const reset = useStore.getState().reset;

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default ReactCounter;

// const ReactCounter = () => {
//   return (
//     <div>
//       <h1>Counter: 0</h1>
//       <button>+1</button>
//       <button>-1</button>
//       <button>Reset</button>
//     </div>
//   );
// };

// export default ReactCounter;

import { useStore } from "@nanostores/react";
import { count, inc, dec, reset } from "../../nanoStore";

const ReactCounter = () => {
  const countValue = useStore(count);
  // const increment = useStore(inc);
  // const decrement = useStore(dec);
  // const resetCount = useStore(reset);

  return (
    <div>
      <h1> React Counter: {countValue}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ReactCounter;
