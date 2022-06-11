import * as React from 'react';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends HTMLButtonProps {
  variant?: keyof typeof themes,
  disableShadow?: boolean
  color?: keyof typeof bgColors
  startIcon?: string,
  endIcon?: string,
  size?: keyof typeof padding
}

const bgColors = {
  default: '#E0E0E0',
  primary: '#3D5AFE',
  secondary: '#455A64',
  danger: '#D32F2F',
};

const bgHocusColors = {
  default: '#AEAEAE',
  primary: '#0039CB',
  secondary: '#1C313A',
  danger: '#9A0007',
};

const themes = {
  default: 'button-main-colors',
  text: 'button-third-colors',
  outline: 'button-second-colors border-1',
};

const padding = {
  sm: '.25rem 0.75rem',
  md: '0.5rem 1rem',
  lg: '0.75rem 2rem',
};

function Button(props: ButtonProps) {
  const {
    disableShadow = !!props.variant,
    variant = 'default',
    color = 'default',
    size = 'md',
    startIcon,
    endIcon,
    ...forButton
  } = props;

  return (
    <button
      type={props.onClick ? 'button' : 'submit'}
      {...forButton}
      className={`px-4 py-2 rounded transition-colors ${themes[variant]} ${
        props.className || ''} ${
        disableShadow ? '' : 'shadow-md'
      } ${
        props.disabled && props.variant != 'text' ? 'opacity-40' : ''
      }`}
      style={{
        '--main-colors': bgColors[color],
        '--text-color': color == 'default' ? '#3F3F3F' : 'white',
        '--hocus-colors': bgHocusColors[color],
        padding: padding[size],
        ...props.style,
      } as any}
    >
      {startIcon && <i className={`${startIcon} mr-2`} />}
      {props.children}
      {endIcon && <i className={`${endIcon} ml-2`} />}
    </button>
  );
}

export default Button;
