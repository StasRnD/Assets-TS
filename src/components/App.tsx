import '../index.css';
import { useState, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import BottomBar from './BottomBar';
import Form from './Form';
import { CSSTransition } from 'react-transition-group';
import { coinsList } from '../utils/constans';
import { CoinProps } from '../utils/types';

// type Action = {
//   type: string;
//   payload: any;
// };

// function todoReducer(coinsList: CoinProps[], action: Action): CoinProps[] {
//   switch (action.type) {
//     case 'UPDATE__COINS':
//       return coinsList.map((coin) =>
//         coin.id === action.payload ? coin : coin
//       );

//     default return coinsList
//   }
// }

const App = () => {
  // const [coins, dispatch] = useReducer(todoReducer, coinsList);
  const [coins, updateCoins] = useState(coinsList);
  const [currentDialogType, openDialog] = useState('');

  const isOpenDialog = (value: any) => {
    openDialog(value);
  };

  return (
    <div className='page'>
      <Header />
      <Main coins={coins} isOpenDialog={isOpenDialog} />
      <BottomBar />
      <CSSTransition
        in={!!currentDialogType}
        timeout={300}
        classNames='alert'
        unmountOnExit
      >
        <Form
          coins={coins}
          currentDialogType={currentDialogType}
          updateCoins={updateCoins}
          openDialog={openDialog}
        />
      </CSSTransition>
    </div>
  );
};

export default App;
