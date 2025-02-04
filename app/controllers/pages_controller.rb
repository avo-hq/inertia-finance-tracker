class PagesController < ApplicationController
  allow_unauthenticated_access only: :home
  before_action :resume_session, only: :home
  
  def home
    render inertia: "Home"
  end

  def dashboard
    render inertia: "Dashboard/Index", props: {
      balance: current_user_balance,
      amount_spent_this_month: helpers.humanized_money_with_symbol(Current.user.amount_spent_this_month),
      amount_spent_last_week: helpers.humanized_money_with_symbol(Current.user.amount_spent_last_week),
      last_weeks_income: helpers.humanized_money_with_symbol(Current.user.last_weeks_income),
      chart_data: chart_data
    }
  end

  private

  def current_user_balance
    helpers.humanized_money_with_symbol(Current.user.balance)
  end

  def chart_data
    Transaction.daily_amounts(Current.user)
  end
end
