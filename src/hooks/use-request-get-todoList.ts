import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Todo as TodoType } from '../types';

const useRequestGetTodoList = () => {
   const [todoList, setTodoList] = useState<Record<string, TodoType>>({});
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const todoListDbRef = ref(db, 'todoList');

      return onValue(todoListDbRef, (snapshot) => {
         const loadedTodoList = snapshot.val();
         setTodoList(loadedTodoList || {});

         setIsLoading(false);
         console.log(loadedTodoList);
      });
   }, []);

   return {
      todoList,
      isLoading,
   };
};

export default useRequestGetTodoList;
