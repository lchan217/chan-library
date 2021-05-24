class Reference < ApplicationRecord
    default_scope { order(name: :asc) }

    has_many :books
    accepts_nested_attributes_for :books

    validates :name, presence: true
    validates :name, uniqueness: true

    def parse_params(params)
      book_params = params[:book_attributes]
      books.clear
      book_params.each do |book|
        book_id = book[:id]
        books << Book.find(book_id)
      end
    end
end