import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Chart from './components/GoogleChart'
import { Landingpage } from './pages/landingpage/Landingpage';

function App() {
  return (
    <div className="App">
      <Landingpage/>
      <Chart/>
      
    </div>
  );
}

export default App;
