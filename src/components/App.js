import React from 'react';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import FriendList from './FriendsList/FriendList';
import friends from './FriendsList/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';

const App = () => {
  return (
    <div>
      <h1>Task 1</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Task 2</h1>
      <Statistics title="Upload stats" stats={data} />
      <h1>Task 3</h1>
      <FriendList friends={friends} />
      <h1>Task 4</h1>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
