## Steps for creating app

For creating app run 'yarn create next-app', enter project name 'article-reviewer' when asked;

After creating the app, navigate to the app directory with 'cd article-reviewer';

Next add Material UI using 'yarn add @material-ui/core'

For this project I'll use mongodb, so I run 'yarn add mongoose'

Next start the app in development mode using 'yarn run dev' and open the app at 'http://localhost:3000'

Next remove unused files, like 'Home.module.css', 'vercel.svg', 'hello.js' and start creating pages for the new app.
Create pages and components, style them using Material UI.
Add '.env.local' file containing environment variable 'DB_CONNECTION_STRING'.
Add util for connecting to the data base.
Add model for Article.
Add API for creating an article and for getting articles.
Link API for creating an article with form.
Review the code and push it to the repo.
