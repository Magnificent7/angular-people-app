class Api::V1::PeopleController < ApplicationController

  def index
    @people = Person.all
    render 'index.json.jbuilder'
  end

  def create
    person = Person.new(
      name: params[:name],
      bio: params[:bio],
      bioVisible: true
    )
    if person.save
      redirect_to "/api/v1/people/#{person.id}"
      # response: sending back a person object
    else
      render json: {errors: person.errors.full_messages}, status: 422
      #response: sending back a json object with 1 key of errors
    end
  end

  def show
    @person = Person.find(params[:id])
    render 'show.json.jbuilder'
  end

  def destroy
    person = Person.find(params[:id])
    person.destroy
    render json: {message: 'Person successfully deleted!'}
  end

end
