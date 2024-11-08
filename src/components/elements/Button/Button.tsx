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
            <a title={buttontext}>
            {icon == "info" && <i className="fa fa-info-circle" aria-hidden="true"></i>}
                {buttontext}</a>
          </div>
        )}
        {buttontype == "secondary" && (
          <div className={styles.secondary}>
            <a title={buttontext}>
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
          <a title={buttontext} rel="noopener noreferrer" target={!buttonlink.includes("#")? "_blank" : ""} href={buttonlink}>
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
          <a title={buttontext} rel="noopener noreferrer" target={!buttonlink.includes("#")? "_blank" : ""} href={buttonlink}>
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
