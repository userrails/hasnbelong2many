class FirstsController < ApplicationController  
  def new
    @first = First.new
    @seconds = Second.find(:all)
  end 
 
  def create
    @first = First.new(params[:first])
    if @first.save
      redirect_to firsts_path
    end
  end
 
  def index
    @firsts = First.find(:all)
  end
end