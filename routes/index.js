var express = require('express');
var router = express.Router();

var uid2 = require('uid2');
var bcrypt = require('bcrypt');

// gestion du sign-in
// router.post('/sign-in', async function(req, res, next){
// if(sign-in == info user db){
//     result = true
//     res.json({})
//   })

// gestion du sign-up
// router.post('/sign-up', async function(req, res, next){
// if(sign-up != info user db){
//     result = true
//     res.json({})
//   })

// mise à jour du profil
// router.update('/sign-up', async function(req, res, next){
// if(sign-up != info user db){
//     result = true
//     res.json({})
//   })


// pour publier une publication
// router.post('/publication', async function(req, res, next){
//     res.json({})
//   })

// récupérer les publications
// router.get('/publicationdb', async function(req, res, next){
//     res.json({})
//   })

// pour ajouter un publication en wishlist [SI]
// router.post('/addfavori', async function(req, res, next){
//     res.json({})
//   })

// pour récupérer les données utilisateurs
// router.get('/user', async function(req, res, next){
//     res.json({})
//   })

// pour ajouter un vote sur un publication [SI]
// router.post('/addvote', async function(req, res, next){
//     res.json({})
//   })

// pour ajouter un commentaire sur un publication [SI]
// router.post('/addcommentaire', async function(req, res, next){
//     res.json({})
//   })

// pour retirer un publication [SI]
// router.delete('/enlevepublication', async function(req, res, next){
//     res.json({})
//   })

// pour retirer un commentaire [SI]
// router.delete('/enlevecom', async function(req, res, next){
//     res.json({})
//   })

// pour changer une info user
// router.update('/changeuser', async function(req, res, next){
//     res.json({})
//   })






module.exports = router;