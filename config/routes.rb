Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root to: 'messages#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :upload] do
    resources :messages , only: [:index, :create]
  end
end
