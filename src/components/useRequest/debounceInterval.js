import {useRequest} from 'ahooks';
import Mock from 'mockjs';
import React from 'react';

async function getEmail(search) {
    console.log(search);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock({'data|5': ['@email']}).data);
        }, 300);
    });
}

export default () => {
    const {data, loading, run} = useRequest(getEmail, {
        debounceInterval: 500,
        manual: true,
    });

    return (
        <div>
            <p>Enter quickly to see the effect</p>
            <input placeholder="Select Emails" onChange={(e) => run(e.target.value)}/>
            {loading ? (
                <p>loading</p>
            ) : (
                <ul style={{marginTop: 8}}>
                    {data?.map((i) => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
