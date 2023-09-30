'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
      let currentRef = null;
      const observer = new IntersectionObserver(([entry]) => {
          if (entry === null || entry === void 0 ? void 0 : entry.isIntersecting)
              setIntersecting(entry === null || entry === void 0 ? void 0 : entry.isIntersecting);
      }, {
          rootMargin,
      });
      if (ref && (ref === null || ref === void 0 ? void 0 : ref.current)) {
          currentRef = ref.current;
          observer.observe(currentRef);
      }
      return () => {
          observer.unobserve(currentRef);
      };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const LazyShow = ({ children, delay, duration }) => {
  const controls = useAnimation();
  const rootRef = useRef(null);
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
