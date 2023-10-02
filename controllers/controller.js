const Blog = require('../models/model');


exports.createBlog = (req,res) =>{
            const newblog =new Blog({
                    title:req.body.title,
                    author: req.body.author,
                    desc:req.body.desc
             }) 

            newblog.save().then((Blog)=>{
                 res.status(201).json({
                    "msg":"blog created",
                    "blog":Blog,
                 })
            }).catch((error)=>{
                if(err) return res.status(500).json(err);
            })
}

exports.updateOne = (req,res) =>{
    if(!req.body.title || !req.body.author || !req.body.desc)
    {
        res.status(501).json({
            "msg" : "please fill all the feilds"
        })

    }

        const id = req.params.blogId;
        Blog.findByIdAndUpdate(id ,{
            title:req.body.title,
            author: req.body.author,
            desc:req.body.desc

        },{new: true}).then((data)=>{
            if(!data)
            {
                res.status(500).json({
                    "msg": "please enter correct values"
                })
            }
            res.status(200).json({
                "msg":"updated",
                "new doc": data
            })
        }).catch((err)=>{
            res.status(500).json({
                "msg": "please enter correct values",
                "error": err
            })
        })
    
}


exports.deleteone=(req,res)=>{

    Blog.findByIdAndDelete(req.params.blogID)
        .then((data)=>{

            if(!data) return res.status(404).json({"msg":"Blog not found"});

            res.status(202).json({
                "msg":"deleted",
                "doc":data
            });

        })
        .catch((err)=>{
            if(err) res.status(500).json(err);
        });

}

exports.getall=(req,res)=>{
    
    Blog.find().sort({updatedAt:'desc'})
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((err)=>{
            if(err) res.status(500).json(err);
        });
    // let data;
    // try {
    //     data = await Blog.find();
    //     console.log(data);

    // } catch (err) {
    //     if(err) return res.status(500).json(err);
    // }
    // res.status(200).json(data);
}

// find single blog by id
exports.getone=(req,res)=>{

    Blog.findById(req.params.blogID)
        .then((data)=>{
            if(!data) return res.status(404).json({"mag":"Blog not found"});
            res.status(200).json(data);
        })
        .catch((err)=>{
            if(err) res.status(500).json(err);
        })

}