import { default as fsWithCallbacks } from "fs";
const fs = fsWithCallbacks.promises;
const fileName = "./data.json";

export const readFile = () =>
  fs.readFile(fileName).then((data) => console.log(JSON.parse(data)));

export const getUser = (id) =>
  fs.readFile(fileName).then((data) => {
    const arr = JSON.parse(data);

    const result = arr.find((el) => el.id === id);

    console.log(result);
  });

export const addUser = (name, email, phone) =>
  fs.readFile("./data.json").then((res) => {
    const contacts = JSON.parse(res);

    const newUser = {
      id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    };

    fs.writeFile("./data.json", JSON.stringify([...contacts, newUser]));
  });

export const removeUser = (id) =>
  fs.readFile(fileName).then((data) => {
    const arr = JSON.parse(data);

    const result = arr.filter((el) => el.id !== id);

    fs.writeFile(fileName, JSON.stringify(result));
  });