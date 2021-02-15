class Api::V1::AuthorsController < ApplicationController
    before_action :set_author, only: [:show, :edit, :update, :destroy]

    def index
        @authors = Author.all
    end

    def show
    end

    def create
        Author.create(author_params)
    end

    def update
        @author.update(author_params)
    end

    def destroy
        @author.destroy
    end

    private
    def set_author
        @author = Author.find(params[:id])
    end

    def author_params
        #TODO: book params
        params.require(:author).permit(:name)
    end
end
