Ext.define('TouchExamples.view.UserEdit', {
	extend: 'Ext.Panel',
	xtype: 'usereditpanel',
	requires: ['TouchExamples.form.UserEdit'],
	config: {
		layout: 'vbox',
		items: [{
			xtype: 'titlebar',
			title: 'Editing User: '
		},{
			xtype: 'usereditform',
			flex: 1
		}]
	}
});