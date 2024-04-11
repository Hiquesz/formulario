import './InputBox.module.css'
import styles from './Form.module.css'

interface Props {
    type: 'button' | 'submit' | 'reset'
}

function Form({}: Props ){
    return (
        <form className={styles.formModule} method="get">
        Nome: <input className={styles.formContent} type="text" name="nome" /><br />
        E-mail: <input className={styles.formContent} type="email" name="email_usuario" /><br />
        Telefone: <input className={styles.formContent} type="text" name="telefone" /><br />
        <input type='submit' value="Enviar" />
      </form>
    )
}

export default Form