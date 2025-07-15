// Libs
import { FEATURE_BAR } from '@/mocks/feature-bar';

export const FeatureBar = () => (
  <section
    aria-label="feature bar"
    className="grid grid-cols-1 @bp-600/main:grid-cols-2 gap-5 @bp-1090/main:grid-cols-4 my-space-6xl"
  >
    {FEATURE_BAR.map(({ icon, title, describe }, index) => (
      <div className="flex gap-[13px]" key={index}>
        {icon}
        <div className="flex flex-col">
          <p className="text-xl text-charcoalGray-50 dark:text-white">{title}</p>
          <p className="text-base font-normal text-charcoalGray-50 dark:text-gray-60">{describe}</p>
        </div>
      </div>
    ))}
  </section>
);
