import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import HomePage from './Page/HomePage';
import MyPage from './Page/MyPage';
import SearchPage from './Page/SearchPage';
import DetailPage from './Page/DetailPage';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/home" component={HomePage} /> */}
                    <Route exact path="/mypage" component={MyPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/detail" component={DetailPage} />
=======
                    <Route path="/" component={HomePage} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/detail" component={DetailPage} />
>>>>>>> d60e0efa75af4fbb8f70e7f2ae33b0d191f0fbc3
                </Switch>
            </Router>
        )
    }
}

export default Routes;