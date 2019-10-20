import React, { useEffect } from "react";

export default function YourFunctionComponent() {
    const firstParam = () => {
        const intervalID = setInterval(() => {
            console.log("executed.");
        }, 1000);
        return function cleanup() {
            clearInterval(intervalID);
        };
    };
    const secondParam = [];
    useEffect(firstParam, secondParam);
    return <div></div>;
}
