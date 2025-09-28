'use client'

import { Tutorial } from "@/components/tutorial";
import { Leva } from "leva";

export default function TutorialPage() {
  return (
    <>
      <Tutorial />
      <Leva hidden />
    </>
  );
}