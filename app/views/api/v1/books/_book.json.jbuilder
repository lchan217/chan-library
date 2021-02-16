json.extract! book, :id, :title

json.authors book.authors

reference = book.reference
json.reference reference

json.shared_books reference.books if reference.present?