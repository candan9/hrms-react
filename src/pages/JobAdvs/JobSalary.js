import React from 'react'

export default function JobSalary({jobAdv}) {
    return (
        <div
          style={{
            borderTop: "2px solid #EBEBEB",
            border: "1px solid #EBEBEB",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          {jobAdv.minSalary && jobAdv.maxSalary ? (
            <div >
              <h2>Ödeme aralığı</h2>
              <p>
                {jobAdv.minSalary ? (
                  <span>
                    En düşük <strong>{jobAdv.minSalary} ₺</strong>{" "}
                  </span>
                ) : (
                  ""
                )}
                {jobAdv.minSalary && jobAdv.maxSalary ? <span>ila</span> : ""}
                {jobAdv.maxSalary ? (
                  <span>
                    {" "}
                    en yüksek <strong>{jobAdv.maxSalary} ₺</strong>
                  </span>
                ) : (
                  ""
                )}
                {jobAdv.minSalary && jobAdv.maxSalary ? (
                  <span> arasında</span>
                ) : (
                  ""
                )}
                <span> maaş vaat etmektedir.</span>
              </p>
            </div>
          ) : (
            <div >
              <h2>Ödeme aralığı mevcut değil</h2>
              <p>Şu an için maaş bilgileri mevcut değil</p>
            </div>
          )}
        </div>
      );
}
