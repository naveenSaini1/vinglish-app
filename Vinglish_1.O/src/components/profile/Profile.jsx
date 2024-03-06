import profile from "../../assets/react.svg"
import styles from "./Profile.module.css"
const Profile=()=>{
    return (
       
        <div className={styles.mainProfile}>
            <img src={profile} alt="" />
        </div>
       
    )
}
export default Profile;