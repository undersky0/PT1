source 'https://rubygems.org'
ruby '2.0.0'

# Standard Rails gems
gem 'rails', '4.2.0'
gem 'sass-rails', '5.0.0'
gem 'uglifier', '2.6.0'
gem 'coffee-rails', '4.1.0'
gem 'jquery-rails', '4.0.2'
gem 'turbolinks', '2.5.3'
gem 'jbuilder', '2.2.6'
gem 'bcrypt', '3.1.9'

# Kaminari: https://github.com/amatsuda/kaminari
gem 'kaminari', '0.16.1'

# Friendly_id: https://github.com/norman/friendly_id
gem 'friendly_id', '5.0.4'
#pusher necessary gems
gem 'pusher'
gem 'zepto-rails', :github => 'frontfoot/zepto-rails'

# Font-awesome: https://github.com/FortAwesome/font-awesome-sass
gem 'font-awesome-sass', '4.2.2'

# Bootstrap 3: https://github.com/twbs/bootstrap-sass
gem 'bootstrap-sass', '3.3.1.0'

group :development, :test do
  gem 'byebug', '3.5.1'
  gem 'web-console', '2.0.0'

  # Figaro: https://github.com/laserlemon/figaro
  gem 'figaro', '1.0.0'
  
  # Spring: https://github.com/rails/spring
  gem 'spring', '1.2.0'
end

# PostgreSQL
gem 'pg'

# Devise: https://github.com/plataformatec/devise
gem 'devise', '3.4.1'

# Redcarpet: https://github.com/vmg/redcarpet
gem 'pygments.rb'
gem 'redcarpet', '3.2.0'

group :production do
  gem 'rails_12factor'
  gem 'unicorn'
end

# RSpec

gem "rspec-rails", :group => [:test, :development]
gem "factory_girl_rails", :group => [:test, :development]
group :test do
  gem 'shoulda-matchers'
  gem "capybara"
  gem "guard-rspec"
  gem "faker"
  gem "database_cleaner"
  gem "launchy"
  gem "selenium-webdriver"
end