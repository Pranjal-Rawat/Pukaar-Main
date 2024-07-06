import React from 'react';

export default function Joinus() {
    return (
        <div>
            <section className="secRight" id="JoinUs">
                <div className="para">
                    <h2 className="secTag textbig">Join Us</h2>
                    <p className="secsubTag textsmall">
                        {/* <!-- Add content about joining here --> */}
                        <hr style={{ width: '50%', margin: 'auto' }} />
                        <p className="secsubTag textsmall">
                            Join Us at Pukaar Sanstha
                            At Pukaar Sanstha, we believe in the power of community and the impact of collective effort. Your
                            support and involvement are crucial to achieving our mission of creating positive and lasting change.
                            There are many ways you can join us in making a difference:
                            <br />
                            Volunteer with Us
                            Share your time, skills, and passion by volunteering with Pukaar Sanstha. Whether you have expertise in
                            education, training, community outreach,
                            or administrative support, your contribution can help us reach more individuals and communities in need.
                            <br />
                            Educational Programs: Assist in teaching, tutoring, or organizing educational workshops.<br />
                            Skills Training: Help conduct training sessions in various trades and digital literacy.<br />
                            Community Outreach: Engage with local communities, spread awareness, and support our initiatives.
                        </p>
                    </p>
                </div>

                <section className="contact" id="Contact">
                    <h2>JOIN US</h2>
                    <form id="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select id="role" name="role" required>
                                <option value="">Select a role</option>
                                <option value="volunteer">Volunteer Program</option>
                                <option value="member">Member Program</option>
                                <option value="partner">Partner Program</option>
                                <option value="certificate">Certification Program</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button className="btn1" type="submit">Send Message</button>
                    </form>

                    <div className="para">
                        <hr style={{ width: '50%', margin: 'auto' }} />
                        <p className="secsubTag textsmall">
                            <br /><br /><br /><br />
                            <h2>Volunteer</h2>
                            Role description:
                            Engagement: Volunteers will actively participate in on-ground activities such as teaching, organizing
                            educational events, and providing support in various community projects.
                            Responsibilities: Conduct classes, assist with homework, mentor students, and help in organizing and
                            managing educational workshops.
                            Commitment: Flexible hours based on availability. Regular reporting to project coordinators.
                            Impact: Direct involvement in improving educational opportunities for children in need, fostering a love for
                            learning, and making a tangible difference in the community.
                            <br /><br />
                            <h2>Member</h2>
                            Role Description:
                            Engagement: Members will be more deeply involved in the strategic planning and long-term projects of the
                            NGO.
                            Responsibilities: Participate in decision-making processes, contribute ideas for new projects, help in
                            fundraising activities, and take part in regular meetings.
                            Commitment: Regular attendance in meetings, active participation in ongoing projects, and consistent support
                            to volunteer activities.
                            Impact: Shape the direction and policies of the NGO, ensure sustainability and growth, and create a
                            supportive environment for volunteers and beneficiaries.
                            <br /><br />
                            <h2>Partner</h2>
                            Role Description:
                            Engagement: Partners will collaborate with Pukaar on larger projects and initiatives, providing resources,
                            expertise, or funding.
                            Responsibilities: Formulate collaborative projects, offer financial support or resources, and leverage their
                            network to promote Pukaar’s mission.
                            Commitment: Establish formal agreements outlining the scope of collaboration, regular communication with NGO
                            leadership, and participation in joint initiatives.
                            Impact: Enable the expansion of educational programs, introduce innovative solutions, and enhance the
                            overall effectiveness and reach of the NGO’s efforts.
                            <br /><br />
                            <h2>Certificate Program</h2>
                            Role Description:
                            Engagement: Participants in the certificate program will undergo structured training and education related
                            to the NGO’s focus areas.
                            Responsibilities: Complete assigned coursework, participate in practical training sessions, and engage in
                            community service projects as part of the curriculum.
                            Commitment: Follow the program schedule, meet educational requirements, and contribute to projects during
                            the training period.
                            Impact: Gain valuable skills and knowledge in educational outreach, become certified to assist in various
                            capacities within the NGO, and potentially transition into more permanent roles.
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
}
