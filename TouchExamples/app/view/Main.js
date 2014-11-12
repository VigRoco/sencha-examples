Ext.define('TouchExamples.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
			title: 'Welcome',
			iconCls: 'home',

			styleHtmlContent: true,
			scrollable: true,

			items: [{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Welcome to Some Sencha Touch Examples!'
			},{
				xtype: 'button',
				text: 'View Users',
				width: 150,
				listeners: {
					tap: function() {
						TouchExamples.app.redirectTo('User');
					}
				}
			}]
		}]
    }
});
