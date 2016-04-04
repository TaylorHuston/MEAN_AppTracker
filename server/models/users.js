var mongooose = require('mongoose'),
  Schema = mongoose.schema,
  bcrypt = require('bcrypt-nodejs');

//User schema
var UserSchema = new Schmea({
  name: String,
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    },
    password: {
      type: String,
      requires: true,
      select: false
    }
  };
});

//Hash the password
UserSchema.pre('save', function (next) {
  var.user = this;

  if (!user.isModified('password')) {
    return next();
  }

  crypt.hash(user.password, null null, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});

//Compare password
USerSchema.methods.comparePassword = function(password) {
  var user = this;

  return (bcrypt.compareSync(password, user.password));
};

module.exports = mongoose.model('User', UserSchema);
