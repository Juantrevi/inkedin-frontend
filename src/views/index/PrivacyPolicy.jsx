import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import BaseHeader from "../partials/BaseHeader"
import BaseFooter from "../partials/BaseFooter"

function PrivacyPolicy(){
    const policyItems = [
        {
            title: "Information We Collect",
            content: `We collect information you provide directly to us, such as when you create an account, update your profile, or book an appointment. This may include your name, email address, phone number, and payment information. We also collect information about your use of our services, including your browsing history on our platform and interaction with tattoo artists.`
        },
        {
            title: "How We Use Your Information",
            content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, offers, and events offered by InkedIn and others.`
        },
        {
            title: "Information Sharing and Disclosure",
            content: `We may share your information with tattoo artists when you book an appointment or communicate with them through our platform. We may also share information with third-party vendors who need access to such information to carry out work on our behalf. We do not sell your personal information to third parties.`
        },
        {
            title: "Data Retention",
            content: `We retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements. You can request deletion of your account at any time.`
        },
        {
            title: "Security",
            content: `We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic communications transmission is ever fully secure or error-free.`
        },
        {
            title: "Your Rights",
            content: `Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us if you wish to exercise these rights.`
        },
        {
            title: "Changes to This Policy",
            content: `We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.`
        },
        {
            title: "Contact Us",
            content: `If you have any questions about this privacy policy, please contact us at: privacy@inkedin.com`
        }
    ]

    return (
        <>
            <BaseHeader />
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h1 className="display-4 mb-4" style={{color: '#ff5100'}}>Privacy Policy</h1>
                        <p className="lead">
                            At InkedIn, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={10}>
                        <Card className="shadow border-0">
                            <Card.Body>
                                <p className="mb-4">
                                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </p>
                                <Accordion>
                                    {policyItems.map((item, index) => (
                                        <Accordion.Item key={index} eventKey={index.toString()}>
                                            <Accordion.Header>{item.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <p>{item.content}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BaseFooter />
        </>
    )
}

export default PrivacyPolicy