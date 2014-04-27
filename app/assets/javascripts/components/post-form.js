EmberRails.PostFormComponent = Ember.Component.extend({
	deleteAction: 'delete',
	saveAction: 'save',
	actions: {
		save: function() {
			this.sendAction('saveAction');
		},
		delete: function() {
			this.sendAction('deleteAction');
		}
	}
});
