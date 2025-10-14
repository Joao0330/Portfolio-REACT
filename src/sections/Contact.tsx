import { z } from 'zod';
import { contactSchema } from '../schemas/contact.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { emailJsInit } from '../lib/email';
import { useEffect, useState } from 'react';
import { LuSend } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaRegCopy } from 'react-icons/fa';

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
	const [textCopied, settextCopied] = useState(false);

	useEffect(() => {
		emailJsInit();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = () => {
		emailjs.sendForm('contact_service', 'contact_form', '#contact-form');
		reset();

		alert('Message sent successfully!');
	};

	return (
		<section className='contact' id='contact'>
			<div className='container'>
				<div className='contact__wrapper'>
					<h3>
						Get In <span>Touch</span>
					</h3>

					<form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
						<div className='contact__form-top'>
							<div>
								<label htmlFor='name'>Name</label>
								<input id='name' {...register('name')} placeholder='Name' />
								{errors.name && <span>{errors.name.message}</span>}
							</div>
							<div>
								<label htmlFor='email'>Email</label>
								<input id='email' type='email' {...register('email')} placeholder='Email Address' />
								{errors.email && <span>{errors.email.message}</span>}
							</div>
						</div>
						<div className='contact__form-message'>
							<label htmlFor='content'>Message</label>
							<textarea id='content' {...register('message')} placeholder='Please Send me a Message' />
							{errors.message && <span>{errors.message.message}</span>}
						</div>
						<button type='submit' className='sendEmail-btn' disabled={isSubmitting}>
							<span>Send Email</span>
							<LuSend />
						</button>
					</form>

					<div className='contact__bottom'>
						<MdOutlineMailOutline />
						<h4>Or click the button bellow to copy my Email:</h4>
						<button
							onClick={() => {
								navigator.clipboard.writeText('joao.rodrigues.jr21@hotmail.com');

								settextCopied(true);
							}}
							className='copyToClip-btn'
						>
							<FaRegCopy />
							<span>joao.rodrigues.jr21@hotmail.com</span>
						</button>

						{textCopied && <span>Email copied to clipboard!</span>}
					</div>
				</div>
			</div>
		</section>
	);
};
