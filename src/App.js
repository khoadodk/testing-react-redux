import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

const tempArr = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
        </section>
      </div>
    </>
  );
};

export default App;
