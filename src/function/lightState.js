import React from 'react';
import { createMachine, interpret } from 'xstate';
import { viewerRerender } from './viewerRerender';

import GreenLight from "../compontent/GreenLight";
import YellowLight from "../compontent/YellowLight";
import RedLight from "../compontent/RedLight";

const lightMachine = createMachine({
    id: 'root',
    initial: 'red',
    states: {
        red: {
            on: {
                next: 'green',
                back: 'yellow',
            },
            meta: { Page: RedLight },
            entry: ['forceRerender', 'onEnterRed'],
            exit: ['onExitRed'],
        },
        green: {
            on: {
                next: 'yellow',
                back: 'red',
            },
            meta: { Page: GreenLight },
            entry: ['forceRerender', 'onEnterGreen'],
            exit: ['onExitGreen'],
        },
        yellow: {
            on: {
                next: 'red',
                back: 'green',
            },
            meta: { Page: YellowLight },
            entry: ['forceRerender', 'onEnterYellow'],
            exit: ['onExitYellow'],
        }
    },
}, {
    actions: {
        forceRerender: () => viewerRerender.Main.forceRerender(),
        onEnterRed: (context, event) => console.log('onEnterRed'),
        onEnterGreen: (context, event) => console.log('onEnterGreen'),
        onEnterYellow: (context, event) => console.log('onEnterYellow'),
        onExitRed: (context, event) => console.log('onExitRed'),
        onExitGreen: (context, event) => console.log('onExitGreen'),
        onExitYellow: (context, event) => console.log('onExitYellow'),
    }
});

const lightState = interpret(lightMachine);
lightState.start();
console.log(lightState);

export { lightState };