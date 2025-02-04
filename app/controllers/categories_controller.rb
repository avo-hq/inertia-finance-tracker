class CategoriesController < ApplicationController
  before_action :set_category, only: :show

  def index
    categories = Category.all
    render inertia: "Categories/Index", props: { categories: categories }
  end

  def show
    render inertia: "Categories/Show", props: { category: serialized_category }
  end

  def create
    category = Current.user.categories.new(category_params)

    if category.save
      redirect_to categories_url, notice: 'Category created successfully'
    else
      redirect_to categories_url, inertia: { errors: category.errors }
    end
  end

  private

  def set_category
    @category = Category.friendly.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :description, :color_code, :icon, :user_id)
  end

  def serialized_category
    {
      id: @category.id,
      name: @category.name,
      description: @category.description,
      color_code: @category.color_code,
      icon: @category.icon,
      user_id: @category.user_id,
      transactions: @category.transactions.map do |transaction|
        {
          id: transaction.id,
          transaction_type: transaction.transaction_type.humanize,
          amount: helpers.humanized_money_with_symbol(transaction.amount),
          date: transaction.date.strftime("%B %d, %Y"),
          notes: transaction.notes,
          category_name: transaction.category.name,
          category_color_code: transaction.category.color_code
        }
      end
    }
  end
end
