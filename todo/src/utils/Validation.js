import {
    usernameRegex,
    usernameMinLength,
    passwordMinLength,
} from 'Constants/Regex';

export function validUsername(username) {
    return username.length >= usernameMinLength && usernameRegex.test(username);
}

export function validPassword(password) {
    return password.length >= passwordMinLength;
}

export function validPasswordConfirm(password, passwordConfirm) {
    return password === passwordConfirm && password.length >= passwordMinLength;
}
