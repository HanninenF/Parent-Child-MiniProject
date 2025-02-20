import { useState } from 'react'; 
import Button from '../../Buttons/button'; 
import UserCard from '../../UserComponents/UserCard/UserCard'; 
import "./User.scss"; 

export type User = {
    name: string;
    age: number;
};

export default function UserBox() {
    const [user, setUser] = useState<User>({ name: "", age: 0 });
    const [users, setUsers] = useState<User[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleDelete = (index: number) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div className='userBox'>
            <p>User</p>
            <label>Name:<input type="text" name="name" value={user.name} onChange={handleChange} /></label>
            <label>Age: <input type="number" name="age"value={user.age} onChange={handleChange} /> </label>
            <Button title='Submit' handleClick={() => {
                if (user.name && user.age) {
                    setUsers([...users, user]);
                    setUser({ name: "", age: 0 });
                }
            }} />
            <div className='userContainer'> {users.map((user, index) => (
                    <UserCard key={`${index}-${user.name}`} {...user} onDelete={() => handleDelete(index)}/> // handleDelete funktionen
                ))}
            </div>
        </div>
    );
}
