import { z } from 'zod';

const passwordRules= z.string().min(8, "Votre mot de passe doit avoir au moins 8 caractères").regex(/[a-z]/).regex(/[A-Z]/)

export const RegisterSchema = z.object({
    pseudo: z.string().min(3, "Votre pseudo doit avoir au moins 3 aractères"),
    email: z.email("L'adresse mail doit respecter le format example@example.com"),
    password: passwordRules,
    password_confirmation: passwordRules
}).refine((data) => data.password === data.password_confirmation, {
    message: "Le mot de passe doit être le même",

    path: ['password_confirmation']
}).refine((data) => {
    const parsingResult = parseInt(data.pseudo)

    return !Number.isInteger(parsingResult)
}, {
    message: "Votre pseudo ne peut pas être un entier mais une chaine de caractères",

    path: ['pseudo']
});

export const AuthStoreSchema = z.object({
    user: RegisterSchema.nullable(),
    token: z.string().nullable()
});

export type RegisterUser = z.infer<typeof RegisterSchema>

export type AuthStore = z.infer<typeof AuthStoreSchema> & {
    logout: () => void
}