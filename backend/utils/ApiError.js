class ApiError extends Error {
    constructor(message, statusCode){

        // Passer le message au parent Error dont on hérite
        super(message);

        // On enregistre le message
        this.statusCode = statusCode;

        // On enregistre le message d'erreur
        this.message = message;

        // On enregistre l'etat du l'exception
        this.state = (`${statusCode}`.startsWith('4')) ? 'client error' : 'server error'

        // Permettre de retracer facilement les fonctions ou les fichiers à la base des erreurs.
        Error.captureStackTrace(this, this.constructor);

    }
}

export { ApiError };