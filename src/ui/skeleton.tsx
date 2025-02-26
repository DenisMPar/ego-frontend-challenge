import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-color: #e0e0e0; }
  50% { background-color: #f0f0f0; }
  100% { background-color: #e0e0e0; }
`;

export const Skeleton = styled.div<{ $height?: string; $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;
