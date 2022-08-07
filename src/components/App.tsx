import "../index.css";
import { useState, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import BottomBar from "./BottomBar";
// import { CSSTransition } from "react-transition-group";
import { coinsList } from "../utils/constans";
import { CoinProps, DialogsType } from "../utils/types";
import { BaseDialog } from "./BaseDialog";

export type Action = {
  type: DialogsType;
  payload: {
    currency: string;
    value: number;
  };
};

function coinsReducer(coinsList: CoinProps[], action: Action): CoinProps[] {
  switch (action.type) {
    case DialogsType.SEND:
      return coinsList.map((coin) => {
        if (coin.id === action.payload.currency) {
          coin.amount -= action.payload.value;
        }
        return coin;
      });

    case DialogsType.RECEIVE:
      return coinsList.map((coin) => {
        if (coin.id === action.payload.currency) {
          coin.amount += action.payload.value;
        }
        return coin;
      });

    default:
      return coinsList;
  }
}

const App = () => {
  const [coins, dispatch] = useReducer(coinsReducer, coinsList);
  const [currentDialogType, openDialog] = useState<DialogsType | null>(null);

  const isOpenDialog = (value: DialogsType) => {
    openDialog(value);
  };

  const updateCoins = (action: Action) => dispatch(action);

  return (
    <div className="page">
      <Header />
      <Main coins={coins} isOpenDialog={isOpenDialog} />
      <BottomBar />
      {currentDialogType ? (
        <BaseDialog
          coins={coins}
          currentDialogType={currentDialogType}
          updateCoins={updateCoins}
          openDialog={openDialog}
        />
      ) : null}
    </div>
  );
};

export default App;
