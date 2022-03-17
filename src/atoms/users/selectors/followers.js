import { selector } from "recoil";

import { usernamesList } from "..";

import api from "../../../services/api";

export const userToFollowerMap = selector({
    key: 'userToFollowerMap',
    get: async ({get}) =>{
        const _usernamesList = get(usernamesList);

        const responses = await Promise.all(
            _usernamesList.map((username) => api.get(`/users/${username}`))
        )

        const followerMap = {}

        responses.forEach(response => {
            const { data: user } = response;

            followerMap[user.login] = user.followers
        })
    }
})