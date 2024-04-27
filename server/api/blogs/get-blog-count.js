import * as fs from "node:fs";
import * as path from "node:path";

export default defineEventHandler(async () => {

    const POSTS_DIRECTORY = path.join(process.cwd(), `${process.env.NODE_ENV === 'development' ? "public" : ""}`, 'blogs');

    const files = fs.readdirSync(POSTS_DIRECTORY);

    console.log(files);
    return files.length;
})