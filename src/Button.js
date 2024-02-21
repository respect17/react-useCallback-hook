import React, { useCallback } from 'react';

function Button({ onClick }) {

    const handleClick = useCallback(() => {
        onClick('clicked');
    }, [onClick]);

    return <button onClick={handleClick}>Click me</button>;
}

export default Button;
