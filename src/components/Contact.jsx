import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7338ec8f-6285-46e7-a662-afb06c714cc9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success",
        confirmButtonText: 'OK',
        customClass: {
        confirmButton: 'bg-black text-white hover:bg-blue-600 border border-blue-500 rounded-md px-6 py-2',
        }
      });
    }
  };

  return (
    <form 
      onSubmit={onSubmit}
      className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-lg m-6"
    >

      {/* Name */}
      <div className="mt-5">
        <label htmlFor="">Full Name</label>
        <input 
          type="text" 
          name="name"
          placeholder="Enter your name" 
          className="w-full h-12 p-4 mt-2 text-base text-black bg-transparent border border-gray-500 rounded-md outline-none"
          required 
        />
      </div>

      {/* Email */}
      <div className="mt-5">
        <label htmlFor="">Email</label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          className="w-full h-12 p-4 mt-2 text-base text-black bg-transparent border border-gray-500 rounded-md outline-none"
          required 
        />
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="">Message</label>
        <textarea 
          name="message" 
          placeholder="Enter your message" 
          className="w-full h-[200px] resize-none p-4 mt-2 text-base text-black bg-transparent border border-gray-500 rounded-md outline-none"
          required></textarea>
      </div>

      <button className="w-full mt-6 text-base text-white bg-black rounded-md cursor-pointer h-14" type="submit">Send Message</button>

    </form>
  )
}
export default Contact