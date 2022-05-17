import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validation();
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (!isValid) return;
        console.log(e);
    };
    const validationConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введён некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSimbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен содержать минимум 8 символов",
                value: 8
            }
        }
    };

    const validation = () => {
        const error = validator(data, validationConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };

    const isValid = Object.keys(error).length === 0;

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Элекстронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={error.email}
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            error={error.password}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 ms-auto"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
