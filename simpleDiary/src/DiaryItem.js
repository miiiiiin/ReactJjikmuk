// DiaryList의 배열 데이터를 사용해서 렌더하는 아이템을 별도의 컴포넌트로 분할

import { useRef, useState } from "react";

// props통해 매개변수 전달 받아옴
const DiaryItem = ({ 
    onEdit,
    onRemove,
    author,
    content,
    emotion,
    created_date,
    id }) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onRemove(id);
        };
    };

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        // if (localContent.length < 5) {
        //     localContentInput.current.focus();
        //     return;
        // }

        if (window.confirm(`${id}번 째 일기를 수정하겠습니까?`)) {
            console.log(localContent);
            onEdit(id, localContent);
            toggleIsEdit();
        }
    };

    return <div className="DiaryItem">
        <div className="info">
            <span>작성자: {author} | 감정점수: {emotion}</span>
            <br/>
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? <>
            <textarea 
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.value)}/>
            </> : <>{content}</>}
        </div>
        {isEdit ? <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
        </> : <>
        <button onClick={handleRemove}>삭제</button>
        <button onClick={toggleIsEdit}>수정</button>
        </>}
    </div>
}

export default DiaryItem;

// 날짜 생성함수에 밀리세컨즈 인자로 넣어주면 그 시간을 기준으로 데이터 객체가 생성됨