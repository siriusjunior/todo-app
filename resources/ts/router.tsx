import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import TaskPage from './pages/tasks';
import HelpPage from './pages/help';
import LoginPage from './pages/login';

const Router = () => {
    return(
        <BrowserRouter>
                <header className="global-head">
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/help">ヘルプ</Link></li>
                        <li><Link to="/login">ログイン</Link></li>
                        <li><span>ログアウト</span></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <TaskPage />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}

export default Router
