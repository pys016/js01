import { useEffect, useState } from "react";
const Eff = () => {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState("");
  const handler = (e) => setInputs(e.target.value);
  // 렌더링 전
  console.log("렌더링 전 :컴포넌트 장착 준비");
  useEffect(() => {
    //렌더링 후
    console.log("렌더링 후 : 컴포넌트 장착 완료");
    if (count) alert("짜증나네 또억까하네?");
    // 언마운트 시
    return () => console.log("클린업 : 컴포넌트가 언마운트.");
  }, [count]);

  return (
    <>
      <h1>7. 렌더링 살펴보기</h1>
      <div>
        <p>Count :{count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
      <div>
        <input type="text" onChange={handler} />
        <h3>결과 :{inputs} </h3>
      </div>
    </>
  );
};
export default Eff;
