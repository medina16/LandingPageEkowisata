import {ArrowRight, ArrowLeft} from "lucide-react"

import styles from "./NextPrev.module.css";

interface NextPrevProps {
    direction: boolean;
}

const NextPrev :React.FC<NextPrevProps> = ({direction}) => {
    return(
    <div className={styles.NextPrev}>
        {direction ? <ArrowRight/> : <ArrowLeft/>}
    </div>
    );
};

export default NextPrev;