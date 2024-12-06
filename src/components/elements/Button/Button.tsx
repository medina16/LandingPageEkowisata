import Link from "next/link";
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
          <button className={styles.primary}>
            <p className="rubik">
              {icon == "info" && (
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              )}
              {buttontext}
            </p>
          </button>
        )}
        {buttontype == "secondary" && (
          <button className={styles.secondary}>
            <p>{buttontext}</p>
          </button>
        )}
      </div>
    );
  }

  let text, phone;

  if (icon == "telp") {
    const tokens = buttontext.split("/");
     text = tokens[0];
     phone = tokens[1];
  }
  else{
    text = "";
     phone = "";
  }

  return (
    <div className={styles.Button}>
      {buttontype == "primary" && (
        <div className={styles.primary}>
          <Link
            title={buttontext}
            rel="noopener noreferrer"
            target={buttonlink.includes("://") ? "_blank" : ""}
            href={buttonlink}
          >
            {icon != "" && (
              <div>
                {icon == "telp" && (
                  <i className="fa fa-phone" aria-hidden="true"></i>
                )}
                {icon == "wa" && (
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                )}
                {icon == "ig" && (
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                )}
                {icon == "fb" && (
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                )}
              </div>
            )}
            {icon == "telp" ? <div style={{lineHeight:"18px", display: "flex", flexDirection: "column" }}>{text} <span style={{ fontSize: "12px" }}>{phone}</span></div>  : buttontext}
          </Link>
        </div>
      )}
      {buttontype == "secondary" && (
        <div className={styles.secondary}>
          <Link
            title={buttontext}
            rel="noopener noreferrer"
            target={buttonlink.includes("://") ? "_blank" : ""}
            href={buttonlink}
          >
            {icon != "" && (
              <div>
                {icon == "wa" && (
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                )}
                {icon == "ig" && (
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                )}
                {icon == "fb" && (
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                )}
              </div>
            )}
            {buttontext}
          </Link>
        </div>
      )}
      {buttontype == "tertiary" && (
        <div className={styles.tertiary}>
          <Link
            title={buttontext}
            rel="noopener noreferrer"
            target={buttonlink.includes("://") ? "_blank" : ""}
            href={buttonlink}
          >
            {icon != "" && (
              <div>
                {icon == "wa" && (
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                )}
                {icon == "ig" && (
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                )}
                {icon == "fb" && (
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                )}
              </div>
            )}
            {buttontext}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Button;
