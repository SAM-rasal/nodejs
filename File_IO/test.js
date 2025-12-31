
//Importing 
var fs=require("fs"); //fs is file system
var fileName1="./data/transflower.txt";
var fileName2="./data/result.txt";
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
fs.readFile(fileName2,onFileRead);

console.log("Terminating Node JS Application");