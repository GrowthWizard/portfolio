'use client'
import { useState, useEffect, useRef } from 'react'

import Background from './PopupBackground'
import PopupWrapper from './PopupWrapper';

//import Icons
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function ContactButton() {
  const [navStatus, setNavStatus] = useState(false)
  const buttonRef = useRef(null) // We will use useRef to measure the button size
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 })

  // Values for our Contact Button
  const buttonText = 'Kontaktiere mich!'

  /* Information for the Phone Button */
  const ctaPhoneText = 'WhatsApp Business öffnen'
  const phoneNumber = 'Tel: +49 156 7855 4040'
  const phoneNumberLink = 'https://wa.me/+4915678554040'

  /* Information for the Email Button */
  const ctaEmailText = 'Email schreiben'
  const email = 'hello@steindominik.de'

  /* Information for the Booking Button */
  const ctaBookingText = 'Termin online buchen'
  const bookingLink = 'https://bookme.name/dominik/lite/beratung'
  const bookingDomain = 'bookme.name'

  useEffect(() => {
    //will help us to measure the correct size for our contact button
    if (buttonRef.current) {
      setButtonSize({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      })
    }
  }, [])

  // Function to toggle the background
  function toggleBackground() {
    setNavStatus(!navStatus)
  }

  // Function to close the background, i.e the user clicks outside the popup
  function closeBackground() {
    setNavStatus(false)
  }


  return (
    <>
      <Background navStatus={navStatus} closeBackground={closeBackground} />
      <div id="contact" className="font-primary fixed bottom-5 right-5 z-[52] lg:bottom-8 lg:right-8" ref={buttonRef}>
      <button
          onClick={toggleBackground}
          className="flex flex-nowrap items-center gap-2 rounded-full border border-dark-purple bg-dark-purple px-5 py-2.5 text-white shadow-xl transition-all ease-linear hover:bg-zinc-900 dark:border-rosa dark:bg-dark-purple dark:hover:border-dark-purple dark:hover:bg-zinc-900"
          style={{ position: 'relative', zIndex: 53 }} // Ensures the popup appears above the button
          aria-label="Öffne Kontaktinforationen"
          aria-haspopup="true"
        >
          <span className="">{buttonText}</span>
          {/* Show Close Button if Contact Menu is opened */}
          {navStatus ? (
            <XMarkIcon
              className="mt-0.5 inline-block h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <PaperAirplaneIcon className="mt-0.5 h-5 w-5" aria-hidden="true" />
          )}
        </button>
        {navStatus && <PopupWrapper buttonSize={buttonSize} navStatus={navStatus}/>}
      </div>
    </>
  )
}
