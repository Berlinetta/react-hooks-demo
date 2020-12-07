import {useRequest} from 'ahooks';
import {message} from 'antd';
import React from 'react';

export function deleteUser(userId) {
    console.log(userId);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({success: true});
        }, 1000);
    });
}

export default () => {
    //fetches cache all of the response data in memory.
    const {run, fetches} = useRequest(deleteUser, {
        manual: true,
        //key generator.
        fetchKey: (id) => id,
        onSuccess: (result, params) => {
            if (result.success) {
                message.success(`Disabled user ${params[0]}`);
            }
        },
    });

    const users = [
        {id: '1', username: 'A'},
        {id: '2', username: 'B'},
        {id: '3', username: 'C'},
    ];

    return (
        <div>
            <div>You can click all buttons, each request has its own status.</div>
            <ul>
                {users.map((user) => (
                    <li key={user.id} style={{marginTop: 8}}>
                        <button
                            type="button"
                            onClick={() => {
                                run(user.id);
                            }}
                            disabled={fetches[user.id]?.loading}
                        >
                            {fetches[user.id]?.loading ? 'loading' : `delete ${user.username}`}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
