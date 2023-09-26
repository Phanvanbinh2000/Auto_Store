import { Col, Row } from 'antd';
import React from 'react';
import './index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: '',
    src:
      'https://cdn.divineshop.vn/image/catalog/Banner/Steam%20(1)-22335.png?hash=1689298762',
      
    title: 'Steam',
    desc: '',
  },
  {
    link: '',
    src:
      'https://cdn.divineshop.vn/image/catalog/Banner/GPT%20(1)-20369.png?hash=1689298774',
    title: 'Tài Khoản GPT',
    desc: '',
  },
  {
    link: '',
    src:
      'https://cdn.divineshop.vn/image/catalog/Banner/Microsoft%20Office%20(1)-89159.png?hash=1689298791',
    title: 'Key WinDow Bản Quyền',
    desc: '',
  },
  {
    link: '',
    src:
      'https://cdn.divineshop.vn/image/catalog/Banner/Spotify%20(1)-63835.png?hash=1689298751',
    title: 'Spotify',
    desc: '',
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Sản Phẩm Nổi Bật</h2>
          <div className="underline-title"></div>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
