const SectionWrapper = ({ styles, children }) => {
  return (
    <section className={styles + ' max-w-7xl m-auto py-4 px-8'}>
      {children}
    </section>
  );
};

export default SectionWrapper;
