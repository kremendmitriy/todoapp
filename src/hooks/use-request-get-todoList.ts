import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Todo as TodoType } from '../types';

const useRequestGetTodoList = () => {
   const [todoList, setTodoList] = useState<Record<string, TodoType>>({});
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const todoListDbRef = ref(db, 'todoList');

      const unsubscribe = onValue(todoListDbRef, (snapshot) => {
         const loadedTodoList = snapshot.val();
         setTodoList(loadedTodoList || {});

         setIsLoading(false);
      });

      return () => {
         unsubscribe();
      };
   }, []);

   return {
      todoList,
      isLoading,
   };
};

export default useRequestGetTodoList;
