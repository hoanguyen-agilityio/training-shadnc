// Libs
import { FEATURE_BAR } from '@/mocks/feature-bar';

export const FeatureBar = () => (
  <section className="flex justify-between">
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
