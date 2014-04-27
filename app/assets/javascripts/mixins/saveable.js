EmberRails.Saveable = Ember.Mixin.create({
	actions: {
		save: function() {
				var self = this;
				var post = this.get('model');

				post.save().then(function(post){
					self.transitionToRoute('posts');
				},function(error){
					console.log('error '+ error);
				});
			}
	}
});
