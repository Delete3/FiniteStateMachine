import React from "react";
import { lightState } from "../function/lightState";

const RedLight = props => {
    return <div>
        RedLight
        <button onClick={() => lightState.send({ type: 'back' })}>
            back
        </button>
        <button onClick={() => lightState.send({ type: 'next' })}>
            next
        </button>
    </div>
}

export default RedLight;