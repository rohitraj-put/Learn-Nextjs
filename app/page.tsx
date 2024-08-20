import Link from "next/link";

export default function Home() {
  return (
 <nav className="bg-gray-500 text-white flex justify-between px-8 py-2 items-center max-md:px-2" >
  <img src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320" alt="web logo" />
  <ul className="flex justify-between items-center gap-6 capitalize max-md:hidden font-semibold">
    <li className="hover:underline hover:text-rose-400"><Link href={"#"}>Home</Link></li>
    <li className="hover:underline hover:text-rose-400"><Link href={"#"}>about</Link></li>
    <li className="hover:underline hover:text-rose-400"><Link href={"#"}>service</Link></li>
    <li className="hover:underline hover:text-rose-400"><Link href={"#"}>profile</Link></li>
    <li className="hover:underline hover:text-rose-400"><Link href={"#"}>blog</Link></li>
  </ul>
  <button className="px-8 py-2 bg-red-400 rounded font-semibold hover:bg-white hover:text-gray-800">Contact</button>
 </nav>
   
  );
}
