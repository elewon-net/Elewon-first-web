import { formatEnquiryEmail } from '../config/siteConfig';

// UUID validation regex (8-4-4-4-12 hex format standard for Web3Forms access keys)
const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

/**
 * Modular Web3Forms Email Submission Service for ELEWON
 * 
 * Delivers client project enquiries directly to: helloelewon@outlook.com
 * Reads the Web3Forms Access Key from: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
 * Uses AJAX/Fetch to keep the visitor on elewon.net without any third-party redirects.
 */
export async function sendContactEnquiry({ name, email, phone, service, message }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  // 1. Verify that the environment variable is configured
  if (!accessKey) {
    throw new Error(
      'Web3Forms key missing: VITE_WEB3FORMS_ACCESS_KEY is not defined. Please set your Web3Forms Access Key in your .env file or Vercel Environment Variables.'
    );
  }

  // 2. Verify that the key is a valid UUID format (preventing invalid API calls with dummy text/emails)
  if (!UUID_REGEX.test(accessKey)) {
    throw new Error(
      'Invalid VITE_WEB3FORMS_ACCESS_KEY format: Must be a valid UUID Access Key generated for helloelewon@outlook.com from https://web3forms.com.'
    );
  }

  // 3. Format the email content exactly according to ELEWON specifications
  const formattedBody = formatEnquiryEmail({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service: typeof service === 'string' ? service.trim() : service,
    message: message.trim(),
  });

  const payload = {
    access_key: accessKey,
    subject: 'New Project Enquiry — ELEWON',
    from_name: `${name.trim()} via ELEWON Website`,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service: service,
    message: formattedBody,
    replyto: email.trim(),
  };

  // 4. Submit via Web3Forms API
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));

  if (response.ok && result.success) {
    return { success: true, result };
  }

  // 5. Handle submission failures
  const errorMessage =
    result.message || 'Something went wrong while delivering your message. Please try again.';
  throw new Error(errorMessage);
}
