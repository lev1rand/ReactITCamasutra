import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <input placeHolder = 'login'/>
                </div>

                <div>
                    <input placeHolder = 'password'/>
                </div>

                <div>
                    <input type = 'checkBox'/> remember me
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
const Login = (props)=>{
return(
    <div>
        <h1>Login</h1>
        <LoginForm></LoginForm>
    </div>
)
}
export default Login;