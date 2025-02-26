import { Skeleton } from "../../../ui/skeleton";
import { SkeletonRoot } from "./styled";

const skeletonCount = 10;
export function CarListSkeletons() {
  return (
    <SkeletonRoot>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton key={index} $height="182px" $width="268px" />
      ))}
    </SkeletonRoot>
  );
}
