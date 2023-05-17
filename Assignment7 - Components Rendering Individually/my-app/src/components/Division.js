import React, { useContext, useRef, useState } from 'react';
import OperationContext from './context';

const Division = () => {
  const operationRef = useContext(OperationContext);
  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleDivision = () => {
    const firstNumber = parseInt(firstNumberRef.current.value);
    const secondNumber = parseInt(secondNumberRef.current.value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const divisionResult = firstNumber / secondNumber;
      setResult(divisionResult);
      firstNumberRef.current.value = '';
      secondNumberRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Division</h2>
      <input type="number" ref={firstNumberRef} placeholder="Enter first number" />
      <input type="number" ref={secondNumberRef} placeholder="Enter second number" />
      <button onClick={handleDivision}>Division</button>
      {result !== null && <p>Division Result: {result}</p>}
    </div>
  );
};

export default Division;