import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
const REACT_APP_MAILCHIMP_URL='https://gmail.us21.list-manage.com/subscribe/post'
const REACT_APP_MAILCHIMP_U='f7a033c83acc91ebc24d701ff'
const REACT_APP_MAILCHIMP_ID='22c5811feb'
  const postUrl = `${REACT_APP_MAILCHIMP_URL}?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}