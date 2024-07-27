import Form from './Form';
import TodoListItemsRender from './TodoListItemsRender';
import useRequestAddTodo from '../hooks/use-request-add-todo';

const TodoList: React.FC = () => {
   const { addTodo } = useRequestAddTodo();

   return (
      <div className="flex justify-center items-center m-auto mt-36   rounded-md">
         <div className="bg-slate-200 w-[500px] h-[600px] overflow-auto m-4 p-4 rounded-md border-solid border-black border-2">
            <Form addTodo={addTodo} />
            <TodoListItemsRender />
         </div>
      </div>
   );
};

export default TodoList;
