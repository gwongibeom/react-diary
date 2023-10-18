import './App.css'
import DiaryEditer from './DiaryEditer'
import DiaryList from './DiaryList'

function App() {
  const dummyList = [
    {
      id: 1,
      author: '권기범',
      content: '흐애',
      emotion: 1,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: '박진형',
      content: '최강한화',
      emotion: 2,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: '김태호',
      content: '맹구',
      emotion: 3,
      created_date: new Date().getTime(),
    },
  ]

  return (
    <div className='App'>
      <DiaryEditer />
      <DiaryList diaryList={dummyList} />
    </div>
  )
}

export default App
