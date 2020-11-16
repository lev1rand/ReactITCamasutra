import * as axios from "axios";

let configs = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            "API-KEY": '549d015c-e4a2-4a73-a1d7-6400e0b743db'
        }
});

export const usersAPI= {
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
    }
}

export const authAPI = {
    authMe:() => {
        return configs.get(`auth/me`).then(response => response.data);
    }
}
