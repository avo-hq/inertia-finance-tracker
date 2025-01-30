class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render inertia: "Categories/Index", props: { categories: categories }
  end
end
