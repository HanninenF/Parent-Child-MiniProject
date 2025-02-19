

export default function SelectType() {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
    };
    return(
        <div>
            <h1>Select Type</h1>
            <label><input type="checkbox" name="funny" value="Funny" onChange={handleCheckboxChange}/>Funny</label>
            <label><input type="checkbox" name="strong" value="Strong" onChange={handleCheckboxChange}/>Strong</label>
            <label><input type="checkbox" name="cute" value="Cute" onChange={handleCheckboxChange}/>Cute</label>
            <label><input type="checkbox" name="tasty" value="Tasty" onChange={handleCheckboxChange}/>Tasty</label>
        </div>
    );

}