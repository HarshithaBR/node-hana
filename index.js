var express= require("express")
var data= require("./data")
const bodyParser= require('body-parser')

var app= express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get("/data/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    data.forEach(element => {
        
        if(element.id==id){
            return res.send(element);   
        }      
    });
})

app.post("/data",(req,res)=>{
    console.log("in post")
    console.log(req.body)
    var newData={
        id:data.length +1,
        name:req.body.name,
        age:req.body.age,
        college:req.body.college
    }

    data.push(newData)
    console.log(data)
    res.send(newData)
    return;
    
})

app.delete('/data/:id',(req,res)=>{
    console.log("in delete")

    const id=req.params.id;
    console.log(id);
    var i=0;
    data.forEach(element => {
        
        if(element.id==id){
             data.splice(i,1);
             res.send(data);
        }
        i++;      
    });

})

app.get('/data',(req,res)=>{
    console.log("in /data")
    res.send(data);
})

app.put('/data',(req,res)=>{
    console.log("in put(update)!!")
    var id=req.body.id;
    var newD={
        id:id,
        name:req.body.name,
        age:req.body.age,
        college:req.body.college
    }

    for(var i=0;i<data.length;i++){
        if(data[i].id==id)
        {
            data[i]=newD;
            res.send(data);
        }
        
    };

})



app.listen(4000,()=>{
    console.log("listening on port 4000");
})
