const Contact = () =>{
    return(
        <div className="bg-gray-100 min-h-screen py-10">
        <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                id="name"
                className="border border-gray-300 rounded-md w-full py-2 px-3"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-md w-full py-2 px-3"
                rows="4"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-200 rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}

export default Contact;
