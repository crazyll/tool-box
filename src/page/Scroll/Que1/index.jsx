import React from 'react';

export default function Question() {
  function showPopView(){
    const popver = document.getElementsByClassName('popver')[0];
    popver.style.display = popver.style.display === 'block' ? 'none' : 'block';
  }
  return (
    <div className="container">
      <h2>弹层滑动穿透 问题二</h2>
      <p>android 中滑动到边界时会穿透</p>
      <p>iOS 中存在边界穿透内部穿透和滑动卡顿问题</p>
      <div className="item">
        page 1
        <br/>
        <button onClick={showPopView}>show pop view</button>
      </div>
      <div className="item">page 2</div>
      <div className="item">page 3</div>
      <div className="item">page 4</div>
      <div className="mask" onClick={showPopView}></div>
      <div className="popver" style={{ position: 'fixed', background: 'red' }}>
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
        <div className="popvercontent"> this is the 11 content </div>
        <div className="popvercontent"> this is the 12 content </div>
        <div className="popvercontent"> this is the 13 content </div>
        <div className="popvercontent"> this is the 14 content </div>
        <div className="popvercontent"> this is the 15 content </div>
        <div className="popvercontent"> this is the 16 content </div>
        <div className="popvercontent"> this is the 17 content </div>
        <div className="popvercontent"> this is the 18 content </div>
        <div className="popvercontent"> this is the 19 content </div>
        <div className="popvercontent"> this is the 20 content </div>
      </div>
    </div>
  );
}