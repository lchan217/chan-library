class Author < ApplicationRecord
    default_scope { order(name: :asc) }
    
    has_many :book_authors
    has_many :books, through: :book_authors
end