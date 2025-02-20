import "./SubmittedInfo.scss";
import Button from "../Buttons/button";
import "../UserComponents/UserBox/UserBox";

type SubmittedInfoProps = {
    users?: { name: string; age: number }[];
    studentInfo?: { course: string };
    onDeleteUser: (index: number) => void;
    onEditUser: (index: number, updatedUser: { name: string; age: number }) => void;
    onDeleteStudentInfo: () => void;
    onEditStudentInfo: (updatedStudentInfo: { course: string }) => void;
};

const SubmittedInfo: React.FC<SubmittedInfoProps> = ({
    users = [], 
    studentInfo,
    onDeleteUser,
    onEditUser,
    onDeleteStudentInfo,
    onEditStudentInfo,
}) => {
    return (
        <div className="submittedInfo">
            <h2>Users</h2>
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index} className="userCard">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <Button title="Delete" handleClick={() => onDeleteUser(index)} />
                        <Button title="Edit" handleClick={() => onEditUser(index, { name: user.name, age: user.age })} />
                    </div>
                ))
            ) : (
                <p>No users submitted yet.</p>
            )}

            <h2>Student:</h2>
            {studentInfo ? (
                <div className="studentCard">
                    <p><strong>Course:</strong> {studentInfo.course}</p>
                    <Button title="Delete" handleClick={onDeleteStudentInfo} />
                    <Button title="Edit" handleClick={() => onEditStudentInfo({ course: studentInfo.course })} />
                </div>
            ) : (
                <p>No student info submitted yet.</p>
            )}
            <Button title='Submit' handleClick={() => {
                            if (users.name && users.age) {
                                setUsers([...users, user]);
                                setUser({ name: "", age: 0 });
                            }
                        }} />
        </div>
    );
};

export default SubmittedInfo;
