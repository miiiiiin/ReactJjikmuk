const OddEvenResult = ({count}) => {
    console.log(count);
    // count state를 props로 받아옴. counter라는 컴포넌트가 갖고있기 때문에 props로 받는 방법 밖에 없음 
    return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

// 부모가 내려주는 props가 변경되면 다시 렌더링을 함

export default OddEvenResult;