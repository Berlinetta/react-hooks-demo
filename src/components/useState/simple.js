import React, { useState } from "react";

export default function YourFunctionComponent() {
    const [valid, setValid] = useState(true);
    return (
        <button onClick={() => setValid(!valid)}>
            Toggle Valid
        </button>
    );
}




