import { useState } from "react";
const Arrays = () => {
  const [arr, setArr] = useState([]);
  const [indata, setIndata] = useState("");
  const handleInput = (e) => setIndata(e.target.value);
  const handleAdd = (e) => {
    setArr([...arr, indata]);
    setIndata("");
  };
  const handleDel = (e) => setArr(arr.slice(0, -1));
  return (
    <>
      <h1>5. 어레이 실시간 추가</h1>
      <label htmlFor="inin">배열요소 입력:</label>
      <input type="text" id="inin" onChange={handleInput} value={indata} />
      <button onClick={handleAdd} disabled={!indata}>
        추가
      </button>
      <button onClick={handleDel} disabled={!(arr.length > 0)}>
        제거
      </button>
      <div>{arr.length > 0 ? "" : "배열이 비었습니다."}</div>
      <h3>
        {arr.map((v) => (
          <span key={v}> {v} </span>
        ))}
      </h3>
    </>
  );
};
export default Arrays;
