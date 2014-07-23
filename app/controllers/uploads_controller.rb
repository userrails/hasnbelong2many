class UploadsController < ApplicationController
  def new
    @image = Image.new
  end
  
  def create
    @image = Image.new(params[:image])
    if @image.save
      redirect_to :back
    else
      render :action => :new
    end
  end
end