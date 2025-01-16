import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Emails from './components/Emails';
import Project from './components/Project';
import Work from './components/Work';
import Email from './components/Email';
import ViewEmail from './components/ViewEmail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />, // Main layout with Header and Sidebar
    children: [
      {
        path: 'emails/inbox',
        element: <Emails />,
        children: [
          { path: 'primary', element: <Email /> },
          { path: 'primary/:emailId', element: <ViewEmail /> },
          { path: 'project', element: <Project /> },
          { path: 'work', element: <Work /> },
        ],
      },
      { path: '/', element: <Navigate to="/emails/inbox/primary" /> }, // Redirect to default
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
