
import Head from "next/head";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>oh to dos next.js</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}