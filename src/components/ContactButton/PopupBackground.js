export default function Background({ navStatus, closeBackground }) {
  // Dynamic style for the background based on the showBackground state
  const backgroundStyle = navStatus
    ? 'fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-100 transition-opacity duration-300 ease-in'
    : 'fixed top-0 left-0 right-0 bottom-0 bg-[#00000066] z-50 m-0 opacity-0 transition-opacity duration-300 ease-in invisible';

  return (
    <div
      onClick={closeBackground}
      id="contact-background"
      className={backgroundStyle}
    ></div>
  )
}
