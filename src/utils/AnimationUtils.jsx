export const createDefaultOptions = (animationData) => {
  return {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserver: true,
    },
  };
};
