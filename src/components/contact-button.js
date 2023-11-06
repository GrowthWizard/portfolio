"use client";
import { useState, useEffect, useRef } from "react";

//import Icons
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";


export default function ContactButton() {
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef(null); // Use ref to measure the button size
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });

  // Data for the contact Button
  const buttonText = "Kontaktiere mich!";
  /* Information for the Phone Button */
  const ctaPhoneText = "WhatsApp Business öffnen";
  const phoneNumber = "Tel: +49 156 7855 4040";
  const phoneNumberLink = "https://wa.me/+4915678554040";

  /* Information for the Email Button */
  const ctaEmailText = "Email schreiben";
  const email = "hello@steindominik.de";

  /* Information for the Booking Button */
  const ctaBookingText = "Termin online buchen";
  const bookingLink =
    "https://bookme.name/dominik/lite/beratung";
  const bookingDomain = "bookme.name";

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      });
    }
  }, []);

  function transitionBackground() {
    setShowBackground(!showBackground);
  }

  function closeBackground() {
    setShowBackground(false);
  }

  // Calculate the positions for the popup wrapper
  const popupStyle = {
    right: "5px", // Same as button's right for alignment
    bottom: `${buttonSize.height + 20}px`, // Height of the button + desired gap
    width: "300px",
  };

  // Dynamic style for the background based on the showBackground state
  const backgroundStyle = showBackground
    ? "fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-100 transition-opacity duration-300 ease-in"
    : "fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-0 transition-opacity duration-300 ease-in invisible";

  return (
    <>
      <div
        onClick={closeBackground}
        id="contact-background"
        className={backgroundStyle}
      ></div>
      <div
        id="contact"
        className="font-primary fixed bottom-5 right-5 lg:bottom-8 z-[52]"
        ref={buttonRef} // Attach the ref to the button
      >
        <button
          onClick={transitionBackground}
          className="flex flex-nowrap items-center gap-2 bg-dark-purple dark:bg-dark-purple text-white py-2.5 px-5 rounded-full border border-dark-purple dark:border-rosa shadow-xl transition-all ease-linear hover:bg-zinc-900 dark:hover:bg-zinc-900 dark:hover:border-dark-purple"
          style={{ position: "relative", zIndex: 53 }} // Ensures the popup appears above the button
          aria-label="Öffne Kontaktinforationen"
          aria-haspopup="true"
        >
        <span className="">{buttonText}</span>
          {/* Show Close Button if Contact Menu is opened */}
          {showBackground ? (
            <XMarkIcon className="mt-0.5 inline-block w-6 h-6" aria-hidden="true" />
          ) : (
            <PaperAirplaneIcon className="mt-0.5 w-5 h-5" aria-hidden="true" />
          )}
        </button>
        {showBackground && (
          <nav
            id="popup-wrapper"
            style={popupStyle}
            className="fixed z-[54] mb-5 flex flex-col gap-2"
          >
            {/* Phone Button */}
            <a
              className="flex items-center bg-zinc-50 dark:bg-dark-purple gap-2 py-2 px-5 rounded-xl border border-zinc-50 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-900  ease-linear transition-all"
              href={phoneNumberLink}
            >
              <PhoneIcon
                className="w-6 h-6 mr-2 text-light-purple dark:text-rosa"
                aria-hidden="true"
              />
              <span>
                <div className="font-bold mb-1">{ctaPhoneText}</div>
                <div>{phoneNumber}</div>
              </span>
            </a>
            {/* Mail Button */}
            <a
              className="flex items-center bg-zinc-50 dark:bg-dark-purple gap-2 py-2 px-5 rounded-xl border border-zinc-50 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-900 ease-linear transition-all"
              href={`mailto:${email}`}
            >
              <EnvelopeIcon
                className="w-6 h-6 mr-2 text-light-purple dark:text-rosa"
                aria-hidden="true"
              />
              <span>
                <div className="font-bold mb-1">{ctaEmailText}</div>
                <div>{email}</div>
              </span>
            </a>
            {/* Appointment Button */}
            <a
              className="flex items-center bg-zinc-50 dark:bg-dark-purple gap-2 py-2 px-5 rounded-xl border border-zinc-50 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-900  ease-linear transition-all"
              href={bookingLink}
            >
              <CalendarIcon
                className="w-6 h-6 mr-2 text-light-purple dark:text-rosa"
                aria-hidden="true"
              />
              <span>
                <div className="font-bold mb-1">{ctaBookingText}</div>
                <div>{bookingDomain}</div>
              </span>
            </a>
          </nav>
        )}
      </div>
    </>
  );
}
