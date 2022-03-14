import React from 'react';
import './style.scss';
import { Button } from 'antd';

type Props = {};
console.log('100000');
export default function Index({}: Props) {
  return (
    <div className="text">
      我是typescript，你能解析吗？ <Button>我是按钮</Button>
      <Button type="primary">我是按钮</Button>
    </div>
  );
}
