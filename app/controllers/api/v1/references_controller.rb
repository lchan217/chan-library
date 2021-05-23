class Api::V1::ReferencesController < ApplicationController
    before_action :set_reference, only: [:show, :edit, :update, :destroy]

    def index
        @references = Reference.all
    end

    def show
    end

    def create
        @reference = Reference.new(reference_params)
        @reference.parse_params(params)
        if @reference.save
            render json: { status: "Success"}
        else 
            render json: { status: "Error", error: @reference.errors.full_messages.to_sentence }
        end
    end

    def update
        @reference.update(reference_params)
        @reference.parse_params(params)
        if @reference.save
            render json: { status: "Success"}
        else 
            render json: { status: "Error", message: @reference.errors.full_messages.to_sentence }
        end
    end

    def destroy
        @reference.destroy
    end

    private
    def set_reference
        @reference = Reference.find(params[:id])
    end

    def reference_params
        params.require(:reference).permit(:name, book_attributes: [:id, :title])
    end
end
