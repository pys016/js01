import "./App.css";

function App() {
  const text1 = "안녕 ㅡㅡ";

  return (
    <>
      <div class="title">
        <h1>처음 리액트를 정식으로 시작합니다.</h1>
        <button onClick={() => alert(text1)}> 처음인 버튼</button>
        <hr />
      </div>

      <div className="board_wrap">
        <table className="board_table">
          <caption className="board_title">
            <h1>⭐⭐⭐⭐⭐게 시 판⭐⭐⭐⭐⭐</h1>
          </caption>
          <thead className="header">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>1</td>
              <td>차도녀 되는법</td>
              <td>엘사</td>
              <td>2024-07-22</td>
              <td>314159</td>
            </tr>
            <tr className="row">
              <td>2</td>
              <td>눈사람 만드는법</td>
              <td>안나</td>
              <td>2024-07-30</td>
              <td>1004</td>
            </tr>
            <tr className="row">
              <td>3</td>
              <td>미녀가 되는법</td>
              <td>미녀</td>
              <td>2024-08-02</td>
              <td>12354</td>
            </tr>
            <tr className="row">
              <td>4</td>
              <td>야수의 헬창교실</td>
              <td>야수</td>
              <td>2024-08-04</td>
              <td>103254</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn-write"> 글쓰기</button>
    </>
  );
}

export default App;
