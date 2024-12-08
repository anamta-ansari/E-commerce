export default function Footer() {
  return (
    <footer className="w-full bg-[#FBEBB5] text-black px-10 py-10">
      <div className="mx-auto grid gap-10 2xl:w-[1500px] md:grid-cols-4 text-center md:text-left">
        {/* Address Section */}
        <div>
          <h1 className="text-gray-700 text-lg font-semibold mb-4">Address</h1>
          <p className="text-gray-600">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h1 className="text-gray-700 text-lg font-semibold mb-4">Links</h1>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Shop</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">About</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h1 className="text-gray-700 text-lg font-semibold mb-4">Help</h1>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Payment Options</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Return</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-gray-700 text-lg font-semibold mb-4">Newsletter</h1>
          <p className="text-gray-600 mb-4">Sign up for exclusive offers and updates</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Footer Bottom */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          © 2022 Meubal House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
