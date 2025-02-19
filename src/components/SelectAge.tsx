import React, { useState } from "react";

export default function SelectAge() {

    const [inputAge, setInputAge] = useState("");

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAge(e.target.value);
    }; 

    return (
        <div>
            <h1>Age</h1>
            <input type="number" onChange={handleChangeAge} value={inputAge}/>
            <p>{inputAge}</p>
        </div>
    );
}