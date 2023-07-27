import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
  // {
  //   id:1,
  //   author:"민송경",
  //   content:"ㅎㅇ",
  //   emotion:5,
  //   created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  // },
  // {
  //   id:2,
  //   author:"민송경2",
  //   content:"ㅎㅇ2",
  //   emotion:3,
  //   created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  // },
  // {
  //   id:3,
  //   author:"민송경3",
  //   content:"ㅎㅇ3",
  //   emotion:2,
  //   created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  // }
// ];


// data 스테이트는 diaryList로 사용되기 때문에 props로 전달
function App() {

  const [data, setData] = useState([]);

  // dataId.current는 어떤 dom도 선택하지 않고 그냥 0이라는 값을 가리킴
  const dataId = useRef(0);

  // DiaryEditor에 props로 전달
  // 각 입력요소들을 파라미터로 받아 이 함수가 받아서 setData를 이용해서 data를 업데이트 시키는 로직
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    // 원래 데이터를 전개 연산자로 쓸 수 있음(원래 배열에 있던 데이터를 하나하나씩 나열, 새로운 아이템을 추가)
    setData([newItem, ...data])
  };

  const onDelete = (targetId) => {
    console.log(targetId);
    console.log(`${targetId}가 삭제되었습니다`);
    // 삭제된 id를 가진 배열요소를 제외한 새로운 배열을 만들어 setData 함수에 전달
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  // data로 props를 전달
  return (
    <div className="App">
    <DiaryEditor onCreate={onCreate}/>
    <DiaryList onDelete={onDelete}
      diaryList={data}/>
    </div>
  );
}

export default App;
