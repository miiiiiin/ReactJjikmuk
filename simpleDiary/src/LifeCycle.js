import React, { useEffect, useState } from "react";

/* useEffect */
// const Lifecycle = () => {

//     // callback 함수 넣고 dependency array
//     useEffect(() => {
//         // 컴포넌트가 마운트된 시점에 콘솔이 수행됨
//         // 진짜 마운트된 시점에만 useeffect의 callback 함수가 실행되는지 확인하기 위해 카운트 증가
//         // 그러나 useEffect에 빈 배열을 전달하게 되면 callback함수는 컴포넌트가 마운트 된 시점에만 작동하기 때문에
//         // 카운트를 증가시켜도 콘솔이 수행되지 않음 
//         console.log("mount!");
//     }, []);

//     // 컴포넌트가 업데이트되는 순간 제어 
//     // 컴포넌트가 업데이트되는 순간: state가 변경될 때, 부모에서 내려받는 props가 바뀌거나 부모 컴포넌트가 리렌더링되면 자기 자신도 리렌더링됨
//     // state를 바꾸는 순간을  useEffect로 제어
//     // dependency array를 전달하지 않으면 됨.

//     useEffect(() => {
//         // count 증가시키면 콘솔 수행됨
//         console.log("update!");
//     });
//     const [count, setCount] = useState(0); //counter에 사용될 state
//     const [text, setText] = useState(""); //input에 사용될 text state


//     /* useEffect의 특별한 기능 */
//     // dependency array의 배열이 변화하는 순간 콜백 수행됨
//     // 감지하고 싶은 것만 감지해서 그 값이 변화하는 순간에만 콜백함수 수행시킬 수 있음
//     useEffect(()=>{
//         console.log(`count is update: ${count}`)
//         if (count>5) {
//             alert("count가 5를 넘었습니다. 1로 초기화합니다");
//             setCount(1);
//         }
//     }, [count]);

//     useEffect(()=>{
//         console.log(`text is update: ${text}`)
//     }, [text]);


//     return (
//         <div style={{padding: 20}}>
//         <div>
//             {count}
//             <button onClick={()=>setCount(count+1)}>+</button>
//         </div>
//         <div>
//             <input value={text} onChange={(e)=>setText(e.target.value)}></input>
//         </div>
//     </div>
//     );
// };

//하나의 파일에 두개의 컴포넌트 생성해도 됨
const UnMountTest = () => {
    // useEffect 사용해서 컴포넌트가 unmount 되는 순간 제어
    useEffect(()=>{
        console.log("mount");

        // unmount (mount를 제어하는 useEffect에 전달되는 콜백함수가 함수 하나를 리턴하게 하면 됨)
        // 리턴되는 함수는 unmount 시점에 실행됨
        return () => {
            console.log("unmount");
        };
    }, [])
    return <div>Unmount Testing Component</div>
};

const Lifecycle = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{padding: 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnMountTest/> }
        </div>
    )
    //isVisible가 true이면 UnMountTest가 반환이 되어서 화면에 렌더링됨 
    // false이면 UnMountTest 컴포넌트가 렌더링이 안됨
};

export default Lifecycle;