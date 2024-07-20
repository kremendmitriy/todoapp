import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import { useState } from 'react';

const UseRequestEditTodo = () => {
   const [isEdit, setIsEdit] = useState<boolean>(false);

   const editTodo = async (id: string, todo: string, newIsEdit: boolean) => {
      if (todo !== undefined && todo !== null) {
         setIsEdit(true);
         const todoRef = ref(db, `todoList/${id}`);
         try {
            await update(todoRef, { todo: todo, isEdit: newIsEdit });
         } catch (error) {
            console.error('Error updating document: ', error);
         }
      } else {
         console.error('Error: todo is undefined');
      }
   };

   return { editTodo, isEdit };
};

export default UseRequestEditTodo;
