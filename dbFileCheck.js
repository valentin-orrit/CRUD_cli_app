import fs from 'fs'
import { exit } from 'process'

export default function dbFileChek() {
    if (!fs.existsSync('db.json')) {
        console.log('Database is Empty!')
        exit(1)
    }
    // console.log('???')
}
