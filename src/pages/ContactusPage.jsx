import Banner from "../components/Banner";
const ContactUsPage = () => {
  return (
    <main>
      {/* Banner Section */}
      <Banner
        title=" Connect With Us"
        description="Let's bridge the gap and forge meaningful connections"
        showButton={false}
      />
       <section className="contact">
        <div className="container">
            {/* Contact Form */}
            <div className="col-lg-6 order-lg-1 order-2 mt-5">
              <form  id="ContactUsFormRegister">
                  <div className="row m-0">
                    <h1 className="text-success fw-bold">GET IN TOUCH</h1>
                    <p className="text-secondary fs-5 mb-4">Feel free to reach out to us for any inquiries or assistance.</p>
                    <div className="col-12 p-2">
                        <input type="text" id="name" placeholder="Name" name="name" data-validation="required" className="w-100 rounded-3 p-3"/>
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                        <input type="email" id="email" name="email" placeholder="Email" data-validation="required email" className="w-100 rounded-3 p-3" />
                    </div>
                    <div className="col-lg-6 col-12 p-2">
                        <input type="text" id="subject" name="subject" placeholder="Subject" data-validation="required" className="w-100 rounded-3 p-3"  />
                    </div>
                    <div className="col-12 p-2">
                        <textarea
                          name="messages"
                          id="message"
                          placeholder="Message"
                          className="text-area-en w-100 rounded-3 p-3"
                          data-validation="required"
                        ></textarea>
                    </div>
                    <button type="submit" className=" btn btn-success rounded-3 p-2 fs-5">
                      Send
                    </button>
                  </div>
              </form>

            {/*map image*/}
            <div className="col-lg-6 order-lg-2 order-1">
            <img src="#" alt="" />
           </div>
        </div>
        </div>

      </section>
    </main>
  );
};

export default ContactUsPage;
