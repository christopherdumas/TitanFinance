import Ember from 'ember';

export default Ember.ObjectController.extend({
  email: '',
  pass: '',
  error: '',
  remember: false,
  emptyEmail: function () {
    return Ember.empty(this.get('email'));
  }.property('email'),
  emptyPass: function () {
    return Ember.empty(this.get('pass'));
  }.property('pass'),
  typeOfSession: function () {
    return this.get('remember') ? 'default' : 'sessionOnly';
  }.property('remember'),
  actions: {
    signin: function () {
      var self = this;
      window.ref.authWithPassword({
        email    : this.get('email'),
        password : this.get('pass')
      }, function(error, authData) {
        if (error === null) {
          console.log(authData.auth);
          localStorage.signedIn = true;
          self.transitionToRoute('dashboard');
        } else {
          self.set('error', 'There was error authenticating you: ' + error.message);
          console.log(error);
          localStorage.signedIn = false;
        }
      }, {
        remember: this.get('typeOfSession')
      });
    }
  }
});
