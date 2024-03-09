'use client'

import { getPdf } from "../api/request"

const Pdf = () => {
  const pdfDisplay = async () => {
    const res = await getPdf()
    console.log(res)
    const url = window.URL.createObjectURL(res.data);
    window.open(url, '_blank');
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('target', '_blank'); // 別タブで開く
    // document.body.appendChild(link);
    // link.click();
  }

  return(<>
    <button onClick={pdfDisplay}>
      PDFを出力
    </button>
  </>)
}

export default Pdf
