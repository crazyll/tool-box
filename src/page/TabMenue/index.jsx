import React from 'react';
import { Menu } from 'antd-mobile';
import MutiMenu from '../component/MutiMenu';
import '../App.css';

export default function App() {
  return (
    <div className='App'>
      <MutiMenu topLength='190px'>
        <Menu
          level={1}
          title='order'
          data={[
            { value: 'all', label: '默认排序' },
            { value: 'checkoutTime', label: '账单排序' },
            { value: 'house', label: '房源排序' }
          ]}
          onChange={value => {
            console.log(value);
          }}
        />
        <Menu
          level={1}
          title='order2'
          data={[
            { value: 'all', label: '默认排序' },
            { value: 'checkoutTime', label: '账单排序' },
            { value: 'house', label: '房源排序' }
          ]}
          onChange={value => {
            console.log(value);
          }}
        />
      </MutiMenu>
    </div>
  );
}
