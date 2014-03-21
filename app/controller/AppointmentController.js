
/*This is the controller of the application. It provides an interaction layer between models, stores and views*/

Ext.define('DocAppointment.controller.AppointmentController', {
    extend: 'Ext.app.Controller',

    config: {
        id: 'appointmentController',
        refs: {
            saveButton: 'button[action=makeAppointment]',
            createAppointmentButton: 'button[action=createAppointment]',
            appointmentDetails: '#appointmentDetails',
            appointmentDetailsDeleteFieldset: '#appointmentDetailsDeleteFieldset',
            appointmentList: '#appointmentList',
            cancelButton: 'button[action=cancel]',
            deleteButton: 'button[action=deleteAppointment]',
            appointmentCount: '#appointmentCount'
        },
        control: {
            saveButton: {
                tap: 'makeAppointment'
            },

            createAppointmentButton: {
                tap: 'createAppointment'
            },

            cancelButton: {
                tap: 'cancel'
            },

            appointmentList: {
                itemtap: 'showAppointment',
            },

            deleteButton: {
                tap: 'deleteAppointment'
            }
        }
    },

    launch: function () {
        this.appointmentCountUpdate();
    },

    appointmentCountUpdate: function () {
        var store = this.getAppointmentList().getStore();
        var count = store.getCount();
        if(count ==0)
            this.getAppointmentCount().setTitle('No appointments made');
        else if(count == 1)
            this.getAppointmentCount().setTitle('1 appointment');
        else
            this.getAppointmentCount().setTitle(count + ' appointments');
    },

    deleteAppointment: function(button, e, eOpts) {
        Ext.Msg.confirm('Delete appointment?', 'Are you sure?', function (ans) {
            if (ans === 'yes') {
                var appointment = this.getAppointmentDetails().getRecord();
                var store = this.getAppointmentList().getStore();
                store.remove(appointment);
                this.showAppointmentList();
            }
        }, this);
    },


    showAppointment: function(list, index, target, appointment, e, eOpts) {

        this.getAppointmentDetails().setRecord(appointment);
        this.getAppointmentDetailsDeleteFieldset().setHidden(false);
        this.showAppointmentDetails();

        setTimeout(function () {
            list.deselect(index);
        }, 500);
    },

    cancel: function(button, e, eOpts) {
        this.showAppointmentList();
    },

    makeAppointment: function (button, e, eOpts) {
        var store = this.getAppointmentList().getStore();
        var appointment = this.getAppointmentDetails().getRecord();
        this.getAppointmentDetails().updateRecord(appointment);

        // Check if it is a new object
        if (null === store.findRecord("id", appointment.get('id'))) {
            store.add(appointment);
        }

        this.showAppointmentList();
    },

    createAppointment: function(button, e, eOpts) {
        var newAppointment = Ext.create('DocAppointment.model.Appointment', {
            contactNo: '',
            appointmentDate: new Date(),
            docName: '',
            patientAge: '',
            patientName: '',
            patientSymptoms: ''
        });

        this.getAppointmentDetails().setRecord(newAppointment);
        this.getAppointmentDetailsDeleteFieldset().setHidden(true);
        this.showAppointmentDetails();
    },

    showAppointmentDetails: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'flip',
            duration: 500
        });
        Ext.Viewport.setActiveItem(this.getAppointmentDetails());
    },

    showAppointmentList: function() {
        this.appointmentCountUpdate();
        Ext.Viewport.getLayout().setAnimation({
            type: 'flip',
            duration: 500
        });
        Ext.Viewport.setActiveItem(this.getAppointmentList());
    }

    
});