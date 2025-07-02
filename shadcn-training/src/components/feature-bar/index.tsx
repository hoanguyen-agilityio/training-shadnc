// Libs
import { FEATURE_BAR } from '@/mocks/feature-bar';

export const FeatureBar = () => (
  <section className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-5 min-[1090px]:grid-cols-4 mt-[60px]">
    {FEATURE_BAR.map(({ icon, title, describe }, index) => (
      <div className="flex gap-[13px]" key={index}>
        {icon}
        <div className="flex flex-col">
          <p className="text-xl text-charcoalGray-50">{title}</p>
          <p className="text-base font-normal text-charcoalGray-50">{describe}</p>
        </div>
      </div>
    ))}
  </section>
);
