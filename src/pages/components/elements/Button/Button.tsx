import styles from "./Button.module.css";

interface ButtonProps {
    buttontext: string;
    buttonlink: string;
}

const Button :React.FC<ButtonProps> = ({buttontext, buttonlink}) => {
    return(
    <div className={styles.Button}>
        <div className={styles.buttonHover}><a href={buttonlink}>{buttontext}</a></div>
        
    </div>
    );
};

export default Button;