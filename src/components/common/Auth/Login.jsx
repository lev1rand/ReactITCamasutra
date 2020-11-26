import React from 'react';
import {Field, reduxForm} from "redux-form"
import {Input} from "../FormsControls/FormControl";
import {required} from "../../../utils/validators";
import {logIn} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input}
                           name={"email"}
                           placeholder={"login"}
                           validate={[required]}
                    />
                </div>

                <div>
                    <Field component={Input}
                           name={"password"}
                           placeholder={"password"}
                           validate={[required]}
                    />
                </div>

                <div>
                    <Field component={Input}
                           name={"rememberMe"}
                           type={"checkBox"}/> remember me
                </div>
                {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) => {

    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, true);
    }
    debugger;
    if (props.isAuthorized) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}
export default connect(mapStateToProps, {logIn})(Login);