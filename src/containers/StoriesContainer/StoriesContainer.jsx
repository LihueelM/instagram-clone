import React, { useEffect, useState } from 'react'
import Stories from '../../components/Stories/Stories'
import { query,collection,getDocs } from 'firebase/firestore'
import { db } from '../../fireBase/Config.js'


const StoriesContainer = () => {

  const [post , setPost] = useState([])
  console.log(post)

  useEffect(() => {
    (
      async () => {
        try {
          const q = query(collection(db ,'posts'))
          const querySnapshot = await getDocs(q)
          const posts = []
          querySnapshot.forEach((doc) => {
            posts.push({id:doc.id , ...doc.data()})
            setPost(posts)            
          });          
        }
        catch (error) {
          console.log(error)
        }
      }
    )()
  },[]
  )
  return (
    <div className="w-1/4 h-28 rounded-md mt-6 border border-slate-300 flex flex-row items-center justify-evenly overflow-hidden	">
        <Stories storieInfo={post} />
    </div>
  )
}

export default StoriesContainer