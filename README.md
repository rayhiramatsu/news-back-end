# news-back-end

## Back-end of MERN stack, news/political/messageboard webapp


### Current Schema:
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


},
{timestamps: true});
```
