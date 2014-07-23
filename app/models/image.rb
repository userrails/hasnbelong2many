class Image < ActiveRecord::Base
   attr_accessible :image
   
  has_attached_file :image
  
  validates_attachment :image, presence: true, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
  
end
