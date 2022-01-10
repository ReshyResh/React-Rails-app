class Api::GreetingsController < ApplicationController
    def index 
        @all = Greeting.all
        @greeting = @all[rand(0..(@all.count-1))]
        render json:{ :greetings => [
            :name => @greeting.string,
            ]
        }.to_json
    end
end