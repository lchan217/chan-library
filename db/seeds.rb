require 'csv'

CSV.foreach(Rails.root.join('lib/seeds/goodreads_data.csv'), headers: true) do |row|
  
    book = Book.find_or_create_by(title: row[0])
    author = Author.find_or_create_by(name: row[1])
    additional_author = Author.find_or_create_by(name: row[2]) unless row[2].nil?
    reference = Reference.find_or_create_by(name: row[3]) unless row[3].nil?

    book.authors << author if author.present?
    book.authors << additional_author if additional_author.present?
    reference.books << book if reference.present?
end