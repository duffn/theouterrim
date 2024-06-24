# frozen_string_literal: true

module Jekyll
  module FormatPriceFilter
    def format_price(input, restricted)
      number = input.to_s.gsub(/(\d)(?=\d{3}+$)/, '\1,')

      return "(R) #{number}" if restricted

      number
    end
  end
end

Liquid::Template.register_filter(Jekyll::FormatPriceFilter)
