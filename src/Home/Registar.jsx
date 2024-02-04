import React from 'react';

const subtitle = "Save The Day";
const title=(
<h2 className='text-3xl w-[80%] font-bold'> Join On Day long Free Wrekshop Advance Mastring On sales</h2>
)
const desc ="limite Time Offer! Hurry Up"

const Registar = () => {
  return (
    <section className='register-section padding-tb pb-0'>
      <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
          <div className='col'>
            <div className='section-header'>
              <span className='subtitle'>{subtitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className='col'>
            <div className='section-wrapper'>
              <h4>Register New</h4>
              <form className='register-form'>
                <input type="text" name='name' placeholder='UseName' className='reg-input p-2' />
                <input type="email" name='email' placeholder='Email' className='reg-input p-2' />
                <input type="number" name='number' placeholder='Phone' className='reg-input p-2' />
                <button type='submit' className='lab-btn'>
                  Register New
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registar;