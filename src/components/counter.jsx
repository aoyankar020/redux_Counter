import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Slice";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-2 ">
          <button
            className="bg-amber-800 text-white p-3 cursor-pointer rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <span>{count}</span>
          <button
            className="bg-sky-600 text-white p-3 cursor-pointer rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
