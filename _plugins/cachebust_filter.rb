# frozen_string_literal: true

# Credit: https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'

      attr_accessor :file_name, :directory

      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def directory_files_content
        target_path = if directory == '_scss'
                        File.join(directory, '**', '*')
                      else
                        File.join(directory, file_name)
                      end
        Dir[target_path].map { |f| File.read(f) unless File.directory?(f) }.join
      end

      def file_content
        FIle.read(file_name)
      end

      def file_contents
        is_directory? ? file_content : directory_files_content
      end

      def is_directory?
        directory.nil?
      end
    end

    def bust_cache(file_name, directory)
      if directory != '.'
        CacheDigester.new(file_name: file_name, directory: directory).digest!
      else
        CacheDigester.new(file_name: file_name, directory: File.join(File.dirname('../'))).digest!
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)
