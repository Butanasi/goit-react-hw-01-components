import { Profile } from './componets/Profile';
import { Statistics } from './componets/Statistics';
import { FriendList } from './componets/FriendList';
import { TransactionHistory } from './componets/TransactionHistory';

import user from './json/user.json';
import statistics from './json/stats.json';
import friend from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friend} />

      <TransactionHistory elements={transactions} />
    </div>
  );
}

export default App;
