
//Importing 
var fs=require("fs"); //fs is file system
var fileName1="./data/transflower.txt";

//Read function
var onFileRead=function(err,data){

    if(err){ //throws the error when file is not found or wrong file name 
        throw err;
    }
    console.log("Data from the file available");
    console.log(data.toString());
};
//Callback function
fs.readFile(fileName1,onFileRead);//nonblocking call

console.log("Terminating Node JS Application");