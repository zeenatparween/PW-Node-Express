const noteModel = require("../models/note");


//  Create Method
const CreateNote = async(req, res) => {
    const {title, description} = req.body;
    const newNote = new noteModel({
        title: title,
        description: description
         UserId: req.userId 
    });
    try{
        await newNote.save();
        res.status(201).json(newNote);
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:"Something went wrong"
        });
    }

}


// Update Method
const UpdateNote = async(req, res) => {
    const {title, description} = req.body;
    const newNote = {
        title: title,
        description : description,
        UserId = req.UserId
    }
    try {
        await noteModel .findByIdAndUpdate(id, newNote, { new: true});
        res.status(200).json(newNote);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went Wrong"
        });
        
    }
}


//  Delete Note 

const DeleteNote = async(req, res) => {
    const id = req.params.id;
    try {
        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went Wrong"
        });
    }
}


//  Get Note

const getNote = async(req, res) => {
   try {
    const note = await noteModel.find({UserId : req.UserId});
    res.status(200).json(note);
   } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Something went wrong"
    });
    
   }
}

module.exports = {
    CreateNote,
    UpdateNote,
    DeleteNote,
    getNote
}