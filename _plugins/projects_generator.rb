require 'safe_yaml'
require 'date'

# Allow the Date class to be loaded from YAML
SafeYAML::OPTIONS[:default_mode] = :safe
SafeYAML::OPTIONS[:deserialize_symbols] = false
SafeYAML::OPTIONS[:whitelisted_tags] = ['!ruby/object:Date']

path = '_data/projects.yml'
data = SafeYAML.load_file(path)

data.each do |entry|
    title = entry['name']
    description = entry['description']
    File.open("project/#{title.downcase.gsub(' ', '-')}.html", "w") do |file|
        file.write("---\nlayout: project\n")
        file.write("title: #{title}\n")
        file.write("entry: #{description}\n")
        file.write("---\n")
    end
end
