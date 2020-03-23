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
  const [currentTab, setCurrentTab] = useState<string>("info");

  return (
    <div className="app">
      <KonashiContext.Provider value={container}>
        <Header />
      </KonashiContext.Provider>

      <KonashiContext.Provider value={container}>
        <Main current={currentTab} />
      </KonashiContext.Provider>

      <Navbar current={currentTab} setCurrent={setCurrentTab} />
    </div>
  );
};

export default App;
