class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render inertia: "Categories", props: { categories: categories }
  end
end
