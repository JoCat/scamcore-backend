class ErrorHelper {
    static error(code, message) {
        return {
            code,
            message,
        };
    }
}

module.exports = ErrorHelper;
