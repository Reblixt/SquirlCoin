import { createBrowserRouter } from "react-router-dom";

// Import your components
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import {Home} from './pages/Home';
import {Transact} from './pages/Transact';
import {Blockchain} from './pages/Blockchain';
import {Block} from './pages/Block';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/transact", element: <Transact /> },
      { path: "/blockchain", element: <Blockchain /> },
      { path: "/block", element: <Block /> },
    ],
  },
]);