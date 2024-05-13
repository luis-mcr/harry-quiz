import { dataPoints } from "../dataPoints.js";

export const distributePoints = (index, option, lock, setLock, setRav, setSly, setGri, setHuf) => {
  if (lock === false) {
      setGri((Gri) => Gri + dataPoints[index][option-1][0]);
      setSly((Sly) => Sly + dataPoints[index][option-1][1]);
      setRav((Rav) => Rav + dataPoints[index][option-1][2]);
      setHuf((Huf) => Huf + dataPoints[index][option-1][3]);
      setLock(true);
    }
  };
