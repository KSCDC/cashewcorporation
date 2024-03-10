import React from 'react'
import { emailIdSection } from '../Org'


function HeadQuaters() {
  return (
    <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">E-mail ids of sections:</h2>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4">
            {emailIdSection.map((value) => (
              <div
                data-aos="flip-left"
                key={value.title}
                className="mb-4 p-4 bg-white shadow-lg w-full"
              >
                <p className="font-bold">{value.title}</p>
                <a className="text-red-500" href={`mailto:${value.email}`}>
                  {value.email}
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default HeadQuaters