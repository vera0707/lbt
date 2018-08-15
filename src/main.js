import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IndexRoute,Router,Route,Switch } from 'react-router-dom';
import { history } from './location';
import './core.less';

import { IndexComponent } from './pages/index/index';
import { PasswordComponent } from './pages/password/password';
import { ErrorComponent } from './pages/error/error';

class MainRouter extends React.Component{

    constructor(props){
        super(props);

        window.fetch('/',{
            method: 'POST',
            headers: {"content-type": 'application/json; charset=utf-8'}
        })
            .then(response => response)
            .catch(error =>  {console.log(error)} )
            .then((rex) => { console.log(rex)})
    }

    componentDidMount(){

    }



    render(){
        return(
            <div className="lbt-content"> {this.props.children}</div>
        )
    }
}


ReactDOM.render((
    <Router history={history}>
        <MainRouter>
            <Route path="/index" component={IndexComponent} />
            <Route path="/login" component={ PasswordComponent} />
            <Route path={ "/password/login" } component={ PasswordComponent} />
            <Route path="/register" component={ PasswordComponent} />
            <Route exact path="/" component={ IndexComponent} />
            <Route component={ErrorComponent}/>
        </MainRouter>
    </Router>
),document.getElementById('lbt'));

