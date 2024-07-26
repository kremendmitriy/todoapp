import { useState } from 'react';

interface SearchProps {
   findTodo: (value: string) => void;
}

const Search = ({ findTodo }: SearchProps) => {
   const [value, setValue] = useState<string>('');

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      findTodo(value);

      setValue('');
   };

   return (
      <form className="flex mb-4" onSubmit={handleSubmit}>
         <input
            type="text"
            className="outline-none bg-transparent border border-gray-500 p-1 w-[150px] text-black  rounded placeholder:text-gray-300"
            placeholder="Find a task..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
         />
         <button className="bg-gray-700 border-none p-1 text-white cursor-pointer rounded ml-2">
            Find Task
         </button>
      </form>
   );
};

export default Search;
