const stringifyEvent = require('./index');

describe('stringifyEvent()', () => {
    it('ErrorEvent', () => {
        const eventInfo = JSON.parse(stringifyEvent(new ErrorEvent('WorkerError')));

        expect(eventInfo.timeStamp).toBeGreaterThan(0);

        delete eventInfo.timeStamp;

        expect(eventInfo).toEqual({
            "AT_TARGET": 2,
            "BUBBLING_PHASE": 3,
            "CAPTURING_PHASE": 1,
            "NONE": 0,
            "bubbles": false,
            "cancelBubble": false,
            "cancelable": false,
            "currentTarget": null,
            "defaultPrevented": false,
            "eventPhase": 0,
            "initEvent": "function",
            "preventDefault": "function",
            "stopImmediatePropagation": "function",
            "stopPropagation": "function",
            "target": null,
            "toString": "function",
            "type": "WorkerError"
        });
    });
    it('Event', () => {
        const eventInfo = JSON.parse(stringifyEvent(new Event('CustomEvent')));

        expect(eventInfo.timeStamp).toBeGreaterThan(0);

        delete eventInfo.timeStamp;

        expect(eventInfo).toEqual({
            "AT_TARGET": 2,
            "BUBBLING_PHASE": 3,
            "CAPTURING_PHASE": 1,
            "NONE": 0,
            "bubbles": false,
            "cancelBubble": false,
            "cancelable": false,
            "currentTarget": null,
            "defaultPrevented": false,
            "eventPhase": 0,
            "initEvent": "function",
            "preventDefault": "function",
            "stopImmediatePropagation": "function",
            "stopPropagation": "function",
            "target": null,
            "toString": "function",
            "type": "CustomEvent"
        });
    });
});