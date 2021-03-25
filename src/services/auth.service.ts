import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/token/';

interface TokenResponse {
    refresh: string,
    access: string
}

// export async function login(username: string, password: string) {   

//     const response = await axios.post<TokenResponse>(API_URL, { username, password });    
//     const token = response.data;
//     console.log(token)
//     return token.access;
// }

class AuthService {

    async login(username: string, password: string) {   
      const response = await axios.post<TokenResponse>(API_URL, { username, password });    
      const token = response.data;
      localStorage.setItem('token', token.access);
      console.log(token)
      return token.access;
    }

    // login(username: string, password: string) {

    //   return axios
    //     .post(API_URL + 'signin', {
    //       username: username,
    //       password: password
    //     })
    //     .then(response => {
    //       console.log('response', response)
    //       if (response.data.access) {
    //         localStorage.setItem('user', response.data.access);
    //       }
  
    //       return response.data.access;
    //     });
    // }
  
    logout() {

      localStorage.removeItem('user');
    }
  
    register(username: string, password: string, email: string) {
      return axios.post(API_URL + 'signup', {
        username: username,
        email: email,
        password: password
      });
    }
  }
  
  export default new AuthService();