import getPagesArray from "./utils/pages";
import { Page } from "./utils/ContentTypes"
import { docsUrlToContentObjectArrayJSON } from "./docToJson";

function run(pages: Page[]) {
    pages.forEach(page => {
        docsUrlToContentObjectArrayJSON(page.docsUrl, page.path).then(
            response => console.log("\n" + page.name + "\n" + response + "\n"));
    });
}

run(getPagesArray());