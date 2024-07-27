import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Todo as TodoType } from '../types';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

interface TodoProps {
   todo: TodoType;
   deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
   const navigate = useNavigate();

   const descriptionView = useCallback(() => {
      if (!todo.description) return '';
      return todo.description.length > 60
         ? `${todo.description.slice(0, 60)}...`
         : todo.description;
   }, [todo.description]);

   const handleEditClick = useCallback(() => {
      navigate(`/todo/${todo.id}`, { state: { todo } });
   }, [navigate, todo]);

   const handleDeleteClick = useCallback(() => {
      deleteTodo(todo.id);
   }, [deleteTodo, todo.id]);

   return (
      <div className="bg-gray-700 text-white py-3 px-4 rounded-md mb-1">
         <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
               <p className="font-bold text-lg">{todo.todo}</p>
               <div className="flex items-center gap-x-4">
                  <AiFillEdit
                     className="text-xl cursor-pointer"
                     onClick={handleEditClick}
                  />
                  <AiFillDelete
                     className="text-xl cursor-pointer"
                     onClick={handleDeleteClick}
                  />
               </div>
            </div>
            <p className="text-gray-300">{descriptionView()}</p>
         </div>
      </div>
   );
};

export default Todo;
