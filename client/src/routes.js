import React from 'react';
import Layout from './HOC/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Courses from './components/Courses';
import Subject from './components/Students/Subject';
import Posts from './components/Students/Posts';
import Assignments from './components/Students/Assignment';
import Profile from './components/Profile';
import Merits from './components/Students/Merit/Index';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/assignments' exact component={Assignments} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/courses' exact component={Courses} />
        <Route path='/subject' exact component={Subject} />
        <Route path='/merits' exact component={Merits} />
        <Route path='/posts' exact component={Posts} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
