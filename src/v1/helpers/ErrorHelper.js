class ErrorHelper {
    static error(code, message) {
        return {
            code: code,
            message: message,
        }
    }
}

module.exports = ErrorHelper