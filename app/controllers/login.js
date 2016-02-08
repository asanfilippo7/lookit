import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['driver'],
  driver: 'jam-auth',

  actions: {
    authenticate(attrs) {
      this.get('session').authenticate('authenticator:jam-jwt', attrs).then(() => {
//          Change this
//        this.set('model', this.store.findAll('namespace'));
      });
    }
  }
});