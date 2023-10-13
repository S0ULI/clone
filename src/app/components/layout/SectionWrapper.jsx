const SectionWrapper = ({ mSt, mtn, px8, children }) => {

  return (
    <section className={`${mSt} ${mtn || 'mt-8'} ${px8 || 'px-8'} max-w-7xl m-auto w-full`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
