import { Wallet } from './Wallet';
import { Menu } from './Menu';
import { SubMenu } from './SubMenu';
import { Coins } from './Coins';
import { MenuFooter } from './MenuFooter';
import { CoinProps } from '../utils/types';

type CoinsProps = {
  coins: CoinProps[];
  isOpenDialog: (currentDialogType: string | null) => void;
};

const Main = ({ coins, isOpenDialog }: CoinsProps) => {
  return (
    <main className='main'>
      <Wallet />
      <Menu openDialog={isOpenDialog} />
      <SubMenu />
      <Coins coins={coins} />
      <MenuFooter />
    </main>
  );
};

export default Main;
