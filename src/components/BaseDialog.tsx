import { useState } from 'react';
import { formatter } from '../utils/formater';
import { CoinProps, FormProps } from '../utils/types';

export const BaseDialog = ({
  coins,
  updateCoins,
  currentDialogType,
  openDialog,
}: FormProps) => {
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('BTC');

  const changeValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  // const result =
  // Number(value) * coins.find((coin) => coin.id === currency).rate;

  const closeForm = () => openDialog('');

  const changeAmountCoin = (coin: CoinProps) => {
    const newCoin = coin;
    currentDialogType === 'Send'
      ? (newCoin.amount -= Number(value))
      : (newCoin.amount += Number(value));

    return newCoin;
  };
  const makeDeal = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    updateCoins(
      coins.map((coin) =>
        coin.id === currency ? changeAmountCoin(coin) : coin
      )
    );
    openDialog('');
  };

  const changeCurrency = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(evt.target.value);
  };

  return (
    <div className='formManagmentCurrencyContainer'>
      <form className='formManagmentCurrency' onSubmit={makeDeal}>
        <div className='formManagmentCurrency__head'>
          <legend className='formManagmentCurrency__title'>
            {currentDialogType}
          </legend>
          <button
            className='formManagmentCurrency__close'
            onClick={closeForm}
          ></button>
        </div>
        <fieldset className='formManagmentCurrency__field'>
          <label className='formManagmentCurrency__label' htmlFor='currency'>
            Currency
          </label>
          <select
            name='currency'
            id=''
            className='formManagmentCurrency__select'
            onChange={changeCurrency}
            value={currency}
          >
            <option hidden>Выберете валюту</option>
            {coins.map((coin) => {
              return <option key={coin.id}>{coin.id}</option>;
            })}
          </select>
        </fieldset>
        <fieldset className='formManagmentCurrency__field'>
          <label className='formManagmentCurrency__label' htmlFor='value'>
            Value
          </label>
          <input
            className='formManagmentCurrency__input'
            type='number'
            name='value'
            value={value}
            onChange={changeValue}
            placeholder='Введите суммы валюты'
            required
          />
        </fieldset>
        <button type='submit' className='formManagmentCurrency__button'>
          {currentDialogType}&nbsp;
          {/* {!value ? '' : formatter.format(result)} */}
        </button>
      </form>
    </div>
  );
};
