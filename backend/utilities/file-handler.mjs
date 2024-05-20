import { promises as fs, appendFileSync } from 'fs'

const writeToLogSync = (folder, file, data) => appendFileSync(`${ __appdir }/${folder}/${file}`, data)
const writeToLogAsync = async (folder, file, data) => await fs.appendFile(`${ __appdir }/${folder}/${file}`, data)

export { writeToLogSync, writeToLogAsync }
