import ResponseModel from "../models/ResponseModel.mjs"

const handleUndefined = (req, res, next) => {
    res.message = `No ( ${req.method} ${res.statusCode} ) nuts for you...`
    const error = ResponseModel.error(500, res.message, null)
    next(error)
}

const handleError = (err, req, res, next) => {
    res.status(500).send(err)
}


export { handleError, handleUndefined }