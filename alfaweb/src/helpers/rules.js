const emailRules = [
    email => !!email || 'Email es requerido',
    email =>  /.+@.+\..+/.test(email) || 'El email tiene que ser valido',
]

const passwordRules = [
    password => !!password ||'La contraseña es requerida',
    password => password.length >= 6 || 'Debe ser mayor a 6 caracteres'
]

const nameRules = [
    name => !!name || 'El nombre es requerido',
    name => name !== "" || 'Debe ingresar su nombre',
    name => name.length <= 15 || 'El nombre no debe exeder los 15 caracteres'
]

export default { emailRules, passwordRules , nameRules}