let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let business = require('../models/business');

module.exports.displaybusinessList = (req, res, next) => {
    business.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(businessList);

            res.render('business/list', {title: 'business', businessList: businessList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title: 'Add business'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newbusiness = business({
        "name": req.body.name,
        "number": req.body.author,
        "email": req.body.published,
    });

    business.create(newbusiness, (err, business) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business list
            res.redirect('/business-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/edit', {title: 'Edit business', business: businessToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedbusiness = business({
        "_id": id,
        "name": req.body.name,
        "number": req.body.author,
        "email": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    business.updateOne({_id: id}, updatedbusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business list
            res.redirect('/business-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the business list
             res.redirect('/business-list');
        }
    });
}