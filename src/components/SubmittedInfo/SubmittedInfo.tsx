import { useState } from "react";
import "./SubmittedInfo.scss";
import Button from "../Buttons/button";

type User = { name: string; age: number };

type SubmittedInfoProps = {
  users?: User[];
  studentInfo?: { course: string };
  onDeleteUser: (index: number) => void;
  onEditUser: (index: number, updatedUser: User) => void;
  onDeleteStudentInfo: () => void;
  onEditStudentInfo: (updatedStudentInfo: { course: string }) => void;
};

const SubmittedInfo: React.FC<SubmittedInfoProps> = ({
  users = [],
  onDeleteUser,
  onEditUser,
 
}) => {
  // Håller reda på vilken användare som redigeras
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editUserData, setEditUserData] = useState<User>({ name: "", age: 0 });

  const handleEditClick = (index: number, user: User) => {
    setEditingIndex(index);
    setEditUserData(user);
  };

  // Funktion för att spara redigerad användare
  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      onEditUser(editingIndex, editUserData);
      setEditingIndex(null);
    }
  };

  return (
    <div className="submittedInfo">
      <h2>Users</h2>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="userCard">
            {editingIndex === index ? (
              // Om vi redigerar en användare, visa input-fält
              <div>
                <input
                  type="text"
                  value={editUserData.name}
                  onChange={(e) =>
                    setEditUserData({ ...editUserData, name: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editUserData.age}
                  onChange={(e) =>
                    setEditUserData({
                      ...editUserData,
                      age: Number(e.target.value),
                    })
                  }
                />
                <Button title="Save" handleClick={handleSaveEdit} />
                <Button
                  title="Cancel"
                  handleClick={() => setEditingIndex(null)}
                />
              </div>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <Button
                  title="Delete"
                  handleClick={() => onDeleteUser(index)}
                />
                <Button
                  title="Edit"
                  handleClick={() => handleEditClick(index, user)}
                />
              </>
            )}
          </div>
        ))
      ) : (
        <p>No users submitted yet.</p>
      )}
    </div>
  );
};

export default SubmittedInfo;
