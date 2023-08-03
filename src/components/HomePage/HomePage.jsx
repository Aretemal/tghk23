import {useNavigate} from "react-router-dom";
import styles from './HomePage.module.css'

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <button  type={"button"} className={styles.button} onClick={()=> navigate("/form")}>
            FORM
        </button>
    );
 }

 export default HomePage;
