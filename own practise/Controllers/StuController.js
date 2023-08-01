const express = require("express");

import student from '../Stud.JSON'

const GetStudent_Info = async(req, res) => {
      const UserData = await student.find({})
           res.status(200).json({UserData})
      
};

const AgainStu_detail = async(req, res) => {
    const AgainData = await student.find({ }) 
    res.status(200).json({AgainData})
};

module.exports = {GetStudent_Info, AgainStu_detail }