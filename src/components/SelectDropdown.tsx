import { useState } from 'react';

export default function Dropdown() {
    const [selectedValue, setSelectedValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        console.log('Submitted value:', selectedValue);
    };

    const handleEdit = () => {
        setIsSubmitted(false);
    };

    return (
        <div>
            <h1>Form</h1>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}disabled={isSubmitted}>
                <option value="">Select an option</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Transformer">Transformer</option>
            </select>
            {!isSubmitted ? (<button onClick={handleSubmit}>Submit</button>) : (<button onClick={handleEdit}>Edit</button>)}
            {isSubmitted && <p>You selected: {selectedValue}</p>}
        </div>
    );
}