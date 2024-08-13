import { useState } from "react";
const Sel = () => {
  const [sel, setSel] = useState(0); //상태 변수를 정의합니다. 초기값은 0입니다.
  const selector = (e) => setSel(e.target.value); // 셀렉트 박스의 값이 변경될 때 상태를 업데이트합니다.
  const city = ["서울", "부산", "광주", "대구", "대전", "제주"];
  const cNum = ["02", "051", "062", "053", "042", "064"];

  return (
    <>
      <h1>2. 셀렉터와 연동</h1>
      <h2>
        <div>{sel}</div>
      </h2>
      <select onChange={selector} value={sel}>
        {/* 셀렉트 박스의 값이 변경될 때 selector 함수를 호출합니다. */}
        {city.map(
          (
            v,
            i // 도시 배열을 순회하여 옵션을 생성합니다
          ) => (
            <option key={i} value={cNum[i]}>
              {/* 각 옵션의 값은 cNum 배열에서 가져옵니다. */}
              {v}
            </option>
          )
        )}
      </select>
      {/* <select onChange={selector}>
        {city.map((v, i) => {
          return (
            <option key={i} value={cNum[i]}>
              {v}
            </option>
          );
        })}
      </select> */}
      <h3>
        <pre>
          {`<select name="" id="">
        <option value="02">서울</option>
        <option value="051">부산</option>
        <option value="062">광주</option>
        <option value="053">대구</option>
        <option value="042">대전</option>
        <option value="064">제주</option></select>`}
        </pre>
      </h3>
    </>
  );
};
export default Sel;
