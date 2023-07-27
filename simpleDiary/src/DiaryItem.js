
// DiaryList의 배열 데이터를 사용해서 렌더하는 아이템을 별도의 컴포넌트로 분할
// props통해 매개변수 전달 받아옴
const DiaryItem = ({ author, content, emotion, created_date, id }) => {
    return <div className="DiaryItem">
        <div className="info">
            <span>작성자: {author} | 감정점수: {emotion}</span>
            <br/>
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>

}

export default DiaryItem;

// 날짜 생성함수에 밀리세컨즈 인자로 넣어주면 그 시간을 기준으로 데이터 객체가 생성됨
