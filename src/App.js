import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

function App() {
  // 박스의 색을 배열에 담습니다.
  const boxList = ["red", "green", "blue"];

  // 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default:
        return "검정 박스";
    }
  };

  return (
    <StContainer>
      {/* map을 이용해서 StBox를 반복하여 화면에 그립니다. */}
      {/* box에는 red, green, blue가 순차적으로 하나씩 전달되어서 borderColor={box}에 값이 하나씩 들어가고, 그것들을 StBox컴포넌트에 props로서 전달을 해준다
      그리고 getBoxName(box)라는 곳에도 red, green, blue가 하나씩 전달 되기에 switch문을 통해서 해당 case의 return값으로 화면에 출력되는 것임. */}
      {boxList.map((box) => (
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
    </StContainer>
  );
}

export default App;
