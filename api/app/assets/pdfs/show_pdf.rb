class ShowPdf < Prawn::Document
  def initialize
    super(page_size: 'A4')
    stroke_axis

    font_families.update('JP' => {
                            normal: 'app/assets/fonts/ipaexm.ttf',
                            bold: 'app/assets/fonts/ipaexg.ttf'
                        })
    font 'JP'
  end
end