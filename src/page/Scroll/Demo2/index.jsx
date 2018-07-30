import React from 'react';
import '../index.css';

export default function Demo1() {
  function showPopView(){
    const container = document.getElementsByClassName('container')[0];
    const mask = document.getElementsByClassName('mask')[0];
    mask.style.display = mask.style.display === 'block' ? 'none' : 'block';
    const popver = document.getElementsByClassName('popver')[0];
    popver.style.display = popver.style.display === 'block' ? 'none' : 'block';
    if (popver.style.display === 'block') {
      container.style.position = 'fixed'; // 方案2，代码简单，效果好。需要记住底层元素的scrollTop
      container.style.width = '100vw';
      container.style.overflow = 'hidden';
    } else {
      container.style.position = 'relative';
      container.style.overflow = 'auto';
    }
  }
  return (
    <div className="container">
      <div className="item">
        page 1
        <br/>
        <button onClick={showPopView}>show pop view</button>
      </div>
      <div className="item">page 2</div>
      <div className="item">page 3</div>
      <div className="item">page 4</div>
      <div className="mask" onClick={showPopView}></div>
      <div className="popver">
        <div className="popvercontent"> this is a popver </div>
        <div className="popvercontent"> this is the 1 coontent </div>
        <div className="popvercontent"> this is the 2 coontent </div>
        <div className="popvercontent"> this is the 3 coontent </div>
        <div className="popvercontent"> this is the 4 coontent </div>
        <div className="popvercontent"> this is the 5 coontent </div>
        <div className="popvercontent"> this is the 6 coontent </div>
        <div className="popvercontent"> this is the 7 coontent </div>
        <div className="popvercontent"> this is the 8 coontent </div>
        <div className="popvercontent"> this is the 9 coontent </div>
        <div className="popvercontent"> this is the 10 coontent </div>
      </div>
    </div>
  );
}