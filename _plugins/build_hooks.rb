# frozen_string_literal: true

# Process all of the site data prior to rendering pages.

item_types = %w[
  armor
  abilities
  additional-rules
  adversaries-armor
  adversaries-gear
  adversaries-weapons
  adversaries
  attachments
  creatures-weapons
  creatures
  gear
  qualities
  skills
  species
  starships
  talents
  vehicle-attachments
  vehicle-weapons
  vehicles
  weapons
]

Jekyll::Hooks.register :site, :post_read do |site, _payload|
  search_json = []

  item_types.each do |item_type|
    site.data[item_type].each do |item|
      Jekyll.logger.debug "Processing #{item_type} ID #{item['generatedId']}..."

      # Generate the search.json file for use with simple-jekyll-search.
      search_json << {
        url: "/#{item_type}/#{item['generatedId']}/",
        title: item['full_name'],
        category: item_type.split('-').map(&:capitalize).join(' ')
      }

      new_index = []
      books_for_meta = []

      # I don't want to unneccesarily include the name in the data files themselves,
      # so process the index lines to include the name of the book so we can easily use
      # the name of the book in things like generating URLs.
      item['index'].each do |index|
        index_parts = index.split(':')

        book = site.data['books'].find { |b| b['generatedId'] == index_parts[0] }
        new_index << (index_parts << book['full_name']).join(':')
        books_for_meta << book['full_name']
      end

      Jekyll.logger.debug "Generated #{new_index} for #{item_type} ID #{item['generatedId']}."
      item['index'] = new_index

      item['meta_description'] = meta_description(item, item_type, books_for_meta)
    end
  end

  site.data['search_json'] = search_json.to_json
end

def meta_description(item, item_type, books_for_meta)
  singular_item_type = singularize_and_capitalize(item_type)
  article = %w[a e i o u].include?(singular_item_type[0].downcase) ? 'an' : 'a'

  meta_description = "#{item['full_name']} is #{article} #{singular_item_type}"
  meta_description += " from #{join_books_for_meta(books_for_meta)}."
  meta_description
end

def singularize_and_capitalize(word)
  case word.downcase
  when 'abilities'
    'Ability'
  when 'adversaries'
    'Adversary'
  when 'qualities'
    'Quality'
  when 'species'
    'Species'
  else
    word.chomp('s').split('-').map(&:capitalize).join(' ')
  end
end

def join_books_for_meta(books)
  case books.length
  when 0
    ''
  when 1
    books.first
  when 2
    books.join(' and ')
  else
    "#{books[0..-2].join(', ')}, and #{books.last}"
  end
end
