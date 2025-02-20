import "./UserCard.scss";
import { User } from "../UserBox/UserBox";
import Button from "../../Buttons/button";
import img from "./img.gif"

interface UserCardProps extends User {
    onDelete: () => void;  //onDelete som en funktion från UserCard
}

export default function UserCard({ name, age, onDelete }: UserCardProps) {
    return (
        <div className="userCard">
            <img src={img} alt="User Avatar" />
            <p>{name}</p>
            <p>Age: {age}</p>
            <Button title="Delete" handleClick={onDelete} />
        </div>
    );
}
