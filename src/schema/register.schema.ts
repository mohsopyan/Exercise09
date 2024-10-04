import { object, string } from "yup";

const Schema = object({
    name: string().min(6, "can't be empty and min 6 characters"),
    email: string().email("Invalid format").required("Required"),
    password: string().min(6, "can't be empty and min 6 characters")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,'min 6 characters, at least contain one lowercase, one uppercase, one number, and one symbol').required("Required"),
})

export default Schema;