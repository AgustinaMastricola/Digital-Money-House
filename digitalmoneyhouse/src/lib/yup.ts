import * as yup from "yup"

const textRegex = /^[A-Za-z]+$/
const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const signupSchema = yup.object({
  dni: yup.number().min(8, 'Ingresa un DNI válido.').typeError('El dni solo puede contener números, sin puntos.').required('Completá los campos requeridos.'),
  email: yup.string().matches(emailRegex,'El formato del email es inválido. Ejemplo: email@gmail.com').required('Completá los campos requeridos.'),
  firstname: yup.string().matches(textRegex, "El nombre solo debe contener letras.").required('Completá los campos requeridos.'),
  lastname: yup.string().matches(textRegex, "El apellido solo debe contener letras.").required('Completá los campos requeridos.'),
  password: yup.string().matches(passRegex, "La contraseña debe contener al menos 1 carácter especial, 1 letra mayúscula y un número).").required('Completá los campos requeridos.').min(6,'La contraseña debe tener 6 caracteres como mínimo.').max(20, 'La contraseña puede tener 20 caracteres como máximo.' ),
  passwordConfirmed: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden.').required('Completá los campos requeridos.'),
  phone: yup.string().optional()
}).required()

export const loginSchema = yup.object({
  email: yup.string().matches(emailRegex,'El formato del email es inválido. Ejemplo: email@gmail.com').required('Completá los campos requeridos.'),
  password: yup.string().matches(passRegex, "La contraseña debe contener al menos 1 carácter especial, 1 letra mayúscula y un número.").required('Completá campos requeridos.').min(6, 'La contraseña debe tener 6 caracteres como mínimo.'),
}).required()

export const updateUserSchema = yup.object({
  dni: yup.number(),
  email: yup.string().email('El formato del email es inválido. Ejemplo: email@gmail.com'),
  firstname: yup.string(),
  lastname: yup.string(),
  password: yup.string(),
  phone: yup.string()
}).required()

const aliasRegex = /^[a-zA-Z]+\.[a-zA-Z]+\.[a-zA-Z]+$/
export const updateAliasSchema = yup.object({
  alias: yup.string().matches(aliasRegex, "El alias debe contener 3 palabras separadas por un punto. Ej.: PALABRA.PALABRA.PALABRA")
})

export const addCardPaySchema = yup.object({
  cod: yup.number().required(),
  expiration_date: yup.string().required(),
  first_last_name: yup.string().required(),
  number_id: yup.number().required()
}).required()