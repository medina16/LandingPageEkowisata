import styles from "./Button.module.css";

interface ButtonProps {
    buttontext: string;
    buttonlink: string;
    buttontype: string;
}

const Button :React.FC<ButtonProps> = ({buttontext, buttonlink, buttontype}) => {
    if (buttonlink == ""){
        return(
            <div className={styles.Button}>
                {buttontype == "primary" && <div className={styles.primary}><a>{buttontext}</a></div>}
                {buttontype == "secondary" && <div className={styles.secondary}><a>{buttontext}</a></div>}
            </div>
            );
    }
    return(
        <div className={styles.Button}>
            {buttontype == "primary" && <div className={styles.primary}><a href={buttonlink}>{buttontext}</a></div>}
            {buttontype == "secondary" && <div className={styles.secondary}><a href={buttonlink}>{buttontext}</a></div>}
        </div>
        );
    
};

export default Button;