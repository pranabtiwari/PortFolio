import React, { useState, useEffect } from 'react';

const TestChange = () => {
    const texts = ["Hi, I'm  Pranab", "I'm Pranab", "I'm a Pranab"];
    const [currentText, setCurrentText] = useState('');
    const [endValue, setEndValue] = useState(1);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEndValue((prev) => {
                if (isForward) {
                    if (prev >= texts[index].length + 10) {
                        setIsForward(false);
                        return prev - 1;
                    }
                    return prev + 1;
                } else {
                    if (prev <= 1) {
                        setIsForward(true);
                        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                        return 1;
                    }
                    return prev - 1;
                }
            });
        }, 50); // Slower interval for smooth effect

        return () => clearInterval(intervalId); // Cleanup function
    }, [index, isForward, texts]);

    useEffect(() => {
        setCurrentText(texts[index].substring(0, endValue));
    }, [endValue, index, texts]);

    return (
        <div className="transtion ease duration-300">
            {currentText}
        </div>
    );
};

export default TestChange;
