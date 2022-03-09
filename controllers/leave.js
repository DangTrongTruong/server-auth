const Leave = require('../model/leaveModel')

exports.createLeave = async(req,res)=>{
    const leave = await Leave.create(req.body)
    try {
        res.status(201).json({
        success: true,
        message:"Register leave successfully"
    })
    } catch (error) {
        res.status(201).json({
            success: false,
            message:"register leave failed"
        })
    }
}

exports.editLeave = async(req,res)=>{
    const leave = await Leave.findByIdAndUpdate(req.params.id,req.body)
    try {
        res.status(201).json({
        success: true,
        message:"Update leave successfully"
    })
    } catch (error) {
        res.status(201).json({
            success: false,
            message:"Update leave failed"
        })
    }
}

exports.deleteLeave = async(req,res)=>{
    const leave = await Leave.findByIdAndDelete(req.params.id)
    try {
        res.status(201).json({
        success: true,
        message:"Delete leave successfully"
    })
    } catch (error) {
        res.json({
            success: false,
            message:"Delete leave failed"
        })
    }
}
exports.getLeaves = async (req,res) =>{
    const leaves = await Leave.find()
    try {
        res.json({
            leaves,
            success: true,
            message:"Get leaves successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message:"Get leaves failed"
        })
    }
}


exports.getLeave = async (req,res) =>{
    const leave = await Leave.findById(req.params.id);
    try {
        res.json({
            leave,
            success: true,
            message:"Get leave successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message:"Get leave failed"
        })
    }
}

