import React from 'react';

import Profile from './Profile';
import user from './user.json';

import Statistics from './Statistics';
import data from './data.json';

import FriendList from './FriendList';
import friends from './friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

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
