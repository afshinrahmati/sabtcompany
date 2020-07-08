const express = require('express')
const router = express.Router();
const path = require('path');
const Company = require('../model/company');


const bodyParser = require("body-parser");
const company = require('../model/company');

var jsonParser = bodyParser.json()
const urlencoded = bodyParser.urlencoded({ extended: false });


//delet
router.get('/delet/:id', jsonParser, (req, res) => {
    Company.findByIdAndRemove(req.params.id, (err, del) => {
        if (err) {
            return res.status(500).send("Wrong in delet" + err)
        }
        if (del) {
            company.find({}, function(err, user) {
                if (err) {
                    res.send("erro" + err)
                    next();
                }
                res.render('../view/login.ejs', { Company: user });

            });
        }



    })
});


router.put('/update/:id', function(req, res) {
    let NAMECOMPANY = req.body.NAMECOMPANY;
    let codePost = req.body.codePost;
    let nameBoss = req.body.nameBoss;
    let Phonenumber = req.body.Phonenumber;

    console.log(1);

    Company.findByIdAndUpdate(req.params._id, req.body, { NAMECOMPANY: NAMECOMPANY, codePost: codePost, nameBoss: nameBoss, Phonenumber: Phonenumber }, function(err, user) {
        if (err) return res.status(500).send("sdasfdnacancvnavncibi");
        if (user) {
            company.find({}, function(err, user) {
                if (err) {
                    res.send("erro" + err)
                    next();
                }
                res.render('../view/login.ejs', { Company: user });

            });
        }
    })

})






//view
router.get('/', jsonParser, function(req, res) {
        company.find({}, function(err, user) {
            if (err) {
                return res.send("erro" + err)
                next();
            }
            res.render('../view/login.ejs', { Company: user });

        });

    })
    //delet

//create
router.post('/login', jsonParser, (req, res) => {
    console.log(req.body);

    const NAME_USER = new Company({
        NAMECOMPANY: req.body.NAMECOMPANY,
        codePost: req.body.codePost,
        nameBoss: req.body.nameBoss,
        Phonenumber: req.body.Phonenumber
    })
    NAME_USER.save(function(err, useres) {
        if (err) return res.status(500).send("err ples try agin" + err);

        if (useres) return res.json({
            useres,
            massage: "succses"
        })
    })

});













router.get('/public/icons8-edit-64.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/icons8-edit-64.png'))
})

router.get('/public/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.css'))
})
router.get('/public/octavian-rosca-UfCYo7zHyY8-unsplash.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/octavian-rosca-UfCYo7zHyY8-unsplash.jpg'))
})

module.exports = router