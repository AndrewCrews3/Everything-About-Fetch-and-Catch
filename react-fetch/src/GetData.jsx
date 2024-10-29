import React from 'react'

export function GetData() {

    //the simplest fetch you can use and still have error handling
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
    .then((res) => {
        if (!res.ok){
            console.log(res.status)
            throw new Error('Didnt reach what you wanted')
            
        }
        console.log(res.status)
        return res.json()
    })
    .then()
    .catch((err) => {
        console.error(err)
    })

  


  return (
    <>

    </>
  )
}