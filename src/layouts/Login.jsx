import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm";
import RegisterForm from "../components/ui/RegisterForm";

const Login = () => {
    const type = useParams;
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFromType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3>Register</h3>
                            <RegisterForm />
                            <p role="button" onClick={toggleFromType}>
                                Already have account? <a>Sing in</a>
                            </p>{" "}
                        </>
                    ) : (
                        <>
                            <h3>Login</h3>
                            <LoginForm />{" "}
                            <p role="button" onClick={toggleFromType}>
                                Dont have account? <a>Sing up</a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
