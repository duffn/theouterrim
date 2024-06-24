# frozen_string_literal: true

# Process YAML files from the old Outer Rim format to the new format that makes more
# sense.
require 'yaml'

Dir.glob(File.join('..', '_data', 'old', '*.yaml')) do |file_name|
  puts "Processing #{file_name}..."

  data = YAML.safe_load_file(file_name)
  data.each do |item|
    # Rename name to full_name because jekyll-datapage-generator doesn't like if a field
    # is called name in the data.
    item['full_name'] = item.delete('name')

    # Make index and actual array instead of the silly comma separated things it was
    # before.
    item['index'] = item['index'].split(',').map(&:strip)
  end

  File.open(File.join('..', '_data', File.basename(file_name)), 'w') do |file|
    file.write(YAML.dump(data))
  end
end
