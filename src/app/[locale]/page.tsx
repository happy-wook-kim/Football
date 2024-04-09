'use client'

import Image from "next/image";
import { decrement, increment, incrementByAmount } from "../../../lib/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/store";
import { useRouter } from "next/navigation";
import Header from "@/app/[locale]/header";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div>
      <Header />
      {/* <h1>good</h1>
      <button onClick={() => router.push('leagues')}>Go League</button>
      <strong>strong</strong>
      <p>{count}</p>
      <p>{auth.id}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
    </div>
  );
}
