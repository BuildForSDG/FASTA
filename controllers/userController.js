const User = require('../models/index');

const UserController = {
  // CREATE A NEW USER AND ADD TO DATABASE
  createUser: (req, res) => {
    const user = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      password: req.body.password
    });
    user.save().then(
      () => {
        // console.log('User account successfully created!');
        res.status(201).json({
          user,
          message: 'User account successfully created!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error
        });
      }
    );
  },

  //  GET ALL USERS FROM DATABASE
  getAllUsers: (req, res) => {
    User.find().then(
      (allUsers) => {
        // console.log('Getting all users!');
        res.status(200).json(allUsers.reverse());
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error
        });
      }
    );
  },

  //  GET A SPECIFIC USER (BY ID) FROM DATABASE
  getUser: (req, res) => {
    const { id } = req.params;

    User.findOne({
      _id: id
    }).then(
      (thisUser) => {
        // console.log('Getting specific user by ID!');
        res.status(200).json(thisUser);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error
        });
      }
    );
  }
};

module.exports = UserController;
