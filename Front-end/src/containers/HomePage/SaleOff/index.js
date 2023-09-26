import { Carousel } from 'antd';
import React from 'react';
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  'https://cdn.divineshop.vn/image/catalog/Banner/banner%20Google%20One%20(3)-10567.png?hash=1658937523',
  'https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/t%E1%BB%91i%20%C6%B0u%20c%C3%B4ng%20vi%E1%BB%87c-45178.png?hash=1640349471',
  'https://cdn.divineshop.vn/image/catalog/Anh/Banner%2014%20thang%2011/Banner%20main-1280x632-27477.png?hash=1689069871',
  'https://cdn.divineshop.vn/image/catalog/Anh-SP/Kh%C3%A1c/chatGPT-70878.jpg?hash=1681283148',
  'https://cdn.divineshop.vn/image/catalog/Banner/Gmail-60882.png?hash=1691142559',
  

];

function SaleOff() {
  return (
    <Carousel className="Sale-Off" autoplay>
      {list.map((item, index) => (
        <img className="Sale-Off-img" src={item} key={index} />
      ))}
    </Carousel>
  );
}

export default SaleOff;
