import { h } from "preact";
import { useState } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";

const App = () => {
  const [konashi, setKonashi] = useState<Konashi | null>(null);
  const container = { konashi, setKonashi };

  return (
    <div className="app">
      <KonashiContext.Provider value={container}>
        <Header />
        <Main />
      </KonashiContext.Provider>
      <Navbar />
    </div>
  );
};

export default App;
