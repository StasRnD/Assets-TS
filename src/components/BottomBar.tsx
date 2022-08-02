import { Link } from 'react-router-dom';
import { ReactComponent as Wallet } from '../image/footer-icon/wallet-footer-icon.svg';
import { ReactComponent as Search } from '../image/footer-icon/search-footer-icon.svg';
import { ReactComponent as NFTs } from '../image/footer-icon/NFTs-footer-icon.svg';
import { ReactComponent as Stats } from '../image/footer-icon/stats-footer-icon.svg';
import { ReactComponent as Profile } from '../image/footer-icon/profile-footer-icon.svg';

const BottomBar = () => {
  return (
    <footer className='footer'>
      <div className='footer__nav'>
        <Link to='wallet' className='footer__nav-link'>
          <Wallet className='footer__link-icon' stroke='current' />
          Wallet
        </Link>
        <Link to='search' className='footer__nav-link'>
          <Search className='footer__link-icon' stroke='current' />
          Search
        </Link>
        <Link to='NFTs' className='footer__nav-link'>
          <NFTs className='footer__link-icon' stroke='current' />
          NFTs
        </Link>
        <Link to='stats' className='footer__nav-link'>
          <Stats className='footer__link-icon' stroke='current' />
          Stats
        </Link>
        <Link to='profile' className='footer__nav-link'>
          <Profile className='footer__link-icon' stroke='current' />
          Profile
        </Link>
      </div>
      <div className='footer__scroll'></div>
    </footer>
  );
};

export default BottomBar;
