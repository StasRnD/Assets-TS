import walletChoiceIcon from '../image/main-icon/wallet-choice-button.svg';
import walletAnalysisIcon from '../image/main-icon/wallet-analysis-icon.svg';
import { formatter } from '../utils/formater';
import { coinsList } from '../utils/constans';

export const Wallet = () => {
  const total = coinsList.reduce(
    (all, item) => all + item.amount * item.rate,
    0
  );
  return (
    <section className='wallet'>
      <div className='wallet__info'>
        <div className='wallet__active'>
          <p className='wallet__connect'>Connect wallet -</p>
          <button className='wallet__choice'>
            <h2 className='wallet__title'>Metamask</h2>
            <img
              src={walletChoiceIcon}
              alt='Иконка кнопки выбор кошелька'
              className='wallet__choice-icon'
            />
          </button>
        </div>
        <button className='wallet__analysis'>
          <img
            src={walletAnalysisIcon}
            alt='Иконка кнопки анализ кошелька'
            className='walletAnalysisIcon'
          />
          <p className='wallet__analysis-numbers'>0x59485…82590</p>
        </button>
      </div>
      <p className='wallet__money'>{formatter.format(total)}</p>
    </section>
  );
};
