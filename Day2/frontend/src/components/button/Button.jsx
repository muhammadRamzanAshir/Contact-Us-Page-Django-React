import styles from "./button.module.css"

const  Button = ({isOutline, icon, text, ...rest}) => {
    return (
        <button
            className={isOutline ? styles.outline_btn : styles.primary_btn}
        >
            {icon}
            {text}  
        </button>
    );
}

export default Button;