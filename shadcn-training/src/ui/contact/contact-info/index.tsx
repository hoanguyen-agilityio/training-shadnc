// Libs
import clsx from 'clsx';

// Components
import { AddressIcon, EmailIcon, PhoneIcon } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfoData = [
  {
    icon: <AddressIcon width="51px" height="51px" />,
    information: '2715 Ash Dr. San Jose, South',
    moreInformation: 'Dakota 83475',
  },
  {
    icon: <EmailIcon width="51px" height="51px" />,
    information: 'Proxy@gmail.com',
    moreInformation: 'Help.proxy@gmail.com',
  },
  {
    icon: <PhoneIcon width="51px" height="51px" />,
    information: '(219) 555-0114',
    moreInformation: '(164) 333-0487',
  },
];

export const ContactInfo = () => (
  <Card className="w-full max-w-custom-5xl-plus py-4 shadow-xl rounded-radius-md mx-auto @bp-800/main:mx-0">
    {ContactInfoData.map((item, index) => {
      const isFirst = index === 0;
      const isLast = index === ContactInfoData.length - 1;

      return (
        <CardContent
          key={index}
          className={clsx(
            'flex flex-col items-center gap-4',
            !isFirst && 'pt-6',
            !isLast && 'pb-6 border-b border-gray-200',
            isFirst && 'pt-0',
            isLast && 'pb-0',
          )}
        >
          {item.icon}
          <div className="flex flex-col gap-1 text-center dark:text-white">
            <span className="text-base leading-7">{item.information}</span>
            <span className="text-base leading-7">{item.moreInformation}</span>
          </div>
        </CardContent>
      );
    })}
  </Card>
);
