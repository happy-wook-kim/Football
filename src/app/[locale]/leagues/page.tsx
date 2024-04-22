'use client';

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../lib/store"
import { useRouter } from "next/navigation"
import { keys } from "@/../keys/secert";

export default function Leagues(){
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div>
      {count}
      <span>{keys.JS}</span>
      <button onClick={() => router.back()}>BACK</button>
    </div>
  )
}