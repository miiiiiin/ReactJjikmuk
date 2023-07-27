import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"민송경",
    content:"ㅎㅇ",
    emotion:5,
    created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  },
  {
    id:2,
    author:"민송경2",
    content:"ㅎㅇ2",
    emotion:3,
    created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  },
  {
    id:3,
    author:"민송경3",
    content:"ㅎㅇ3",
    emotion:2,
    created_date: new Date().getTime() // milliseconds 숫자로 변환해서 저장(string화 위해)
  }
];

// diaryList라는 이름으로 props로 전달
function App() {
  return (
    <div className="App">
    <DiaryEditor/>
    <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
