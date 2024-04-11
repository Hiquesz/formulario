import './InputBox.module.css'
import styles from './InputBox.module.css'

interface Props {
    type: 'button' | 'submit' | 'reset',
    placeholderText: string
}

function InputBox({placeholderText}: Props ){
    return (
        <><input type="text"
            placeholder={placeholderText}
            className={styles.inputBox}
        ></input><input type='submit' value="Enviar" /></>
    )
}

export default InputBox