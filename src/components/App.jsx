import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from '../../src/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};
