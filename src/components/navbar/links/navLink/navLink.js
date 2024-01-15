import Link from "next/link";
import React from "react";

export default function NavLink({ item }) {
  return (
    <div>
      <Link href={item.path}>{item.title}</Link>
    </div>
  );
}
