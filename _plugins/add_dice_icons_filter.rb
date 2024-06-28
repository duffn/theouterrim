require 'kramdown'

module Jekyll
  module AddDiceIconsFilter
    def add_dice_icons(input)
      return '' if input.nil?

      replacements = {
        '[BOOST]' => '<span class="eote" title="BOOST">B</span>',
        '[DARK]' => '<span class="eote" title="DARK">z</span>',
        '[LIGHT]' => '<span class="eote" title="LIGHT">Z</span>',
        '[FORCE]' => '<span class="eote" title="FORCE">C</span>',
        '[DESPAIR]' => '<span class="eote" title="DESPAIR">y</span>',
        '[TRIUMPH]' => '<span class="eote" title="TRIUMPH">x</span>',
        '[SUCCESS]' => '<span class="eote" title="SUCCESS">s</span>',
        '[FAILURE]' => '<span class="eote" title="FAILURE">f</span>',
        '[ADVANTAGE]' => '<span class="eote" title="ADVANTAGE">a</span>',
        '[THREAT]' => '<span class="eote" title="THREAT">t</span>',
        '[SETBACK]' => '<span class="eote" title="SETBACK">b</span>'
      }

      replacements.each do |key, value|
        input = input.gsub(key, value)
      end

      Kramdown::Document.new(input).to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::AddDiceIconsFilter)
