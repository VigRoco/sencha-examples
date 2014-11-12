Ext.define('TouchExamples.store.Users', {
	extend: 'Ext.data.Store',
	config: {
		storeId: 'Users',
		data: [
			{id: 1, name: 'Jason Vorhees', level: 'Platinum'},
			{id: 2, name: 'Freddy Kreuger', level: 'Gold'},
			{id: 3, name: 'Michael Meyers', level: 'Basic'}
		]
	}
});