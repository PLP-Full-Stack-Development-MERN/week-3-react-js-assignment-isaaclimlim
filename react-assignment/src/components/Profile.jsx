import profileImage from '../assets/PassportSize.jpg';
function Profile(props) {

    return (
        <>
            <div className = "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6" >
                <h1 className = "text-gray-500">My Profile Information</h1>
                <img className = "mx-auto h-24 rounded-full " src = { profileImage } alt="Yellow background passport" />
                    <div>
                        <p>Name: { props.name }</p>
                        <p>Age: { props.age }</p>
                        <p>Country: { props.country }</p>
                        <p>Email: { props.email }</p>
                    </div>
                
            </div>
        </>
    )
}

export default Profile;