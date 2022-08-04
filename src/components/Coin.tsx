import { formatter, language } from "../utils/formater";
import { useCallback } from "react";
import { CoinProps } from "../utils/types";

type DataCoinProps = {
  dataCoin: CoinProps;
};

export const Coin = ({ dataCoin }: DataCoinProps) => {
  const changeAmountPercent = useCallback(
    (defaultCurrency: number) => {
      const newCurrency = dataCoin.amount * dataCoin.rate;
      const perCent = Number(
        (((newCurrency - defaultCurrency) / defaultCurrency) * 100).toFixed(2)
      );
      return perCent > 0 ? `+${perCent}` : perCent;
    },
    [dataCoin]
  );

  const imageCoin = require(`../image/main-icon/${dataCoin.id}-icon.png`);

  return (
    <tr className="coins__unit">
      <td className="coins__currensy">
        <img src={imageCoin} alt="Логотип валюты" className="coins__icon" />
        <p className="coins__amout">
          {dataCoin.amount.toLocaleString(language)} {dataCoin.id}
        </p>
        <p className="coins__total-cost">
          {formatter.format(dataCoin.amount * dataCoin.rate)}
        </p>
      </td>
      <td className="coins__change">
        <p className="coins__cost-one">{formatter.format(dataCoin.rate)}</p>
        <p
          className={`coins__cost-change ${
            changeAmountPercent(dataCoin.defaultCurrency) >= 0
              ? "coins__cost-change_positive"
              : "coins__cost-change_negative"
          }`}
        >
          {changeAmountPercent(dataCoin.defaultCurrency)}%
        </p>
      </td>
    </tr>
  );
};
