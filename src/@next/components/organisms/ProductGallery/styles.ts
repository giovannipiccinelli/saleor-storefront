import { styled } from "@styles";
import { keyframes } from "styled-components";

const loadImg = keyframes`
  0% {
    filter: blur(20px);
    -webkit-filter: blur(20px);
  }
  100% {
    filter: blur(0px);
    -webkit-filter: blur(0px);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "sidebar preview";
  height: 100%;
  grid-template-columns: 76px 1fr;
  grid-column-gap: 40px;
`;

export const Thumbnail = styled.div<{ activeThumbnail: boolean }>`
  width: 76px;
  display: flex;
  border-width: 2px;
  border-bottom: solid;
  border-color: ${props =>
    props.activeThumbnail === true
      ? props.theme.colors.thumbnailBorder
      : "transparent"};
  justify-content: center;
  height: 100px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(50, 50, 50, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TopButton = styled(Button)`
  top: 0%;

  transform: rotate(180deg);
`;

export const BottomButton = styled(Button)`
  bottom: 0%;
`;

export const ThumbnailsContainer = styled.div`
  position: relative;
`;

export const ThumbnailList = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ul {
    position: absolute;
    display: block;
    padding: 0;
    margin: 0;
  }
`;

export const Preview = styled.div`
  grid-area: preview;
  width: auto;
  max-height: 100%;
  overflow: hidden;
  img {
    display: flex;
    flex-direction: column;
    width: 100%;
    object-fit: contain;
    animation: ${loadImg} 1s;
  }
`;
