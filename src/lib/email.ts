import emailjs from '@emailjs/browser';

const envPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const emailJsInit = () => {
	emailjs.init({
		publicKey: envPublicKey,
	});
};
