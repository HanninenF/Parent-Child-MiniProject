//Denna jobbar jag med än så länge 🤌
import "./SubmittedInfo.scss";
import Button from "../Buttons/button";
import "../UserComponents/UserBox/UserBox";
import "../StudentSelection/StudentSelection";
import { useState } from "react";

type User = {
    name: string;
    age: number;
    gif?: string;
    isStudent: boolean;
    studentInfo?: { course: string };
};

type SubmittedInfoProps = {
    users?: User[];
    onSubmit: (user: User) => void;
    onDeleteUser: (index: number) => void;
    onEditUser: (index: number, updatedUser: User) => void;
};

const SubmittedInfo: React.FC<SubmittedInfoProps> = ({
    users = [],
    onSubmit,
    onDeleteUser,
    onEditUser,
}) => {
    return (
        <div className="submittedInfo">
            <h2>Submitted Information</h2>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index} className="infoCard">
                        <div className="userDetails">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Age:</strong> {user.age}</p>
                            {user.gif && <img src={user.gif} alt="User gif" className="userGif" />}
                            <p><strong>Student Status:</strong> {user.isStudent ? "Student" : "Not a student"}</p>
                            {user.isStudent && user.studentInfo && (
                                <p><strong>Course:</strong> {user.studentInfo.course}</p>
                            )}
                        </div>
                        <div className="buttonContainer">
                            <Button title="Edit" handleClick={() => onEditUser(index, user)} />
                            <Button title="Delete" handleClick={() => onDeleteUser(index)} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No submitted information yet.</p>
            )}
        </div>
    );
};

export default SubmittedInfo;
