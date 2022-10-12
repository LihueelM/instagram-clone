import React, { useEffect } from 'react'
import Stories from '../../components/Stories/Stories'
import { collection, getDocs,query } from 'firebase/firestore/lite';
import { db } from '../../fireBase/Config'


const StoriesContainer = () => {


  useEffect(() => {
    (
      async () => {
        try {
          const q = query(collection(db ,'posts'))
          const querySnapshot = await getDocs(q)
          const posts = []
          querySnapshot.forEach((doc) => {
            posts.push({id:doc.id , ...doc.data()})
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
        <Stories />
        <Stories />
        <Stories />
        <Stories />
        <Stories />
        <Stories />
    </div>
  )
}

export default StoriesContainer