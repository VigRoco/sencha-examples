Ext.define('TouchExamples.controller.User', {
	extend: 'TouchExamples.controller.Master',
	config: {
		// We'll listen to every thing in the url behind #User
		baseName: 'User',
		refs: {
			userList: 'userspanel list',
			addButton: 'userspanel toolbar button'
		},
		control: {
			userList: {
				itemtap: 'onUserListItemTap'
			},
			addButton: {
				tap: 'onAddButtonTap'
			}
		}
	},
	onUserListItemTap: function(list, index, target, user) {
		this.redirectTo(this.getBaseName() + '/edit/' + user.get('id'));
	},
	onAddButtonTap: function() {
		this.redirectTo(this.getBaseName() + '/add');
	},
	navigate: function(action, id) {
		switch(action) {
			// If we are adding a user, flow to the next case where we check for an id
			case 'add':

			// If we have an id, pull that user from the store and edit it,
			// otherwise add a new user
			case 'edit':
				var view = new TouchExamples.view.UserEdit();
				if(id) {
					var	user = Ext.getStore('Users').getById(id);
					view.down('titlebar').setTitle('Editing ' + user.get('name'));
					view.down('formpanel').setValues(user.getData());
				} else
					view.down('titlebar').setTitle('New User');
				// Pass our view up to the Master controller
				this.callParent([view]);
				break;

			// Show the list of users if we aren't adding or editing any
			default:
				// Pass the xtype up to our Master controller
				this.callParent(['userspanel']);
				break;
		}
	}
});