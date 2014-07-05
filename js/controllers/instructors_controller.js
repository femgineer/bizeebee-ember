Bizeebee.InstructorsController = Ember.ArrayController.extend({
  actions: {
    createInstructor: function() {
      var first_name = this.get('newFirstName');
      if (!first_name) { return false; }
      if (!first_name.trim()) { return; }

      // Create the new Instructor model
      var instructor = this.store.createRecord('instructor', {
        first_name: first_name,
        last_name: ""
      });

      // Clear the "New Instructor" text field
      this.set('newFirstName', '');

      // Save the new model
      instructor.save();
    }
  }
});