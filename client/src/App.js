import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Main from './pages/Main';
import {routes} from './routes/routes';
import { createBrowserRouter,  Route, Navigate, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>} />
      <Route path={routes.main.path} element={<routes.main.element/>}>
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} />
        <Route path={routes.view.path} element={<routes.view.element />} />
      </Route>

    </Route>
  )

)

function App() {
  return (
    
      
       <RouterProvider router={router} />
        
     
    
  );
}

export default App;
