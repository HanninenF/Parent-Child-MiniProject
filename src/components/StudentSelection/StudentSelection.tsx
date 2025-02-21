import "./StudentSelection.scss";
import { useState } from 'react';
import Button from "../Buttons/button";


type Student = {
    course: string;
};

export default function StudentSelection() {
    const [isStudent, setIsStudent] = useState(false);
    const [isNotStudent, setIsNotStudent] = useState(false);
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [notStudentInput, setNotStudentInput] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isNotStudentEditing, setIsNotStudentEditing] = useState(false);

    const handleCheckboxChange = (type: 'student' | 'notStudent') => {
        if (type === 'student') {
            setIsStudent(true);
            setIsNotStudent(false);
            setIsNotStudentEditing(false);
            setIsEditing(true);
        } else {
            setIsNotStudent(true);
            setIsStudent(false);
            setIsEditing(false);
            setIsNotStudentEditing(true);
        }
        setSelectedCourse("");
    };

    const handleEdit = () => setIsEditing(true);
    const handleNotStudentEdit = () => setIsNotStudentEditing(true);
    
    const handleDelete = () => {
        setSelectedCourse("");
        setIsStudent(false);
        setIsNotStudent(false);
        setIsEditing(false);
        setIsNotStudentEditing(false);
        setNotStudentInput("");
    };

    const handleDeleteAll = () => setStudents([]);

    const handleSave = () => {
        if (selectedCourse) {
            setStudents([...students, { course: selectedCourse }]);
            setIsEditing(false);
        } else if (notStudentInput) {
            setStudents([...students, { course: notStudentInput }]);
            setIsNotStudentEditing(false);
        }
    };

    const courses = ["Frontend Dev", "Backend Dev", "Database", "UI-Designer", "Other"];

    return (
        <div className="studentSelection">
            <div className="card">
                <label>
                    <input type="checkbox" checked={isStudent} onChange={() => handleCheckboxChange('student')} />
                    Are you a student?
                </label>
                <label>
                    <input type="checkbox" checked={isNotStudent} onChange={() => handleCheckboxChange('notStudent')} />
                    Not a student
                </label>

                {isStudent && (
                    <div className="dropdownContainer">
                        <label>Select your course:</label>
                        {isEditing ? (
                            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                                <option value="" disabled>Select a course</option>
                                {courses.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>
                        ) : (
                            <p className="selectedCourse">{selectedCourse || "No course selected"}</p>
                        )}

                        <div className="buttonContainer">
                            {isEditing ? (
                                <Button title="Save" handleClick={handleSave} />
                            ) : (
                                <Button title="Edit" handleClick={handleEdit} />
                            )}
                            <Button title="Delete" handleClick={handleDelete} />
                        </div>
                    </div>
                )}

                {isNotStudent && (
                    <div className="dropdownContainer">
                        <label>Enter your occupation:</label>
                        {isNotStudentEditing ? (
                            <input type="text" value={notStudentInput} onChange={(e) => setNotStudentInput(e.target.value)} placeholder="Enter occupation" />
                        ) : (
                            <p className="selectedCourse">{notStudentInput || "No occupation entered"}</p>
                        )}

                        <div className="buttonContainer">
                            {isNotStudentEditing ? (
                                <Button title="Save" handleClick={handleSave} />
                            ) : (
                                <Button title="Edit" handleClick={handleNotStudentEdit} />
                            )}
                            <Button title="Delete" handleClick={handleDelete} />
                        </div>
                    </div>
                )}
            </div>
            {students.length > 0 && (
                <div className="studentsList">
                    <h2>Students List</h2>
                    <ul>
                        {students.map((student, index) => (
                            <li key={index}>{student.course}</li>
                        ))}
                    </ul>
                    <Button title="Delete All" handleClick={handleDeleteAll} />
                </div>
            )}
        </div>
    );
}
