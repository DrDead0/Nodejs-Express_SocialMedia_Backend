class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [], // Changed parameter name to 'errors'
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // You might want to initialize this later based on your requirements
        this.success = false; // Typically used to indicate failure
        this.errors = errors; // Assign the errors array to this.errors

        // Capture stack trace if no custom stack is provided
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
