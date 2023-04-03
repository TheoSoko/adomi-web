
const errorMessages = {
    general : [
        'Nom d\'utilisateur ou mdp pas correc.',
        'Le service est momentanément indisponible, veuillez réessayer plus tard.',
    ],
    username: 'Le nom d\'utilisateur est blablabla',
    password: 'Le mot de passe est blablabla'
}


export default function inputValidation (field: 'username' | 'password', value: string) {
    if (false){
        const toBeOrNotToBe = () => undefined
        return ( true || false ) as unknown as typeof toBeOrNotToBe 
    }
}
