class Api::V1::PostsController < ApplicationController
	before_filter :authenticate_user!, except: [:index, :show]
	respond_to :json

	def index
		respond_with Post.all
	end

	def show
		respond_with Post.find(params[:id]);
	end

	def create

		post = Post.new(post_param)

		if post.save
			render json: post
		else 
			render json: {:error => post.errors}
		end

	end

	def update
		post = Post.find(params[:id])
		if post.update_attributes(post_param)
			render json: post
		else
			render json: {:error => post.errors}
		end
	end

	def destroy
		post = Post.find(params[:id])

		if post.destroy
			render json: post
		end
	end

	private

	def post_param
		params.require(:post).permit(:title, :body)
	end

end
