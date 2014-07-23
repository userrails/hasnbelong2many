RailsAssociation::Application.routes.draw do

  resources :uploads
  resources :images

  get "images/index"

  mount Bootsy::Engine => '/bootsy', as: 'bootsy'

  resources :uploaders do
    collection do 
      get :progress
      post :submit
    end
  end

  resources :uploads  
  
  resources :photos
  
  resources :appointments

  resources :patients

  resources :physicians

  resources :employees

  #get "homes/index"
  
  resources :homes
  resources :firsts
  resources :seconds
  
  root :to => 'images#index'
  post '/tinymce_assets' => 'tinymce_assets#create'
end