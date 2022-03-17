import React from "react";
import { useRecoilValue } from "recoil";

import { usernamesList } from "../atoms/users";
import { userToFollowerMap } from "../atoms/users/selectors/followers"

export default function UserList() {
    const usernames = useRecoilValue(usernamesList)
    const followerMap = useRecoilValue(userToFollowerMap)

    function getFollowers(username) {
        return followerMap[username]
    }
    return (
        <ul>
            {usernames.map(username => (
                <li key={username}>
                    Usuário: {username}, possui {getFollowers(username)} seguidores!
                </li>
            ))}
        </ul>
    )
}