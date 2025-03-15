import React from 'react'

const Title = ({title}) => {
    return (
        <h2
            style={{
                fontSize: "1.5rem", // Equivalent to text-2xl
                fontWeight: 600, // Equivalent to font-semibold
                textTransform: "capitalize", // Equivalent to capitaliz
            }}
        >
            {title}
        </h2>
    );
};


export default Title;
