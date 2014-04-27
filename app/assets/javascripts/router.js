// For more information see: http://emberjs.com/guides/routing/

EmberRails.Router.map(function() {
	this.resource('posts', function() {
		this.route('new');
		this.route('edit', { path: ':post_id/edit'});
	});

	this.route('sign_in');
	this.route('sign_out');
});
