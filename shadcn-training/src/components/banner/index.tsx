interface IBanner {
  title: string;
}

export const Banner = ({ title }: IBanner) => {
  return (
    <section className="relative w-full overflow-visible mt-space-3xl">
      <img src="/assets/common-bg-banner.svg" alt="background banner" className="w-full" />

      <h1 className="text-white text-4xl min-[500px]:text-[40px] font-semibold absolute top-1/2 left-10 transform -translate-y-1/2">
        {title}
      </h1>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/5  min-[1000px]:-translate-x-1/2 overflow-visible">
        <img
          src="/assets/common-banner.svg"
          alt="common banner"
          className="w-custom-xs h-custom-h-xl min-[650px]:w-custom-lg min-[800px]:w-custom-4xl min-[800px]:h-[400px] min-[1150px]:w-full min-[1150px]:h-auto"
        />
      </div>
    </section>
  );
};
