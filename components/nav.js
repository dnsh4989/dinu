import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={75} height={75} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/images/">
        <a>Images</a>
      </Link>
    </nav>
  );
}

export default Nav;
