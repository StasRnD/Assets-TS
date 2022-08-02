import { Coin } from './Coin';
import { CoinProps } from '../utils/types';

type CoinsProps = {
  coins: CoinProps[];
};

export const Coins = ({ coins }: CoinsProps) => {
  return (
    <section className='coins'>
      <table className='coins__list'>
        <thead>
          {coins.map((dataCoin) => {
            return <Coin key={dataCoin.id} dataCoin={dataCoin} />;
          })}
        </thead>
      </table>
    </section>
  );
};
