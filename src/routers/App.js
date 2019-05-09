import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <Switch>
            <PublicRoute path='/' component={LoginPage} exact />
            <PrivateRoute path='/dashboard' component={Dashboard} exact />
            <PrivateRoute path='/create' component={AddExpense} />
            <PrivateRoute path='/edit/:id' component={EditExpense} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
