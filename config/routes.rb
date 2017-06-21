Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'people#index'

  namespace :api do
    namespace :v1 do
      resources :people
    end
  end
  
end

# Prefix Verb   URI Pattern                       Controller#Action
#                    GET    /                                 people#index
#      api_v1_people GET    /api/v1/people(.:format)          api/v1/people#index
#                    POST   /api/v1/people(.:format)          api/v1/people#create
#  new_api_v1_person GET    /api/v1/people/new(.:format)      api/v1/people#new
# edit_api_v1_person GET    /api/v1/people/:id/edit(.:format) api/v1/people#edit
#      api_v1_person GET    /api/v1/people/:id(.:format)      api/v1/people#show
#                    PATCH  /api/v1/people/:id(.:format)      api/v1/people#update
#                    PUT    /api/v1/people/:id(.:format)      api/v1/people#update
#                    DELETE /api/v1/people/:id(.:format)      api/v1/people#destroy
