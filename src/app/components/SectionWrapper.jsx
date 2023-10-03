const SectionWrapper = ({ styles, mtn, children }) => {
  const margin = mtn ? '' : 'mt-8';

  return (
    <section className={`${styles} ${margin} max-w-7xl m-auto px-8`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
