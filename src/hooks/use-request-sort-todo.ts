import { useState, useEffect } from 'react';
import { Todo as TodoType } from '../types';

type SortOption = 'a-z' | 'z-a';

const useRequestSortTodo = (
   todos: Record<string, TodoType>,
   sortOption: SortOption
) => {
   const [sortedTodos, setSortedTodos] = useState({});
   // ADD DATE AND SORT WITH DATE
   useEffect(() => {
      const sortTodos = () => {
         const entries = Object.entries(todos);
         switch (sortOption) {
            case 'a-z':
               entries.sort((a, b) => a[1].todo.localeCompare(b[1].todo));
               break;
            case 'z-a':
               entries.sort((a, b) => b[1].todo.localeCompare(a[1].todo));
               break;
            default:
               break;
         }
         setSortedTodos(entries);
      };

      sortTodos();
   }, [todos, sortOption]);

   return sortedTodos;
};

export default useRequestSortTodo;
