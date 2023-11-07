import ContactOption from './ContactOption';

export default function PopupWrapper({ buttonSize, navStatus }) {
  // Calculate the positions for the popup wrapper
  const popupStyle = {
    right: '5px', // Same as button's right for alignment
    bottom: `${buttonSize.height + 20}px`, // Height of the button + desired gap
    width: '300px',
  }

    // Dynamic style for the background based on the showBackground state
    const backgroundStyle = navStatus
    ? 'fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-100 transition-opacity duration-300 ease-in'
    : 'fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-0 transition-opacity duration-300 ease-in invisible'

  return (
    <nav id="popup-wrapper" style={popupStyle} className={backgroundStyle}>
      {/* Hier werden die ContactOptions genutzt */}
      <ContactOption type="phone" />
      <ContactOption type="email" />
      <ContactOption type="booking" />
    </nav>
  );
}