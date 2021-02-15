class Api::V1::ReferencesController < ApplicationController
    before_action :set_reference, only: [:show, :edit, :update, :destroy]

    def index
        @references = Reference.all
    end

    def show
    end

    def create
        Reference.create(reference_params)
    end

    def update
        @reference.update(reference_params)
    end

    def destroy
        @reference.destroy
    end

    private
    def set_reference
        @reference = Reference.find(params[:id])
    end

    def reference_params
        #TODO: book params
        params.require(:reference).permit(:name)
    end
end
