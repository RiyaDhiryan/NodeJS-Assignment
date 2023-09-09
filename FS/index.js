const fs = require('fs');
// const data = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";
// fs.writeFileSync('nodejs_architecture',data);

// ///// To Read text file//////////////

// var readData = fs.readFileSync('nodejs_architecture');
// console.log('Data:',readData.toString());

// ///////// Append the Text file//////////

// var appendData = "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";
// fs.appendFileSync('nodejs_architecture',appendData);
// const ReadFileAfterAppend = fs.readFileSync('nodejs_architecture');
// console.log(ReadFileAfterAppend.toString());

///// Delete the text file///////////

// fs.unlink('nodejs_architecture',function(err)
// {
//     if(err){
//         console.log("Error while deleting")
//     }
//     else{
//        console.log('File delete Sucessfully!') 
//     }
    
// })