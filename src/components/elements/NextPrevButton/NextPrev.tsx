import {ChevronRight, ChevronLeft} from "lucide-react"

import styles from "./NextPrev.module.css";

interface NextPrevProps {
    direction: boolean;
}

const NextPrev :React.FC<NextPrevProps> = ({direction}) => {
    return(
    <div className={styles.NextPrev}>
        {direction ? <ChevronRight style={{height:"35px", width:"35px",strokeWidth:"2.5"}}/> : <ChevronLeft style={{height:"35px", width:"35px",strokeWidth:"2.5"}}/>}
    </div>
    );
};

export default NextPrev;