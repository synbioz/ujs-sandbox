class PostsController < ApplicationController
  def index
    @post = Post.new
  end

  def create
    @new_post = Post.new(params.require(:post).permit(:title, :content))
    @success  = @new_post.save
    @post     = @success ? Post.new : @new_post
  end

  def destroy
    post = Post.where(id: params[:id]).first
    if post
      post.destroy
      render nothing: true
    else
      render partial: 'list', status: 405
    end
  end
end
