# NewsPost, back-end

[Live Heroku](https://desolate-hollows-backend.herokuapp.com/)

## Back-end of MERN stack, news/political/messageboard webapp

This repo serves to be the back-end server of NewsPost. Front-end repo can be found at (https://github.com/kcastillo90/news-front-end) with [live Heroku here](https://desolate-hollows-04392.herokuapp.com/).

In particular, the back-end makes use of MongoDB Atlas, ExpressJS and NodeJS, with front-end handled with the React Library. In addition, Auth0 is used for user authentication and Bootstrap is used for front-end styling. Lastly, several additional npm packages are also used:

- bcrypt (scrapped later)
- cors
- dotenv
- express-session


In short, NewsPost is a single-page webapp that serves as a user submitted news aggregator and discussion site.

## Challenges

With this being the first major endeavor using the full MERN stack and working in groups, there were quite a few new challenges encountered. For me personally, working off of multiple git branches, switching back and forth, and ensuring that no pushes/pulls would catastrophically break the entire app was something that was always at the front of my mind.

In terms of back-end code, this would come down to ensuring that everyone stayed on the same page with schema key-values and adding in the necessary routes as our project goals continued to change.

While the app we can confidently say achieves full CRUD, we fell short of the stretch goal for users in actually being able to comment on posts.

Additionally, struggles with using bcrypt for user authentication/sessions and then eventually scrapping it for a working version with the Auth0 API left little room to tackle comments.

The back-end then contains a few unnecessary files: users.js, users_controller.js, comments.js, comments_controller.js, and seed.js.  


### Post Schema/Model
```
const postSchema = new mongoose.Schema({
    // needs some stuff here
    link: String,
    title: {type: String, required: true},
    author: String,
    date: String,
    topics: [{type: String}],
    description: String,
    image: String,
    comments: [Comment.schema]
},
{timestamps: true});
```
### Comment Schema/Model

```
const commentSchema = new mongoose.Schema({
    body: String

},
{timestamps: true});
```
