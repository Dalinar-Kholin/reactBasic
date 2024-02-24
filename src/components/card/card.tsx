import React, {useEffect, useState} from 'react';

interface ICard{
    name : string,
    x : number,
    y : number
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Card({ name, x, y }: ICard) {
    const [ticker, setTicker] = useState(0);

    useEffect(() => {
        const updateTicker = async () => {
            for (let i = 1; i < 1000; i++) {
                setTicker(prevTicker => prevTicker + 1);
                await sleep(1000); // Opcjonalnie, aby zobaczyć animację zmian
            }
        };
        if (ticker === 0) {
            updateTicker();
        }
    }, [ticker]); // Ostrzeżenie: To może stworzyć pętlę nieskończoną, jeśli nie jest prawidłowo kontrolowane

    return (
        <>
        </>
    );
}