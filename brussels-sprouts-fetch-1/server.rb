require "sinatra"
require "sinatra/json"
require "json"
require "pry" if development? || test?
require "sinatra/reloader" if development?

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ OUR FILE:
def read_dishes
  JSON.parse(File.read("dishes.json"))
end

# API ENDPOINTS

get "/api/v1/random-recipe" do

  dish = read_dishes.sample

  content_type :json
  json dish
end

get "/api/v1/recipes" do
  dishes = read_dishes

  content_type :json
  json dishes
end

get "/api/v1/longest-recipe" do
  alldishes = read_dishes
  # longestrecipe = alldishes.max_by { |x| x.length }
  # longestrecipe = alldishes.max_by(&:length)
  longestrecipe = alldishes.max_by(&:size)

  content_type :json
  json longestrecipe
end

get "/api/v1/shortest-recipe" do
  alldishes = read_dishes
  shortestrecipe = alldishes.min { |x,y| x.size <=> y.size }
  # --or--shortestrecipe = alldishes.min_by(&:length)
  # --or--shortestrecipe = alldishes.min_by(&:size)


  content_type :json
  json shortestrecipe
end


get "*" do
  erb :home
end
