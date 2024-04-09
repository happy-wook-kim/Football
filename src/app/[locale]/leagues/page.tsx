'use client';

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../lib/store"
import { useRouter } from "next/navigation"

export default function Leagues(){
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div>
      {count}
      <button onClick={() => router.back()}>BACK</button>
    </div>
  )
}