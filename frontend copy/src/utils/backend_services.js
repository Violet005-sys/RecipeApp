import Cookie from 'js-cookie'

export const BACKEND_URL = "http://localhost:8000/api/v1";
export const token = Cookie.get('token');

