export interface CoinProps {
  id: string;
  amount: number;
  rate: number;
  defaultCurrency: number;
}

export enum DialogsType {
  SEND = "SEND",
  RECEIVE = "RECEIVE",
}
