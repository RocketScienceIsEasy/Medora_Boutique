import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ pointerEvents: isLoading ? 'all' : 'none' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-warm-beige"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Needle and Thread SVG */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          className="w-40 h-40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thread (Dress outline being stitched) */}
          <motion.path
            d="M 50,15 
               L 35,28 
               L 40,40 
               L 25,75 
               L 75,75 
               L 60,40 
               L 65,28 
               Z 
               M 50,28 L 50,75"
            stroke="#c29d5b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="200"
            animate={{
              strokeDashoffset: [200, 0],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />

          {/* Stitching needle */}
          <motion.g
            animate={{
              x: [35, 40, 25, 75, 60, 65, 50, 35],
              y: [28, 40, 75, 75, 40, 28, 15, 28],
              rotate: [15, 35, 70, 0, -70, -35, 15, 15],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            {/* Needle body */}
            <path
              d="M 0,0 L -5,-25"
              stroke="#3d4a2d"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Needle eye */}
            <ellipse
              cx="-4.3"
              cy="-21.5"
              rx="0.6"
              ry="1.8"
              transform="rotate(-11 -4.3 -21.5)"
              fill="#fbf9f4"
            />
            {/* Thread loop trailing from eye */}
            <path
              d="M -4.3,-21.5 C -15,-25 -10,-10 -5,-5"
              stroke="#c29d5b"
              strokeWidth="0.8"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>
        </svg>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <h1 className="text-3xl tracking-widest text-olive-green uppercase font-serif font-semibold">
            Medora
          </h1>
          <p className="mt-2 text-xs tracking-[0.25em] text-muted-gold uppercase font-sans font-medium">
            Boutique Design Studio
          </p>
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-[2px] bg-light-sand/40 rounded-full mt-8 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-muted-gold"
            animate={{
              left: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
