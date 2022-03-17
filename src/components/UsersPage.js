import React, { useState } from "react";
import { useRecoilState } from 'recoil'

import { usernamesList } from '../atoms/users'
import UserList from "./UsersList";


function UserInput() {
    const [input, setInput] = useState('');
    const [usernames, setUsernames] = useRecoilState(usernamesList)

    function onChange(event) {
        setInput(event.target.value.trim())
    }

    function submit() {
        setUsernames([...usernames, input])

        setInput('')
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChange} />
            <button onClick={submit}>Add GitHub User</button>
        </div>
    )
}

export default function UserPage() {
    return (
        <div>
            <UserInput />
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <UserList />
            </React.Suspense>

        </div>
    )
}