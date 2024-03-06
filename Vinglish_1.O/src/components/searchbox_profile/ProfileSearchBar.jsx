import styles from "./ProfileSearchBar.module.css"
const ProfileSearchBar=()=>{
    return (
        <div className={styles.searchBar}>
        <input type="search" name="search" id="search" placeholder="Search User Profile..."/>
        </div>
    )
}
export default ProfileSearchBar;