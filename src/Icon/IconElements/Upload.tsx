export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 20L18 20"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
