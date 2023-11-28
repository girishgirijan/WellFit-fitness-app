import Logo from "@/assets/Logo.png";

const index = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <p>© WellFit All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet</p>
          <p className="my-5">Lorem ipsum dolor sit amet</p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p>(000)000-0000</p>
        </div>
      </div>
    </footer>
  )
}

export default index
