"use client";

import { useSendMailMutation } from "@/lib/redux/features/contact/contactApiSlice";

const TestButtonEmail = () => {
  const [sendEmail] = useSendMailMutation();

  return (
    <div>
      <button
        className="btn btn-outline"
        onClick={async () => {
          await sendEmail({ fullName: "andres" });
        }}
      >
        test mail
      </button>
    </div>
  );
};
export default TestButtonEmail;
