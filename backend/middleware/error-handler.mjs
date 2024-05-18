
const handleUndefined = (req, res, next) => {
    const error = new Error(`No ( ${req.method} ${res.statusCode} ) nuts for you...`)
    res.message = `No ( ${req.method} ${res.statusCode} ) nuts for you...`
    next(error)
}

const handleError = (err, req, res, next) => {
    res.status(500).send(`${err.message}`)
}


export { handleError, handleUndefined }