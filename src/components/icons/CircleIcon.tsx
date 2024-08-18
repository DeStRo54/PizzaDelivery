export type CircleColorVariant = 'positive' | 'negative' | 'attention';

interface CircleIconProps extends React.ComponentProps<'svg'> {
  color: CircleColorVariant;
}

const CircleColors = {
  positive: '#40BF7F',
  negative: '#F64C4C',
  attention: '#FFB219'
};

export const CircleIcon = ({ color, className, ...props }: CircleIconProps) => (
  <svg
    className={className}
    width="8"
    height="9"
    viewBox="0 0 8 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="4" cy="4.14204" r="4" fill={CircleColors[color]} />
  </svg>
);
