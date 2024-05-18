import { promises as fs } from 'fs'

const writeToLog = async (folder, file, data) => await fs.appendFile(`${ __appdir }/${folder}/${file}`, data)

export { writeToLog }
