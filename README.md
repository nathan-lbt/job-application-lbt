React and Typescript app for job application.

# Description

Two views are available. Passing from one to the other is available thanks to useNavigate from react-router-dom.
The first view enables the user to add basic forms representing train delevery sheets and store them locally into the store.
The second one enables the user to edit the forms added to the store and, if needed, to delete one or all the forms added.

Components are based on MUI (https://mui.com/) v5 and organised using the example of atomic design (https://atomicdesign.bradfrost.com/).
Store is managed using redux-toolkit library (https://redux-toolkit.js.org/).

## First view

![image](https://user-images.githubusercontent.com/114100611/192646023-f6c40533-a2c6-4810-9a0a-f716f282899f.png)

Note: if the sheet the user wants to save has the same reference as one stored locally, a snackbar informs the user he can't add this form.

## Second view

![image](https://user-images.githubusercontent.com/114100611/192644886-9daff8f3-5423-4d5d-b9b1-f9943e81b319.png)

# Available Scripts

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## `npm run eslint`

Runs eslint.
