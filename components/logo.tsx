export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Icon part */}
      <path
        d="M13.2861 23.2163V35.6997H6.44141V29.647H0V23.2163H6.44141V23.2153L13.2861 23.2163ZM23.3506 13.7563H23.3516V20.187H23.3506V26.2397H16.5068V20.187H10.0654V13.7563H16.5068V13.7554L23.3506 13.7563ZM33.416 4.30029V16.7837H26.5723V10.731H20.1299V4.30029H33.416Z"
        fill="white"
      />

      {/* Text part - Equity */}
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#F7931E" />
          <stop offset="100%" stopColor="#FFB84D" />
        </linearGradient>
      </defs>
      
      <text
        x="45"
        y="26"
        fill="url(#orangeGradient)"
        fontSize="20"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="700"
        letterSpacing="-0.025em"
      >
        Equity
      </text>
      
      {/* Text part - Pay */}
      <text
        x="110"
        y="26"
        fill="white"
        fontSize="20"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="300"
        letterSpacing="-0.015em"
      >
        Pay
      </text>
    </svg>
  );
};
