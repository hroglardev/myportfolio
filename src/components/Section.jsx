const Section = ({ children, role, ariaLabel, id }) => {
  return (
    <section
      id={id}
      role={role}
      aria-label={ariaLabel}
      className='max-w-7xl w-full flex flex-col md:flex-row justify-center'>
      {children}
    </section>
  );
};
export default Section;
