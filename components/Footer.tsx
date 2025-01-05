import Image from "next/image"


export default function Footer() {
    return (<footer className="footer bg-blue-900 text-base-content p-10">
        <aside>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={80}
            height={60}
            className="object-cover h-16 w-16"
          />
          <p>
          CGE
            <br />
            Large Electrical Equipment Store
          </p>
        </aside>
      
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
      </footer>
    )
}

