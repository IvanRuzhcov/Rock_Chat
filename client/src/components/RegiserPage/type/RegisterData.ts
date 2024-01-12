import Credentials from "./Credentials"

export interface RegisterData extends Credentials {
    email: string
    passwordRepeat:string
    telephone:string
}