require 'yaml'
require 'date'

YAML::SAFE_YAML_OPTIONS[:allowed_classes] = [Date]

data = YAML.safe_load('_data/projects.yml')

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