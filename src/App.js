import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//Layouts
import RootLayout from './layouts/RootLayout';

//Pages
import Home from './pages/Home.js';
import Resume from './pages/Resume.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='Resume' element={<Resume/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
