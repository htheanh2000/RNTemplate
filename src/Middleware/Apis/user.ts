import axios from "axios";
import { Config } from '@/Config'

const { API_URL } = Config

/*
**  @Params
**  username: string
**  password: string
*/

export interface ILogin {
    username: string,
    password: string
}

export async function login(params: ILogin): Promise<any> {
    // return await axios.post(API_URL + '/auth/sign-in', {
    //     params
    // })
    return await new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(
                {
                    "id": "61420cb50e5a92474cc58165",
                    "username": "Zero",
                    "email": "htheanh20002@gmail.com",
                    "roles": ["ROLE_USER"],
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDIwY2I1MGU1YTkyNDc0Y2M1ODE2NSIsImlhdCI6MTYzMTg4NzMwMCwiZXhwIjoxNjMxOTczNzAwfQ.IyKphNnACVox_ANKkE6j2gwLIgZY06MCRKZ9ffgSCxM"
                }
            )
        },5000)
    })
}

