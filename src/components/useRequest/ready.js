import {useRequest} from 'ahooks';
import Mock from 'mockjs';
import React from 'react';

function getUserId() {
    console.log("start retrieving userid..");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`useid retrieved: ${1011}`);
            resolve(1011);
        }, 1000);
    });
}

function getUsername(id) {
    console.log('user id:', id);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    const userIdRequest = useRequest(getUserId);
    const usernameRequest = useRequest(() => getUsername(userIdRequest.data), {
        ready: !!userIdRequest.data,
    });

    return (
        <div>
            <p>UserId: {userIdRequest.loading ? 'loading' : userIdRequest.data}</p>
            <p>Username: {usernameRequest.loading ? 'loading' : usernameRequest.data}</p>
        </div>
    );
};
