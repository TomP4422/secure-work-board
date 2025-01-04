import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null; // Decodes and returns the token payload
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Checks if a valid, non-expired token exists
  }

  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp ? decoded.exp < currentTime : true; // Checks if the token is expired
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || ''; // Retrieves the token from localStorage
  }

  login(idToken: string) {
    localStorage.setItem('token', idToken); // Stores the token
    window.location.assign('/'); // Redirects to the home page
  }

  logout() {
    localStorage.removeItem('token'); // Removes the token
    window.location.assign('/login'); // Redirects to the login page
  }
}

export default new AuthService();
