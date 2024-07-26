import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Todo as TodoType } from '../types';
import { useNavigate } from 'react-router-dom';

interface TodoProps {
   todo: TodoType;
   deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
   const navigate = useNavigate();

   const descriptionView = () => {
      if (!todo.description) return '';
      if (todo.description.length > 60) {
         return todo.description.slice(0, 60) + '...';
      } else return todo.description;
   };
   return (
      <div className="bg-gray-700 text-white py-3 px-4 rounded-md mb-1">
         <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
               <p className="font-bold text-lg">{todo.todo}</p>
               <div className="flex items-center gap-x-4">
                  <AiFillEdit
                     className="text-xl cursor-pointer"
                     onClick={() => {
                        navigate(`/todo/${todo.id}`, { state: { todo } });
                     }}
                  />
                  <AiFillDelete
                     className="text-xl cursor-pointer"
                     onClick={() => deleteTodo(todo.id)}
                  />
               </div>
            </div>
            <p className="text-gray-300">{descriptionView()}</p>
         </div>
      </div>
   );
};

export default Todo;
