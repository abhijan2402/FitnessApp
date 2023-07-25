import axios from "axios";


export const api = axios.create({
    baseURL: 'https://ec2-15-206-239-93.ap-south-1.compute.amazonaws.com/api',
    headers: { "Content-Type": "multipart/form-data" },
    sslPinning: {
        certs: ["certificat"]
    },
});

export async function getOtp(phone) {
    const data = new FormData();
    data.append('phone', phone)
    return await api.post('/sendotp', data)
}
export async function registerUser(user) {
    const data = new FormData();
    data.append('hash', user.hash)
    data.append('otp', user.otp)
    data.append('phone', user.phone)
    data.append('email', user.email)
    data.append('first_name', user.first_name)
    data.append('last_name', user.last_name)
    data.append('password', user.password)
    data.append('gender', user.gender)
    data.append('dob', user.dob)
    data.append('weight', user.weight)
    data.append('height', user.height)
    data.append('goal', 'improve shape')
    return await api.post('/register-user', data)
}
export async function loginUser(credentials) {
    const data = new FormData()
    data.append('email', credentials.email)
    data.append('password', credentials.password)
    return await api.post('/login-user', data)
}