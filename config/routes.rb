UjsSandbox::Application.routes.draw do
  resources :posts, only: [:index, :create, :destroy]
end
