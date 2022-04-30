import React from "react"
import Layout from "../components/Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Contact</h2>{" "}
        <div class="form-box">
          <h1>Simple Contact Form</h1>
          <form method="post">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control mt-1" id="name" type="text" name="Name" placeholder="Enter you name" />
            </div>
            <div class="form-group mt-3">
              <label for="email">Email</label>
              <input
                class="form-control p-2 mt-1"
                id="email"
                type="email"
                name="Email"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="form-group mt-3">
              <label for="message">Message</label>
              <textarea
                class="form-control my-class"
                id="message"
                name="Message"
                placeholder=" Please send you query ... "
              ></textarea>
            </div>
            <input class="btn btn-primary mt-4 p-3 w-45" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
