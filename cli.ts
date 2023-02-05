import read from "./utils/read.ts";
import write from "./utils/write.ts";
import { red, yellow } from "./utils/colors.ts";

const denosk = async () => {
  const taskRun: string | undefined = Deno.args[0]; // Tarea
  const taskName: string | undefined = Deno.args[1]; // Nombre de la tarea a crear
  const task: string | undefined = Deno.args[2]; // Comando de la tarea a crear

  // All tasks
  if (!taskRun) {
    if (!read()?.json) {
      console.log(red("You don't have any tasks, please add one."));
      return null;
    }

    console.log(yellow("This are your tasks:"));
    const keys = Object.entries(read()?.json);
    keys.forEach(([key, value]) => {
      console.log(`- ${key}`);
      console.log(`   ${yellow("Denosk command:")} dn ${key}`);
      console.log(`   ${yellow("Task:")} ${value}`);
    });

    return null;
  }
  
  // Help command
  if (taskRun === "help") {
    console.log(yellow("To see all your tasks run this command:"));
    console.log("dn");

    console.log(yellow(
      "To run a task only need to pass the name of the task after the dn name how in this example: ",
    ));
    console.log("dn dev");

    console.log(yellow("To create a task you need to pass the name of the task after the argument task followed by the task with quotes, how in this example:"));
    console.log(`dn task dev "deno run --watch main.ts"`);

    return null;
  }

  // Create task
  if (taskRun === "task" && taskName && task) {
    write(taskName, task);
    return null;
  }

  if (taskRun === "task") {
    console.log(red("You need to pass the name of the task and the task."));
    return null;
  }

  // Run task
  try {
    if (read()?.json[taskRun]) {
      const taskProcess = Deno.run({
        cmd: [read()?.name, read()?.command, taskRun],
      });

      const status = await taskProcess.status();

      if (status.success) {
        return null;
      }
    } else {
      console.log(red("That task does not exist."));
      return null;
    }
  } catch (_error) {
    console.log(red(
      "Denosk can't find any file deno.json, deno.jsonc or run.json",
    ));
  }
};

denosk();
