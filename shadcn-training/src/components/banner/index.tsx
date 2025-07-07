interface IBanner {
  title: string;
}

export const Banner = ({ title }: IBanner) => {
  return (
    <section className="relative w-full overflow-visible">
      <img src="/assets/common-bg-banner.svg" alt="background banner" className="w-full" />

      <span className="text-white text-[40px] font-semibold absolute top-1/2 left-10 transform -translate-y-1/2">
        {title}
      </span>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2  -translate-x-1/2 overflow-visible">
        <img src="/assets/common-banner.svg" alt="common banner" className="" />
      </div>
    </section>
  );
};
