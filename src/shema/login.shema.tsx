import * as yup from "yup";

const LoginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().max(8).min(5).required()
    })
    .required();

export default LoginSchema;