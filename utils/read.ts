const read = () => {
    try {
      return {
        name: "deno",
        command: "task",
        json: JSON.parse(Deno.readTextFileSync("./deno.json"))?.tasks,
      };
    } catch (_error) {
      null;
    }
  
    try {
      return {
        name: "deno",
        command: "task",
        json: JSON.parse(Deno.readTextFileSync("./deno.jsonc"))?.tasks,
      };
    } catch (_error) {
      null;
    }
  
    return {
      name: "trex",
      command: "run",
      json: JSON.parse(Deno.readTextFileSync("./run.json"))?.scripts,
    };
};
  
export default read;
  