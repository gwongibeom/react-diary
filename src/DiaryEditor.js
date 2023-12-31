import { useRef, useState } from 'react'

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef()
  const contentInput = useRef()
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  })
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (state.author < 1) {
      authorInput.current.focus()
      return
    }
    if (state.content < 5) {
      contentInput.current.focus()
      return
    }
    onCreate(state.author, state.author, state.emotion)
    alert('저장되었습니다.')
    setState({
      author: '',
      content: '',
      emotion: '',
    })
  }
  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <span>오늘의 감정점수 : </span>
      <div>
        <select name='emotion' value={state.emotion} onChange={handleChangeState}>
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
  )
}

export default DiaryEditor
