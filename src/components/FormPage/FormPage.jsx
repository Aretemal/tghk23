import OptionItem from "./OptionItem/OptionItem";
import {useState} from "react";
import styles from "./FormPage.module.css";

const FormPage = () => {
    const [inputValue, setInputValue] = useState(0);
    const [textareaValue, setTextareaValue] = useState(0);
    const [checkboxValue, setCheckboxValue] = useState(0);
    const [elements, setElements] = useState([])
    const onBuildClick = () => {
        const arr = [];
        for(let i = 1; i <= inputValue; i++) {
            arr.push(<input placeholder={"Some text"} className={styles.element} key={'input' + i}/>);
        }
        for(let i = 1; i <= textareaValue; i++) {
            arr.push(<textarea placeholder={"Some text"} className={styles.element} key={'textarea' + i}></textarea>);
        }
        for(let i = 1; i <= checkboxValue; i++) {
            arr.push(
                <div className={styles.element}>
                    <input
                        key={"checkbox" + i}
                        type={"checkbox"}
                        id={"checkbox" + 1}
                    />
                    <label htmlFor={"checkbox" + 1}>Some text</label>
                </div>
                );
        }
        setElements(arr);
    }
    return (
        <div className={styles.container}>
            <div className={styles["main-form"]}>
                <OptionItem title={"input"} value={inputValue} onChangeValue={setInputValue} />
                <OptionItem title={"textarea"} value={textareaValue} onChangeValue={setTextareaValue} />
                <OptionItem title={"checkbox"} value={checkboxValue} onChangeValue={setCheckboxValue} />
                <button type={"button"} className={styles.button} onClick={onBuildClick}>Build</button>
            </div>
            <div className={styles["built-form"]}> {elements} </div>
        </div>
    );
}


export default FormPage;
