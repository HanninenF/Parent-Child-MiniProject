


export default function SelectColor() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    return (
        <div>
            <h1>Select Color</h1>
            <label><input type="radio" name="color" value="red" onChange={handleChange}/>Red </label>
            <label>  <input type="radio" name="color" value="blue" onChange={handleChange}/>Blue</label>
            <label>  <input type="radio" name="color" value="black" onChange={handleChange}/>Black</label>
            <label>  <input type="radio" name="color" value="green" onChange={handleChange}/>Green</label>
        </div>
    );
}