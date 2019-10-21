import { Provider } from "react-redux";
import App from "./containers/App";
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById("app")
);
