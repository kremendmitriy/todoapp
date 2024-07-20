import { db } from '../firebase';
import { ref, remove } from 'firebase/database';
import { useState } from 'react';

const UseRequestDeleteTodo = () => {
   const [isDelete, setIsDelete] = useState<boolean>(false);

   const deleteTodo = async (id: string) => {
      setIsDelete(true);
      const todoRef = ref(db, `todoList/${id}`);
      try {
         await remove(todoRef);
      } catch (error) {
         console.error('Error deleting document: ', error);
      } finally {
         setIsDelete(false);
      }
   };

   return { deleteTodo, isDelete };
};

export default UseRequestDeleteTodo;
