class TransactionsController < ApplicationController
  def index
    render inertia: "Transactions/Index", props: {
      transactions: serialized_transactions,
      categories: serialized_categories,
      transaction_types: serialized_transaction_types
    }
  end

  def create
    transaction = Current.user.transactions.new(transaction_params)

    if transaction.save!
      redirect_to transactions_url, notice: 'Transaction created successfully'
    else
      redirect_to transactions_url, inertia: { errors: transaction.errors }
    end
  end
  
  def destroy
    transaction = Transaction.find(params[:id])
    transaction.destroy!
    redirect_to transactions_url, notice: 'Transaction deleted successfully'
  end

  private

  def transaction_params
    params.require(:transaction).permit(:transaction_type, :category_id, :user_id, :amount, :date, :notes)
  end
  
  def serialized_transactions
    Transaction.descending_by_date.map do |transaction|
      {
        id: transaction.id,
        transaction_type: transaction.transaction_type.humanize,
        category_name: transaction.category_name,
        category_slug: transaction.category.slug,
        category_color_code: transaction.category.color_code,
        amount: helpers.humanized_money_with_symbol(transaction.amount),
        date: transaction.date.strftime("%B %d, %Y"),
        notes: transaction.notes
      }
    end
  end

  def serialized_categories
    Current.user.categories.map { |category| { id: category.id, name: category.name, slug: category.slug, color_code: category.color_code } }
  end

  def serialized_transaction_types
    Transaction::TRANSACTION_TYPES.map { |type| { id: type, name: type.humanize } }
  end
end
