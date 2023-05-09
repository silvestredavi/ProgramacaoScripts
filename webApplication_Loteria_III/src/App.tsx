import { Provider } from "./contexts"
import Index from "./routes";

function App() {

  return (
    <Provider>
      <Index/>
    </Provider>
  );
}

export default App;
