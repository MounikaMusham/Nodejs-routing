const fs = require("fs");
const http=require('http');
const url = require('url');

const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName ==='/Home' || pathName ==='/'){
        res.end('Welcome, Home pade describes main content of website.')
    }else if(pathName ==='/contact'){
        res.end('You can find our contact information')
    }else if(pathName === '/products'){
        res.end('you can find all product details here')
    }else if(pathName === '/aboutus'){
        res.end('Know more about our company')
    }

});
server.listen(8000,'127.0.0.1',() => {
    console.log('listening to port at 8000');
});