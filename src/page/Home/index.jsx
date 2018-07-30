import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/page/scroll/question">
            滑动穿透问题
          </Link>
        </li>
        <p>absolut 嵌套的滚动，滚动里面的会导致外面的也滚动。</p>
        <li>
        <Link to="/page/scroll/question2">
            滑动穿透问题2
          </Link>
        </li>
        <p>fixed 嵌套的滚动，滚动里面的会导致外面的也滚动。</p>
        <li>
          <Link to="/page/scroll/test1">
          方案一
          </Link>
        </li>
        <section>
          <h5>在底层元素上增加 overflow: hidden</h5>
          <p>问题基本解决，但是safari上底层元素还是能够有滚的动的效果</p>
        </section>
        <li>
          <Link to="/page/scroll/test2">
            方案二
          </Link>
        </li>
        <section>
          <h5>在底层元素上增加 position: fixed</h5>
          <p>解决了穿透问题，兼容性较好，不过需要记住底层元素的topScroll，上层元素消失后再还原。适用场景有限</p>
        </section>
        <li>
          <Link to="/page/scroll/test3">
            方案三
          </Link>
        </li>
        <section>
          <h5>js在上层元素上监听处理事件 touchmove + preventDefault</h5>
          <p>代码复杂，兼容性很好，适用场景丰富</p>
        </section>
        <li>
          <Link to="/page/scroll/test4">
            方案四
          </Link>
        </li>
        <section>
          <h5>在上层元素上 -webkit-overflow-scrolling: touch</h5>
          <p>代码简单，适用场景丰富， 需要分别对android ios进行适配</p>
        </section>
      </ul>

    </div>
  );
}