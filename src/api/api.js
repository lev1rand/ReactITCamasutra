import * as axios from "axios";

let configs = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            "API-KEY": '0e66d03e-e9e4-4fb4-b1b2-827f90ebfef7'
        }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return configs.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser: (userId) => {
        return configs.post(`follow/${userId}`, {})
            .then(response => response.data);
    },
    unfollowUser: (userId) => {
        return configs.delete(`follow/${userId}`)
            .then(response => response.data);
    },

}

export const profileAPI = {
    getProfile: (userId) => {
        return configs.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus: (userId) => {
        return configs.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus: (status) => {
        return configs.put(`profile/status`,
            {
                status: status
            });
    }
}
export const authAPI = {
    authMe: () => {
        return configs.get(`auth/me`).then(response => response.data);
    },
    login: (email, password, rememberMe = false) => {
        return configs.post('auth/login', {email, password, rememberMe});
    },
    logout: () => {
        return configs.delete('auth/login');
    }
}

