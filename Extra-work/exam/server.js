import express from "express";
import { promises as fs } from 'fs'; 

const app = express();
const port = 3000;

app.use(express.static("public"));

// Reads the users.json file and returns the JSON array of all users.
app.get('/users', async (req,res) =>{
    try{
        // Read the JSON data from the file
        const user_data = await fs.readFile('./users.json','utf-8');
        
        // Parse the JSON data from the file into a JS object
        const users = JSON.parse(user_data);

        // Send the client the array of users
        res.json(users);
    } catch(error) {
        console.error(error);
        res.status(500).send("Error reading users file");
    }
});

// Reads the posts file and filters the posts array based on user id
app.get('/posts/:id', async (req,res) =>{
    // Extract the parameter from the URL and convert in to an int
    const user_id = parseInt(req.params.id,10);

    //  If the id is invalid send error res
    if (isNaN(user_id)) {
        res.status(400).send("Invalid user ID");
        return;
    }

    try{
        // Read the post.json file
        const post_data = await fs.readFile('./posts.json','utf-8');

        // Parse the JSON data itno a JS object
        const posts = JSON.parse(post_data);

        // Filter the posts based on user_id
        const user_posts = posts.filter(post => post.userId === user_id);

        // Send the filtered array to the client
        res.json(user_posts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error reading posts");
    }
});

app.get('/users/:id', async (req,res) => {
    const user_id = parseInt(req.params.id,10);

    if(isNaN(user_id)) {
        res.status(400).send("Invalid id");
        return;
    }

    try {
        const user_data = await fs.readFile('./users.json');
        
        const users = JSON.parse(user_data);

        const user = users.find(u => u.id === user_id);

        if(user) {
            res.json(user);
            return;
        }
        res.status(400).send("User not found");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error finding user");
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
