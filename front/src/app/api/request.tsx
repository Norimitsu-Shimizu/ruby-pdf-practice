import { client } from "./URL"

export const getPdf = () => {
  return client.get("/api/v1/show_pdf.pdf", { responseType: 'blob' })
}
