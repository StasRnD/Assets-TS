import send from "../image/main-icon/send.svg";
import receive from "../image/main-icon/receive.svg";
import scan from "../image/main-icon/scan.svg";
import history from "../image/main-icon/history.svg";
import { DialogsType } from "../utils/types";

type MenuProps = {
  openDialog: (value: DialogsType) => void;
};

export const Menu = ({ openDialog }: MenuProps) => {
  return (
    <section className="wallet__help">
      <button
        className="wallet__help-point"
        onClick={() => openDialog(DialogsType.SEND)}
      >
        <img src={send} alt="Купить валюту" className="wallet__point-icon" />
        Send
      </button>
      <button
        className="wallet__help-point"
        onClick={() => openDialog(DialogsType.RECEIVE)}
      >
        <img
          src={receive}
          alt="Продать валюту"
          className="wallet__point-icon"
        />
        Receive
      </button>
      <button className="wallet__help-point">
        <img src={scan} alt="Сканировать" className="wallet__point-icon" />
        Scan
      </button>
      <button className="wallet__help-point">
        <img src={history} alt="История" className="wallet__point-icon" />
        History
      </button>
    </section>
  );
};
