import styled from "styled-components";

interface ImgProps {
  width: string;
  height: string;
}
export const Img = styled.img<ImgProps>`
  object-fit: contain;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
