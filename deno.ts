export const deno = async(task: string, json: string) => {
    const tasks = JSON.parse(json);

    if(!json){
        return null;
    }

    if(!task){
        console.error("You need to pass a task to denosk to run it, If you need help to know the denosk commands can run this command:");
        console.log("denosk help\n")
        return null;
    }

    if(task === "help"){
        console.log("To run a task only need to pass the name of the task after the denosk name how in this example: ");
        console.log("denosk start\n");
        console.log("To see your tasks run this command:")
        console.log("denosk tasks\n");
        return null;
    }

    if(task === "tasks"){
        if(tasks.tasks.length === 0){
            console.log("You don't have any tasks, please add one.\n");
            return null;
        }

        console.log("This are your tasks:");
        const keys= Object.keys(tasks.tasks);
        keys.forEach((key) => console.log(`denosk ${key}`));
        console.log(" ")
        return null;
    }
    
    if(tasks.tasks[task]){
        const taskProcess = Deno.run({
            cmd: ["deno", "task", task]
        });

        const status = await taskProcess.status();

        if(status.success) {
            return null
        }
    }else {
        console.error("That task does not exist.\n")
        return null;
    }
}