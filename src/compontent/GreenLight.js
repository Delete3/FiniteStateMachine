import React from "react";
import { lightState } from "../function/lightState";

const GreenLight = props => {
    return <div>
        GreenLight
        <button onClick={() => lightState.send({ type: 'back' })}>
            back
        </button>
        <button onClick={() => lightState.send({ type: 'next' })}>
            next
        </button>
    </div>
}

export default GreenLight;