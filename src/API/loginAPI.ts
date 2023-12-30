

import { ExceptionNestjs, IExceptionNestJs } from "./errors"

import { urlAPI } from "./url"

export interface ILoginResponse {
    access_token: string
}
export const loginAPI = async (email: string, password: string) => {

    const response = await fetch(`${urlAPI}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        },
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: ILoginResponse = await response.json() as ILoginResponse
    return data


}
