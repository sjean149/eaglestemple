import { useNavigate } from "react-router-dom";

export default function SabbathTruth() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 my-5 text-white bg-black">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 text-center">
          <h1 className="display-5 fw-bold text-uppercase tracking-wide text-white border-bottom border-secondary pb-3 mb-4">
            The Truth About Sabbath
          </h1>
          <div className="text-start bg-dark border border-secondary rounded p-4 mb-4 shadow">
            <p className="lead text-white-50">
              Examining the spiritual rest provided through the Holy Ghost versus the ritual observance of a day, tracking structural dispensational changes across scripture.
            </p>
            <hr className="border-secondary my-4" />
            <h5 className="text-white mb-2">Key Focus Areas:</h5>
            <ul className="text-white-50 mb-0">
              <li>The creation rest and the law of the Fourth Commandment.</li>
              <li>Christ as our ultimate spiritual rest (Matthew 11:28).</li>
              <li>The internal seal of the Holy Spirit versus external physical tokens.</li>
            </ul>
          </div>
          <button onClick={() => navigate('/')} className="btn btn-outline-light px-4 py-2 rounded-0">
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}