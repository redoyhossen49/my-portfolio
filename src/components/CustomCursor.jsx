import { useEffect, useState } from "react";

export default function CustomCursor() {
  const tailCount = 15;
  const [mainPos, setMainPos] = useState({ x: 0, y: 0 });

  // Tail initial positions
  const [tails, setTails] = useState(
    Array.from({ length: tailCount }, () => ({ x: 0, y: 0 }))
  );

  // Rainbow colors
  const colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#7fff00",
    "#00ff00",
    "#00ff7f",
    "#00ffff",
    "#007fff",
    "#0000ff",
    "#7f00ff",
    "#ff00ff",
    "#ff007f",
    "#ff4d4d",
    "#ffcc00",
    "#00e6e6",
  ];

  // Track mouse position
  useEffect(() => {
    const move = (e) => {
      setMainPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Animate tail with lag
  useEffect(() => {
    const interval = setInterval(() => {
      setTails((prev) => {
        const newTails = [...prev];
        let px = mainPos.x;
        let py = mainPos.y;

        newTails.forEach((t, i) => {
          newTails[i] = {
            x: t.x + (px - t.x) * 0.16,
            y: t.y + (py - t.y) * 0.16,
          };
          px = newTails[i].x;
          py = newTails[i].y;
        });

        return newTails;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [mainPos]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none 
                   -translate-x-1/2 -translate-y-1/2 z-[9999]"
        style={{
          left: mainPos.x,
          top: mainPos.y,
          backgroundColor: "#ffffff",
          boxShadow: "0 0 15px #fff",
        }}
      />

      {/* Rainbow Tail */}
      {tails.map((t, i) => (
        <div
          key={i}
          className="fixed rounded-full pointer-events-none 
                     -translate-x-1/2 -translate-y-1/2 transition-transform"
          style={{
            left: t.x,
            top: t.y,
            width: `${8 - i * 0.3}px`,
            height: `${8 - i * 0.3}px`,
            backgroundColor: colors[i],
            opacity: `${1 - i * 0.05}`,
            filter: `blur(${i * 0.1}px)`,
            zIndex: 9998 - i,
          }}
        />
      ))}
    </>
  );
}
