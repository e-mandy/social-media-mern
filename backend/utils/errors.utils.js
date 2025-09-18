const signUpError = (error) => {
    let errors = {
        pseudo: '',
        email: '',
        password: ''
    }

    if(error.message.includes('pseudo'))
        errors.pseudo = "Pseudo non valide"

    if(error.message.includes('email'))
        errors.email = "Email incorrect"

    if(error.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caractère minimum"

    if(error.code == 11000)
        errors.password = "Cet email existe déjà"
    return errors
}

module.exports = {signUpError}