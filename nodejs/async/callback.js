/**
 * Callback: function used as a parameter in another function.
 * Higher order function: function that accepts function as a parameter.
 */

import fs from "fs";

// fs.readFile("data/data.txt", "utf-8", (error, data) => {
//     console.log(data);
// });

//Callback Hell;
fs.readFile("data/user.json", "utf-8", (userError, userData) => {
    if(userError)
    {
        console.log(userError)
    }
    else{
        console.log(userData);
        
        fs.readFile("data/posts.json", "utf-8", (postError, posts) => {
            if(postError)
            {
                console.log(postError);
            }
            else{
                console.log(posts);

                const userPosts = JSON.parse(userData).map((user) => {
                    return{
                        ...user,
                        post: JSON.parse(posts).find((post) => post.userId == user.userId)
                    };
                });

                console.log(userPosts);

                fs.readFile("data/comments.json", "utf-8", (commentError, comments) =>{
                    if(commentError)
                    {
                        console.log(commentError);
                    }
                    else{
                        console.log(comments);
                    }
                });
            }
        });
    }
});



