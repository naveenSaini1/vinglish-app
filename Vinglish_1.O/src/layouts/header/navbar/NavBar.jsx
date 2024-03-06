import AppLogo from "../../../components/app_logo/AppLogo";
import Profile from "../../../components/profile/Profile";
import ProfileSearchBar from "../../../components/searchbox_profile/ProfileSearchBar";
import styles from "./NavBar.module.css";

const NavBar=()=>{
    return (
        <div className={styles.navBarMainContainer}>
        

        <AppLogo/>
        <ProfileSearchBar/>
        <Profile/>
        
        </div>
    )
}
export default NavBar;