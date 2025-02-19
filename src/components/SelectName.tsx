import { useState } from "react";

export default function SelectName() {

    const [inputName, setInputName] = useState("");

    const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }; 

    return (
        <div>
            <h1>Name</h1>
            <input type="text" onChange={handleInputName} value={inputName}/>
            <p>{inputName}</p>
        </div>
    );
}