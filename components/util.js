import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('data.json');

export function readDataFromFile() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

export function writeDataToFile(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}
