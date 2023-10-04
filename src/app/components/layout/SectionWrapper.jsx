const SectionWrapper = ({ mSt, mtn, children }) => {

  return (
    <section className={`${mSt} ${mtn || 'mt-8'} max-w-7xl m-auto px-8`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
