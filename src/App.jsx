import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utils/privateRoutes';
import { privateRoutes as monitoringPrivate, publicRoutes as monitoringPublic } from './routes/monitoring.routes'
import SpinLoader from './components/spin-loader';

function App() {
  return (
    <div className="h-screen bg-slate-100">
      <Suspense fallback={<SpinLoader withBody={true} />}>
        <Routes>
          {monitoringPublic.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}

          <Route element={<PrivateRoutes />}>
            {monitoringPrivate.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


