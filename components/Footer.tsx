import Image from "next/image"


export default function Footer() {
    return (<footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={280}
            height={180}
            className="object-cover h-10 w-24"
          />
          <h4 className="font-bold text-2xl pl-4">
          CGE
          </h4>
            <p className="font-bold text-sm pl-4">
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

