import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const AttributeList = styled.ul`
  columns: 2;
  column-width: 50%;
  text-align: left;
  ${media.largeScreen`
    column-width: 100%;
    columns: 1;
  `};
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 30px;
    font-size: ${props => props.theme.typography.h4FontSize};
    font-family: "Josefin Sans";
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.tabsBorder};
  margin-bottom: 20px;
  margin-top: 20px;
  overflow: hidden;
`;

export const TabTitle = styled.div<{ active?: boolean }>`
  cursor: pointer;
  font-size: ${props => props.theme.typography.h4FontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  letter-spacing: 0.02em;
  color: ${props => props.active && props.theme.colors.tabTitle};
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.active ? props.theme.colors.tabTitle : "transparent"};
  padding-bottom: 10px;
  margin-right: 60px;

  ${media.smallScreen`
    font-size: ${(props: any) => props.theme.typography.h4FontSize};
    min-width: 150px;
    margin-right: 20px;
  `};
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;
