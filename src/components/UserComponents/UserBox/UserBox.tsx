import { useState, useEffect } from "react";
import Button from "../../Buttons/button";
import UserCard from "../../UserComponents/UserCard/UserCard";
import "./User.scss";

export type User = {
  name: string;
  age: number;
};

export default function UserBox() {
  const [user, setUser] = useState<User>({ name: "", age: 0 });
  const [users, setUsers] = useState<User[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? Number(value) : value,
    }));
  };
  //logga state
  useEffect(() => {
    console.log("Users updated:", user);
  }, [user]);

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const deleteAll = () => {
    setUsers([]);
  };

  //resettar inputen med hjälp av nyckel. Om nyckeln age hämtas sätts värdet till 0 annars tom sträng
  const resetInput = (key: keyof User) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: key === "age" ? 0 : "",
    }));
  };

  return (
    <div className="userBox">
      <p>User</p>
      <div className="inputWrapper">
        <label htmlFor="name">Name:</label>

        <div className="inputContainer">
          <input
            className="nameInput"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <button className="resetNameInput" onClick={() => resetInput("name")}>
            X
          </button>
        </div>
      </div>
      <div className="inputWrapper">
        <label htmlFor="age">Age:</label>

        <div className="inputContainer">
          <input
            className="ageInput"
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <button className="resetAgeInput" onClick={() => resetInput("age")}>
            X
          </button>
        </div>
      </div>
      <Button
        title="Submit"
        handleClick={() => {
          if (user.name && user.age) {
            setUsers([...users, user]);
            setUser({ name: "", age: 0 });
          }
        }}
      />
      <div className="userContainer">
        {" "}
        {users.map((user, index) => (
          <UserCard
            key={`${index}-${user.name}`}
            {...user}
            onDelete={() => handleDelete(index)}
          /> // handleDelete funktionen
        ))}
      </div>
      {users.length > 1 && (
        <Button title="Delete all" handleClick={() => deleteAll()} />
      )}
    </div>
  );
}
