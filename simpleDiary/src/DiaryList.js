// DiaryList props를 전달받을 수 있음
// jsx 표현식 -> diaryList.map (it으로 원소를 한번씩 순회해서 div요소들의 아이템들을 만듬)

import DiaryItem from "./DiaryItem";

// jsx 표현 -> {it.author} (객체의 점 표기법으로 객체의 프로퍼티에 접근 가능)
const DiaryList = ({ onDelete, diaryList }) => {
    console.log(diaryList);
    return <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기</h4>
        <div>
            {diaryList.map((it)=>(
                // props 드릴링
                <DiaryItem key={it.id} {...it} onDelete={onDelete}/>
            ))}
        </div>
    </div>
}
// 리스트의 아이템이기 때문에 key를 it.id로 전달
// 일기 하나 객체에 포함된 모든 데이터를 ... 스프레드 연산자를 통해서 전달
// it이라는 객체에 포함된 모든 데이터가 DiaryItem에 props로 전달됨

//undefined로 전달될 것 같은 props를 대비해 기본값을 설정하는 것
// DiaryList 컴포넌트의 diaryList props의 기본값을 빈 배열로 설정
DiaryList.defaultProps={
    diaryList: []
}

// es 모듈시스템에 내보내기
export default DiaryList;