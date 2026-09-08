// Promise => Future value

/**
 * Promise cases:
 * 
 * 1. Pending - working
 * 2. Resolved - successfully fetch data
 * 3. Reject - error occur while fetching
 * 
 */

import fs from "fs/promises";

fs.readFile("data/data.json", "utf-8")
    //resolved
    .then( (users) => {
        console.log(users);

        return fs.readFile("data/posts.json", "utf-8");
    })
    .then((post) => {
        console.log(post);
    })
    //reject
    .catch( (error) => {
        console.log(error);
    });
