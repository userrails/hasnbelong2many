class Appointment < ActiveRecord::Base
  attr_accessible :appointment_date, :patient_id, :physician_id
  
  belongs_to :physician
  belongs_to :patient
end