import { StarIcon } from '../icons';

interface IEvaluate {
  value: number;
}

export const Evaluate = ({ value }: IEvaluate) => (
  <div className="flex gap-1">
    {Array.from({ length: value }, (_, index) => (
      <StarIcon width="20px" height="19px" key={index} />
    ))}
  </div>
);
