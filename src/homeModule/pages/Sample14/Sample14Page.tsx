import {useState} from "react";
import classes from "./Sample14.module.css";

export default function Sample14Page() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier: string, value: string) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (

        <>
            <section>
                <h5>Sample 14: Styling react components</h5>
                <p style={{color: 'red', textAlign: 'left'}}>
                    inline styles paragraph
                </p>

                <div id="auth-inputs" className={classes.authInputs}>
                    <div className={classes.controls}>
                        <p>
                            <label className={`label ${emailNotValid ? classes.invalid : undefined}`}>Email</label>
                            <input
                                type="email"
                                //style={ {backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'}}
                                className={emailNotValid ? classes.invalid : undefined}
                                onChange={(event) => handleInputChange('email', event.target.value)}
                            />
                        </p>
                        <p>
                            <label className={`label ${passwordNotValid ? classes.invalid : undefined}`}>Password</label>
                            <input
                                type="password"
                                className={passwordNotValid ? classes.invalid : undefined}
                                onChange={(event) =>
                                    handleInputChange('password', event.target.value)
                                }
                            />
                        </p>
                    </div>
                    <div className={classes.actions}>
                        <button type="button" className={classes.textButton} >
                            Create a new account
                        </button>

                        <button className={classes.button} onClick={handleLogin}>Sign In</button>


                    </div>
                </div>

            </section>
        </>
    );
}
