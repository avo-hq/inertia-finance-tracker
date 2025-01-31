class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  inertia_share flash: -> { flash.to_hash }, current_user: -> { inertia_user }

  private

  def current_user
    Current.user
  end

  def inertia_user
    return nil unless current_user
    {
      id: current_user.try(:id),
      email: current_user.try(:email_address),
      username: current_user.try(:username),
      avatar_url: current_user.try(:avatar_url),
    }
  end
end
