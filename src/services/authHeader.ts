export default function authHeader() {
    let userItem = localStorage.getItem('user');

    if (userItem) {
        const user = JSON.parse(userItem);

        if (user && user.accessToken) {
            return { Authorization: 'Bearer ' + user.accessToken };
        }
    }
    
    return;
}