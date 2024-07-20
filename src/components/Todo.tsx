import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Todo as TodoType } from '../types';

interface TodoProps {
   todo: TodoType;
   deleteTodo: (id: string) => void;
   editTodo: (id: string, todo: string, isEdit: boolean) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, editTodo }) => {
   return (
      <div className="flex justify-between items-center bg-gray-700 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
         <p className="font-primary">{todo.todo}</p>
         <div className="flex items-center gap-x-4">
            <AiFillEdit
               className="text-xl mr-2"
               onClick={() => editTodo(todo.id, todo.todo, true)}
            />
            <AiFillDelete
               className="text-xl"
               onClick={() => deleteTodo(todo.id)}
            />
         </div>
      </div>
   );
};

export default Todo;
