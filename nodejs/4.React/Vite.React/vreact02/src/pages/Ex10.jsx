import { useState } from "react";
import tableCss from "./Ex10.module.css";
import data from "./Ex10data";
const Table = () => {
  const [ea, setEa] = useState(Array(data.length).fill(0));

  const handleInputChange = (index, event) => {
    const newEa = [...ea];
    newEa[index] = Number(event.target.value);
    setEa(newEa);
  };

  const total = data.reduce(
    (acc, v, i) => acc + ea[i] * v.price + v.delivery_price,
    0
  );

  return (
    <>
      <h1>10. 데이터 임포트 테이블화</h1>
      <div>{JSON.stringify(data)}</div>
      <div className={tableCss["data-box"]}>
        <table>
          <tbody>
            {data.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.product_name}</td>
                  <td>{v.price}</td>
                  <td>{v.category}</td>
                  <td>{v.delivery_price}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={ea[i]}
                      onChange={(event) => handleInputChange(i, event)}
                    />
                  </td>
                  <td>{v.price * ea[i] + v.delivery_price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={"5"}></td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default Table;
