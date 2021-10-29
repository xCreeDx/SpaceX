import "./App.css";
import Topbar from "./components/Topbar";
import Midbar from "./components/Midbar";
import Lowbar from "./components/Lowbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  const [counter, setCounter] = useState(0);
  const [popup, setPopup] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Topbar counter={counter} setCounter={setCounter} />
        <Midbar
          popup={popup}
          setPopup={setPopup}
          counter={counter}
          setCounter={setCounter}
        />
        <Lowbar counter={counter} setCounter={setCounter} />
      </div>
    </ApolloProvider>
  );
}

export default App;
