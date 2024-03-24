"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <Button className="w-[15em] h-[3em] font-bold" variant={"noFillbtn"}>
        BACK
      </Button>
    </Link>
  );
};

export default BackButton;
