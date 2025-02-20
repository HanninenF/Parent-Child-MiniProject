import "./StudentSelection.scss";
import { useState } from 'react';
import Button from "../Buttons/button";

type Student = {
    course: string;
};

export default function StudentSelection() {
    const [isStudent, setIsStudent] = useState(false);
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleCheckboxChange = () => {
        setIsStudent(!isStudent);
        setSelectedCourse(""); 
        setIsEditing(true); // = Visar dropdown direkt
    };

    const handleEdit = () => { setIsEditing(true) };
    const handleDelete = () => {
        setSelectedCourse(""); 
        setIsStudent(false); 
        setIsEditing(false);
    };

    const handleSave = () => {
        if (selectedCourse) {
            setStudents([...students, { course: selectedCourse }]);
            setIsEditing(false);
        }
    };

    const courses = ["Frontend Dev", "Backend Dev", "Database", "UI-Designer", "Other"];

    return (
        <div className="studentSelection">
            <label>
                <input type="checkbox" checked={isStudent} onChange={handleCheckboxChange} />
                Are you a student?
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

            {students.length > 0 && (
                <div className="studentsList">
                    <h2>Students List</h2>
                    <ul>
                        {students.map((student, index) => (
                            <li key={index}>{student.course}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}