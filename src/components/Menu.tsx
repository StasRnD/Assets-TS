import send from '../image/main-icon/send.svg';
import receive from '../image/main-icon/receive.svg';
import scan from '../image/main-icon/scan.svg';
import history from '../image/main-icon/history.svg';

type MenuProps = {
  openDialog: (value: string | null) => void;
};
export const Menu = ({ openDialog }: MenuProps) => {
  const openForm = (evt: React.MouseEvent<HTMLButtonElement>) => {
    openDialog(evt.currentTarget.textContent);
  };

  return (
    <section className='wallet__help'>
      <button className='wallet__help-point' onClick={openForm}>
        <img src={send} alt='Купить валюту' className='wallet__point-icon' />
        Send
      </button>
      <button className='wallet__help-point' onClick={openForm}>
        <img
          src={receive}
          alt='Продать валюту'
          className='wallet__point-icon'
        />
        Receive
      </button>
      <button className='wallet__help-point'>
        <img src={scan} alt='Сканировать' className='wallet__point-icon' />
        Scan
      </button>
      <button className='wallet__help-point'>
        <img src={history} alt='История' className='wallet__point-icon' />
        History
      </button>
    </section>
  );
};
