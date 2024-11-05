import styles from "./Button.module.css";

interface ButtonProps {
  buttontext: string;
  buttonlink: string;
  buttontype: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({
  buttontext,
  buttonlink,
  buttontype,
  icon,
}) => {
  if (buttonlink == "") {
    return (
      <div className={styles.Button}>
        {buttontype == "primary" && (
          <div className={styles.primary}>
            <a>
            {icon == "info" && <i className="fa fa-info-circle" aria-hidden="true"></i>}
                {buttontext}</a>
          </div>
        )}
        {buttontype == "secondary" && (
          <div className={styles.secondary}>
            <a>
              {buttontext}
            </a>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={styles.Button}>
      {buttontype == "primary" && (
        <div className={styles.primary}>
          <a target="_blank" href={buttonlink}>
          {icon != "" && (
                <div>
                  {icon == "wa" && (
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  )}
                  {icon == "ig" && (
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  )}
                </div>
              )}
            {buttontext}</a>
        </div>
      )}
      {buttontype == "secondary" && (
        <div className={styles.secondary}>
          <a target="_blank" href={buttonlink}>
          {icon != "" && (
                <div>
                  {icon == "wa" && (
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  )}
                  {icon == "ig" && (
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  )}
                </div>
              )}
            {buttontext}</a>
        </div>
      )}
    </div>
  );
};

export default Button;
