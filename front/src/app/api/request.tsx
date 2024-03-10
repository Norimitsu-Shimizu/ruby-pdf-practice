import { client } from "./URL"
import { SelectMap } from "../type/issue"

export const postPdf = (params: SelectMap) => {
  return client.post("/api/v1/show_pdf.pdf", params, { responseType: 'blob' })
}
