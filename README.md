<div align="center">
   <img width="15%" src="./src/logo.png" alt="#">
   <h1>Denosk</h1
      
**The task runner for Deno**
      
   Denosk is a task runner for Deno, if you come from Node JS with the Yarn package manager and you miss being able to run a script with **yarn dev** or **yarn start** and you want to avoid writing commands like **deno task dev** or **trex run dev** if you are using the manager of Deno's Trex packages then Denosk is for you.

   <a href="https://www.buymeacoffee.com/erikgiovani" target="_blank">
      <img width="20%" src="https://helloimjessa.files.wordpress.com/2021/06/bmc-button.png">
   </a>
</div>

<div align="center">
   <h2>Installation</h2>
   
   ```console
   deno install -A --unstable -n denosk --no-check https://deno.land/x/denosk/cli.ts
   ```
</div>

<div align="center">
   <h2>Permissions</h2>
   
The permissions that Denosk uses are **--allow-read** and **--allow-run**.
</div>

<div align="center">
   <h2>Usage</h2>
   
To display help on how to use Denosk.
```console
denosk help
```

To display all tasks from your deno.json, deno.jsonc or run.json file if you are using Trex scripts.
```console
denosk tasks
```

To execute a task found in your deno.json, deno.jsonc or run.json file if you are using Trex, with Denosk just pass the name of the task to be executed after the word denosk as in the following example.
```console
denosk start
```
</div>


<div align="center">
   <h2>Why Denosk?</h2>
   
Denosk is born from a combination between the word **Deno** and the word **Task**, it's that simple.
</div>
