import React, { useContext, useRef, useState } from 'react';
import OperationContext from './context';

const Subtraction = () => {
  const operationRef = useContext(OperationContext);
  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleSubtraction = () => {
    const firstNumber = parseInt(firstNumberRef.current.value);
    const secondNumber = parseInt(secondNumberRef.current.value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const subtractionResult = firstNumber - secondNumber;
      setResult(subtractionResult);
      firstNumberRef.current.value = '';
      secondNumberRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Subtraction</h2>
      <input type="number" ref={firstNumberRef} placeholder="Enter first number" />
      <input type="number" ref={secondNumberRef} placeholder="Enter second number" />
      <button onClick={handleSubtraction}>Subtract</button>
      {result !== null && <p>Subtraction Result: {result}</p>}
    </div>
  );
};

export default Subtraction;