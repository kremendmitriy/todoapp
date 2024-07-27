import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Todo as TodoType } from '../types';
import { ref, update } from 'firebase/database';
import { db } from '../firebase';

const TodoEditing = () => {
   const { id } = useParams<{ id: string }>();
   const location = useLocation();
   const navigate = useNavigate();

   const [todo, setTodo] = useState<TodoType | null>(null);
   const [error, setError] = useState<string | null>(null);

   const updateTodo = useCallback(async (id: string, updatedTodo: TodoType) => {
      const todoRef = ref(db, `todoList/${id}`);
      try {
         await update(todoRef, updatedTodo);
      } catch (error) {
         console.error('Error updating todo:', error);
         throw error;
      }
   }, []);

   const applyChanges = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         if (id && todo) {
            try {
               await updateTodo(id, todo);
               navigate('/');
            } catch {
               setError('Failed to update the task. Please try again.');
            }
         }
      },
      [id, todo, updateTodo, navigate]
   );

   useEffect(() => {
      if (location.state && location.state.todo) {
         setTodo(location.state.todo);
      }
   }, [location.state]);

   if (!todo) {
      return <p className="text-white">Task not found</p>;
   }

   return (
      <div className="w-[500px] bg-slate-200 mt-36 p-8  rounded-md border-solid border-black border-2">
         {error && <p className="text-red-500">{error}</p>}
         <form onSubmit={applyChanges}>
            <div className="grid grid-cols-2 gap-4">
               <input
                  type="text"
                  value={todo.todo}
                  className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-black  rounded"
                  onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
               />
               <button
                  type="submit"
                  className="bg-gray-700 border-none p-4 text-white cursor-pointer rounded ml-3"
               >
                  Apply changes
               </button>
            </div>
            <textarea
               value={todo.description}
               className="w-full h-60 mt-4 p-2 outline-none bg-transparent border border-gray-500 rounded"
               onChange={(e) =>
                  setTodo({ ...todo, description: e.target.value })
               }
            ></textarea>
         </form>
      </div>
   );
};

export default TodoEditing;
