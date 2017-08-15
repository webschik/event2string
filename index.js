module.exports = function stringifyEvent (event) {
    if (!event) {
        return '';
    }

    var proto = event.constructor && event.constructor.prototype;

    if (!proto) {
        // standard stringification
        return JSON.stringify(event);
    }

    var eventInfo = {};

    for (var prop in proto) {
        if (prop !== 'constructor') {
            var value = event[prop];

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