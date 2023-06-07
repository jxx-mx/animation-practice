import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledOuterWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 10px 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
`;

const StyledInnerWrapper = styled.div<{
  direction: "reverse" | "normal";
  duration: number;
}>`
  ${({ direction, duration }) => css`
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${direction};
    animation-duration: ${duration}ms;

    @keyframes loop {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #334155;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%);

  > span {
    font-size: 1.2rem;
    color: #64748b;
  }
`;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #1e293b,
    transparent 30%,
    transparent 70%,
    #1e293b
  );
  position: absolute;
  inset: 0;
`;

export { StyledOuterWrapper, StyledInnerWrapper, StyledItem, StyledFade };
