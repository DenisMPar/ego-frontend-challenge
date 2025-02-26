import { Skeleton } from "../../../ui/skeleton";
import {
  SkeletonContainerDesktop,
  SkeletonContainerMobile,
  SkeletonRoot,
} from "./styled";

export function CarDetailSkeletons() {
  return (
    <SkeletonRoot>
      <SkeletonContainerMobile>
        <Skeleton $height="200px" $width="300px" />
        <Skeleton $height="20px" $width="50px" />
        <Skeleton $height="30px" $width="300px" />
        <Skeleton $height="80px" $width="300px" />
      </SkeletonContainerMobile>
      <SkeletonContainerMobile>
        <Skeleton $height="200px" $width="300px" />
      </SkeletonContainerMobile>
      <SkeletonContainerMobile>
        <Skeleton $height="200px" $width="300px" />
      </SkeletonContainerMobile>
      <SkeletonContainerDesktop>
        <Skeleton $height="320px" $width="500px" />
        <Skeleton $height="320px" $width="500px" />
      </SkeletonContainerDesktop>
      <SkeletonContainerDesktop>
        <Skeleton $height="460px" />
      </SkeletonContainerDesktop>
    </SkeletonRoot>
  );
}
