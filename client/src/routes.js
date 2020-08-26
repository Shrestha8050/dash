import React from 'react';
import Layout from './HOC/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/index';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
