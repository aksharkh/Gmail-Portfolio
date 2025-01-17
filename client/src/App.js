import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Emails from './components/Emails';
import Project from './components/Project';
import Work from './components/Work';
import Email from './components/Email';
import ViewEmail from './components/ViewEmail';
import ViewProject from './components/ViewProject';
import ViewWork from './components/ViewWork';
import ViewEmail2 from './components/ViewEmail2';
import ViewEmail1 from './components/ViewEmail1';


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
          { path: 'primary/1', element: <ViewEmail /> }, // Render ViewEmail for emailId 1
          { path: 'primary/2', element: <ViewEmail1 /> }, // Render ViewEmail1 for emailId 2
          { path: 'primary/3', element: <ViewEmail2 /> }, // Render ViewEmail2 for emailId 3
          { path: 'project', element: <Project /> },
          { path: 'project/:emailId', element: <ViewProject /> },
          { path: 'work', element: <Work /> },
          { path: 'work/:emailId', element: <ViewWork /> },
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
