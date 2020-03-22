import { createContext } from "preact";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const KonashiContext = createContext<{
  konashi: Konashi | null;
  setKonashi: (arg0: Konashi | null) => void;
}>({
  konashi: null,
  setKonashi: (k: Konashi | null) => {}
});

export default KonashiContext;
