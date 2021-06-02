import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

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
    <Link to="/">
      <div id="logo">
        <div className="toppart">
          <div className="chef_img">
            <img className="chef" src={require(`../img/Main/chef.png`).default} />
          </div>
          CookIn
        </div>
        <div className="caption">
          <span>Find the best kitchen for you!</span>
        </div>  
      </div>
    </Link>
    <SearchView />
    <div onClick={handleModalOpen} className="question_image">
      <img  className="questionImg" src={require(`../images/question-mark.png`).default} />
      <div className="questionText">How to use CookIn</div>
    </div>
    {show && <QuestionView onCloseModal={onCloseModal} />}
  </div>
}

export default Home
