import React, {useState, useEffect} from 'react';

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    //const [isTest, setIsTest] = useState({a: "aaaa"});
    const obj = useState({a: "aaaa"});

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    //side effects.
    useEffect(() => {
        //ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            //ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

function FriendStatus(props) {
    //useFriendStatus(props.friend.id);
    const isOnline = useFriendStatus();

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus;