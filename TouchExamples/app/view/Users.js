Ext.define('TouchExamples.view.Users', {
	extend: 'Ext.Panel',
	xtype: 'userspanel',
	config: {
		layout: 'vbox',
		items: [{
			xtype: 'toolbar',
			title: 'Users',
			layout: {
				type: 'vbox',
				align: 'right'
			},
			items: [{
				iconCls: 'add'
			}]
		},{
			xtype: 'list',
			flex: 1,
			store: 'Users',
			itemTpl: new Ext.XTemplate(
				'<div><b>{name}</b></div>',
				'<div>{level} Member</div>'
			)
		}]
	}
});