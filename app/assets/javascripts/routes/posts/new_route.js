EmberRails.PostsNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('post');
	}
});
