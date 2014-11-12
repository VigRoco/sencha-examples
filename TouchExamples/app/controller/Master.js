Ext.define('TouchExamples.controller.Master', {
	extend: 'Ext.app.Controller',
	config: {
		// Listen to the empty route
		baseName: '',
		// Set up an animation to use when displaying pages. This can be
		// overridden in child controllers
		navigateAnimation: {
			type: 'fade',
			duration: 250
		}
	},
	// Set up the routes config option based on the baseName config. Every
	// controller that inherits from Master will listen to three URL enpoints:
	// #baseName
	// #baseName/action
	// #baseName/action/id
	constructor: function(config) {
		config.routes = {};
		config.routes[this.config.baseName] = 'navigate';
		if(this.config.baseName != '') {	
			config.routes[this.config.baseName + '/:a']  = 'navigate';
			config.routes[this.config.baseName + '/:a/:id']  = 'navigate';
		}
		// Finish constructing this with the modified config
		this.callParent(arguments);
	},
	// Insert the view/xtype into the Viewport with the animation specified
	navigate: function(viewXtype) {
		Ext.Viewport.getLayout().setAnimation(this.getNavigateAnimation());
		if(viewXtype)
			Ext.Viewport.setActiveItem(viewXtype);
		else
			Ext.Viewport.setActiveItem('main');
	}
});