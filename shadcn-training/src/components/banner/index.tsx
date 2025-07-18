interface IBanner {
  title: string;
}

export const Banner = ({ title }: IBanner) => {
  return (
    <section className="relative w-full overflow-visible mt-space-3xl">
      <img src="/assets/common-bg-banner.svg" alt="background banner" className="w-full" />

      <h1 className="text-white leading-lh-3xl text-3xl @bp-500/main:text-fs-xl font-semibold absolute top-1/2 left-10 transform -translate-y-1/2">
        {title}
      </h1>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/5 @bp-1000/main:-translate-x-1/2 overflow-visible">
        <img
          src="/assets/common-banner.svg"
          alt="common banner"
          className="w-custom-xs h-custom-h-xl @bp-650/main:w-custom-lg @bp-800/main:w-custom-4xl @bp-800/main:h-[400px] @bp-1150/main:w-full @bp-1150/main:h-auto"
        />
      </div>
    </section>
  );
};
