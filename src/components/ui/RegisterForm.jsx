import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/TextField";
import api from "../../api";
import SelectField from "../common/form/SelectField";
import RadioField from "../common/form/RadioField";
import MultiSelectField from "../common/form/MultiSelectField";
import CheckBocField from "../common/form/CheckBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [qualities, setQualities] = useState({});
    const [error, setError] = useState({});
    const [professions, setProfession] = useState();
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);
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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберетн вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
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
            <SelectField
                defaultOption=" Выберете..."
                options={professions}
                onChange={handleChange}
                error={error.profession}
                value={data.profession}
                name="profession"
                label="Выбирете вашу профессию"
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберете пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name={qualities}
                defaultValue={data.qualities}
                label="Выбирете качество"
            />
            <CheckBocField
                value={data.licence}
                onChange={handleChange}
                name="licence"
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBocField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 ms-auto"
                error={error.licence}
            >
                Отправить
            </button>
        </form>
    );
};

export default RegisterForm;
