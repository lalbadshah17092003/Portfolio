import "./Address.css"
export default function Address() {
  return (
    <div className="address-container">
      <h2>Our Address</h2>
      <p>
        <strong>Shreeji Holidays</strong><br />
        AA 106 Sukhdham Residency, Waghodia Ring Road, Kubereshwar Marg, Vadodara, Gujarat 390025
      </p>
      
      <iframe
        title="Shreeji Holidays Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8207691534662!2d73.23443879999999!3d22.284778199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc59a8fbf98ad%3A0x51489b50d9b55040!2sShreeji%20Holidays!5e0!3m2!1sen!2sin!4v1761648703587!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
