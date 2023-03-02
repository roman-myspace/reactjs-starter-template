import { Outlet } from 'react-router-dom';
import Routes from './routes/routes';



function App() {
  return (
    <div className="App">
      <Routes />
      <Outlet />      
    </div>
  );
}

export default App;
