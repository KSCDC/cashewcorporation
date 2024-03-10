import React, { useEffect, useState } from 'react'
import { BACKEND_DOMAIN } from '../utils'

function useGetApi( endpoint) {
    const [response,setResponse] = useState()
    const url = `${BACKEND_DOMAIN}/web/${endpoint}/`
    useEffect(() => {
      async function getData(){
        const req = await fetch(url)
        const reqJson = await req.json()
        setResponse(reqJson)
    }
    getData()
    },[])
  return {response}
}

export default useGetApi