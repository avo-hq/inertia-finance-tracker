class TransactionsController < ApplicationController
  def index
    render inertia: "Transactions/Index", props: { transactions: [] }
  end

  def create
    transaction = Current.user.transactions.new(transaction_params)

    if transaction.save
      redirect_to transactions_url, notice: 'Transaction created successfully'
    else
      redirect_to transactions_url, inertia: { errors: transaction.errors }
    end
  end

  private

  def transaction_params
    params.expect(transaction: [:category_id, :amount_cents, :date, :description, :reason])
  end
end
