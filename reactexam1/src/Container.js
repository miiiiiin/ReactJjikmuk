// children이라는 props를 받아서 div아래에 렌더링함
const Container = ({children}) => { 
    // react element를 children으로 받았다는 걸 확인할 수 있음
    // react의 props는 컴포넌트를 다른 컴포넌트의 prop으로 전달할 수 있음
    console.log(children);
    return <div style={{margin: 20, padding:20, border:"1px solid gray"}}>
    {children}
    </div>;
};

export default Container;