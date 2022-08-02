import message from '../image/main-icon/message-chat.svg';
import setting from '../image/main-icon/setting.svg';
import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className='header'>
      <h1 className='header__title'>Assets Manage</h1>
      <div className='header__help'>
        <img
          src={message}
          alt='Написать сообщение'
          className='header__help-icon'
        />
        <img src={setting} alt='Настройки' className='header__help-icon' />
      </div>
    </header>
  );
});

export default Header;
