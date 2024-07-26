import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

const UseRequestAddTodo = () => {
   const [isCreating, setIsCreating] = useState<boolean>(false);

   const addTodo = async (todo: string) => {
      setIsCreating(true);

      const todoDbRef = ref(db, 'todoList');
      try {
         await push(todoDbRef, {
            id: uuidv4(),
            todo,
            description: '',
            isEdit: false,
         });
      } catch (error) {
         console.error('Error adding todo: ', error);
      } finally {
         setIsCreating(false);
      }
   };
   return {
      addTodo,
      isCreating,
   };
};

export default UseRequestAddTodo;
