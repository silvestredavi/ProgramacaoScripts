import { Provider } from "./contexts"
import Index from "./routes";
import  ReactDOM  from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
); 
root.render(
    <Provider>
      <Index/>
    </Provider>
)
