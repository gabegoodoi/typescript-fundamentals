import { UserInfoProps } from '../models/UserInfoProps.model';


const UserInfo: React.FC<UserInfoProps>= (props) => {
    return (
        <div>
            <h1>User Details</h1>
            <h2>{props.name}</h2>
            <p>{`Age: ${props.age}`}</p>
            <p>{`Email: ${props.email || "No email provided"}`}</p>
        </div>
    );
};

export default UserInfo;