import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { refreshUser } from './features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks';
import SharedLayout from './components/shared-layout/SharedLayout';
import Loading from './components/loading/Loading';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

const App = () => {
  // const { isRefreshing } = useAuth();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  // isRefreshing ? (
  //     <div className='loading-container'>
  //       <Loading />
  //     </div>
  //   ) :
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
