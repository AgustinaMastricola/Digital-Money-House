import * as yup from "yup"

const textRegex = /^[A-Za-z]+$/
const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const dateRegex = /^(0[1-9]|1[0-2])\/(202[4-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})$/;

const validateExpirationDate = (value: string) => {
  if (!value) return false;

  const [month, year] = value.split("/").map(Number);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript son 0-indexados
  const currentYear = currentDate.getFullYear();

  if (year < currentYear) return false;
  if (year === currentYear && month <= currentMonth) return false;

  return true;
};

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
  cvc: yup.number().required().max(9999, 'El código de seguridad debe tener 3 o 4 dígitos.'),
  expiry: yup
    .string()
    .required("La fecha de vencimiento es requerida.")
    .matches(dateRegex, "La fecha de vencimiento debe ser posterior, y en formato mm/aaaa.")
    .test("is-valid-date", "La fecha de vencimiento debe ser posterior al mes actual.", validateExpirationDate)
    .max(7, "Solo ingrese mes y año"),  
    name: yup.string().required(),
    number: yup.number().required()
}).required()