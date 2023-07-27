import { useRef, useState } from "react";

// onCreate 함수를 App 컴포넌트로부터 props로 전달받음
// handleSubmit을 통해 저장이 일어났을 때 onCreate를 호출
// 현재 컴포넌트가 가지고 있는 데이터 요소들을 App 컴포넌트의 onCreate 함수 쪽으로 전달해줌
const DiaryEditor = ({ onCreate }) => {

    // react.mutableobject가 저장됨. html 돔 요소를 접근할 수 있는 역할
    // authorInput이라는 레퍼런스 객체를 통해서 input 태그에 접근할 수 있게 됨
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"",
        content:"",
        emotion:1,
    });

    // event 객체를 받도록 함 (input과 textarea의 onChange에 전달됨)
    // 상태변화 이벤트 핸들러도 아래와 같이 합칠 수 있음
    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
            // author와 content의 값을 각각 바꾸면 각각의 값이 지동으로 업데이트됨.
        });
    };

    const handleSubmit = (e) => {
        if (state.author.length < 1) {
            // alert('최소 1글자 이상 입력');
            authorInput.current.focus();
            // Dom 요소를 선택하는 useRef 기능을 통해 생성한 레퍼런스 객체는 현재 객체를
            // current라는 프로퍼티를 통해서 authorInput.current는 authorInput 태그가 되고 focus 함수를 이용할 수 있음
            return;
        }

        if (state.content.length < 5) {
            // alert('최소 5글자 이상 입력');
            contentInput.current.focus();
            return;
        }

        // 입력 데이터 전달
        onCreate(state.author, state.content, state.emotion);
        alert('성공');
        // 일기 데이터들은 DiaryEditor의 state에 매핑되어 있기 때문에, 저장이 되면 setState를 통해서
        // 일기 아이템 포맷을 초기화해줌 (폼 초기화)
        setState({
            author: "",
            content: "",
            emotion: 1,
        })
    };


    // author라는 상태의 상태변화를 주도할 setAuthor라는 상태변화 함수
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    // 최상위 태그인 div className을 컴포넌트 이름과 맞춰줌
    // CSS의 클래스를 가지고 스타일링할 때 클래스의 이름과 컴포넌트의 이름을 정확히 일치시켜
    // 좀 더 직관적으로 스타일 코드를 작성하기 위함임. (강사개인의견)
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
            ref={authorInput}
            name="author"
            type="text"
            value={state.author}
            //  onChange={(e) => {
                // setAuthor(e.target.value)
                // 값이 변할 때마다 상태를 그 값으로 업데이트

                // state에 객체가 가지고 있는 author의 값만 현재 입력받은 값으로 바꿔야함
                // setState({
                //     ... state, // author는 author값, content는 content값 (원래의 값을 객체에 할당 가능)
                    // 주의 : 원래 있던 state를 먼저 펼쳐주고 나서, 변경하고자 하는 state의 프로퍼티를 마지막으로 적어주어야함!
                    // author:e.target.value,
                    // content:state.content
                // });
            // }}
            onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
            ref={contentInput}
            name='content'
            value={state.content}
            //  onChange={(e) => {
                // setContent(e.target.value);
                // setState({
                    // author:state.author,
                    // ...state,
                    // content:e.target.value
                // });
            // }}
            onChange={handleChangeState}
            />
        </div>
        <div>
            <select name='emotion'
            value={state.emotion}
            onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>저장</button>
        </div>
    </div>
};

// onChange 이벤트에 등록되는 콜백함수는 이벤트 객체 e라는 것을 매개변수로 전달받음
// onChange는 값이 바뀌었을 때 수행하는 이벤트

export default DiaryEditor;