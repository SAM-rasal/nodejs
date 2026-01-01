var fs=require("fs"); //fs is file system
var fileName1="./data/result.txt";

var dataToBeWritten="This data is written by Node JS Application";

var onFileWrite=function(err){
    if(err){ //throws the error when file is not found or wrong file name 
        throw err;
    }
    console.log("Data is written to the file successfully");
};
//First parameter : path of the file
//Second parameter : data to be written
//Third parameter : callback function name, which will be called automatically
//after write operation is done by the system
fs.writeFile(fileName1,dataToBeWritten,onFileWrite);

console.log("Terminating Node JS Application");
