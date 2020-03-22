import { h } from "preact";
import { useState } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

import ConnectBtn from "./ConnectBtn";
import Main from "./Main";

const App = () => {
  const [konashi, setKonashi] = useState<Konashi | null>(null);
  const container = { konashi, setKonashi };

  return (
    <div className="app">
      <KonashiContext.Provider value={container}>
        <ConnectBtn />
        <Main />
      </KonashiContext.Provider>
      {/* Tab */}
    </div>
  );
};

export default App;
