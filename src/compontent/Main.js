import React, { useEffect, useReducer } from "react";
import { lightState } from "../function/lightState";
import { viewerRerender } from "../function/viewerRerender";

const Main = props => {
    const [, forceRerender] = useReducer(x => x + 1, 0);
    const stateSnapshot = lightState.getSnapshot();

    useEffect(() => {
        viewerRerender.Main.forceRerender = forceRerender;
    }, []);

    const Page = stateSnapshot.meta[`root.${stateSnapshot.value}`].Page;

    return <div>
        <Page />
    </div>
}

export default Main;