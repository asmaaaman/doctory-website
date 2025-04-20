const About = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md  m-3">
        <h2 className="text-2xl text-gray-400 font-bold p-6">About Us</h2>
        <hr className="text-gray-100" />
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                We are committed to providing accessible, high-quality
                healthcare through our network of experienced medical
                professionals. Our platform connects patients with the right
                doctors, making healthcare more convenient and efficient.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Why Choose Us
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Expert doctors across multiple specializations</li>
                <li>Easy online appointment booking</li>
                <li>Flexible scheduling options</li>
                <li>Secure and private consultations</li>
                <li>Comprehensive patient care</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Our Values
              </h3>
              <p className="text-gray-600">
                We believe in patient-centered care, professional excellence,
                and continuous innovation in healthcare delivery. Our focus is
                on building lasting relationships with our patients while
                maintaining the highest standards of medical care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
