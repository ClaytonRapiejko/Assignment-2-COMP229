let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('login', { title: 'Login'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('register', { title: 'register'});
}




module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }
      

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business-list')
            });
        }
    );
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}