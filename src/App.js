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
import ViewProject1 from './components/ViewProject1';
import ViewProject2 from './components/ViewProject2';
import ViewProject3 from './components/ViewProject3';
import ViewProject4 from './components/ViewProject4';
import ViewProject5 from './components/ViewProject5';
import ViewProject6 from './components/ViewProject6';
 
import ViewWork2 from './components/ViewWork2';



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
          { path: 'primary/1', element: <ViewEmail /> },
          { path: 'primary/3', element: <ViewEmail2 /> },
          { path: 'project', element: <Project /> },
          { path: 'project', element: <Project /> },
          {path: 'project/1', element: <ViewProject />},
          {path: 'project/2', element: <ViewProject1 />},
          {path: 'project/3', element: <ViewProject2 />},
          {path: 'project/4', element: <ViewProject3 />},
          {path: 'project/5', element: <ViewProject4 />},
          {path: 'project/6', element: <ViewProject5 />},
          {path: 'project/7', element: <ViewProject6 />},
          { path: 'work', element: <Work /> },
          { path: 'work/1', element: <ViewWork2 /> },
          { path: 'work/2', element: <ViewWork /> },
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
