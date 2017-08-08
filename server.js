var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one' : {
    title:'ARTICLE ONE | SIDHU',
    header:' Article One',
    date:'Aug 8,2017',
    content:`   <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>`
    
                },
    'articletwo' :{title:'ARTICLE TWO | SIDHU',
    header:' Article Two',
    date:'Aug 9,2017',
    content:`   <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>`},
    'article-three':{title:'ARTICLE THREE | SIDHU',
    header:' Article Three',
    date:'Aug 10,2017',
    content:`   <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>
            
                <p>
                    This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....This is the content of the the article one page....
                
                </p>`}
};

function htmlTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var header = data.header;
    
    var htmlPage=
    `   <html>
        <head>
    
            <title>${title}</title>
        
            <meta name="viewport" content="width=device-width,initial-scale=1">
    
    
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
        <body>
    
            <div class='container'>
    
                <div>
                    <a href="/">Home</a>    
                </div>
        
                <hr/>
        
                <h3>
                    ${header}
                </h3>
        
                <div>
                    ${date}
                </div>
        
                <div>
        
                    ${content}
            
                </div>
        
            </div>
    
        </body>
  
    </html>`;

       
    
    return htmlPage ;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    
    var articleName = req.params.articleName;    
    res.send(htmlTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
