import React, { useRef } from 'react';
import OperationContext from './components/context';
import Subtraction from './components/Subtraction';
import Addition from './components/Addition';
import Division from './components/Division';


const App = () => {
  const operationRef = useRef(null);

  return (
    <div>
      <OperationContext.Provider value={operationRef}>
        <Addition/>
        <Subtraction/>
        <Division/>
      </OperationContext.Provider>
    </div>
  );
};

export default App;