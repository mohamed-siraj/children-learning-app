import * as yup from "yup";

const SubmitSchema = yup
    .object({
        category: yup.string().required(),
        pronouns: yup.string().required(),
        sounds: yup.string().optional()
    })
    .required();

export default SubmitSchema;