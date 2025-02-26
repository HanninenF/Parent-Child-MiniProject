<<<<<<< HEAD
import { useState, useEffect } from "react";
import Button from "../../Buttons/button";
import UserCard from "../../UserComponents/UserCard/UserCard";
=======
import { useState } from "react";
import Button from "../../Buttons/button";
>>>>>>> d1f7a213ce7437d1083858c81f62f7c57b631e96
import "./User.scss";

export type User = {
  name: string;
  age: number;
};

export default function UserBox() {
  const [user, setUser] = useState<User>({ name: "", age: 0 });
  const [users, setUsers] = useState<User[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Håller koll på vilken användare som redigeras

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

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof User,
  ) => {
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = {
        ...updatedUsers[editingIndex],
        [field]: e.target.value,
      };
      setUsers(updatedUsers);
    }
  };

  const handleSubmit = () => {
    if (user.name && user.age) {
      setUsers([...users, user]);
      setUser({ name: "", age: 0 });
    }
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    setEditingIndex(null);
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
<<<<<<< HEAD
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
=======
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </label>
      <Button title="Submit" handleClick={handleSubmit} />

      <div className="userContainer">
>>>>>>> d1f7a213ce7437d1083858c81f62f7c57b631e96
        {users.map((user, index) => (
          <div key={index} className="userCard">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleEditChange(e, "name")}
                />
                <input
                  type="number"
                  value={user.age}
                  onChange={(e) => handleEditChange(e, "age")}
                />
                <Button title="Save" handleClick={handleSaveEdit} />
              </>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <Button title="Edit" handleClick={() => handleEdit(index)} />
                <Button
                  title="Delete"
                  handleClick={() => handleDelete(index)}
                />
              </>
            )}
          </div>
        ))}
      </div>
<<<<<<< HEAD
      {users.length > 1 && (
        <Button title="Delete all" handleClick={() => deleteAll()} />
      )}
=======
>>>>>>> d1f7a213ce7437d1083858c81f62f7c57b631e96
    </div>
  );
}
