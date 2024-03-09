'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { postPdf } from "../api/request"
import { SelectMap } from "../type/issue"

const Pdf = () => {
  const {
    register,
    handleSubmit,
  } = useForm<SelectMap>()

  const pdfDisplay: SubmitHandler<SelectMap> = async (data: SelectMap) => {
    const postData = {
      ...data
    }

    const res = await postPdf(postData)
    console.log(res)
    const url = window.URL.createObjectURL(res.data);
    window.open(url, '_blank');
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('target', '_blank'); // 別タブで開く
    // document.body.appendChild(link);
    // link.click();
  }

  return(
    <>
      <form onSubmit={handleSubmit(pdfDisplay)}>
        <label>課題</label>
        <input {...register("issue", { required: true })}/>
        <label>サブ課題</label>
        <input {...register("sub_issue", { required: true })}/>
        <label>領域内</label>
        <input {...register("intra_area")}/>
        <label>領域外</label>
        <input {...register("outside_area")}/>
        <button type="submit">
          PDFを出力
        </button>
      </form>
    </>
  )
}

export default Pdf
