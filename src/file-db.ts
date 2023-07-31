import { access, readFile, writeFile } from 'fs/promises';

import { List } from './list';

export class FileDB {
    constructor(private filePath: string) {
        this.filePath = filePath;
        this.read();
    }

    async write<T>(list: List<T>, file = this.filePath) {
        await writeFile(file, JSON.stringify(list.toArray()));
    }

    async read<T>(file = this.filePath) {
        // check if file exists if it doesn't create it then read it
        if (!(await this.fileExists(file))) {
            await this.write(new List());
        }

        const data = await readFile(file, 'utf-8');
        const parsedData = JSON.parse(data);
        const list = new List<T>();
        list.fromArray(parsedData);
        return list;
    }

    private async fileExists(file = this.filePath) {
        try {
            await access(file);
            return true;
        } catch (error) {
            return false;
        }
    }
}
