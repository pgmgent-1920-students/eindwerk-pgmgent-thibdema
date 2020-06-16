import React from 'react';
import {Link} from 'react-router-dom';

import * as Routes from '../routes';

const PrivacyPolicyPage = () => {
  return(
    <div className="page privacy-policy">
      <section className="bg-white py-10">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 mt-5">
                    <h1>Terms &amp; Privacy</h1>
                    <p className="lead">Last updated: June 2020</p>
                    <hr className="my-5" />
                    <h2 className="mb-3">1. Overview</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, corporis? Facere quisquam earum dolore excepturi minima, fuga laborum reiciendis molestias nesciunt, impedit perspiciatis voluptatem nisi ad modi labore ipsam quas.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, quis explicabo? Quis non minima, placeat aspernatur reiciendis, itaque quam quos eaque doloribus vero facere libero enim quo dolor. Et, fugit!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere harum neque, repellendus, accusamus maiores libero iure corporis alias laboriosam voluptatem perferendis repellat excepturi iusto eos? Illum nam minus officia corrupti!</p>
                    <hr className="my-5" />
                    <h2 className="mb-3">2. Personal Data We Collect</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga molestias atque, nesciunt, rerum quas voluptates maiores ad libero, eos illum. Dolorem sunt, modi dolores error ipsum deserunt architecto temporibus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit excepturi natus quae deserunt aliquam, aut distinctio, eum a laboriosam earum reiciendis beatae magni, cum minima unde? Sint, saepe reprehenderit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus qui quidem voluptatibus architecto unde aspernatur quam facilis incidunt expedita quisquam natus nemo, impedit iure dignissimos saepe ab minus molestiae.</p>
                    <hr className="my-5" />
                    <h2 className="mb-3">3. How We Use Personal Data</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem excepturi repellat ipsum veniam dolores, aperiam obcaecati quaerat! Reiciendis dolore, ipsa eaque a eum architecto sed perspiciatis deserunt totam! Exercitationem, ipsum!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam consequatur nisi eius odit eligendi ut tempora deserunt, repudiandae quo hic veritatis sunt optio ea nemo laborum mollitia quae illum.</p>
                    <hr className="my-5" />
                    <h2 className="mb-3">4. How We Disclose Personal Data</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque sed porro dolorum ipsum eum quis eveniet natus, optio ipsa aperiam aliquid quaerat quos vitae maiores. Minima consequuntur quidem perferendis?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quaerat ipsam quis nisi in, rem aliquam odio quasi obcaecati. Dolorum error aliquam labore deserunt velit ipsa in corrupti, consectetur cumque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quia eligendi possimus odit, velit nihil eum perferendis laborum facilis sequi quo provident veritatis nostrum cupiditate accusamus quam tempore? Deleniti, architecto.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum nemo ipsam eum, quam neque quae vel culpa, minus accusantium rerum ullam facere modi quo mollitia, non dolores ipsum aut.</p>
                    <hr className="my-5" />
                    <div className="card z-1 mb-n10">
                        <div className="card-body text-center py-5">
                            <h2 className="mb-3">We're here to help</h2>
                            <Link className="btn btn-primary btn-marketing rounded-pill" to={Routes.CONTACT}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="var(--bg-light-green)">
              <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
            </svg>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;