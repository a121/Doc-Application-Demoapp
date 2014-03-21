
/*This file is the second page of DocAppointment. It contains the form to be filled by the patient for scheduling an appointment*/

Ext.define('DocAppointment.view.AppointmentDetails', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'appointmentDetails',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Appointment',
            ui: 'light',
            items: [{
                xtype: 'button',
                text: 'Back',
                ui: 'back',
                action: 'cancel'
            }, 
            {
                xtype: 'spacer'
            }, 
            {
                xtype: 'button',
                text: 'Save',
                action: 'makeAppointment'
            }]
        }, 
        {
            xtype: 'fieldset',
            id: 'mainFieldset',
            instructions: 'Enter the following information',
            title: 'Appointment Details',
            items: [{
                xtype: 'textfield',
                id: 'patientNameField',
                label: 'Name',
                name: 'patientName',
                autoCapitalize: true,
                placeHolder: 'Enter your name'
            },
            {
                xtype: 'textfield',
                id: 'patientAgeField',
                label: 'Age',
                name: 'patientAge',
                placeHolder: 'Enter your age'
            },
            {
                xtype: 'textareafield',
                id: 'patientSymptomsField',
                label: 'Symptoms',
                name: 'patientSymptoms',
                placeHolder: 'Write the symptoms'
            },
            {
                xtype: 'textfield',
                id: 'docNameField',
                label: 'Doctor Name',
                name: 'docName',
                autoCapitalize: true,
                placeHolder: 'Enter previous doctor\'s name, if any'
            }, 
            {
                xtype: 'textfield',
                id: 'contactNoField',
                label: 'Contact No',
                name: 'contactNo',
                placeHolder: 'Enter your contact number'
            }, 
            {
                xtype: 'datepickerfield',
                id: 'dateField',
                label: 'Desired appointment date',
                name: 'appointmentDate',
                placeHolder: 'dd/mm/yyyy',
                dateFormat: 'D d M Y',
                picker: {
                    slotOrder: ['day', 'month', 'year'],
                    yearFrom: (new Date().getFullYear()),
                    yearTo: (new Date().getFullYear()) + 1
                }
            }]
        },
        {
            xtype: 'fieldset',
            id: 'appointmentDetailsDeleteFieldset',
            title: '',
            instructions: 'Want to cancel the appointment request?',
            items: [{
                xtype: 'button',
                height: 40,
                id: 'deleteButton',
                ui: 'decline',
                text: 'Cancel this appointment',
                action: 'deleteAppointment'
            }]
        }]
    }
});