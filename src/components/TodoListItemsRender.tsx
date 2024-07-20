import Todo from './Todo';
import Edit from './Edit';
import Search from './Search';
import Sort from './Sort';
import '../styles/loader.css';

import { Todo as TodoType } from '../types';
import { useState } from 'react';

import UseRequestEditTodo from '../hooks/use-request-edit-todo';
import UseRequestDeleteTodo from '../hooks/use-request-delete-todo';
import useRequestGetTodoList from '../hooks/use-request-get-todoList';
import UseRequestSearchTodo from '../hooks/use-request-search-todo';
import useRequestSortTodo from '../hooks/use-request-sort-todo';

const TodoListItemsRender = () => {
   const { editTodo } = UseRequestEditTodo();
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
         <div className="flex mb-6">
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
                  return typedTodo.isEdit ? (
                     <Edit key={id} todo={{ ...typedTodo, id }} />
                  ) : (
                     <Todo
                        key={id}
                        todo={{ ...typedTodo, id }}
                        editTodo={editTodo}
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
