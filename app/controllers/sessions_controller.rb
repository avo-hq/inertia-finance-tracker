class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  before_action :resume_session, only: [:new]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
    return redirect_to dashboard_path if current_user.present?
    render inertia: "Auth/Sessions/New"
  end

  def create
    if user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for user
      redirect_to dashboard_url, notice: "Successfully signed in."
    else
      redirect_to new_session_path, alert: "Invalid email address or password."
    end
  end

  def destroy
    terminate_session
    redirect_to new_session_path, notice: "Successfully signed out."
  end
end
