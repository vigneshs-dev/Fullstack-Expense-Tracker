import { useEffect } from 'react';
import user from '../../assets/images/user.png'
import useProfileImage from '../../hooks/useProfileImage';
import Loading from "../utils/loading";

function ProfileCard({ username, email, setMessage}) {

    const [profileImg, textMessage, isLoading, uploadProfileImage, removeProfileImage] = useProfileImage();

    useEffect(() => {
        setMessage(textMessage)
    }, [textMessage])

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        const maxSize = 10 * 1024 * 1024;
        if (selectedFile && selectedFile.size > maxSize) {
            return
        }
        await uploadProfileImage(selectedFile)
    }

    return (
        <div className='profile' style={{ maxWidth: '400px', flexDirection: 'column', justifyContent: 'center', padding: '25px' }}>
            {
                (isLoading) ?
                    <Loading /> :
                    (
                        <>
                            <div className="profile-img">
                                {!profileImg && <img src={user} width={140} height={140} />}
                                {profileImg && <img src={profileImg} width={140} height={140} />}
                                <div className="action">
                                    {profileImg && <label onClick={removeProfileImage}>Remove image</label>}
                                    <label>
                                        Change image
                                        <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png" />
                                    </label>
                                </div>
                            </div>

                            <div style={{ alignItems: 'center' }}>
                                <h3>{username}</h3>
                                <p>{email}</p>
                            </div></>
                    )
            }
        </div>
    )
}

export default ProfileCard;