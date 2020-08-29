import React from 'react';
import Layout from './HOC/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Courses from './components/Courses';
import Subject from './components/Students/Subject';
import Posts from './components/Posts';
import Assignments from './components/Assignment';
import Profile from './components/Profile';
import Merits from './components/Students/Merit/Index';
import Course from './components/Courses/Course/index';
import Login from './components/Login/login';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/assignments' exact component={Assignments} />
        <Route path='/course/:id' exact component={Course} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/courses' exact component={Courses} />
        <Route path='/subject' exact component={Subject} />
        <Route path='/merits' exact component={Merits} />
        <Route path='/login' exact component={Login} />
        <Route path='/posts' exact component={Posts} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
