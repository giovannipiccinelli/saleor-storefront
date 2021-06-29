import { DefaultTheme, styled } from "@styles";
import { activeLabelStyles } from "../InputLabel";

type WrapperProps = {
  active: boolean;
  error: boolean;
  disabled: boolean;
  theme: DefaultTheme;
};

const getEdgeColor = (
  { active, error, disabled, theme }: WrapperProps,
  hovered = false
) => {
  if (disabled) {
    return theme.colors.disabled;
  }

  if (error) {
    return theme.colors.error;
  }

  if (hovered) {
    return theme.colors.secondary;
  }

  return active ? theme.colors.secondary : theme.colors.dark;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  border: 1px solid ${props => getEdgeColor(props)};
  color: ${props => getEdgeColor(props)};
  outline: ${props =>
    props.active ? `2px solid ${getEdgeColor(props)};` : "none"};
  transition: all 0.3s ease;
  outline-style: none;

  &:hover {
    color: ${props => getEdgeColor(props, true)};
    outline-width: ${props => (props.disabled ? 0 : 1)}px;
    outline-style: none;
    border-color: ${props => getEdgeColor(props, true)};
    outline-color: ${props => getEdgeColor(props, true)};
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
`;

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Textarea = styled.textarea<{ labelBackground: string | null }>`
  padding: 1.5rem 1rem;
  margin: 0;
  height: 120px;
  border: none;
  width: 100%;
  font-size: ${props => props.theme.typography.baseFontSize};
  outline: none;
  background-color: transparent;
  &:-webkit-autofill {
    border-radius: 5px;
    & + label {
      ${props => activeLabelStyles(props.theme, props.labelBackground)};
    }
  }
`;
