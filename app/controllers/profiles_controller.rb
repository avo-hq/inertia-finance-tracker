class ProfilesController < ApplicationController
  def show
    render inertia: "Profile/Show", props: {
      user: current_user
    }
  end

  def update
    user = User.authenticate_by(email_address: profile_params[:email_address], password: profile_params[:password])
    if user.present?
      user.update!(profile_params)
      redirect_to profile_path, notice: "Profile updated successfully"
    else
      redirect_to profile_path, inertia: {errors: "There was an issue updating your profile. Try again."}
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:username, :email_address, :password)
  end
end
