import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [advice, setadvice] = useState(null);

  const requestAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data;
    console.log(advice.slip);
    setadvice(advice);
  };

  useEffect(() => {
    requestAdvice();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main>
        <AdviceId>ADVICE #{advice ? advice.slip.id : null}</AdviceId>
        <Advice>{advice ? advice.slip.advice : null}</Advice>
        <Divider src="./pattern-divider-mobile.svg" />
        <DividerDesktop src="./pattern-divider-desktop.svg" />
        <DiceBox>
          <Dice onClick={() => requestAdvice()} src="./icon-dice.svg" />
        </DiceBox>
      </Main>
    </>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: var(--DarkGrayishBlue);
  padding: 48px 24px 0 24px;
  //position: relative;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;
  @media (min-width: 1440px) {
    width: 540px;
  }
`;

const AdviceId = styled.h1`
  font-weight: 800;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 3.45714px;
  color: var(--NeonGreen);
  @media (min-width: 1440px) {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 4.08571px;
  }
`;
const Advice = styled.p`
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.257143px;
  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.3px;
  }
`;

const Divider = styled.img`
  width: 100%;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const DividerDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const DiceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--NeonGreen);
  //position: absolute;
  //bottom: -40%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  position: relative;
  bottom: -32px;
  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;

const Dice = styled.img``;
