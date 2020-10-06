const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
// const mongoose = require('mongoose');

// const User = mongoose.model('User');

// module.exports.register = (req, res, next) => {
//     var user = new User();
//     user.FirstName = req.body.firstName;
//     user.LastName = req.body.lastName;
//     user.email = req.body.email;
//     user.password = req.body.password;

//     user.save((err, doc) => {
//             if (!err)
//                 res.send(doc);
//             else {
//                 if (err.code == 11000)
//                     res.status(422).send(['Duplicate email adrress found.']);
//                 else
//                     return next(err);
//             }
//         });
    
    
// }