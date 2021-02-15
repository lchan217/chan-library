class Api::V1::BooksController < ApplicationController
    before_action :set_book, only: [:show, :edit, :update, :destroy]

    def index
        @books = Book.all
    end

    def show
    end

    def create
        Book.create(book_params)
    end

    def update
        @book.update(book_params)
    end

    def destroy
        @book.destroy
    end

    private
    def set_book
        @book = Book.find(params[:id])
    end
    def book_params
        #TODO: author/ref params
        params.require(:book).permit(:title)
    end
end
