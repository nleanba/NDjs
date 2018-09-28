var logger;

if (typeof console === 'object' && console) {
    logger = console;
} else {
    logger = {
        log: nop,
        debug: nop,
        warn: nop,
        error: nop
    }
}

function nop() {}

module.exports = logger;