import './HeaderView.css'
import HomePageButton from '../Buttons/HomePageButton';


import './SearchHeaderViewLeft.css';


const DetailHeaderViewLeft = () => {
  var this_div = 
    <div className="leftHeaderWrapper">
      <div className="homePageBtnWrapper">
        <HomePageButton />
      </div>
    </div>

  return this_div
}

export default DetailHeaderViewLeft
