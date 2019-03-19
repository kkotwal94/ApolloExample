import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const OptimisticResponse = () => {
  return (
    <>
      <CreateTodo optimistic />
      <TodoList />
    </>
  );
};

export default OptimisticResponse;
