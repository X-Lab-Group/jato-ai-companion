import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = [
  "hsl(217 91% 60%)",   // blue
  "hsl(217 91% 60% / 0.6)",
  "hsl(200 80% 55%)",   // cyan-ish
  "hsl(230 60% 65%)",   // slate blue
  "hsl(210 50% 50%)",   // steel
];

const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const count = 40;
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setParticles(generated);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -60, 20, -40, 0],
            x: [0, 30, -20, 10, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.5, p.opacity * 1.4, p.opacity],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Larger soft orbs — fewer, slower */}
      {[
        { x: "10%", y: "20%", size: 200, color: "hsl(217 91% 60% / 0.06)", dur: 25 },
        { x: "75%", y: "60%", size: 260, color: "hsl(200 80% 55% / 0.05)", dur: 30 },
        { x: "50%", y: "80%", size: 180, color: "hsl(230 60% 65% / 0.04)", dur: 22 },
        { x: "85%", y: "15%", size: 140, color: "hsl(210 50% 50% / 0.05)", dur: 28 },
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-[80px]"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 20, -15, 10, 0],
            scale: [1, 1.15, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
