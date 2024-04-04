import * as yup from "yup";

const RegisterSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().max(8).min(5).required(),
        confirmPassword: yup.string().required()
        .oneOf([yup.ref('password')], 'Passwords must match')
    })
    .required();

export default RegisterSchema;