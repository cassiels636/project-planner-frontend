import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    async login(username: string, password: string) {
        const response = await axios
            .post(API_URL + 'login', { username, password });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(username: string, email: string, password: string) {
        return axios
            .post(API_URL + 'register', {
                username,
                email,
                password
            });
    }
}

export default new AuthService();