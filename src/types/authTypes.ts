export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export interface AccountResponse {
    user: {
        id: string;
        email: string;
        username: string;
        is_active: boolean;
        created: Date;
        updated: Date;
    };
    access: string;
    refresh: string;
}