import {
  StyledFade,
  StyledInnerWrapper,
  StyledItem,
  StyledOuterWrapper,
} from "./styled";
import { CarouselInnerWrapperProps } from "./type";

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Emotion",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "Animation",
  "WebDev",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = TAGS.length / 2;

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(arr: string[]) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function CarouselInnerWrapper({
  children,
  duration,
  reverse,
}: CarouselInnerWrapperProps) {
  return (
    <StyledInnerWrapper
      direction={reverse ? "reverse" : "normal"}
      duration={duration}
    >
      {children}
      {children}
    </StyledInnerWrapper>
  );
}

function CarouselItem({ text }: { text: string }) {
  return (
    <StyledItem>
      <span>#</span> {text}
    </StyledItem>
  );
}

function InfiniteCarousel() {
  return (
    <>
      <header>
        <h1>Infinite Scroll Animation</h1>
      </header>
      <StyledOuterWrapper>
        {[...new Array(ROWS)].map((_, i) => (
          <CarouselInnerWrapper
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2 === 1}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <CarouselItem text={tag} key={tag} />
              ))}
          </CarouselInnerWrapper>
        ))}
        <StyledFade />
      </StyledOuterWrapper>
    </>
  );
}

export default InfiniteCarousel;
