class PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end
  
  def create
    @photo = Photo.new(params[:photo])
    if @photo.save
      redirect_to :back
    else
      render :action => :new
    end
  end
  
  def index
    
  end
end
