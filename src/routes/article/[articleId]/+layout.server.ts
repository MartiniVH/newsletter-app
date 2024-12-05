import type { LayoutServerLoad } from "./$types";
import fs from 'fs/promises';
import path from 'path';
import articles from '../../../data/articles.json';

export const load: LayoutServerLoad = async ({ params }) => {

        const fileName = articles.find((article) => article.id.toString() === params.articleId)?.file;

        if (fileName) {
            try {
                const filePath = path.join(process.cwd(), 'src', 'data', 'articles', `${fileName}`);
                const markdown = await fs.readFile(filePath, 'utf-8');
        
                if (markdown) {
                    return { markdown };
                }
            } catch {
                return;
            }
        }
}
