/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Paths to all template files
  theme: {
    extend: {
      // Custom breakpoints for responsiveness
      screens: {
        xs: "475px",       // Custom breakpoint for smaller screens
        sm: "640px",       // Small devices like mobile phones
        md: "768px",       // Tablets
        lg: "1024px",      // Laptops
        xl: "1280px",      // Large devices
        "2xl": "1536px",   // Extra large devices
        "3xl": "1920px",   // Very large devices (big screens)
      },

      // Container configuration for centering and padding
      container: {
        center: true,      // Centers the container
        padding: "1rem",   // Default padding
        screens: {
          sm: "100%",      // Full width on small devices
          md: "768px",     // Fixed width for tablets
          lg: "1024px",    // Fixed width for laptops
          xl: "1280px",    // Fixed width for large devices
          "2xl": "1536px", // Fixed width for extra large devices
        },
      },

      // Custom spacing values
      spacing: {
        16: "4rem",        // 16 units = 4rem
        20: "5rem",        // 20 units = 5rem
        24: "6rem",        // 24 units = 6rem
        30: "7.5rem",      // 30 units = 7.5rem
      },

      // Maximum width configurations
      maxWidth: {
        sm: "24rem",       // Small screen max width (384px)
        md: "28rem",       // Medium screen max width (448px)
        lg: "36rem",       // Large screen max width (576px)
        xl: "48rem",       // Extra large screen max width (768px)
        "2xl": "64rem",    // 2XL screen max width (1024px)
      },
    },
  },

  // Plugins for additional utilities
  plugins: [
    require("@tailwindcss/aspect-ratio"), // For maintaining aspect ratios
    require("@tailwindcss/typography"),  // For better typography
    require("@tailwindcss/forms"),       // For styling forms
  ],
};
