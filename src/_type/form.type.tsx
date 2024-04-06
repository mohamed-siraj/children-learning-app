export type TRegister = {
    email : string,
    password : string,
    confirmPassword : string
};

export type TLogin = {
    email : string,
    password : string
};

export type TSubmit = {
    category : string,
    pronouns : string,
    sounds? : string
};