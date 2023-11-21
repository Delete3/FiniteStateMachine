import React, { useEffect } from "react";
import { lightState } from "../function/lightState";

const YellowLight = props => {
    useEffect(() => {
        console.log('aaaaa');
        return () => console.log('bbbbb');
    }, []);

    return <div>
        YellowLight
        <button onClick={() => lightState.send({ type: 'back' })}>
            back
        </button>
        <button onClick={() => lightState.send({ type: 'next' })}>
            next
        </button>
    </div>
}

export default YellowLight;