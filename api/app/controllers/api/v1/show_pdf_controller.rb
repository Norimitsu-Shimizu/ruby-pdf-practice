class Api::V1::ShowPdfController < ApplicationController
  def create
    @select_map = SelectMap.new(select_map_params)
    @select_map.save
    respond_to do |format|
      format.pdf do
        show_pdf = ShowPdf.new(@select_map).render
        send_data show_pdf,
          filename: "test.pdf",
          type: 'application/pdf',
          disposition: 'inline'
      end
    end
  end

  private

  def select_map_params
    params.permit(:issue, :sub_issue, :intra_area, :outside_area)
  end
end
