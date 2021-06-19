let Business = require('../models/business');
module.exports.displayBusinessList = (req, res, next) => {
    
    Business.find((err, BusinessList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            //console.log(BusinessList);
            res.render('business/list', 
            {title: 'Business', 
            BusinessList: BusinessList, 
            displayName: req.user? req.user.displayName : ''});
        }
    }).sort({"name":1});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title: 'Add business contact', 
    displayName: req.user? req.user.displayName : ''});
};

module.exports.processAddPage = (req, res, next) => {

    let newContact = Business({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Business.create(newContact, (err, Business) =>{
        if(err)
        {
            console.log(err);
            res.end(err); 
        }
        else 
        {
            res.redirect('/business-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // show the edit view
            res.render('business/edit', {title: 'Edit Business Contact', business: businessToEdit,
            displayName: req.user? req.user.displayName : ''});    
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    Business.updateOne({_id: id}, updateBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/business-list');   
        }
    });
}; 

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/business-list'); 
        }
    });
};