class ShowPdf < Prawn::Document
  def initialize(select_map)
    super(page_size: 'A4')
    # stroke_axis
    @select_map = select_map

    font_families.update('JP' => {
                            normal: 'app/assets/fonts/ipaexm.ttf',
                            bold: 'app/assets/fonts/ipaexg.ttf'
                        })
    font 'JP'

    text "選択マップ", size: 20
    move_down 20

    float do
      bounding_box([0, cursor], width: 200, height: 20) do
        text "課題 #{@select_map.issue}"
        stroke_bounds
      end
    end

    move_down 40

    schedule = [
      ["サブ課題", "領域内", "領域外"],
      [@select_map.sub_issue, @select_map.intra_area, @select_map.outside_area],
    ]

    table schedule, cell_style: {height: 30},
    column_widths: [120, 200, 200] do
      cells.size = 10
      row(0).border_top_width = 2
      row(0).border_bottom_width = 2
      columns(0).row(0).border_left_width = 2
      columns(0).row(0).border_right_width = 2
      columns(1).row(0).border_right_width = 2
      columns(-1).row(0).border_right_width = 2
      row(-1).border_bottom_width = 2
    end
  end
end
