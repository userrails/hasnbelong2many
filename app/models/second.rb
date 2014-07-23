class Second < ActiveRecord::Base
  attr_accessible :name, :second_ids
  attr_accessor :second_ids
  #has_many :first_seconds
  #has_many :firsts, :through => :first_seconds
   has_and_belongs_to_many :firsts
end