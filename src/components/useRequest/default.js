import {useRequest} from 'ahooks';
import Mock from 'mockjs';
import React from 'react';

function getUsername() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    //request is async.
    const {data, error, loading} = useRequest(getUsername);

    if (error) {
        return <div>failed to load</div>;
    }
    //if it's the first load and we haven't got the response back yet, loading is true.
    if (loading) {
        return <div>loading...</div>;
    }
    return <div>Username: {data}</div>;
};
