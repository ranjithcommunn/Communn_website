import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from '../Pages/Home';
import { Artist } from '../Pages/UseCases/Artist';
import { DashBoard } from '../Pages/Features/DashBoard';
import { Post } from '../Pages/Features/Post';
import { Payments } from '../Pages/Features/Payments';
import { Members } from '../Pages/Features/Members';
import { Subscription } from '../Pages/Features/Subscription';


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/artist' element={<Artist />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/posts' element={<Post />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/members' element={<Members />} />
          <Route path='/subscriptions' element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
