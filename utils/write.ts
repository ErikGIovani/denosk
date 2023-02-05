import format from "./format.ts";
import { yellow } from "./colors.ts";

const write = async (taskName: string, task: string) => {
  try {
    const json = JSON.parse(Deno.readTextFileSync("./deno.json"));

    if (json) {
      Deno.writeTextFileSync(
        "./deno.json",
        JSON.stringify({
          ...json,
          "tasks": { ...json?.tasks, [taskName]: task },
        }),
      );
      await format();
      console.log(yellow("Task created"));
      return null;
    }
  } catch (_error) {
    Deno.createSync("./deno.json");
    Deno.writeTextFileSync(
      "./deno.json",
      JSON.stringify({ "tasks": { [taskName]: task } }),
    );
    await format();
    console.log(yellow("Task created"));
  }
};

export default write;
