

const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

//Clinic Model
const Clinic = require('../../models/Clinics');

// @route   Get api/clinics
// @desc    Get all Clinics
// @access  Public

router.get('/', (req, res) =>{
    Clinic.find()
    .sort({id: -1}) 
    .then( clinics => res.json(clinics) ) 
});

// @route   POST api/clinics
// @desc    Create a Clinics
// @access  Private

router.post('/', auth, (req, res) =>{

    const newClinic = new Clinic({
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        rating: req.body.rating,
        email: req.body.email,
        bio: req.body.bio
    });

    newClinic.save().then(()=> res.json({insertion: true}));

});

// @route   POST api/clinics
// @desc    Delete a Clinics
// @access  Private

router.delete('/:id', auth , (req, res)=> {
    Clinic.findById(req.params.id)
    .then( clinic => clinic.remove().then( ()=> res.json({success:true})))
    .catch(err => res.status(404).json({success: false}));
})
     

module.exports = router;


