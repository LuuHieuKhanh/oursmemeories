export function Rope() {
  return (
    <div className="absolute top-[32px] md:top-[64px] left-0 w-full flex justify-center pointer-events-none z-10 hidden md:flex">
      <svg
        width="100%"
        height="120"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="w-[90%] md:w-[80%] max-w-[1200px]"
      >
        <path
          d="M 0 20 Q 500 120 1000 20"
          fill="none"
          stroke="#E5DFD5"
          strokeWidth="3"
          strokeDasharray="6 2"
        />
      </svg>
    </div>
  );
}
