Ext.define('TouchExamples.form.UserEdit', {
	extend: 'Ext.form.Panel',
	xtype: 'usereditform',
	config: {
		layout: 'vbox',
		items: [{
			xtype: 'textfield',
			label: 'Name',
			name: 'name',
			placeHolder: 'Enter Name'
		},{
			xtype: 'selectfield',
			label: 'Membership Level',
			name: 'level',
			options: [
				{text: 'Platinum', value: 'Platinum'},
				{text: 'Gold', value: 'Gold'},
				{text: 'Basic', value: 'Basic'}
			]
		}]
	}
});