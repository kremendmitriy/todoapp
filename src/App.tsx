import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoEditing from './components/TodoEditing';
import NotFound from './components/NotFound';
import './App.css';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<TodoList />} />
               <Route path="/todo/:id" element={<TodoEditing />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
