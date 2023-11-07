import { PhoneIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/solid';

// Hier könntest du eine Konstante für die Kontaktinformationen definieren, falls diese statisch sind
const contactDetails = {
  phone: {
    icon: PhoneIcon,
    label: 'Telefon',
    href: 'tel:+1234567890',
  },
  email: {
    icon: EnvelopeIcon,
    label: 'E-Mail',
    href: 'mailto:info@example.com',
  },
  booking: {
    icon: CalendarIcon,
    label: 'Termin buchen',
    href: '/booking',
  },
};

const ContactOption = ({ type }) => {
  const { icon: Icon, label, href } = contactDetails[type] || {};
  
  // Fallback für den Fall, dass ein nicht unterstützter Typ übergeben wird
  if (!Icon || !label || !href) {
    console.error(`Unsupported contact type: ${type}`);
    return null;
  }

  return (
    <a href={href} className="flex items-center space-x-2 hover:underline" aria-label={label}>
      <Icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};

export default ContactOption;
