/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  daisyui: {
    
        mytheme: {
        
"primary": "#84ed6a",
        
"secondary": "#af2d4e",
        
"accent": "#ffb2f6",
        
"neutral": "#281b2d",
        
"base-100": "#3b3c4f",
        
"info": "#a1daec",
        
"success": "#25cb6a",
        
"warning": "#f98f24",
        
"error": "#de3835",
        },
      
  },
  plugins: [require("daisyui")],
}

