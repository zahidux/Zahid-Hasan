const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-sky-500 mb-3">
        {heading}
      </h2>
      <div className="grid justify-center text-sky-500">
        <hr className="border-b-2 w-[270px]" />
      </div>
    </div>
  );
};

export default SectionTitle;
