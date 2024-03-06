import styles from "./OptionButtons.module.css"
const OptionButtons = ({ title, icon }) => {
    return (
      
            <div className={styles.optionsButtonsDiv}>
                <div className={styles.optonsIcon}>
                    {icon}
                </div>
                <div>
                    <button  className={styles.optionsButtons} >
                        {title}
                    </button>
                </div>

            </div>

      
    )
}
export default OptionButtons;