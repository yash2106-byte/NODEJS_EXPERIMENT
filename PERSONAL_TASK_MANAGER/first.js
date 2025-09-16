const prompt = require("prompt-sync")();
let list = [];

console.log("Welcome to Task Manager!");

while (true) {
  let ch = prompt("Do you want to continue? (yes/no): ");

  if (ch !== "yes") {
    break; // exit the loop
  }

  const command = prompt("Enter the command (add, delete, list): ");

  if (command === "add") {
    const task = prompt("Enter the task you want to add: ");
    list.push(task);
    console.log(`✅ Task added: ${task}`);
  } 
  else if (command === "delete") {
    const task = prompt("Enter the task you want to delete: ");
    const index = list.indexOf(task);

    if (index !== -1) {
      list.splice(index, 1); // remove the task
      console.log(`🗑️ Task deleted: ${task}`);
    } else {
      console.log("⚠️ Task not found!");
    }
  } 
  else if (command === "list") {
    console.log("📋 Your tasks:");
    if (list.length === 0) {
      console.log("No tasks yet!");
    } else {
      list.forEach((t, i) => console.log(`${i + 1}. ${t}`));
    }
  } 
  else {
    console.log("❌ Unknown command!");
  }
}

console.log("Final Task List:", list);
