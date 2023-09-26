// import { message } from 'antd';

// // Note: config message
// message.config({ maxCount: 1, duration: 1.5 });

import React, { useState } from 'react';
import { Button, Input, message } from 'antd';

const Messenger = () => {
  const [messageText, setMessageText] = useState('');

  const showMessage = () => {
    if (messageText.trim() === '') {
      message.error('Vui lòng nhập tin nhắn trước khi gửi.');
    } else {
      message.success(`Bạn đã nói: ${messageText}`);
      setMessageText('');
    }
  };

  return (
    <div>
      <h1>Ứng dụng Chat</h1>
      <Input
        placeholder="Nhập tin nhắn của bạn"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
      />
      <Button type="primary" onClick={showMessage}>
        Gửi
      </Button>
    </div>
  );
};

export default Messenger;

