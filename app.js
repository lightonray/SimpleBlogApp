const express = require('express'); // express app 

const app = express();
 
app.set('view engine', 'ejs') // register view engine

app.listen(3000); // listen for request 

app.get('/', (req,res) => {
    const blogs = [
        {title: '10 Easy Ways to Improve Your Productivity', snippet: "Improving productivity can seem like a daunting task, but it doesn't have to be. By making a few small changes to your daily routine and mindset, you can significantly increase your efficiency and achieve more in less time. Here are 10 easy ways to get started"},
        {title: 'The Benefits of Meditation: Why You Should Start Today', snippet: "If you're looking to reduce stress, improve focus, and enhance your overall well-being, meditation may be just what you need. With its numerous benefits, including increased happiness and reduced anxiety, meditation has become an increasingly popular practice in recent years"},
        {title: 'The Power of Positive Thinking: How it Can Change Your Life', snippet: "The power of positive thinking is truly remarkable. By changing your mindset and focusing on the good in life, you can transform your life and achieve greater happiness and success. In this article, we'll show you how to harness the power of positive thinking and improve your life in countless ways"}
    ]
    //res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname}) // is going to look for the abosolute path from our computer
    res.render('index',{blogs})
});


app.get('/about', (req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about')
});

app.get('/blogs/create', (req,res) =>{
    res.render('create');
})

app.use((req,res) => {
    //res.sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404')
}); //middleware

// use fun is going to fire for every single req but only if req reaches this code 