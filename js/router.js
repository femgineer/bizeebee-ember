Bizeebee.Router.map(function() {
  this.resource('bizeebee', { path: '/' }, function() {
  		 this.route('instructor');
  });
});

Bizeebee.BizeebeeIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('instructor');
  }
});

Bizeebee.BizeebeeInstructorRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('instructor');
  },
  renderTemplate: function(controller) {
     this.render('bizeebee/instructor', {controller: controller});
   }
});

