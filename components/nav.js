import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo2.png" alt="site logo" width={165} height={60} />
      </div>
      <div className="nav-icons">
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>

      <div className="nav-icons">
        <Link href="/images/">
          <span>Images</span>
        </Link>
      </div>

      <div className="nav-icons">
        <Link href="/add-image/">
          <span>Admin</span>
        </Link>
      </div>

      <div className="sb-example-1">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div className="ml-auto profile-icon">
        <Image src="/face.png" alt="site logo" width={40} height={40} />
      </div>
      <div className="profile-down-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </nav>
  );
}

export default Nav;
