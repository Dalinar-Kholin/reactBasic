import React, { useState, useEffect } from 'react';


interface IPhoto {
    name : string
}

export default function Photo({name}: IPhoto) {
    const [imageUrl, setImageUrl] = useState<string>('');
    useEffect(() => {
        import(`./${name}`).then(image => {
            setImageUrl(image.default);
        }).catch(err => console.log("Nie udało się załadować obrazu", err));
    }, [name]);

    return (
        <div className="photoImg" style={{backgroundImage: `url(${imageUrl})`}}></div>
    )
}