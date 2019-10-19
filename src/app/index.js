import { Provider } from "react-redux";
import App from "./containers/App";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById("app")
);
