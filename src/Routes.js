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
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/home" component={HomePage} /> */}
                    <Route exact path="/mypage" component={MyPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Switch>
                        <Route exact path="/detail/:name" component={DetailPage} />
                        <Route exact path="/detail" component={DetailPage} />
                    </Switch>
                </Switch>
            </Router>
        )
    }
}

export default Routes;