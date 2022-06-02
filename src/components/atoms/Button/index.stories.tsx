import Button from '~/components/atoms/Button/index';

export default {
  title: 'Button',
  argTypes: {
    count: Number,
    onChange: {
      action: 'clicked',
    },
  },
};

interface DefaultProps {
  count: number
  onChange(count: number): void
}

export function Default(props: DefaultProps) {
  return (
    <Button
      onChange={props.onChange}
      defaultCount={props.count}
    />
  );
}

Default.args = {
  count: 0,
} as DefaultProps;
