/*This file contains the models, controllers, stores and views.
The name of the application is DocAppointment.
Launch function is used to call the viewport*/
Ext.application({
	models: ['Appointment'],
	controllers: ['AppointmentController'],
	stores: ['AppointmentStore'],
	views: ['AppointmentList','AppointmentDetails'],
	name: 'DocAppointment',
	launch: function() {
		Ext.Viewport.add([
			Ext.create('DocAppointment.view.AppointmentList'),
			Ext.create('DocAppointment.view.AppointmentDetails')
			]);
		Ext.Msg.alert('Application launched!');
	}
});