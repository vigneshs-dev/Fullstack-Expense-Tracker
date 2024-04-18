import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import Sidebar from "../../components/sidebar/sidebar";
import ProfileCard from "../../components/userProfile/userProfileCard";
import Header from '../../components/utils/header';
import Message from '../../components/utils/message';
import ChangePassword from "../../components/userProfile/changePassword";
import useProfileImage from "../../hooks/useProfileImage";

function AdminProfile() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setEmail(user.email)
            setUsername(user.username)
        }
    }, [AuthService.getCurrentUser()])

    return(
        <div className="user-panel">
            <Sidebar activeNavId={8}/>
            <div className="user-content">
                <Header title="Settings"/>
                <Message message={message}/>
                <ProfileCard username={username} email={email} setMessage={setMessage}/>
                <ChangePassword email={email} setMessage={setMessage}/>
            </div>
        </div>
    )
}

export default AdminProfile;