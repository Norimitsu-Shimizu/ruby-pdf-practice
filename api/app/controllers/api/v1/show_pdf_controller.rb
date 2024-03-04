class Api::V1::ShowPdfController < ApplicationController
  def index
    respond_to do |format|
      format.pdf do
        show_pdf = ShowPdf.new().render
        send_data show_pdf,
          filename: "test.pdf",
          type: 'application/pdf',
          disposition: 'inline'
      end
    end
  end
end