class First < ActiveRecord::Base
  attr_accessible :name, :second_ids
  #has_many :first_seconds
  #has_many :seconds, :through => :first_seconds
   has_and_belongs_to_many :seconds
end