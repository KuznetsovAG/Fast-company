import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/TextField";
import CheckBocField from "../common/form/CheckBoxField";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [error, setError] = useState({});
    const handleChange = (target) => {
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
            <CheckBocField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBocField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 ms-auto"
            >
                Отправить
            </button>
        </form>
    );
};

export default LoginForm;
