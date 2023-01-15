import { useEffect, useRef } from "react";
import { getRandomHSL } from "../../utils";

export const AvatarGenerator = ({ name }) => {
  const canvasRef = useRef(null);
  const size = 100;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Obtener las iniciales de las primeras dos palabras
    const nameArray = name.split(" ");
    const firstInitial = nameArray[0] ? nameArray[0].substring(0, 1) : "";
    // const secondInitial = nameArray[1] ? nameArray[1].substring(0, 1) : "";
    const initials = firstInitial;

    const backgroundColor = getRandomHSL();

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, size, size);
    ctx.font = "600 36px sans-serif";

    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(initials, 50, 64);
  }, [name]);

  return <canvas ref={canvasRef} width={100} height={100} />;
};
