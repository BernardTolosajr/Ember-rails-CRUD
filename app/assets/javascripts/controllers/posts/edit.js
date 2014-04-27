EmberRails.PostsEditController = Ember.ObjectController.extend(EmberRails.Saveable, {
	actions: {
		delete: function() {
				var self = this;
				var post = this.get('model');

				post.deleteRecord();

				post.save().then(function(post){
					self.transitionToRoute('posts');
				},function(error){
					console.log('error '+ error);
				});
		}
	}
});
