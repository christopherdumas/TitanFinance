import Ember from 'ember';

export default Ember.Controller.extend({
  signedIn: function () {
    return JSON.parse(localStorage.signedIn);
  }.property(),
  size: 20,
  gravatarUrl: function() {
    var email =  window.ref.getAuth().password.email,
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + hex_md5(email) + '?s=' + size;
  }.property('user', 'size'),
  actions: {
    logout: function () {
      localStorage.signedIn = false;
      window.ref.unauth();
      this.transitionTo('signin');
    }
  }
});