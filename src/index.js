import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GoogleOAuthProvider } from "@react-oauth/google";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
// production clientId ...  265710711280-j6kg5vvh6tu0vaeqm97cvcoshgq2rss0.apps.googleusercontent.com

const devEnv = process.env.NODE_ENV !== "production"
const clientId =devEnv? "612343465599-o9drnv452lnn0pavn6b1mcq6ms5pt4bp.apps.googleusercontent.com" : "265710711280-j6kg5vvh6tu0vaeqm97cvcoshgq2rss0.apps.googleusercontent.com"
root.render(
   <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
   </React.StrictMode>
);

// 612343465599-o9drnv452lnn0pavn6b1mcq6ms5pt4bp.apps.googleusercontent.com
