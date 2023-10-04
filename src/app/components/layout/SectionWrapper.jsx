const SectionWrapper = ({ styles, mtn, children }) => {

  return (
    <section className={`${styles} ${mtn || 'mt-8'} max-w-7xl m-auto px-8`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
