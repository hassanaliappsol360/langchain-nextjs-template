"use client";

import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";

const BASE_PATH = "/ai-mentors-2";

export const ActiveLink = (props: { href: string; children: ReactNode }) => {
  const pathname = usePathname();
  const fullPath = `${BASE_PATH}${props.href}`;
  const isActive = pathname === fullPath;

  return (
    <Link
      href={fullPath}
      className={cn(
        "px-4 py-2 rounded-[18px] whitespace-nowrap flex items-center gap-2 text-sm transition-all",
        isActive && "bg-primary text-primary-foreground",
      )}
    >
      {props.children}
    </Link>
  );
};
