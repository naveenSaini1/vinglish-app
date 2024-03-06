import OptionButtons from "../../components/main_buttons/OptionButtons";
import { BUTTONS } from "../../constants/options/Buttons";
import styles from "./Sidebar.module.css"
const SideBar=()=>{
    return (
        <div className={styles.sideBarContainer}>
            <OptionButtons title={BUTTONS.OPTIONS.CALLING.title} icon={BUTTONS.OPTIONS.CALLING.icon} />
            <OptionButtons title={BUTTONS.OPTIONS.ROOMS.title} icon={BUTTONS.OPTIONS.ROOMS.icon} />
            <OptionButtons title={BUTTONS.OPTIONS.MESSAGES.title} icon={BUTTONS.OPTIONS.MESSAGES.icon} />
            <OptionButtons title={BUTTONS.OPTIONS.FEED.title} icon={BUTTONS.OPTIONS.FEED.icon} />

        </div>
    )
}
export default SideBar;