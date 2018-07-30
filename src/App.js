import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Demo1 from './page/Scroll/Demo1';
import Demo2 from './page/Scroll/Demo2';
import Demo3 from './page/Scroll/Demo3';
import Demo4 from './page/Scroll/Demo4';
import Que from './page/Scroll/Que';
import Que1 from './page/Scroll/Que1';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* 滑动穿透问题 */}
            <Route exact path='/page/scroll/question' component={Que}/>
            <Route exact path='/page/scroll/question2' component={Que1}/>

            {/* overflow: hidden */}
            <Route exact path='/page/scroll/test1' component={Demo1}/>
            {/* position: fixed */}
            <Route exact path='/page/scroll/test2' component={Demo2}/>
            {/* 检测滑动事件并在适当的情况阻止 */}
            <Route exact path='/page/scroll/test3' component={Demo3}/>
            {/* scrolling-overflow: touch */}
            <Route exact path='/page/scroll/test4' component={Demo4}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
