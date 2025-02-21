import { useState } from "react";
import Button from "../../Buttons/button";
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
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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

  return (
    <div className="userBox">
      <p>User</p>
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
    </div>
  );
}
