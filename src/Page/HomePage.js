import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './HomePage.css';

// view
import MainHeaderView from '../Components/Views/MainHeaderView';
import SearchView from '../Components/Views/SearchView';
import QuestionView from '../Components/Views/QuestionView';

import { deleteFirstCity, deleteSecondCity, deleteThirdCity,deleteFourthCity,} from '../reducers/searchCity';
import * as SearchMap from '../Components/Views/SearchMap'

const Home = () => {
  const [show, setShow] = useState(false);

  const handleModalOpen = () => { // 밑에 onClick={handleModalOpen} 까지.
      setShow(true);
  };
    
  const onCloseModal = () => {
      setShow(false);
  }

  return <div>
    <MainHeaderView />
    <SearchView />
    <div className="question_image">
      <img onClick={handleModalOpen} className="icon" src={require(`../images/question-mark.png`).default} />
    </div>
    {show && <QuestionView onCloseModal={onCloseModal} />}
  </div>
}

export default Home
