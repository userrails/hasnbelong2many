class EmployeesController < ApplicationController
  def index
    @employees = Employee.all
  end
  
  def new
    @employee = Employee.new
  end
  
  def create
    @employee = Employee.new(params[:employee])
    @employee.address = params[:employee][:address].html_safe
    if @employee.save
      redirect_to employees_path
    else
      render :action => :new
    end
  end
end