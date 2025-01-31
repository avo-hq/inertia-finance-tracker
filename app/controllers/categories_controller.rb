class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render inertia: "Categories/Index", props: { categories: categories }
  end

  def create
    category = Current.user.categories.new(category_params)

    if category.save!
      redirect_to categories_url, notice: 'Category created successfully'
    else
      redirect_to categories_url, inertia: { errors: category.errors }
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :description, :color_code, :icon, :user_id)
  end
end
