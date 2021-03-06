var config = require("./mcConfig");
var request = require('request');
var querystring = require('querystring');

function createPost(oPost) {

  var url = "https://mp.csdn.net/mdeditor/saveArticle";
  debugger;
  var oBody = {
          title: oPost.title,
          markdowncontent: encodeURIComponent(oPost.body),
          tags: oPost.jerry_label,
          categories: oPost.jerry_label,
          channel:"14",
          type:"original",
          articleedittype:"1",
          content: encodeURIComponent(oPost.body)
        };

var formData = querystring.stringify(oBody);
var contentLength = formData.length;

var createPostOptions = {
        url: url,
        method: "POST",  
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Content-Length": contentLength,
            "origin" :"https://mp.csdn.net",
            "referer" :"https://mp.csdn.net/mdeditor",
            "User-Agent" :"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
            "cookie": config.cookie
        },
        body: formData
};

  return new Promise(function(resolve,reject){
      var requestC = request.defaults({jar: true});
      console.log("Step1: create post via url: " + url );

      requestC(createPostOptions,function(error,response,body){
       
       if(error){
          reject(error);
       }
       console.log("response: " + body);
       console.log("**************************************");
       console.log("Post created Successfully");
       
       resolve(body);
      }); 
     });
}

module.exports = createPost;