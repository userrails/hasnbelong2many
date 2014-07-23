class ImagesController < ApplicationController
  def new
    @image = Image.new
  end
  
  def create
    @image = Image.new(params[:image])
    if @image.save
      redirect_to images_path
    else
      render :action=>:new
    end
  end

  def index
    @images = Image.all
  end
end