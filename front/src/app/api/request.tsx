import { client } from "./URL"

export const getPdf = () => {
  // const headers = {
  //   'Content-Type': 'application/pdf',
  //   'Sec-Fetch-Dest': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
  // }
  return client.get("/api/v1/show_pdf.pdf", { responseType: 'blob' })
}
