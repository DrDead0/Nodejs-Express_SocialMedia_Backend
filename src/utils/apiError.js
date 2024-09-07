//? this is for the custom api error message which will be sent to the frontend.
//? this is will send error message which will be displayed to user by frontend.
 class ApiError extends Error{
    constructor(
        statusCode,
        message = "something went wrong",
        error =[],
        stack =" "
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success= false;
        this.errors = errors

        if(stack){
            this.stack = stack

        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export{ApiError}