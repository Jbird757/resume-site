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
import ResumePDF from './assets/JLResume.pdf';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='Resume' element={<Resume/>} />
      <Route path='Projects' element={<Projects/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='ResumePDF' element={<ResumePDF/>} />
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
Get automatic deployments working - Github Actions file
Get Google fonts to load - requires CORS
Create Working Form

Roadmap:
2. Modify pages to match me - import photos and resume
3. Change Style
*/