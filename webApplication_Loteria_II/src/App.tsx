import { Provider } from "./contexts"
import Principal from './pages/Principal';
import Index from "./routes";

function App() {

  return (
    <Provider>
      <Index/>
    </Provider>
  );
}

export default App;
