const express = require('express');
const { isEmpty } = require('lodash');
const HomeLink = require('../models/homeLink');
const Song = require('../models/song');
const Photo = require('../models/photo');
const Documentary = require('../models/documentary');
const router = express.Router();

router.post('/do', async (req, res) => {
    console.log("at server");
    const data = {}
    try {
        return res.json({
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }    
});

router.post('/documentaryPhotography', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { location } = req.body;
    
    try {
        const photos = await Photo.find({ category: 'photography', subcategory: 'documentary', location: location });

        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
    
    
});

router.get('/links', async (req, res) => {

    try {
        const links = await HomeLink.find({});

        return res.json({
            links
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/streetPhotography', async (req, res) => {

    try {
        const photos = await Photo.find({ category: 'photography', subcategory: 'street' });

        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/photos', async (req, res) => {

    try {
        const photos = await Photo.find({});

        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/songs', async (req, res) => {

    try {
        const songs = await Song.find({});

        return res.json({
            songs
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/documentaries', async (req, res) => {

    try {
        const documentaries = await Documentary.find({});

        return res.json({
            documentaries
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/drawings', async (req, res) => {

    try {
        const drawings = await Photo.find({ category: 'drawing' });

        return res.json({
            drawings
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.post('/update', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }    
    const { id, update } = req.body;  

    try {
        await Photo.findByIdAndUpdate(id, update, (err) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
          });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});



// router.post('/add', async (req, res) => {
//     if (isEmpty(req.body)) {
//         return res.status(403).json({
//             message: 'Body should not be empty',
//             statusCode: 403
//         });
//     }
//     const { name, position, company } = req.body;

//     const newUser = new User({
//         position,
//         name,
//         company,
//         date: Date.now()
//     });
//     try {
//         await newUser.save();
//         res.json({
//             message: 'Data successfully saved',
//             statusCode: 200,
//             name,
//             position,
//             company
//         });
//     } catch (error) {
//         console.log('Error: ', error);
//         res.status(500).json({
//             message: 'Internal Server error',
//             statusCode: 500
//         });
//     }
// });


module.exports = router;