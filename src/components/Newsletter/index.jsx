import styles from './Newsletter.module.css'
import formStyles from './Form.module.css'
import { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    
    // Função para validar email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    
    // Verifica se o email é válido
    const isEmailValid = isValidEmail(email)

    return (
        <div className={styles.newsletter}>
            <div className={styles.container}>
                <div className={styles.containerTexto}>
                    <h1>Sua Casa com as <br />
                        <strong>melhores <br /> plantas</strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. <br />
                        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>
                </div>

                <form action="/" className={formStyles.form}>
                    <div className={formStyles.fieldGroup}>
                        <input 
                            type="email" 
                            placeholder="Insira seu e-mail" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <button 
                            type="button"
                            disabled={!isEmailValid}
                            style={{ 
                                opacity: isEmailValid ? 1 : 0.5,
                                cursor: isEmailValid ? 'pointer' : 'not-allowed'
                            }}
                        >
                            Assinar newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}