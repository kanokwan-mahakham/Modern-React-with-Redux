import React from "react";

export default function Navbar(){
    return (
    <header>
        <a href="/" className="brand">
            Trendie
        </a>
        <a href="/create-product">Create product</a>
    </header>
    );
}

//หรือจะ export default Navbar; ตรงนี้ก็ได้ default มีได้แค่ตัวเดียวเท่านั้น
//ถ้าเรา export Navbar 