class PagesController < ApplicationController
  allow_unauthenticated_access only: :home
  
  def home
    render inertia: "Home"
  end

  def dashboard
    render inertia: "Dashboard"
  end
end
