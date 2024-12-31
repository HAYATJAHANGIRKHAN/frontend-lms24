
# frontend-lms
# vite setup
npm create vite@latest
--> give project name
--> select React
--> select javascript
then run cmd below one by one
cd lms-frontend
  npm install
  npm run dev
 

 # Tailwind setup
 1.npm install -D tailwindcss postcss autoprefixer // install tailwindCss

2. npx tailwindcss init  // create tailwind confiq file 

 3./** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"], // this copy and paste in tailwind.config.js 
  theme: {
    extend: {},
  },
  plugins: [],
}
# copy this cmd and paste in index.css
 4.@tailwind base;
@tailwind components;
@tailwind utilities;

npx tailwind init -p 
npm i -D postcss autoprefixer

5. npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

6.# frontend-lms
# vite setup
npm create vite@latest
--> give project name
--> select React
--> select javascript
then run cmd below one by one
cd lms-frontend
  npm install
  npm run dev
 
 # Adding  plugins and  dependencies install 
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp


 # for import sort 
 npm i -D eslint-plugin-simple-import-sort

 # Add .eslintrc.cjs
 path -> .eslintrc.cjs -> plugins :[ 'simple-import-sort'],

 Rules ->  'simple-import-sort/imports': 'error',

 # To enable auto import  sort on file save  in vscode 

 open `setings.json`
 add the following  config -> " editor.codeActionsOnSave " :{
  "source.fixAll.eslint": true
 }
  
  # add in tailwind.config.js 
    plugins: [require("daisyui"), require("@tailwindcss/line-clamp")]


# Add in index.html
 <script src="https://checkout.razorpay.com/v1/checkout.js"></script>