import { CheckedIcon } from '@/components/icons';

export const DeliveryPromise = () => {
  const featureChecklist = [
    {
      icon: <CheckedIcon width="20px" height="20px" />,
      text: 'Sed in metus pellentesque.',
    },
    {
      icon: <CheckedIcon width="20px" height="20px" />,
      text: 'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.',
    },
    {
      icon: <CheckedIcon width="20px" height="20px" />,
      text: 'Maecenas ut nunc fringilla erat varius.',
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[30px] min-[1300px]:flex-row">
      <div>
        <h3 className="text-[46px] dark:text-white">We Delivered, You Enjoy Your Order.</h3>
        <p className="text-lg text-charcoalGray-60 dark:text-gray-60 mt-3">
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit
          dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
          auctor bibendum nunc eget elementum.
        </p>
        <div className="flex flex-col gap-4 mt-space-2xl">
          {featureChecklist.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span className="text-base text-charcoalGray-60 dark:text-gray-60">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/delivery-person-with-groceries.svg" alt="delivery person with groceries" />
    </section>
  );
};
