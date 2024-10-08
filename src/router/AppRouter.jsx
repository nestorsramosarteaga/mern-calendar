import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';


export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
    <Routes>
      {
        // (authStatus === 'not-authenticated')
        <Route path="/*" element={ <CalendarPage /> } />
        
        <Route path="/auth/*" element={<LoginPage />} />
      }
    </Routes>
  )
}
