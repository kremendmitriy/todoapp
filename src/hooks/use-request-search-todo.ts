/* eslint-disable @typescript-eslint/no-unused-vars */
import useRequestGetTodoList from './use-request-get-todoList';
import { Todo as TodoType } from '../types';
import { useState } from 'react';

const useRequestSearchTodo = () => {
   const { todoList } = useRequestGetTodoList();

   const [searchResult, setSearchResult] = useState<Record<string, TodoType>>(
      {}
   );

   const findTodo = (value: string) => {
      console.log(searchResult);

      if (!value) {
         setSearchResult(todoList);
      } else {
         const filteredNotes = Object.entries(todoList).filter(([_, todo]) => {
            return todo.todo.toLowerCase().includes(value.toLowerCase());
         });
         setSearchResult(Object.fromEntries(filteredNotes));
      }
   };

   return { findTodo, searchResult };
};

export default useRequestSearchTodo;
