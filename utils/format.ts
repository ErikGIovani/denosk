const format = async () => {
    const taskProcess = Deno.run({
      cmd: ["deno", "fmt", "./deno.json"],
    });
  
    const status = await taskProcess.status();
  
    if (status.success) {
      return null;
    }
};
  
export default format;
  