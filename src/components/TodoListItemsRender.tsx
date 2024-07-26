import Todo from './Todo';
import Search from './Search';
import Sort from './Sort';
import '../styles/loader.css';

import { Todo as TodoType } from '../types';
import { useState } from 'react';

import UseRequestDeleteTodo from '../hooks/use-request-delete-todo';
import useRequestGetTodoList from '../hooks/use-request-get-todoList';
import UseRequestSearchTodo from '../hooks/use-request-search-todo';
import useRequestSortTodo from '../hooks/use-request-sort-todo';

const TodoListItemsRender = () => {
   const { deleteTodo } = UseRequestDeleteTodo();
   const { todoList, isLoading } = useRequestGetTodoList();
   const { findTodo, searchResult } = UseRequestSearchTodo();

   const [isSearching, setIsSearching] = useState(false);
   const [sortOption, setSortOption] = useState<string>('a-z');

   const handleSearch = (value: string) => {
      findTodo(value);
      setIsSearching(true);
   };

   const todosToRender = isSearching ? searchResult : todoList;
   const sortedTodos = useRequestSortTodo(todosToRender, sortOption);

   return (
      <div>
         <div className="grid grid-cols-2 mb-6">
            <Search findTodo={handleSearch} />
            <Sort onSortChange={setSortOption} />
         </div>
         <div className="flex justify-center items-center">
            {isLoading && <span className="loader"></span>}
            {Object.keys(todoList).length === 0 && !isLoading && (
               <p className="">No todos found</p>
            )}
         </div>
         {!isLoading &&
            todoList &&
            sortedTodos.map(([id, todo]) => {
               if (
                  typeof id === 'string' &&
                  typeof todo === 'object' &&
                  todo !== null &&
                  'todo' in todo
               ) {
                  const typedTodo = todo as TodoType;
                  return (
                     <Todo
                        key={id}
                        todo={{ ...typedTodo, id }}
                        deleteTodo={deleteTodo}
                     />
                  );
               } else {
                  console.error(`Invalid todo format: ${id}, ${todo}`);
                  return null;
               }
            })}
      </div>
   );
};

export default TodoListItemsRender;
