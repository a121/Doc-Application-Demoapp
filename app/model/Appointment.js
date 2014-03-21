/*This file is the model for appointment scheduling with a doctor*/


Ext.define('DocAppointment.model.Appointment', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		{
			name: 'id',
			type: 'int'
		},{
			name: 'contactNo',
			type: 'int'
		},{
			name: 'appointmentDate',
			type: 'date',
		},{
			name: 'docName',
			type: 'string'
		},{
			name: 'patientName',
			type: 'string'
		},{
			name: 'patientAge',
			type: 'int'
		},{
			name: 'patientSymptoms',
			type: 'string'
		}],
		idProperty: 'id'
	}
});

