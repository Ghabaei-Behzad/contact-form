// Behzad Ghabaei
// CS 81 - Javascript
// Assignment 11A - ContactForm.js - App.js
// Readme.md
// Instructor Seno
// Feb. 10, 2026

## url address
https://github.com/Ghabaei-Behzad/contact-form.git

## What I learned
The creation of repositories contain a helpful way to push my js file from git. The commands I used were
npx create-react-app contact-form
cd contact-form
npm start.
The . code command opens the files in my VS Code editor. Learning about event handlers and useState hooks in React, and how to code forms in the return block.

## What I added to the ContactForm.js file.
I learned how to add a phone number input box, and use regex validation to limit 10 numbers. The symbol:
 /^\d{10}$/ means,
/ ... / inside is a Regex pattern. ^ Start at the very beginning of the text. \d digit, only allows numbers 0-9.
{10} the quantifier, exactly 10. $ End of the text.
In the ContactForm.js file the phone was added in useState. Here is our code:
const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
In the validate() function validation is made with an if statement, 
if (!formData.phone.trim()) {
newErrors.phone = 'Phone number is required';
when I run phoneRegex.test(formData.phone), it returns
true if the user typed 10 digits, false if the user typed dashes or shorter number sequences.
The handleSubmit function triggers the JSON block when setSubmittedData is satisfied.
In the return block, phone number's placeholder is 1234567890. We see it in the UI phone input box. The value={formData.phone} 
and the onChange={handleChange}, receive the data, and errors are styled as red messages from errors.phone.

## Any ideas developed
I think that the button event handler could be used to make a tic tac toe game, which is in a React tutorial.  But, I think a personal budget tracker is really simple and lets me add up expenses with local storage which makes me interested in trying it out.

## screenshot
<img width="1362" height="685" alt="Assign11A" src="https://github.com/user-attachments/assets/cb62df58-3a57-4cde-9ea6-9f642b34a8a5" />


## This is from the React Code-----------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
