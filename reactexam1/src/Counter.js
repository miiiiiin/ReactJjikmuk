import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

// Counter 컴포넌트에서는 부모에서 내려준 프랍스를 매개변수로 받아와 사용할 수 있음
// 받는 쪽에서 객체를 비구조화 할당을 통해 받을 수도 있다. {initialValue}
const Counter = ({initialValue}) => {

// props 매개변수가 객체 형식으로 출력됨(몇 개를 보내든 객체 안에 담겨옴)
// console.log(props); 

// 0에서 출발, 1씩 증가, 감소하는 count 상태
    const [count, setCount] = useState(initialValue);
    // useState 메소드는 배열을 반환하고 배열의 비구조 할당을
    // 통해서 0번째 인덱스 카운트, 1번째 인덱스를 setCount를 상수로 받아온 것을 확인할 수 있음
    // 0번째 인덱스는 상태의 값으로 사용, setCount는 count라는 상태를 변화시키는 상태변화 함수로 사용
    // useState를 호출하면서 넘겨주는 인자 0은 count라는 상태를 만드는 데에 초기값으로 사용됨

    const onIncrease = () => {
        setCount(count+1);
    };

    const onDecrease = () => {
        setCount(count-1);
    };

    // 여러 개의 state를 하나의 컴포넌트가 가져도 전혀 문제 안됨
    // Counter 컴포넌트의 자식인 OddEvenResult는 count를 props로 받아옴
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    )
};

// 부모 컴포넌트에서 initialValue를 내려주지 않더라도 defaultProps에 의해서 Counter 컴포넌트
// 에서 받은 initialValue가 0으로 고정됨
Counter.defaultProps = {
    initialValue:0
}

export default Counter;