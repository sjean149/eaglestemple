import { Container, Accordion } from "react-bootstrap";

export default function AboutDoctrine() {
  return (
    <section className="doctrine-section py-5">

      <Container>

        <div className="text-center mb-5">
          <small className="text-warning text-uppercase fw-bold">
            Our Doctrine
          </small>

          <h2 className="display-5 fw-bold">
            What We Believe
          </h2>

          <p className="lead">
            Explore foundational teachings and practices of our church.
          </p>
        </div>

        <Accordion alwaysOpen>

          {/* WATER BAPTISM */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              WATER BAPTISM
            </Accordion.Header>

            <Accordion.Body>

              <h5>a. What does it mean to be baptized?</h5>
              <p>
                Baptize comes from the Greek word “Baptizein,” meaning
                to immerse. Baptism is immersion in water in the
                name of the Lord Jesus Christ and represents a vow with God.
              </p>

              <h5>b. Why baptism by immersion?</h5>
              <p>
                Water baptism identifies the believer with the death,
                burial, and resurrection of Jesus Christ.
              </p>

              <h5>c. In what name?</h5>
              <p>
                We teach baptism in the name of the Lord Jesus Christ.
              </p>

              <h5>d. Requirements</h5>
              <p>
                Repentance and belief in Jesus Christ as Lord and Savior.
              </p>

              <h5>e. Who can be baptized?</h5>
              <p>
                Anyone who repents and desires baptism.
              </p>

              <h5>f. When?</h5>
              <p>
                As soon as one repents and seeks baptism.
              </p>

              <h5>g. Why?</h5>
              <p>
                To obey Christ and receive forgiveness and the Holy Spirit.
              </p>

            </Accordion.Body>
          </Accordion.Item>

          {/* TRUTH SURROUNDING BAPTISM */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              TRUTH SURROUNDING BAPTISM
            </Accordion.Header>

            <Accordion.Body>

              <ol>

                <li>
                  Baptism follows repentance, faith, and immersion.
                </li>

                <li>
                  Scripture presents immersion as the biblical pattern.
                </li>

                <li>
                  Baptism is emphasized throughout apostolic teaching.
                </li>

                <li>
                  Salvation centers on the Lord Jesus Christ.
                </li>

                <li>
                  Believers are encouraged to follow biblical instruction.
                </li>

                <li>
                  The apostles modeled baptism practices.
                </li>

                <li>
                  Baptism was taught across different groups of believers.
                </li>

                <li>
                  The Holy Spirit guided apostolic ministry.
                </li>

                <li>
                  Apostolic teachings were confirmed through ministry.
                </li>

                <li>
                  Scripture emphasizes one true faith and baptism.
                </li>

              </ol>

            </Accordion.Body>
          </Accordion.Item>

          {/* ORIGINAL SIN */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              TRUTH CONCERNING THE ORIGINAL SIN
            </Accordion.Header>

            <Accordion.Body>

              <ol>

                <li>
                  This section presents the church’s interpretation of
                  Genesis and the origin of sin.
                </li>

                <li>
                  The Tree of Life is interpreted as Jesus Christ.
                </li>

                <li>
                  The serpent narrative is understood symbolically
                  and spiritually.
                </li>

                <li>
                  Satan’s role in humanity’s fall is emphasized.
                </li>

                <li>
                  Redemption through Christ is central.
                </li>

                <li>
                  Christ’s sacrifice restores what was lost.
                </li>

                <li>
                  Genesis themes are connected to spiritual restoration.
                </li>

              </ol>

            </Accordion.Body>
          </Accordion.Item>

          {/* SABBATH */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              TRUTH CONCERNING THE SABBATH
            </Accordion.Header>

            <Accordion.Body>

              <ol>

                <li>
                  Sabbath is presented as rest and fulfillment in Christ.
                </li>

                <li>
                  Grace is emphasized above ceremonial observance.
                </li>

                <li>
                  Believers are encouraged to walk in spiritual freedom.
                </li>

                <li>
                  Christ offers rest for the soul.
                </li>

                <li>
                  Worship and devotion are not restricted to one day.
                </li>

              </ol>

            </Accordion.Body>
          </Accordion.Item>

          {/* COMMUNION */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              COMMUNION
            </Accordion.Header>

            <Accordion.Body>

              <h5>a. What is Communion?</h5>

              <p>
                Communion represents fellowship through the body
                and blood of Jesus Christ.
              </p>

              <h5>b. What does it consist of?</h5>

              <p>
                Bread and grape wine symbolizing remembrance.
              </p>

              <h5>c. Is participation required?</h5>

              <p>
                Communion is observed as Christ instructed.
              </p>

              <h5>d. Conditions</h5>

              <p>
                Believers should approach with reverence and reflection.
              </p>

              <h5>e. How is communion taken?</h5>

              <p>
                Communion is distributed prayerfully in the assembly.
              </p>

              <h5>f. Why do we take communion?</h5>

              <p>
                To remember Christ and proclaim His return.
              </p>

            </Accordion.Body>
          </Accordion.Item>

          {/* SEVEN MESSENGERS */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              THE SEVEN MESSENGERS
            </Accordion.Header>

            <Accordion.Body>

              <p>
                We believe God raises messengers during different
                periods to call people back to His Word.
              </p>

              <p>
                The church recognizes seven church ages and teaches
                that each age carried a messenger with a specific mission.
              </p>

              <p>
                William Branham is regarded as the final messenger
                in this framework of belief.
              </p>

            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

      </Container>

    </section>
  );
}