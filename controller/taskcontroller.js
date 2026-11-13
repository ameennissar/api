const getall=((req,res)=>{
    const data=[{task:"cleaning",status:"pending"},
        {task:"study",status:"pending"}
    ]
    res.json({data})
})
const addone=((req,res)=>{
    let{task,status}=req.body
    const data={
        task:task,
        status:status

    }
    res.json({data})
})
const updateone=(req,res)=>{
    res.json("updated")
}
const deleteone=(req,res)=>{
    res.json("deleted")
}

module.exports={getall,addone,updateone,deleteone}