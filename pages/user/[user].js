import React from 'react'
import { useRouter } from 'next/router'
// import { getServerSideProps } from 'next/dist/build/templates/pages'

export default function User(props) {

    const gotUser = props.response

    const router= useRouter()
    const { user } = router.query

  return (
    <div>
      <h5>
        {gotUser.firstName} &nbsp; {gotUser.lastName}
      </h5>
      <h5>
        {gotUser.age} &nbsp; {gotUser.gender}
      </h5>
      <h5>
        {gotUser.phone}
      </h5>
    </div>
  )
}


export async function getServerSideProps(context){

  const { user } = context.params

  const res = (await fetch(`https://dummyjson.com/users/${user}`))
  const data =  await res.json()

  return {
    props:{
      response: data,
    }
  }

}