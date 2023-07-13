import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

//Layouts
import RootLayout from './layouts/RootLayout';

//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
//import ErrorBoundary from './components/ErrorBoundary';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='Resume' element={<Resume/>} />
      <Route path='Projects' element={<Projects/>} />
      <Route path='Contact' element={<Contact/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

/*
To-do:
4. Project Page Photos
5. Projects page CSS
6. Front Page Photo & icon
7. Binary to Text on front page
8. Final Review

Roadmap
Get automatic deployments working - Github Actions file
Create Working Form
*/