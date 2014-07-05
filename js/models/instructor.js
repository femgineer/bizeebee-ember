Bizeebee.Instructor = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string')
});

Bizeebee.Instructor.FIXTURES = [
 {
   id: 1,
   first_name: 'Poornima',
   last_name: 'Vijayshanker'
 },
 {
   id: 2,
   first_name: 'Sarah',
   last_name: 'Jones'  
 }
];