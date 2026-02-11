import { ImageResponse } from "next/og";

// Icon metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#1e1e23", // Dark background
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%", // Rounded square
          color: "white",
        }}
      >
        {/* Developer Avatar SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hair / Head */}
          <path
            d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 4.5 5 4.5 4.5 5.5C4 6.5 4.5 8 5.5 8.5C4.5 9.5 4.5 11 5 12C5.5 13 7 13.5 8 13.5V14.5C8 16.5 9.5 18 12 18C14.5 18 16 16.5 16 14.5V13.5C17 13.5 18.5 13 19 12C19.5 11 19.5 9.5 18.5 8.5C19.5 8 20 6.5 19.5 5.5C19 4.5 17.5 4.5 17 5.5C16.5 3.5 14.5 2 12 2Z"
            fill="#e87c2c" // Orange hair like brand
          />
          {/* Face */}
          <path
            d="M8 8H16V13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13V8Z"
            fill="#ffdbac" // Skin tone
          />
          {/* Glasses */}
          <path
            d="M7 9.5H17M8 9.5C8 9.5 8 11.5 9.5 11.5C11 11.5 11 9.5 11 9.5M13 9.5C13 9.5 13 11.5 14.5 11.5C16 11.5 16 9.5 16 9.5"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
           {/* Beard / Goatee */}
           <path 
             d="M12 17L11 18H13L12 17Z" 
             fill="#333" 
           />
          {/* Body/Shirt */}
          <path
            d="M4 19C4 17 6 16 12 16C18 16 20 17 20 19V22H4V19Z"
            fill="#333" // Dark shirt
          />
          {/* Code Tag on Shirt */}
          <path
            d="M9 19L8 20L9 21M15 19L16 20L15 21M11 21H13"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
