import styles from "./OptionItem.module.css";

const OptionItem = ({title, value, onChangeValue}) => {
    return (
        <div className={styles.option}>
            <label className={styles["option__label"]} htmlFor={title}>{title}</label>
            <input className={styles["option__input"]} id={title} min="0" type="number" onChange={e => onChangeValue(e.target.value)} defaultValue={value}/>
        </div>
    );
}
export default OptionItem;
