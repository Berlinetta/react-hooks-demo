import React, { useEffect } from "react";

export default function YourFunctionComponent() {
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("executed.");
        }, 1000);
        return function cleanup() {
            clearInterval(intervalID);
        };
    }, []);
    return <div></div>;
}
