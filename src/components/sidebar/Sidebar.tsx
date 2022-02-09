import { useCallback } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "components";
import { sidebarRoutes } from "../../../config/config";
import { XToggle, toggleAnimation } from "components/reusable";

const itemAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, onToggle] = useCycle(false, true);

  const toggle = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <>
      <div className="flex fixed flex-col transtion duration-500 ease-in-out h-full pt-8">
        <motion.div
          variants={toggleAnimation}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="h-5/6 bg-primary-main mt-12 rounded-r-[40px] p-4 flex flex-col relative 
          active:border-primary-light active:border-solid active:border-r-4"
        >
          <XToggle
            toggle={toggle}
            className="flex relative justify-end items-center m-3.5"
          />
          <section className="routes">
            {sidebarRoutes.map((route, index) => {
              return (
                <AnimatePresence key={index}>
                  {isOpen && (
                    <motion.div
                      variants={itemAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex flex-col py-2 flex-nowrap left-0 list-none align-center bg-primary-main"
                    >
                      <Link
                        href={route.path}
                        className="flex-auto py-4 text-left inline-flex items-center justify-start "
                      >
                        <span className={`pr-3`}>{route.icon}</span>
                        {route.name}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </section>
        </motion.div>
      </div>
    </>
  );
};
