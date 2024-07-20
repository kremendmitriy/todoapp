import { useState } from 'react';
import UseRequestEditTodo from '../hooks/use-request-edit-todo';
import { Todo as TodoType } from '../types';

interface EditProps {
   todo: TodoType;
}

const Edit: React.FC<EditProps> = ({ todo }) => {
   const [value, setValue] = useState(todo.todo);
   const { editTodo, isEdit } = UseRequestEditTodo();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!value.trim()) {
         return;
      }
      editTodo(todo.id, value, false);

      setValue('');
   };

   return (
      <form className="mb-4 w-full" onSubmit={handleSubmit}>
         <input
            type="text"
            className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-black mb-8 rounded placeholder:text-gray-300"
            placeholder="What task do you have?"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            disabled={isEdit}
         />
         <button className="bg-gray-700 border-none p-4 text-white cursor-pointer rounded ml-3">
            {isEdit ? 'Updating...' : 'Update Task'}
         </button>
      </form>
   );
};

export default Edit;
