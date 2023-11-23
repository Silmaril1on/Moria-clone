export const slideRight = {
  hidden: {
    x: "-10",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const staggerOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const PopUp = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

export const animatedHeader = {
  hidden: {
    opacity: 0,
    y: -50,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      type: "spring",
      dumping: 10,
      stiffness: 40,
    },
  },
};

export const imageOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0.3,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
      duration: 0.5,
      type: "spring",
      dumping: 10,
      stiffness: 100,
    },
  },
};
