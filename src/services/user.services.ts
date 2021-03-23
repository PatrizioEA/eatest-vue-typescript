import axios from 'axios';

interface TokenResponse {
    refresh: string,
    access: string
}

export async function login(username: string, password: string) {   

    const response = await axios.post<TokenResponse>('http://127.0.0.1:8000/api/token/', { username, password });    
    const token = response.data;
    console.log(token)
    return token.access;
}