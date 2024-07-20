/* eslint-disable @typescript-eslint/no-unused-vars */
import useRequestGetTodoList from './use-request-get-todoList';
import { Todo as TodoType } from '../types';
import { useState } from 'react';

const UseRequestSearchTodo = () => {
   const { todoList }: { todoList: Record<string, TodoType> } =
      useRequestGetTodoList();

   const [searchResult, setSearchResult] = useState({});

   const findTodo = (value: string) => {
      const filteredNotes = Object.entries(todoList).filter(([_, todo]) => {
         console.log(todo.todo.toLowerCase().includes(value.toLowerCase()));

         return todo.todo.toLowerCase().includes(value.toLowerCase());
      });
      setSearchResult(Object.fromEntries(filteredNotes));
   };

   return { findTodo, searchResult };
};

export default UseRequestSearchTodo;
