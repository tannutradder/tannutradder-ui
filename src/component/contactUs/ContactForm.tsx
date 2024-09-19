import { useForm } from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle form submission (e.g., send data to a server)
    };

    return (
        <>
            <div className='my-5'>
                <div className="row m-0 p-0">
                    <h2 className='text-primary'>Get in Touch with Us</h2>
                    <div className="col-md-6 h-100 mt-2">
                        <div className='d-flex justify-content-center'>
                            <img src="contactUs.svg" alt="Contact Us Image" className='img img-fluid' style={{ width: "55%" }} />
                        </div>
                    </div>
                    <div className="col-md-6 h-100 mt-2">
                        <div className="card">
                            <div className="card-body" style={{ backgroundColor: "#d0e5ff" }}>
                                <div className="py-4">
                                    <div className='text-center mb-3'>
                                        <h5>We're just a message away <br />from providing the support you need.</h5>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text"
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    id="name"
                                                    {...register('name', { required: 'Name is required' })}
                                                    placeholder='Enter Name'
                                                />
                                                {/* {errors.name && <div className="invalid-feedback">{errors.name}</div>} */}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    id="email"
                                                    {...register('email', {
                                                        required: 'Email is required',
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                            message: 'Invalid email address'
                                                        }
                                                    })}
                                                    placeholder='Enter Email'
                                                />
                                                {/* {errors.email && <div className="invalid-feedback">{errors.email}</div>} */}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea
                                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                    id="message"
                                                    rows={4}
                                                    {...register('message', { required: 'Message is required' })}
                                                    placeholder='Enter Message'
                                                ></textarea>
                                                {/* {errors.message && <div className="invalid-feedback">{errors.message}</div>} */}
                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ContactForm;
