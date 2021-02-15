class Reference < ApplicationRecord
    default_scope { order(name: :asc) }

    has_many :books
end