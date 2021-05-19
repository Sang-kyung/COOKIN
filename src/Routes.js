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
                    <Route path="/" component={HomePage} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/detail" component={DetailPage} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;