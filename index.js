module.exports = function stringifyEvent (event) {
    if (!event) {
        return '';
    }

    const proto = event.constructor && event.constructor.prototype;

    if (!proto) {
        // standard stringification
        return JSON.stringify(event);
    }

    const eventInfo = {};

    for (let prop in proto) {
        if (prop !== 'constructor') {
            let value = event[prop];

            if (value instanceof Node) {
                value = 'Node';
            } else if (value instanceof Window) {
                value = 'Window';
            } else if (typeof value === 'function') {
                value = 'function';
            }

            eventInfo[prop] = value;
        }
    }

    return JSON.stringify(eventInfo);
};