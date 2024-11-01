import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from '../Provider/AuthProvider.jsx';
import DoctorPage from './Pages/DoctorPage/DoctorPage.jsx';
import PrivetRouter from '../PrivetRouter/PrivetRouter.jsx';
import ViewDoctor from './Pages/ViewDoctor/ViewDoctor.jsx';
import DoctorBooking from './Pages/DoctorBooking/DoctorBooking.jsx';
import ConsultationList from './Pages/ConsultationList/ConsultationList.jsx';
import AddService from './Pages/AddService/AddService.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element: <Login></Login>
      },
      {
        path:"register",
        element: <Register></Register>
      },
      {
        path:"doctor",
        element: <DoctorPage></DoctorPage>
      },
      {
        path: "viewDoctor/:id",
        element: <PrivetRouter> <ViewDoctor></ViewDoctor> </PrivetRouter>,
        loader: ({ params })=> fetch(`https://consultation-services-by-doctors.vercel.app/doctorInfo/${params.id}`)
      },
      {
        path: "bookingDoctor/:id",
        element: <PrivetRouter> <DoctorBooking></DoctorBooking> </PrivetRouter>,
        loader: ({ params })=> fetch(`https://consultation-services-by-doctors.vercel.app/doctorInfo/${params.id}`)
      },
      {
        path:"consultationList",
        element: <PrivetRouter> <ConsultationList></ConsultationList> </PrivetRouter>,
        loader: ({params})=> fetch(`https://consultation-services-by-doctors.vercel.app/doctorBooking`)
      },
      {
        path:"addService",
        element:<PrivetRouter><AddService></AddService></PrivetRouter>
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
