Команды для git <====================>

1. git status
2. git add. - добавить файлы в stage
3. git commit -m 'создать комментарий к гиту'
4. git log - показывает подробную информацию
5. git log --oneline - краткая информяция
6. git push [rep_link] [branch_name] - добавить на гитхаб
7. git branch - ветка
8. git remote -v
9. git remote add origin [https://github.com/...] - привязать ссылку к репозиторию
10. git clone [Url] - склонировать с гитхаб
11. git config [config user.name / config user.email] - проверить user / email если нужно изменить то после команды в "новый email / user"


Доп. команды: <=====================>

1. git reset [file(название файла)] - удаляет файлы из временного хранилища stage
2. git diff - показывает какие строки изменились.
3. git reset --hard - возвращает (откатывается назад) все изменения в файлах и очищает git status.


Ветки [branch]: <=====================>

1. git branch [название ветки] - добавить ветку
2. git branch -d [название ветки] - локально удалить ветку
3. git checkout[название ветки] - переключится на [branchName] ветку
4. git checkout -b [название ветки] - добавить ветку и сразу переключится на [новую] ветку
5. git pull [origin] [branch] - забирает изменения из ветки github и добавляет их в локальную ветку на компе
6. git merge [название ветки] - слияние ветки master и secondary (пример: git merge secondary-branch)

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
