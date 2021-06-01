import React, { useState } from 'react';
import './HomePage.css';

// view
import MainHeaderView from '../Components/Views/MainHeaderView';
import SearchView from '../Components/Views/SearchView';
import QuestionView from '../Components/Views/QuestionView';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleModalOpen = () => {
      setShow(true);
  };
    
  const onCloseModal = () => {
      setShow(false);
  }

  return <div>
    <MainHeaderView />
    <SearchView />
    <div className="question_image">
      <img onClick={handleModalOpen} className="questionImg" src={require(`../images/question-mark.png`).default} />
      <div className="questionText">How to use CookIn</div>
    </div>
    {show && <QuestionView onCloseModal={onCloseModal} />}
  </div>
}

export default Home
