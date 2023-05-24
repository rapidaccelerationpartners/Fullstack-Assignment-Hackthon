const Root = require("../model/Root");


exports.createRoot=async(req,res)=>{
    try {
        const {rootName}=req.body;

        if(!rootName)
        {
            return res.status(400).json({
                success:false,
                message:"provide all data"
            })
        }

        const root=await Root.create({
            rootName
        });

        res.status(201).json({
            success:true,
            root
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}