require 'test_helper'

class ContentsControllerTest < ActionController::TestCase
  test "should get webdevelopment" do
    get :webdevelopment
    assert_response :success
  end

  test "should get marketing" do
    get :marketing
    assert_response :success
  end

  test "should get video" do
    get :video
    assert_response :success
  end

  test "should get otherservices" do
    get :otherservices
    assert_response :success
  end

  test "should get sitemap" do
    get :sitemap
    assert_response :success
  end

  test "should get terms" do
    get :terms
    assert_response :success
  end

  test "should get privacy" do
    get :privacy
    assert_response :success
  end

end
