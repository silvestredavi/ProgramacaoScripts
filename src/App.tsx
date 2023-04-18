import { Provider } from "./contexts"
import Principal from './pages/Principal';

function App() {

  return (
    <Provider>
      <Principal />
    </Provider>
  );
}

export default App;
