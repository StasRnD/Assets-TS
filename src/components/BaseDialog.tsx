import { useMemo, useState } from "react";
import { formatter } from "../utils/formater";
import { CoinProps, DialogsType } from "../utils/types";
import { Action } from "./App";

export type Props = {
  coins: CoinProps[];
  openDialog: (currentDialogType: DialogsType | null) => void;
  currentDialogType: DialogsType | null;
  updateCoins: (action: Action) => void;
};

export const BaseDialog = ({
  coins,
  updateCoins,
  currentDialogType,
  openDialog,
}: Props) => {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("BTC");

  const changeValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const result = useMemo(() => {
    const coin = coins.find((coin) => coin.id === currency);

    if (!coin) {
      return 0;
    }

    return Number(value) * coin.rate;
  }, [value, coins, currency]);

  const closeForm = () => openDialog(null);

  const makeDeal = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!currentDialogType) {
      return;
    }

    updateCoins({
      type: currentDialogType,
      payload: {
        currency,
        value: Number(value),
      },
    });

    openDialog(null);
  };

  const changeCurrency = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(evt.target.value);
  };

  return (
    <div className="formManagmentCurrencyContainer">
      <form className="formManagmentCurrency" onSubmit={makeDeal}>
        <div className="formManagmentCurrency__head">
          <legend className="formManagmentCurrency__title">
            {currentDialogType}
          </legend>
          <button
            className="formManagmentCurrency__close"
            onClick={closeForm}
          ></button>
        </div>
        <fieldset className="formManagmentCurrency__field">
          <label className="formManagmentCurrency__label" htmlFor="currency">
            Currency
          </label>
          <select
            name="currency"
            id=""
            className="formManagmentCurrency__select"
            onChange={changeCurrency}
            value={currency}
          >
            <option hidden>Выберете валюту</option>
            {coins.map((coin) => {
              return <option key={coin.id}>{coin.id}</option>;
            })}
          </select>
        </fieldset>
        <fieldset className="formManagmentCurrency__field">
          <label className="formManagmentCurrency__label" htmlFor="value">
            Value
          </label>
          <input
            className="formManagmentCurrency__input"
            type="number"
            name="value"
            value={value}
            onChange={changeValue}
            placeholder="Введите суммы валюты"
            required
          />
        </fieldset>
        <button type="submit" className="formManagmentCurrency__button">
          {currentDialogType}&nbsp;
          {!value ? "" : formatter.format(result)}
        </button>
      </form>
    </div>
  );
};
