import React from 'react';

const EvenNumbers: React.FC = () => {
    const genericNumbers: number[] = [1,2,3,4,5,6,7,8,9]    
    const filterNumbers = (numberList: number[]): number[] => {
        return numberList.filter(number => number % 2 === 0);
      }

    return (
        <>
            <p>List of numbers: {genericNumbers.join(", ")}</p>
            <button 
                style={{ margin: "2px", padding: "2px" }} 
                onClick={() => console.log(filterNumbers(genericNumbers))}
            >
                Click to print even numbers from list to console log.
            </button>
        </>
    );
};

export default EvenNumbers;
