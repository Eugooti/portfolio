import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line react/prop-types
export const RevealProvider = ({ children, width = "fit-content" }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const mainAnimation = useAnimation();
    const slideAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            mainAnimation.start("visible");
            slideAnimation.start("visible");
        } else {
            mainAnimation.start("hidden");
            slideAnimation.start("hidden");
        }
    }, [inView, mainAnimation, slideAnimation]);

    const mainVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    const slideVariants = {
        hidden: { right: 0 },
        visible: { right: '100%' },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={mainVariants}
                initial="hidden"
                animate={mainAnimation}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={slideVariants}
                initial="hidden"
                animate={slideAnimation}
                transition={{ duration: 1, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                }}
                className='bg-indigo-600 rounded-2xl'
            />
        </div>
    );
};
