# Countdown

## Improved countdown

The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?

**Do a critique:** The current implementation isn't perfect. How could it be improved?

----

### Pick an area of improvement to implement.

#### What would happen to the current code if the date were changed, the page layout was changed or the format was changed?

* The styles are too formal for a birthday celebration for that reason I changed them to a more relaxed color like blue instead of black.
* A Birthday Card Modal was added obly for illustrative purposes when the countdown ends.

#### Does the current implementation follow best practices for HTML, CSS, JS and React?

* No, all was wrapped together, then it was pretty hard using memo, callbacks, or pure components to avoid unnecesary rendering.
* Also, separating stateless and stateful components was done incorrectly.

#### Let's be honest, this countdown could be a whole lot more exciting.

* Yes, adding back-end connections to send e-mails to remeber people about CTO bithday would be a good idea.

#### What could you do to create a greater sense of urgency?

* All was crashed, making working all properly was the first priority.

#### How would you make this countdown more aesthetically pleasing?

* Adding some styles aligned to the company or CTO's image.
* Adding icons alusive to the birthay or company. Indeed I changed the defauld React icons by some custom ones, they can be accesible cleaning the web browser cache. 

#### Trust your design instincts, and explain how your design choices impact the user experience

* For more details about this please see the anotations in the first commit.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
