class Book < ApplicationRecord
    default_scope { order(title: :asc) }

    has_many :book_authors
    has_many :authors, through: :book_authors
    belongs_to :reference, required: false
end