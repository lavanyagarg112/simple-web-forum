class CommentsController < ApplicationController
    before_action :set_post
    def create
        @comment = @post.comments.create(comment_params)
        @comment.user = current_user
        if @comment.save
            redirect_to post_path(@post)
        end
    end


    private 

    def comment_params
        params.require(:comment).permit(:content, :parent_id)
    end

    def set_post
        @post = Post.find(params[:post_id])
      end

end
