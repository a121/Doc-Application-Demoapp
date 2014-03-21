
/*This file is the first page of DocAppointment. It shows the list of appointments and the option for scheduling more appointments*/

Ext.define('DocAppointment.view.AppointmentList', {
    extend: 'Ext.dataview.List',

    requires: [
        'DocAppointment.store.AppointmentStore'
    ],

    config: {
        id: 'appointmentList',
        displayField: 'title',
        store: Ext.create('DocAppointment.store.AppointmentStore'),
        emptyText: '<p class="instructions">No appointments reserved yet; please tap the button "+" above to reserve one. Thanks.</p>',
        itemTpl: '<div class="appointment">Appointment request made for : {patientName}</div>',
        grouped: true,
        onItemDisclosure: true,

        items: [{
            xtype: 'toolbar',
            title: 'Making Appointments',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'spacer' 
            }, 
            {
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                text: '',
                ui: 'plain',
                action: 'createAppointment'
            }]
        }, {
            xtype: 'toolbar',
            title: '',
            docked: 'bottom',
            ui: 'light',
            id: 'appointmentCount'
        }]
    }
});