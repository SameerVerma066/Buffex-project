export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: '#FFD700', // Custom gold color
          secondary: '#28282B', // Custom dark color
          accent: '#FF5733', // Custom accent color
        },
        fontFamily: {
          custom: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
          poppins: ['Poppins']
          // Custom font family
        },
        spacing: {
          18: '4.5rem', // Custom spacing value
        },
      },
    },
    plugins: [],
  };