import React from 'react';

// A single social icon component for cleaner code
const SocialIcon = ({ href, 'aria-label': ariaLabel, children, hoverColorClass }) => (
  <li>
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-600 transition-colors duration-300 ${hoverColorClass}`}
    >
      {children}
    </a>
  </li>
);

// The main Footer component, as it would be in footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white font-sans text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Column 1: Follow Us On */}
          <div>
            <h2 className="text-lg font-serif tracking-wider uppercase mb-4">Follow Us On</h2>
            <ul className="flex space-x-4 justify-center md:justify-start">
              <li>
                <a href="https://www.facebook.com/clothingbrandcanada/" className="text-gray-700 hover:text-blue-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10.049C18 5.603 14.419 2 10 2s-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/svelegance" className="text-gray-700 hover:text-pink-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.4 2.4 0 0 0-.912.593 2.5 2.5 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23s.01 2.39.046 3.229c.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046s2.39-.01 3.23-.046c.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23s-.01-2.39-.055-3.229c-.027-.784-.164-1.204-.274-1.495a2.4 2.4 0 0 0-.593-.913 2.6 2.6 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045a63 63 0 0 1 3.302.045c.664.014 1.321.14 1.943.374a4 4 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.9 3.9 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.15 4.15 0 0 1-1.414-.922 4.1 4.1 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.4 4.4 0 0 1 .92-1.414 4.2 4.2 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805m1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93m5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@svelegance" className="text-gray-700 hover:text-black">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/sv_elegance" className="text-gray-700 hover:text-blue-400">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.273 2.8 10.8 7.822 15.218 2.8h1.768l-5.4 6.139 5.799 8.254h-4.658l-3.73-5.31-4.671 5.31H2.558l5.654-6.427L2.615 2.8zm6.242 13.125L5.07 4.109h1.405l8.446 11.816z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: SV ELEGANCE */}
          <div>
            <h2 className="text-lg font-serif tracking-wider uppercase mb-4">SV ELEGANCE</h2>
            <ul className="space-y-2">
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/orders" className="hover:underline">Orders</a></li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h2 className="text-lg font-serif tracking-wider uppercase mb-4">HELP</h2>
            <ul className="space-y-2">
              <li><a href="/search" className="hover:underline">Search</a></li>
            </ul>
          </div>

          {/* Column 4: EXPLORE */}
          <div>
            <h2 className="text-lg font-serif tracking-wider uppercase mb-4">EXPLORE</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-lg font-serif tracking-wider italic uppercase mb-4">SIGN UP TO STAY IN THE KNOW</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full py-3 px-4 text-gray-700 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-black transition-colors duration-300"
                        aria-label="Subscribe"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                {/* Copyright and Links */}
                <div className="text-center md:text-left">
                    <span>© 2025, </span>
                    <a href="/" className="hover:underline">My Store</a>
                    <span className="mx-2 hidden md:inline">|</span>
                    <a href="https://intopdigital.com/" target="_blank" rel="noopener noreferrer" className="block md:inline mt-2 md:mt-0 hover:underline">
                        Developed By INTOPDIGITAL
                    </a>
                    <span className="mx-2 hidden md:inline">|</span>
                     <a href="/policies/privacy-policy" className="block md:inline mt-2 md:mt-0 hover:underline">Privacy policy</a>
                </div>
                {/* Payment Icons */}
                <div className="flex justify-center md:justify-end space-x-2">
                     <div className="h-8 w-12 rounded flex items-center justify-center" title="PayPal">
                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" className="h-6 w-auto">
                            <title>PayPal</title>
                            <path fill="#003087" d="M23.9,8.3c.2-1,0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1H16.1c-.3,0-.5.2-.6.5L14,15.6c0,.2.1.4.3.4H17l.4-3.4,1.8-2.2,4.7-2.1Z"/>
                            <path fill="#009cde" d="M23.9,8.3l-.2.2c-.5,2.8-2.2,3.8-4.6,3.8H18c-.3,0-.5.2-.6.5l-.6,3.9-.2,1c0,.2.1.4.3.4H19c.3,0,.5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1,0,3.7-.8,4.1-3.2.2-1,.1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8Z"/>
                            <path fill="#012169" d="M23.3,8.1c-.1-.1-.2-.1-.3-.1-.1,0-.2,0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1,0-.2,0-.2.1-.2.1-.3.2-.3.4l-.7,4.4v.1c0-.3.3-.5.6-.5h1.3c2.5,0,4.1-1,4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
