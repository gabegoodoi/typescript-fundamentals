import React from 'react';

const ColorList: React.FC = () => {
    const colors: string[] = ["blue", "green", "orange"];

    return (
        <ul>
            {colors.map((color, index) => (
                <li key={index} style={{ listStyleType: "none" }}>
                {color}
                </li>
            ))}
        </ul>
    );
};

export default ColorList;
