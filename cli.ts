import { deno } from "./deno.ts";
import { trex } from "./trex.ts";

const task: string = Deno.args[0];

const denosk = async(task: string) => {
    
    let json = "denosk";

    try {
        json = Deno.readTextFileSync("./deno.json");
        await deno(task, json);
    } catch (_error) {
        null;
    }

    try {
        json = Deno.readTextFileSync("./deno.jsonc");
        await deno(task, json)
    } catch(_error) {
        null;
    }

    try {
        json = Deno.readTextFileSync("./run.json");
        await trex(task, json)
    } catch (_error) {
        console.error("denosk can't find any file deno.json, deno.jsonc or run.json\n");
        return null;
    }
}

denosk(task)
