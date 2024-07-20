import Form from './Form';
import TodoListItemsRender from './TodoListItemsRender';
import UseRequestAddTodo from '../hooks/use-request-add-todo';

const TodoList: React.FC = () => {
   const { addTodo } = UseRequestAddTodo();

   return (
      <div className="bg-yellow-50 mt-20 p-8 rounded-md">
         <Form addTodo={addTodo} />
         <TodoListItemsRender />
      </div>
   );
};

export default TodoList;
