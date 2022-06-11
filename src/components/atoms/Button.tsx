import * as React from 'react';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends HTMLButtonProps {
  variant?: keyof typeof themes,
  disableShadow?: boolean
  color?: keyof typeof bgColors
  startIcon?: string,
  endIcon?: string,
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

function Button(props: ButtonProps) {
  const disableShadow = props.disableShadow || !!props.variant;
  const theme = props.variant || 'default';
  const color = props.color || 'default';

  return (
    <button
      type={props.onClick ? 'button' : 'submit'}
      {...props}
      className={`px-4 py-2 rounded transition-colors ${themes[theme]} ${
        props.className || ''} ${
        disableShadow ? '' : 'shadow-md'
      } ${
        props.disabled && props.variant != 'text' ? 'opacity-40' : ''
      }`}
      style={{
        '--main-colors': bgColors[color],
        '--text-color': color == 'default' ? '#3F3F3F' : 'white',
        '--hocus-colors': bgHocusColors[color],
      } as any}
    >
      {props.startIcon && <i className={`${props.startIcon} mr-2`} />}
      {props.children}
      {props.endIcon && <i className={`${props.endIcon} ml-2`} />}
    </button>
  );
}

export default Button;
