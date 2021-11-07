// import axios from "axios";
import { get, post, del } from "./api";

const list = document.querySelector(".js-list");
const form = document.querySelector("form");
const input = form.querySelector("input");

async function getToDos() {
    const response = await get("/todo");
    return response.data.records;
}
function clearAllToDos() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

async function generateToDos() {
    const todos = await getToDos();
    clearAllToDos();
    todos.map((todo) => {
        const {
            fields: { name },
            id,
        } = todo;
        const tempLi = document.createElement("li");
        tempLi.innerHTML = name;
        tempLi.id = id;

        list.appendChild(tempLi);
    });
}

async function createToDo(todoString) {
    post("/todo", { fields: { name: todoString } });
    generateToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    createToDo(input.value);
    input.value = "";
    generateToDos();
}

function init() {
    generateToDos();
    form.addEventListener("submit", handleSubmit);
}

init();
