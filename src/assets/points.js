export const funcionesPuntos = [
  // Reparto de puntos 1 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 1);
      } else if (option === 2) {
        setSly((Sly) => Sly + 2);
      } else if (option === 3) {
        setGri((Gri) => Gri + 2);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 2);
        setRav((Rav) => Rav + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 2 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setHuf((Huf) => Huf + 1);
        setGri((Gri) => Gri + 2);
      } else if (option === 2) {
        setSly((Sly) => Sly + 2);
      } else if (option === 3) {
        setRav((Rav) => Rav + 2);
        setHuf((Huf) => Huf + 1);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 2);
        setRav((Gri) => Gri + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 3 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 2);
      } else if (option === 2) {
        setSly((Sly) => Sly + 2);
      } else if (option === 3) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setGri((Gri) => Gri + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 4 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setSly((Sly) => Sly + 2);
        setGri((Gri) => Gri + 1);
      } else if (option === 2) {
        setRav((Rav) => Rav + 1);
        setGri((Gri) => Gri + 2);
      } else if (option === 3) {
        setRav((Rav) => Rav + 2);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 2);
        setRav((Rav) => Rav + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 5 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setSly((Sly) => Sly + 2);
        setRav((Rav) => Rav + 1);
      } else if (option === 2) {
        setSly((Sly) => Sly + 1);
        setGri((Gri) => Gri + 2);
      } else if (option === 3) {
        setRav((Rav) => Rav + 2);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 6 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setGri((Gri) => Gri + 2);
      } else if (option === 2) {
        setSly((Huf) => Huf + 2);
      } else if (option === 3) {
        setRav((Rav) => Rav + 2);
      } else if (option === 4) {
        setSly((Sly) => Sly + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 7 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setGri((Gri) => Gri + 1);
      } else if (option === 2) {
        setRav((Rav) => Rav + 1);
      } else if (option === 3) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setSly((Sly) => Sly + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 8 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 1);
      } else if (option === 2) {
        setGri((Gri) => Gri + 1);
      } else if (option === 3) {
        setSly((Sly) => Sly + 1);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 9 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setGri((Gri) => Gri + 2);
      } else if (option === 2) {
        setRav((Rav) => Rav + 2);
      } else if (option === 3) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setSly((Sly) => Sly + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 10 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 2) {
        setRav((Rav) => Rav + 2);
      } else if (option === 3) {
        setGri((Gri) => Gri + 2);
      } else if (option === 4) {
        setSly((Sly) => Sly + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 11 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 2);
      } else if (option === 2) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 3) {
        setGri((Sly) => Sly + 2);
      } else if (option === 4) {
        setGri((Gri) => Gri + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 12 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 1);
      } else if (option === 2) {
        setGri((Gri) => Gri + 1);
      } else if (option === 3) {
        setHuf((Huf) => Huf + 1);
      } else if (option === 4) {
        setSly((Sly) => Sly + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 13 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setSly((Sly) => Sly + 2)
        setRav((Rav) => Rav + 1);
      } else if (option === 2) {
        setGri((Gri) => Gri + 2);
        setHuf((Huf) => Huf + 1);
      } else if (option === 3) {
        setRav((Rav) => Rav + 2);
        setHuf((Huf) => Huf + 1);
      } else if (option === 4) {
        setGri((Gri) => Gri + 2);
        setHuf((Huf) => Huf + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 14 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setGri((Gri) => Gri + 2);
      } else if (option === 2) {
        setGri((Gri) => Gri + 1);
        setSly((Sly) => Sly + 2)
      } else if (option === 3) {
        setHuf((Rav) => Rav + 1);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 15 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setRav((Rav) => Rav + 2);
      } else if (option === 2) {
        setSly((Sly) => Sly + 2)
      } else if (option === 3) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setGri((Gri) => Gri + 2);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 16 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setGri((Gri) => Gri + 2);
        setHuf((Huf) => Huf + 1);
      } else if (option === 2) {
        setSly((Sly) => Sly + 2)
      } else if (option === 3) {
        setHuf((Rav) => Rav + 2);
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 1);
        setGri((Gri) => Gri + 1);
      }
      setLock(true);
    }
  },
  // Reparto de puntos 17 y bloqueo del lock
  (option, setRav, setSly, setGri, setHuf, lock, setLock) => {
    if (lock === false) {
      if (option === 1) {
        setSly((Sly) => Sly + 2)
        setHuf((Huf) => Huf + 1);
      } else if (option === 2) {
        setHuf((Rav) => Rav + 2);
      } else if (option === 3) {
        setHuf((Huf) => Huf + 2);
      } else if (option === 4) {
        setHuf((Huf) => Huf + 2);
        setHuf((Gri) => Gri + 2);
      }
      setLock(true);
    }
  },
];
