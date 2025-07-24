// import React, { useState, useEffect } from "react";

// // Icons
// const SearchIcon = ({ className }) => (
//   <svg fill="currentColor" className={className} viewBox="0 0 18 19">
//     <path
//       fillRule="evenodd"
//       d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const AccountIcon = ({ className }) => (
//   <svg fill="currentColor" className={className} viewBox="0 0 18 19">
//     <path
//       fillRule="evenodd"
//       d="M6 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15M9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const CartIcon = ({ className }) => (
//   <svg fill="currentColor" className={className} viewBox="0 0 40 40">
//     <path
//       fillRule="evenodd"
//       d="M15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33L28.4 11.8zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1-9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
//     ></path>
//   </svg>
// );

// const CaretDownIcon = ({ className }) => (
//   <svg className={className} viewBox="0 0 10 6" fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const HamburgerIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     fill="currentColor"
//     viewBox="0 0 18 16"
//   >
//     <path d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"></path>
//   </svg>
// );

// // export default function Header() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 0);
// //     };

// //     // Initialize scroll state on first render
// //     handleScroll();

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const headerClasses = isScrolled
// //     ? "bg-white text-gray-800 shadow-md"
// //     : "bg-transparent text-white";

// //   const logoClasses = isScrolled ? "text-amber-500" : "text-amber-500";
// //   const navItemClasses = "cursor-pointer hover:opacity-70";

// //   return (
// //     <header
// //       className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClasses}`}
// //     >
// //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
// //         <div
// //           className="hidden md:flex flex-1 items-center justify-start gap-8"
// //           style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
// //         >
// //           <a
// //             href="#"
// //             className={`${navItemClasses} font-semibold underline decoration-2 underline-offset-8`}
// //           >
// //             {" "}
// //             <em>HOME</em>{" "}
// //           </a>
// //           <a href="#" className={`${navItemClasses} flex items-center gap-1`}>
// //             <em>PRODUCTS</em>
// //             <CaretDownIcon className="h-3 w-3" />
// //           </a>
// //           <a href="#" className={navItemClasses}>
// //             <em>CONTACT</em>
// //           </a>
// //         </div>
// //         <div className="flex-1 md:hidden">
// //           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //             <HamburgerIcon className="h-6 w-6" />
// //           </button>
// //         </div>
// //         <div className="flex flex-1 justify-center md:flex-initial">
// //           <img
// //             src="/images/logo.png"
// //             alt="SV Elegance Logo"
// //             className={`h-10 md:h-12 transition-all duration-300 ${logoClasses}`}
// //           />
// //         </div>

// //         <div className="hidden md:flex flex-1 items-center justify-end gap-6">
// //           <button className="focus:outline-none">
// //             <SearchIcon className="h-5 w-5" />
// //           </button>
// //           <button className="focus:outline-none">
// //             <AccountIcon className="h-5 w-5" />
// //           </button>
// //           <button className="focus:outline-none">
// //             <CartIcon className="h-6 w-6" />
// //           </button>
// //         </div>
// //         <div className="flex-1 md:hidden"></div>
// //       </div>

// //       {isMenuOpen && (
// //         <div className="bg-white text-black md:hidden">
// //           <nav className="flex flex-col space-y-4 p-6">
// //             <a href="#" className="font-semibold">
// //               HOME
// //             </a>
// //             <a href="#">PRODUCTS</a>
// //             <a href="#">CONTACT</a>
// //             <hr className="my-2" />
// //             <a href="#">LOGIN</a>
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     // Initialize scroll state on first render
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Modified header classes for transparency
//   const headerClasses = isScrolled
//     ? "bg-white/30 text-gray-800 backdrop-blur-sm shadow-md"  // Semi-transparent with blur when scrolled
//     : "bg-transparent text-white";  // Fully transparent when not scrolled

//   const logoClasses = isScrolled ? "text-amber-500" : "text-amber-500";
//   const navItemClasses = "cursor-pointer hover:opacity-70";

//   return (
//     <header
//       className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
//     >
//       {/* Rest of your component remains the same */}
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
//         <div
//           className="hidden md:flex flex-1 items-center justify-start gap-8"
//           style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
//         >
//           <a
//             href="#"
//             className={`${navItemClasses} font-semibold underline decoration-2 underline-offset-8`}
//           >
//             {" "}
//             <em>HOME</em>{" "}
//           </a>
//           <a href="#" className={`${navItemClasses} flex items-center gap-1`}>
//             <em>PRODUCTS</em>
//             <CaretDownIcon className="h-3 w-3" />
//           </a>
//           <a href="#" className={navItemClasses}>
//             <em>CONTACT</em>
//           </a>
//         </div>
//         <div className="flex-1 md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <HamburgerIcon className="h-6 w-6" />
//           </button>
//         </div>
//         <div className="flex flex-1 justify-center md:flex-initial">
//           <img
//             src="/images/logo.png"
//             alt="SV Elegance Logo"
//             className={`h-10 md:h-12 transition-all duration-300 ${logoClasses}`}
//           />
//         </div>

//         <div className="hidden md:flex flex-1 items-center justify-end gap-6">
//           <button className="focus:outline-none">
//             <SearchIcon className="h-5 w-5" />
//           </button>
//           <button className="focus:outline-none">
//             <AccountIcon className="h-5 w-5" />
//           </button>
//           <button className="focus:outline-none">
//             <CartIcon className="h-6 w-6" />
//           </button>
//         </div>
//         <div className="flex-1 md:hidden"></div>
//       </div>

//       {isMenuOpen && (
//         <div className="bg-white/90 text-black md:hidden backdrop-blur-sm">
//           <nav className="flex flex-col space-y-4 p-6">
//             <a href="#" className="font-semibold">
//               HOME
//             </a>
//             <a href="#">PRODUCTS</a>
//             <a href="#">CONTACT</a>
//             <hr className="my-2" />
//             <a href="#">LOGIN</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // --- SVG Icon Components ---

// const HamburgerIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 16"
//   >
//     <path
//       fill="currentColor"
//       d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
//     ></path>
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 17"
//   >
//     <path
//       fill="currentColor"
//       d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
//     ></path>
//   </svg>
// );

// const SearchIconSvg = () => (
//   <svg fill="none" className="h-4 w-4" viewBox="0 0 18 19">
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const AccountIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-4 w-4"
//     viewBox="0 0 18 19"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M6 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15M9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const CartIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-7 w-7"
//     viewBox="0 0 40 40"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33L28.4 11.8zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1-9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
//     ></path>
//   </svg>
// );

// const CaretIcon = () => (
//   <svg className="h-3 w-3 ml-1" viewBox="0 0 10 6" fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// // --- Main Header Component ---

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const transparentNavLinkClass =
//     "text-sm font-medium font-playfair italic transition-colors duration-300 text-white hover:text-gray-200";
//   const whiteNavLinkClass =
//     "text-sm font-medium font-playfair italic transition-colors duration-300 text-gray-800 hover:text-black";

//   // A helper component to avoid repeating the navigation structure
//   const NavigationContent = ({ linkClass }) => (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="relative flex items-center justify-around h-20">
//         {/* Left Navigation */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           <a href="/" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//             HOME
//           </a>
//           <div className="relative group">
//             <button className={`${linkClass} inline-flex items-center `} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//               PRODUCTS <CaretIcon />
//             </button>
//             <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 SAREE
//               </a>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 SUITS
//               </a>
//             </div>
//           </div>
//           <a href="/pages/contact" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//             CONTACT
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className={`${linkClass} p-2`}
//           >
//             <span className="sr-only">Open menu</span>
//             <HamburgerIcon />
//           </button>
//         </div>

//         {/* Logo (Center) */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
//           <a href="/">
//             <img className="h-6 w-auto mx-2" src="/images/logo.png" alt="My Store" />
//           </a>
//         </div>

//         <div className="flex items-center justify-end space-x-4">
//           <Link to="/search" className={linkClass}>
//             <SearchIconSvg  />
//           </Link>
//           <Link to="/account" className={linkClass}>
//             <AccountIconSvg  />
//           </Link>
//           <Link to="/cart" className={linkClass}>
//             <CartIconSvg  />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* --- Navbar 1: Transparent Background (Always present, positioned absolutely) --- */}
//       <header className="absolute top-0 left-0 w-full z-40 pt-10">
//         <NavigationContent linkClass={transparentNavLinkClass} />
//       </header>

//       {/* --- Navbar 2: White Background (Shows on scroll, fixed position) --- */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-opacity duration-300 ${
//           isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <NavigationContent linkClass={whiteNavLinkClass} />
//       </header>

//       {/* --- Mobile Menu Drawer --- */}
//       <div
//         className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out lg:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="fixed inset-0 bg-black/25"
//           onClick={() => setMobileMenuOpen(false)}
//         ></div>

//         {/* Drawer Content */}
//         <div className="relative w-full max-w-xs h-full bg-white shadow-xl py-4 flex flex-col">
//           <div className="px-4 flex items-center justify-between">
//             <h2 className="text-lg font-medium text-gray-900">Menu</h2>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-md"
//             >
//               <span className="sr-only">Close menu</span>
//               <CloseIcon />
//             </button>
//           </div>

//           <nav className="mt-5 px-2 space-y-1">
//             <a
//               href="/"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
//             >
//               Home
//             </a>
//             <details className="group">
//               <summary className="flex items-center justify-between list-none px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">
//                 Products
//                 <CaretIcon />
//               </summary>
//               <div className="pl-4 mt-1 space-y-1">
//                 <a
//                   href="#"
//                   className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Saree
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Suits
//                 </a>
//               </div>
//             </details>
//             <a
//               href="/pages/contact"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
//             >
//               Contact
//             </a>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // --- SVG Icon Components (No changes here) ---

// const HamburgerIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 16"
//   >
//     <path
//       fill="currentColor"
//       d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
//     ></path>
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 17"
//   >
//     <path
//       fill="currentColor"
//       d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
//     ></path>
//   </svg>
// );

// const SearchIconSvg = () => (
//   <svg fill="none" className="h-5 w-5" viewBox="0 0 18 19">
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const AccountIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-5 w-5"
//     viewBox="0 0 18 19"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M6 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15M9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const CartIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-5 w-5"
//     viewBox="0 0 20 20"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M6 6.5A1.5 1.5 0 0 1 7.5 5h5A1.5 1.5 0 0 1 14 6.5v1.85a4.5 4.5 0 0 1 2.22 3.86l.5 6.2A1.5 1.5 0 0 1 15.23 20H4.77a1.5 1.5 0 0 1-1.49-1.59l.5-6.2A4.5 4.5 0 0 1 6 8.35zm1.5-1A.5.5 0 0 0 7 6.5v1.85a4.51 4.51 0 0 1-.36 1.76L5.37 18h9.26l-1.28-7.9a4.51 4.51 0 0 1-.35-1.75V6.5a.5.5 0 0 0-.5-.5zM10 5.5a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const CaretIcon = () => (
//   <svg className="h-3 w-3 ml-1" viewBox="0 0 10 6" fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// // --- Main Header Component ---

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const transparentNavLinkClass =
//     "text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200";
//   const whiteNavLinkClass =
//     "text-sm font-medium transition-colors duration-300 text-gray-800 hover:text-black";

//   // A helper component to avoid repeating the navigation structure
//   const NavigationContent = ({ linkClass }) => (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       {/* UPDATE: Changed justify-around to justify-between for better alignment */}
//       <div className="relative flex items-center justify-between h-20">
//         {/* Left Navigation (for Desktop) */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           <a href="/" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '8px' }}>
//             HOME
//           </a>
//           <div className="relative group">
//             <button className={`${linkClass} inline-flex items-center`} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//               PRODUCTS <CaretIcon />
//             </button>
//             <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                 SAREE
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                 SUITS
//               </a>
//             </div>
//           </div>
//           <a href="/pages/contact" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//             CONTACT
//           </a>
//         </nav>

//         {/* Mobile Menu Button (for Tablet & Mobile) */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className={`${linkClass} p-2`}
//           >
//             <span className="sr-only">Open menu</span>
//             <HamburgerIcon />
//           </button>
//         </div>

//         {/* UPDATE: Replaced image with styled text logo to match the designs */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           <a href="/" className="text-3xl font-bold tracking-widest bg-gradient-to-r from-[#B99555] to-[#F5E2A8] bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
//             SV ELEGANCE
//           </a>
//         </div>

//         {/* Right-side Icons */}
//         <div className="flex items-center justify-end space-x-5">
//           <Link to="/search" className={linkClass}>
//             <SearchIconSvg />
//           </Link>
//           {/* UPDATE: Account icon is hidden on mobile (<md) and shown on tablet and up */}
//           <Link to="/account" className={`${linkClass} hidden md:block`}>
//             <AccountIconSvg />
//           </Link>
//           <Link to="/cart" className={linkClass}>
//             <CartIconSvg />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* --- Navbar 1: Transparent Background (Always present, positioned absolutely) --- */}
//       <header className="absolute top-0 left-0 w-full z-40 pt-12">
//         <NavigationContent linkClass={transparentNavLinkClass} />
//       </header>

//       {/* --- Navbar 2: White Background (Shows on scroll, fixed position) --- */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-opacity duration-300 ${
//           isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <NavigationContent linkClass={whiteNavLinkClass} />
//       </header>

//       {/* --- Mobile Menu Drawer (No changes here) --- */}
//       <div
//         className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out lg:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="fixed inset-0 bg-black/25"
//           onClick={() => setMobileMenuOpen(false)}
//         ></div>

//         {/* Drawer Content */}
//         <div className="relative w-full max-w-xs h-full bg-white shadow-xl py-4 flex flex-col">
//           <div className="px-4 flex items-center justify-between">
//             <h2 className="text-lg font-medium text-gray-900">Menu</h2>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-md"
//             >
//               <span className="sr-only">Close menu</span>
//               <CloseIcon />
//             </button>
//           </div>

//           <nav className="mt-5 px-2 space-y-1">
//             <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
//               Home
//             </a>
//             <details className="group">
//               <summary className="flex items-center justify-between list-none px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">
//                 Products
//                 <CaretIcon />
//               </summary>
//               <div className="pl-4 mt-1 space-y-1">
//                 <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
//                   Saree
//                 </a>
//                 <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
//                   Suits
//                 </a>
//               </div>
//             </details>
//             <a href="/pages/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // --- SVG Icon Components (No changes here) ---

// const HamburgerIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 16"
//   >
//     <path
//       fill="currentColor"
//       d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
//     ></path>
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-6 w-6"
//     viewBox="0 0 18 17"
//   >
//     <path
//       fill="currentColor"
//       d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
//     ></path>
//   </svg>
// );

// const SearchIconSvg = () => (
//   <svg fill="none" className="h-5 w-5" viewBox="0 0 18 19">
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const AccountIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-5 w-5"
//     viewBox="0 0 18 19"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M6 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15M9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// const CartIconSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     className="h-10 w-10"
//     viewBox="0 0 40 40"
//   >
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33L28.4 11.8zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1-9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
//     ></path>
//   </svg>
// );

// const CaretIcon = () => (
//   <svg className="h-3 w-3 ml-1" viewBox="0 0 10 6" fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// // --- Main Header Component ---

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const transparentNavLinkClass =
//     "text-lg font-medium transition-colors italic duration-300 text-white hover:text-gray-200";
//   const whiteNavLinkClass =
//     "text-lg font-medium transition-colors italic duration-300 text-gray-800 hover:text-black";

//   // A helper component to avoid repeating the navigation structure
//   const NavigationContent = ({ linkClass }) => (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="relative flex items-center justify-between h-20">
//         {/* Left Navigation (for Desktop) */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           <a href="/" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, textDecoration: 'underline' }}>
//             HOME
//           </a>
//           <div className="relative group">
//             <p className={`${linkClass} inline-flex items-center`} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//               PRODUCTS <CaretIcon />
//             </p>
//             <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                 SAREE
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                 SUITS
//               </a>
//             </div>
//           </div>
//           <a href="/pages/contact" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
//             CONTACT
//           </a>
//         </nav>

//         {/* Mobile Menu Button (for Tablet & Mobile) */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className={`${linkClass} p-2`}
//           >
//             <span className="sr-only">Open menu</span>
//             <HamburgerIcon />
//           </button>
//         </div>

//         {/* Logo with Responsive Size */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           {/* UPDATE: Changed text size to be responsive. text-2xl for mobile, text-3xl for tablet and up. */}
//           <a href="/" className="text-2xl md:text-3xl font-bold tracking-widest bg-gradient-to-r from-[#B99555] to-[#F5E2A8] bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
//             SV ELEGANCE
//           </a>
//         </div>

//         {/* Right-side Icons */}
//         <div className="flex items-center justify-end space-x-5">
//           <Link to="/search" className={linkClass}>
//             <SearchIconSvg />
//           </Link>
//           <Link to="/account" className={`${linkClass} hidden md:block`}>
//             <AccountIconSvg />
//           </Link>
//           <Link to="/cart" className={linkClass}>
//             <CartIconSvg />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* --- Navbar 1: Transparent Background (Always present, positioned absolutely) --- */}
//       <header className="absolute top-0 left-0 w-full z-40 pt-12">
//         <NavigationContent linkClass={transparentNavLinkClass} />
//       </header>

//       {/* --- Navbar 2: White Background (Shows on scroll, fixed position) --- */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-opacity duration-300 ${
//           isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <NavigationContent linkClass={whiteNavLinkClass} />
//       </header>

//       {/* --- Mobile Menu Drawer (No changes here) --- */}
//       <div
//         className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out lg:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="fixed inset-0 bg-black/25"
//           onClick={() => setMobileMenuOpen(false)}
//         ></div>

//         {/* Drawer Content */}
//         <div className="relative w-full max-w-xs h-full bg-white shadow-xl py-4 flex flex-col">
//           <div className="px-4 flex items-center justify-between">
//             <h2 className="text-lg font-medium text-gray-900">Menu</h2>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-md"
//             >
//               <span className="sr-only">Close menu</span>
//               <CloseIcon />
//             </button>
//           </div>

//           <nav className="mt-5 px-2 space-y-1">
//             <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
//               Home
//             </a>
//             <details className="group">
//               <summary className="flex items-center justify-between list-none px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">
//                 Products
//                 <CaretIcon />
//               </summary>
//               <div className="pl-4 mt-1 space-y-1">
//                 <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
//                   Saree
//                 </a>
//                 <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
//                   Suits
//                 </a>
//               </div>
//             </details>
//             <a href="/pages/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- SVG Icon Components (No changes here) ---

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 18 16"
  >
    <path
      fill="currentColor"
      d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 18 17"
  >
    <path
      fill="currentColor"
      d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"
    ></path>
  </svg>
);

const SearchIconSvg = () => (
  <svg fill="none" className="h-5 w-5" viewBox="0 0 18 19">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.03 11.68A5.784 5.784 0 1 1 2.85 3.5a5.784 5.784 0 0 1 8.18 8.18m.26 1.12a6.78 6.78 0 1 1 .72-.7l5.4 5.4a.5.5 0 1 1-.71.7z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const AccountIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-5 w-5"
    viewBox="0 0 18 19"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15M9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35"
      clipRule="evenodd"
    ></path>
  </svg>
);

const CartIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-10 w-10"
    viewBox="0 0 40 40"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33L28.4 11.8zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1-9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
    ></path>
  </svg>
);

const CaretIcon = () => (
  <svg className="h-3 w-3 ml-1" viewBox="0 0 10 6" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
      clipRule="evenodd"
    ></path>
  </svg>
);

// --- Main Header Component ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentNavLinkClass =
    "text-lg font-medium transition-colors italic duration-300 text-white hover:text-gray-200";
  const whiteNavLinkClass =
    "text-lg font-medium transition-colors italic duration-300 text-gray-800 hover:text-black";

  // A helper component to avoid repeating the navigation structure
  const NavigationContent = ({ linkClass }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-20">
        {/* Left Navigation (for Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, textDecoration: 'underline' }}>
            HOME
          </a>
          <div className="relative group">
            <p className={`${linkClass} inline-flex items-center`} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              PRODUCTS <CaretIcon />
            </p>
            <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                SAREE
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                SUITS
              </a>
            </div>
          </div>
          <a href="/pages/contact" className={linkClass} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button (for Tablet & Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`${linkClass} p-2`}
          >
            <span className="sr-only">Open menu</span>
            <HamburgerIcon />
          </button>
        </div>

        {/* UPDATE: Replaced text with a responsive image logo inside a Link component */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img
              className="h-7 w-auto md:h-8" // h-7 for mobile, h-8 for tablet and up
              src="/images/logo.png"   // <-- Replace with your logo's path
              alt="SV ELEGANCE"
            />
          </Link>
        </div>

        {/* Right-side Icons */}
        <div className="flex items-center justify-end space-x-5">
          <Link to="/search" className={linkClass}>
            <SearchIconSvg />
          </Link>
          <Link to="/account" className={`${linkClass} hidden md:block`}>
            <AccountIconSvg />
          </Link>
          <Link to="/cart" className={linkClass}>
            <CartIconSvg />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* --- Navbar 1: Transparent Background (Always present, positioned absolutely) --- */}
      <header className="absolute top-0 left-0 w-full z-40 pt-12">
        <NavigationContent linkClass={transparentNavLinkClass} />
      </header>

      {/* --- Navbar 2: White Background (Shows on scroll, fixed position) --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <NavigationContent linkClass={whiteNavLinkClass} />
      </header>

      {/* --- Mobile Menu Drawer (No changes here) --- */}
      <div
        className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div className="relative w-full max-w-xs h-full bg-white shadow-xl py-4 flex flex-col">
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </button>
          </div>

          <nav className="mt-5 px-2 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
              Home
            </a>
            <details className="group">
              <summary className="flex items-center justify-between list-none px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">
                Products
                <CaretIcon />
              </summary>
              <div className="pl-4 mt-1 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Saree
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Suits
                </a>
              </div>
            </details>
            <a href="/pages/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;