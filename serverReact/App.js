import React from 'react';

import Header from '../src/components/Header.js';
import ShowLetter from './components/ShowLetter.js';

function App () {
  return (
    <>
      <Header />
      <div className='flex justify-center gap-5 mx-3'>
        
        <ShowLetter/>
      </div>

    </>
  );
};

export default App;
