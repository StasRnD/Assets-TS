export interface CoinProps {
  id: string;
  amount: number;
  rate: number;
  defaultCurrency: number;
}

export type FormProps = {
  coins: CoinProps[];
  openDialog: (currentDialogType: string) => void;
  currentDialogType: string;
  updateCoins: (coins: CoinProps[]) => void;
};
