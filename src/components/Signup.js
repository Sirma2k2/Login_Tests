import { useState } from 'react'
import React from 'react'
import validator from 'validator'
import './Signup.css'

function Signup() {

    const [PwErrorMessage, setPwErrorMessage] = useState('')
    const [UnErrorMessage, setUnErrorMessage] = useState('')
    const [EmErrorMessage, setEmErrorMessage] = useState('')

    const validate = (field, value) => {
        if (field === 'password') {
            if (validator.isStrongPassword(value, {
                minLength: 6, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
            })) {
                setPwErrorMessage('Vahva salasana!')
            } else {
                setPwErrorMessage('Salasana ei tarpeeksi vahva!')
            }
        }
        if (field === 'email') {
            if (validator.isEmail(value, {             
            })) {
                setEmErrorMessage('')
         
            } else {
                setEmErrorMessage('sähköposti ei kelpaa!')
            }
        }
        if (field === 'username') {
            if (value.length < 4) {
                setUnErrorMessage('Käyttäjänimi on liian lyhyt')
            } else if (!/[A-Z]/.test(value)) {
                setUnErrorMessage('käyttäjänimessä ei ole isoa kirjainta')
            } else if (!/[0-9!@#$%^&*]/.test(value)) {
                setUnErrorMessage('käyttäjänimessä täytyy olla numero tai erikoismerkki')
            } else {
                setUnErrorMessage('')
            }
        }
    }




    return (
        <div className='container'>
            <div className="header">
                <h1>Käyttäjänluonti testaus</h1>

                <div className='registration'>
                    <label>Käyttäjänimi</label>
                    <input
                        type='text'
                        placeholder='Syötä käyttäjänimi'
                        onChange={(e) => validate('username', e.target.value)}
                    />
                    {UnErrorMessage && (
                        <p style={{ fontWeight: 'bold', color: UnErrorMessage === 'Käyttäjänimi kelpaa!' ? 'green' : 'red' }}>
                            {UnErrorMessage}
                        </p>
                    )}

                    <label>Sähköposti</label>
                    <input
                        type='email'
                        placeholder='Syötä sähköposti'
                        onChange={(e) => validate('email', e.target.value)}
                    />

                    {EmErrorMessage && (
                        <p style={{ fontWeight: 'bold', color: EmErrorMessage === 'sähköposti kelpaa!' ? 'green' : 'red' }}>
                            {EmErrorMessage}
                        </p>
                    )}

                    <label>Salasana</label>
                    <input
                        type='password'
                        placeholder='Syötä salasana'
                        onChange={(e) => validate('password', e.target.value)}
                    />

                    {PwErrorMessage && (
                        <p
                            style={{
                                fontWeight: 'bold',
                                color: PwErrorMessage === 'Vahva salasana' ? 'green' : 'red',
                            }}
                        >
                            {PwErrorMessage}
                        </p>
                    )}
                    <p className='hint'>
                        Salasana tulee olla vähintää kuusi merkkiä ja sisältää vähintää yksi erikoismerkki, iso kirjain ja numero
                    </p>

                </div>
                <div className='signup-button'>
                    <button>
                        Hyväksy
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Signup