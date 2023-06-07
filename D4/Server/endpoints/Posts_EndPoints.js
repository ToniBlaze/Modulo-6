const express = require('express');
const router = express.Router();

// Models
const postModel = require("../models/Posts")

router.get('/posts', async (req, res, next) => {
    res.status(200).json(await postModel.find());
})

router.get('/posts/:id', async (req, res, next) => {
    try {
        res.status(200).json(
            await postModel.findById(
                req.params.id
            )
        );
    } catch (err) {
        //res.status(400).json({error: "User ID not found"}, ...err);
        next();
    }
})

router.post('/posts', async (req, res, next) => {
    //const obj = req.body;
    //const newUser = new userModel(obj);
    //const dbResp = await newUser.save();
    //res.status(201).json(dbResp)
    res.status(201).json(
        await (new postModel(req.body)).save()
    )
})

router.put('/posts/:id', async (req, res, next) => {
    //const id = req.params.id;
    //const obj = req.body;
    //const user = await userModel.findByIdAndUpdate(id, obj)
    try {
    res.status(200).json(
        await postModel.findByIdAndUpdate(
                        req.params.id, 
                        req.body))
    } catch (err) {
        //res.status(400).json({error: "User ID not found"}, ...err);
        next();
    }
})

router.delete('/posts/:id', async (req, res, next) => {
    try {
    res.status(200).json(
        await postModel.findByIdAndDelete(req.params.id))
    } catch (err) {
        //res.status(400).json({error: "User ID not found"}, ...err);
        next();
    }
})

module.exports = router;