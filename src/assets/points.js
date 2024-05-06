export const funcionesPuntos = [
    (ans, setRav, setSly, setGri, setHuf) => {
      if (ans === 1) {
        setRav(Rav => Rav + 1);
      } else if (ans === 2) {
        setSly(Sly => Sly + 2);
      } else if (ans === 3) {
        setGri(Gri => Gri +2)
      } else if (ans === 4) {
        setHuf(Huf => Huf + 2)
        setRav(Rav => Rav + 1);
      }
    },
    (ans, setRav, setSly, setGri, setHuf) => {
        if (ans === 1) {
          setRav(Rav => Rav + 1);
        } else if (ans === 2) {
          setSly(Sly => Sly + 2);
        } else if (ans === 3) {
          setGri(Gri => Gri +2)
        } else if (ans === 4) {
          setHuf(Huf => Huf + 2);
          setRav(Rav => Rav + 1)
        }
    }
  ];