export default function isAuthorized() {
    return !!getToken()
}
export function login(token, profile, id) {
    setToken(token);
    setProfile(profile);
    setId(id);
}
export function logout() {
    deleteToken();
    deleteProfile();
    deleteId();
}
export function setToken(token) {
    localStorage.setItem('token', 'Bearer ' + token);
}
export function getToken() {
    return localStorage.getItem('token');
}
export function deleteToken() {
    localStorage.removeItem('token');
}

export function setProfile(profile) {
    localStorage.setItem('profile', profile);
}
export function getProfile() {
    return localStorage.getItem('profile');
}
export function deleteProfile() {
    localStorage.removeItem('profile');
}

export function setId(id) {
    localStorage.setItem('id', id);
}
export function getId() {
    return localStorage.getItem('id');
}
export function deleteId() {
    localStorage.removeItem('id');
}