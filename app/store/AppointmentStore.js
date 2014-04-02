/*This file is the store for appointments*/

Ext.define('DocAppointment.store.AppointmentStore',{
	extend: 'Ext.data.Store',
	requires: [
	'DocAppointment.model.Appointment'
	],
	config: {
		model: 'DocAppointment.model.Appointment',
		sorters: [{
			property: "appointmentDate",
			direction: "ASC"
		}],
		autoSync: true,
		autoLoad: true,
		singleton: true,
		storeId: 'AppointmentStore',
		proxy: {
			type: 'localstorage',
			id: "docAppointments"
		},
		grouper: function(entry){
			if(entry && entry.get("appointmentDate")) {
				return entry.get("appointmentDate").toDateString();
			}
		}
	}
});
