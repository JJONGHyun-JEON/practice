//워닝메시지 끄기
/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// app컴포넌트 start
function App(props) {

  let post = '강남 우동 맛집';
  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학?']);
  let [따봉, set따봉] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [글쓰기, set글쓰기] = useState(''); //입력값을 받아두기 위한 변수

  return (
    <div className="App">
      <div className='black-nav'>
        <h4> BLOG </h4>
      </div>

      {/* 글수정 버튼 start */}
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        set글제목(copy);
      }}>글수정</button>
      {/* 글수정 버튼 end */}

      {/* 가나다순 정렬 버튼 start */}
      <button onClick={() => {
        let 정렬 = [...글제목];
        정렬.sort();
        set글제목(정렬);
      }}>가나다순정렬</button>
      {/* 가나다순 정렬 버튼 end */}

      {/* 글제목 리스트 start */}
      {
        글제목.map(function (a, i) { //a는 글제목에 있는 array값을 하나씩 출력해줌, i는 a의 해당 값에 대한 순서를 숫자로 알려줌
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {modal == true ? setModal(false) : setModal(true); setTitle(i)}}>
                {글제목[i]}
                <span onClick={(e) => {let 따봉딮카피 = [...따봉]; 따봉딮카피[i] = 따봉[i] + 1; set따봉(따봉딮카피); e.stopPropagation()}}>
                  👍
                  </span>
                  {따봉[i]} 
                  </h4>
              <p>11월 27일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                set글제목(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {/* 글제목 리스트 end */}

      {/* 모달창 on/off start */}
      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }
      {/* 모달창 on/off end */}
      
      <div>
      <input onChange={(e)=>{set글쓰기(e.target.value);}}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(글쓰기);
        set글제목(copy);
      }}>등록</button>
      </div>
      
      
      

    </div>
  );
}
// app컴포넌트 end

// 모달창 컴포넌트 start
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}
// 모달창 컴포넌트 end

export default App;
