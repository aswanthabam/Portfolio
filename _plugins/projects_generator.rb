require 'yaml'
require 'date'

# Allow the Date class to be loaded from YAML
data = YAML.safe_load(File.read('_data/projects.yml'), [Date])

data.each do |entry|
    id = entry['id']
    title = entry['name'] + " - Project"
    description = entry['description']
    File.open("project/#{id}.html", "w") do |file|
        file.write("---\nlayout: project\n")
        file.write("title: #{title}\n")
        file.write("entry: #{description}\n")
        file.write("id: #{id}\n")
        file.write("---\n")
    end
end
