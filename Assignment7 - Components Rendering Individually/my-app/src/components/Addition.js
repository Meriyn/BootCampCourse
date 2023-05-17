import React, { useContext, useRef, useState } from 'react';
import OperationContext from './context';

const Addition = () => {
  const operationRef = useContext(OperationContext);
  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const firstNumber = parseInt(firstNumberRef.current.value);
    const secondNumber = parseInt(secondNumberRef.current.value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const additionResult = firstNumber + secondNumber;
      setResult(additionResult);
      firstNumberRef.current.value = '';
      secondNumberRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Addition</h2>
      <input type="number" ref={firstNumberRef} placeholder="Enter first number" />
      <input type="number" ref={secondNumberRef} placeholder="Enter second number" />
      <button onClick={handleAddition}>Addition</button>
      {result !== null && <p>Addition Result: {result}</p>}
    </div>
  );
};

export default Addition;