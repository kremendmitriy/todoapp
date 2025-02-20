import { useState } from 'react';

interface FormProps {
   addTodo: (todo: string) => void;
}

const Form: React.FC<FormProps> = ({ addTodo }) => {
   const [value, setValue] = useState<string>('');

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!value.trim()) {
         return;
      }
      addTodo(value);

      setValue('');
   };

   return (
      <form className="grid grid-cols-2 gap-10 mb-4" onSubmit={handleSubmit}>
         <input
            type="text"
            className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-black  rounded placeholder:text-gray-300"
            placeholder="What task do you have?"
            onChange={(e) => setValue(e.target.value)}
            value={value}
         />
         <button className="bg-gray-700 border-none p-4 text-white cursor-pointer rounded ml-3">
            Add Task
         </button>
      </form>
   );
};

export default Form;
