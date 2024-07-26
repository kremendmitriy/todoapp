import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import TodoDescrption from './components/TodoDescrption';
import NotFound from './components/NotFound';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<TodoList />} />
               <Route path="/todo/:id" element={<TodoDescrption />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
