require 'sinatra'
require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), "public")



get '/custom-greeting' do
  erb :home
end



get '/goodbye' do
  erb :home
end


get '/greeting' do
  erb :home
end



get '/' do
  erb :home
end


get '*' do
  erb :home
end
