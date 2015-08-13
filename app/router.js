import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('home', {path: '/'}, function() {
      this.route('all');
      this.route('vip');
      this.route('bus-class');
      this.route('nice');
      this.route('sky-call');
      this.route('d20');
      this.route('sky-phone');
      this.route('vim');
    });
});
export default Router;
