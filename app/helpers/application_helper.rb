module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | Pt1"      
    end
  end
end
