import {promises as fs} from 'fs';

export async function readJsonFile(path) {
  const rawData = await fs.readFile(path);

  return JSON.parse(rawData);
}