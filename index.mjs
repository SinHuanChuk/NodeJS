import { readFile, getUser, addUser, removeUser } from "./fileChanges.mjs";
import { program } from "commander";
program
  .option("-a, --action <type>", "Choose action")
  .option("-i, --id <type>", "id")
  .option("-n, --name <type>", "name")
  .option("-e, --email <type>", "email")
  .option("-p, --phone <type>", "phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      readFile();
      break;
    case "get":
      getUser(Number(id));
      break;
    case "add":
      addUser(name, email, phone);
      break;
    case "remove":
      removeUser(Number(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

invokeAction(argv);
