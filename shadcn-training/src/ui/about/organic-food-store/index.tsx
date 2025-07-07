import {
  BoxIcon,
  BrightStarIcon,
  FreeShipIcon,
  LeafIcon,
  PaymentIcon,
  SupportIcon,
} from '@/components/icons';

export const OrganicFoodStore = () => {
  const featureHighlightsGrid = [
    {
      icon: <LeafIcon width="72px" height="72px" />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.',
    },
    {
      icon: <PaymentIcon width="72px" height="72px" />,
      title: '100% Secure Payment',
      description: 'We ensure your money is save',
    },
    {
      icon: <SupportIcon width="72px" height="72px" />,
      title: 'Great Support 24/7',
      description: 'Instant access to Contact',
    },
    {
      icon: <BrightStarIcon width="72px" height="72px" />,
      title: 'Customer Feedback',
      description: 'Our happy customer',
    },
    {
      icon: <FreeShipIcon width="72px" height="72px" />,
      title: 'Free Shipping',
      description: 'Free shipping with discount',
    },
    {
      icon: <BoxIcon width="72px" height="72px" />,
      title: '100% Organic Food',
      description: '100% healthy & Fresh food.',
    },
  ];
  return (
    <section className="mt-40 border-b-1 border-[#8A8A8A]">
      <div className="text-center max-w-[1320px] mx-auto px-10">
        <span className="text-[46px]">100% Trusted Organic Food Store</span>
        <p className="text-lg text-[#8A8A8A] mt-[30px]">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
          cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
          tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
          at commodo felis congue vitae.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20 gap-[30px] min-[1310px]:flex-row">
        <img
          src="/public/assets/trusted-organic-food-store.svg"
          alt="100% Trusted Organic Food Store"
          className="w-full"
        />
        <div className="px-10 min-[1310px]:pl-0">
          <div>
            <span className="text-[46px]">100% Trusted Organic Food Store</span>
            <p className="text-lg text-[#8A8A8A] mt-5">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus
              neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor
              tincidunt feugiat.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-[15px] min-[670px]:grid-cols-2">
            {featureHighlightsGrid.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-lg">{feature.title}</h3>
                  <p className="text-sm text-[#8A8A8A]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
