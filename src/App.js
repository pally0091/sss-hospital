
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home';
import Main from './Componants/Main';
import About from './Componants/About';
import Services from './Componants/Services';
import Doctor from './Componants/Doctor';
import Contact from './Componants/Contact';
import News from './Componants/News';
import Appointment from './Componants/Appointment';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
      path: '/',
      element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/doctors',
        element: <Doctor></Doctor>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      }
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
