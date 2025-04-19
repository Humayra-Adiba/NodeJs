const fs =require('fs');
 // fs is a module that is used to work with the file system on your computer. It allows you to read, write, and manipulate files and directories.

 fs.writeFile("demo.txt", "Hi, I am Humayra Adiba", (err) => {
    if (err) throw err;
    console.log("File created successfully");
    })   

fs.appendFile("demo.txt", "I am a student of class 10", (err) => {
    if (err){
        console.log(err);
    }else{
        console.log("successfull");
    }
}
)

fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.rename("demo.txt", "demo1.txt", (err) => {
    if (err) throw err;
    console.log("File renamed successfully");
})

fs.unlink("demo1.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
})

fs.exists("demo.txt", (exists) => {
    if (exists) {
        console.log("File exists");
    } else {
        console.log("File does not exist");
    }
})