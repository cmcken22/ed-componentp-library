export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 15L12 9L18 15"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
