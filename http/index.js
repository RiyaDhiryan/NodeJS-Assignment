// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write("<h1>I Am Happy To Learn Full Stack Web Development From Pw Skills!</h1>")
//     }
//     res.end();
// })
// server.listen("3000",()=>{
//     console.log('The http server is running on port 3000');
// })
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

 eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);
  
  eventEmitter.setMaxListeners(5);
  
  console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);