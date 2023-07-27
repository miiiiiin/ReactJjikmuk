
import './App.css';
import MyHeader from './MyHeader' // 컴포넌트 사용 위해 모듈 불러오기
import MyFooter from './MyFooter'
import Counter from './Counter'
import Container from './Container';

// react.fragment로 최상위 태그 대체 가능
import React from 'react';

function App() {

  let name = "민송경"

  // css에서는 _였는데 여기서는 카멜케이스로
  const style = {
    App : {
       backgroundColor: 'black'
    },
    h2: {
      color: "red"
    },
    bold_text: {
      color: "green"
    }
  }

  const func = () => {
    return 'func';
  };

  // 객체를 펼쳐서 전달하는 스프레드 연산자를 통해 전달 가능 {... counterProps}
  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    // initialValue:5,
  }

  return (
    // <React.Fragment>
    // <div className="App">
    // <div style={style.App}>
    <Container>
    <div>
      <MyHeader/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={style.h2}>
          Edit <code>src/App.js</code> and save to reload. {func()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <b style={style.bold_text} b id="bold_text">{number}는: {number % 2 === 0 ? "짝수" : "홀수"} </b> */}
      </header>
      <Counter {... counterProps}/>
      <MyFooter/>
     </div>
     </Container>
    // <React.Fragment/>
  );

  // 자식 컴포넌트인 Counter 컴포넌트에 initalValue라는 이름을 붙여 5라는 값을 전달
  // 부모 컴포넌트의 App 컴포넌트에서 자식 컴포넌트인 Counter 컴포넌트에게 어떤 값을 이름 붙여 전달하는 방식
  // Props
}

export default App;
