const tl = gsap.timeline();

const pageOut = (container) => {
  return tl.to(container, {
    x: 1500,
    duration: 1,
  });
};
const pageIn = (container) => {
  return tl.from (container, {
    x: -1500,
    duration: 1,
  });
};

barba.init({
  transitions: [
    {
      name: "cotalog",
    
      async leave(data) {
        document.body.style.overflow="hidden"
        await pageOut(data.current.container);
        data.current.container.remove();
        // document.body.style.overflow="visible"

      },
      async enter(data){
        await pageIn(data.next.container)
        document.body.style.overflow="visible"

      }
    },
  ],
});
