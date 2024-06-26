import { writeToLogSync } from "../utilities/file-handler.mjs"

const loggEvent = (req, res, next) => {
    res.on('finish', () => {
        const tag = res.statusCode >= 200 && res.statusCode <= 299 ? 'event' : 'error'
        const log = `${tag.toUpperCase()} - ${req.method}( ${res.statusCode} ) - ${new Date().toLocaleDateString('sv-SE')} ${new Date().toLocaleTimeString('sv-SE')} - ${req.originalUrl} ${res.message ? ` - ${res.message}` : ''}\n`
        writeToLogSync('logs', `${tag}.log`, log)
    })
    next()
}

export { loggEvent }