import logo from "../../assets/react.svg"
import styles from "./AppLogo.module.css"
const AppLogo=()=>{
    return (
        <div className={styles.appLogo}>
        <img src={logo} alt="Vinglish App Logo" />
        </div>
    )
}
export default AppLogo;